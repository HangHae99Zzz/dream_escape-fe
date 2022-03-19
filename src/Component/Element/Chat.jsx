import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import styled from 'styled-components';

import { actionCreator as socketActions } from '../../redux/module/socket';
import { actionCreator as userActions } from '../../redux/module/user';
import { actionCreator as roomActions } from '../../redux/module/room';
import { actionCreator as gameActions } from '../../redux/module/game';

import Video from './Video';

const pc_config = {
    iceServers: [
        {
            urls: 'stun:stun.l.google.com:19302',
        },
    ],
};

const SOCKET_SERVER_URL = 'https://www.roomescape57.shop:3000/';
// const SOCKET_SERVER_URL = 'http://localhost:8080';

const Chat = () => {
    const { socket } = useSelector(({ socket }) => socket);
    const { isIn } = useSelector(({ user }) => user);
    const { roomInfo } = useSelector(({ room }) => room);
    const { countLimit } = useSelector(({ game }) => game);

    const dispatch = useDispatch();

    const socketRef = useRef();
    const pcsRef = useRef();
    const localStreamRef = useRef();
    const localVideoRef = useRef();

    const divicesRef = useRef();
    const micsRef = useRef();
    const speakersRef = useRef();

    const [isGotDevices, setIsGotDevices] = useState(false);
    const curMicRef = useRef();
    const curSpeakerRef = useRef();

    const muteBtn = useRef();
    const micSelect = useRef();

    const [muted, setMuted] = useState(false);
    const [users, setUsers] = useState([]);

    const getDevices = async () => {
        try {
            divicesRef.current =
                await navigator.mediaDevices.enumerateDevices();

            micsRef.current = divicesRef.current.filter(
                device => device.kind === 'audioinput'
            );

            curMicRef.current = localStreamRef.current?.getAudioTracks()[0];

            speakersRef.current = divicesRef.current.filter(
                device => device.kind === 'audiooutput'
            );

            curSpeakerRef.current = localStreamRef.current?.getAudioTracks()[0];
            if (isGotDevices) return;

            setIsGotDevices(true); // 재렌더링 시켜주기 위해 state 이용
        } catch (e) {
            console.log(e);
        }
    };

    const handleMuteClick = () => {
        localStreamRef.current
            .getAudioTracks()
            .forEach(track => (track.enabled = !track.enabled));

        if (!muted) {
            setMuted(true);
        } else {
            setMuted(false);
        }
    };

    const handleMicChange = async () => {
        const pc = createPeerConnection();

        await getLocalStream(micSelect.current.value);
        if (pc) {
            const audioTrack = localStreamRef.current.getAudioTracks()[0];
            const audioSander = pc
                .getSenders()
                .find(sender => sender.track.kind === 'audio');
            audioSander.replaceTrack(audioTrack);
            console.log(audioTrack);
            console.log(audioSander);
        }
    };

    const getLocalStream = useCallback(async deviceId => {
        const initialConstraints = {
            // video: true,
            audio: true,
        };

        const constraints = {
            // video: true,
            audio: { deviceId: { exact: deviceId } },
        };

        try {
            const localStream = await navigator.mediaDevices.getUserMedia(
                deviceId ? constraints : initialConstraints
            );

            localStreamRef.current = localStream;

            localVideoRef.current.srcObject = localStream;

            if (!deviceId) await getDevices();
        } catch (e) {
            console.log(`getUserMedia error: ${e}`);
        }
    }, []);

    const createPeerConnection = useCallback((socketID, email) => {
        try {
            const pc = new RTCPeerConnection(pc_config);

            pc.onicecandidate = e => {
                if (!(socketRef.current && e.candidate)) return;
                socketRef.current.emit('candidate', {
                    candidate: e.candidate,
                    candidateSendID: socketRef.current.id,
                    candidateReceiveID: socketID,
                });
            };

            pc.oniceconnectionstatechange = e => {
                // console.log('뭔가 peer에 변화');
            };

            pc.ontrack = e => {
                console.log('누가 들어옴');
                // peers 업데이트
                const roomId = sessionStorage.getItem('sessionRoomId');
                dispatch(roomActions.refPeers(roomId));
                setUsers(oldUsers =>
                    oldUsers
                        .filter(user => user.id !== socketID)
                        .concat({
                            id: socketID,
                            email,
                            stream: e.streams[0],
                        })
                );
            };

            if (localStreamRef.current) {
                localStreamRef.current.getTracks().forEach(track => {
                    if (!localStreamRef.current) return;
                    pc.addTrack(track, localStreamRef.current);
                });
            } else {
                console.log('no local stream');
            }

            return pc;
        } catch (e) {
            console.error(e);
            return undefined;
        }
    }, []);

    useEffect(() => {
        if (!isIn) {
            console.log('처음이야!');
            socketRef.current = io.connect(SOCKET_SERVER_URL);

            dispatch(socketActions.getSocket(socketRef.current));
            dispatch(userActions.isIn(true));
        }

        if (!roomInfo) return;
        getLocalStream()
            .then(() => getDevices())
            .then(() => {
                console.log('내 아이디', socketRef.current.id);
            })
            .then(() => {
                setTimeout(() => {
                    console.log(roomInfo.roomId);
                    socketRef.current.emit('join_room', {
                        room: roomInfo.roomId,
                        email: 'sample@naver.com',
                    });
                }, 2000);
            });

        // room 들어가면 실행하도록 /////////////////////////////////////

        socketRef.current.on('all_users', allUsers => {
            allUsers.forEach(async user => {
                if (!localStreamRef.current) return;
                const pc = createPeerConnection(user.id, user.email);
                if (!(pc && socketRef.current)) return;
                pcsRef.current = { ...pcsRef.current, [user.id]: pc };

                try {
                    const localSdp = await pc.createOffer({
                        // offerToReceiveVideo: true,
                        offerToReceiveAudio: true,
                    });

                    await pc.setLocalDescription(
                        new RTCSessionDescription(localSdp)
                    );

                    socketRef.current.emit('offer', {
                        sdp: localSdp,
                        offerSendID: socketRef.current.id,
                        offerSendEmail: 'offerSendSample@sample.com',
                        offerReceiveID: user.id,
                    });
                } catch (e) {
                    console.error(e);
                }
            });
        });

        socketRef.current.on('getOffer', async data => {
            const { sdp, offerSendID, offerSendEmail } = data;
            if (!localStreamRef.current) return;
            const pc = createPeerConnection(offerSendID, offerSendEmail);
            if (!(pc && socketRef.current)) return;
            pcsRef.current = { ...pcsRef.current, [offerSendID]: pc };

            try {
                await pc.setRemoteDescription(new RTCSessionDescription(sdp));
                const localSdp = await pc.createAnswer({
                    // offerToReceiveVideo: true,
                    offerToReceiveAudio: true,
                });
                await pc.setLocalDescription(
                    new RTCSessionDescription(localSdp)
                );
                socketRef.current.emit('answer', {
                    sdp: localSdp,
                    answerSendID: socketRef.current.id,
                    answerReceiveID: offerSendID,
                });
            } catch (e) {
                console.error(e);
            }
        });

        socketRef.current.on('getAnswer', data => {
            const { sdp, answerSendID } = data;
            const pc = pcsRef.current[answerSendID];
            if (!pc) return;
            pc.setRemoteDescription(new RTCSessionDescription(sdp));
        });

        socketRef.current.on('getCandidate', async data => {
            const pc = pcsRef.current[data.candidateSendID];
            if (!pc) return;
            await pc.addIceCandidate(new RTCIceCandidate(data.candidate));
        });

        ////////////////////////////////////////////////////////////////////////////
        socketRef.current.on('user_exit', data => {
            console.log('exit event');
            if (!pcsRef.current[data.id]) return;
            pcsRef.current[data.id].close();
            delete pcsRef.current[data.id];
            setUsers(oldUsers => oldUsers.filter(user => user.id !== data.id));

            console.log(`나간애 :${data.id}`);
            // 종료될경우 다른애들이 대신 해줌
            // peers 업데이트
            dispatch(roomActions.refPeers(roomInfo.roomId));
            // dispatch(userActions.deleteUser(data.id));
        });

        socketRef.current.on('changedUser', data => {
            return data.createdUser === socketRef.current.id
                ? dispatch(userActions.isCreator(true))
                : null;
        });
        //////////////////////////////////////////////////////////////////////////
        let count = 0;

        socketRef.current.on('countPlus', () => {
            count++;
            dispatch(gameActions.countUp(count));
            console.log('count up!', count);
            count === countLimit && console.log('게임끝');
            // 타이머도 멈춰 store game에 stopTimer true
        });

        ///////////////////////////////////////////////////////////////////////////

        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
            }
            users.forEach(user => {
                if (!pcsRef.current[user.id]) return;
                pcsRef.current[user.id].close();
                delete pcsRef.current[user.id];
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [createPeerConnection, getLocalStream, roomInfo]);

    if (!micsRef.current && !speakersRef.current) {
        getDevices();
        return <></>;
    } else {
        return (
            <>
                <ChatWrapper>
                    <video
                        style={{
                            width: 240,
                            height: 240,
                            margin: 5,
                            backgroundColor: 'black',
                        }}
                        muted
                        ref={localVideoRef}
                        autoPlay
                    />
                    <button ref={muteBtn} onClick={() => handleMuteClick()}>
                        {'muted ' + muted}
                    </button>

                    <select ref={micSelect} onInput={() => handleMicChange()}>
                        {micsRef.current?.map((mic, i) => {
                            return curMicRef.label === mic.label ? (
                                <option value={mic.deviceId} key={i} selected>
                                    {mic.label}
                                </option>
                            ) : (
                                <option value={mic.deviceId} key={i}>
                                    {mic.label}
                                </option>
                            );
                        })}
                    </select>
                    <select>
                        {speakersRef.current?.map((speaker, i) => {
                            return curSpeakerRef.label === speaker.label ? (
                                <option
                                    value={speaker.deviceId}
                                    key={i}
                                    selected
                                >
                                    {speaker.label}
                                </option>
                            ) : (
                                <option value={speaker.deviceId} key={i}>
                                    {speaker.label}
                                </option>
                            );
                        })}
                    </select>
                    {users.map((user, index) => (
                        <Video key={index} stream={user.stream} />
                    ))}
                </ChatWrapper>
            </>
        );
    }
};

const ChatWrapper = styled.div`
    display: none;
`;

export default Chat;
