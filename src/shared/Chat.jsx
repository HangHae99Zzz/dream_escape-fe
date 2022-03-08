import React, { useState, useRef, useEffect, useCallback } from 'react';
import io from 'socket.io-client';
import Video from '../components/Video';

const pc_config = {
    iceServers: [
        {
            urls: 'stun:stun.l.google.com:19302',
        },
    ],
};
// const SOCKET_SERVER_URL = 'https://www.roomescape57.shop:3000/';
const SOCKET_SERVER_URL = 'http://localhost:8080';

const Chat = () => {
    // const socket = io.connect(SOCKET_SERVER_URL);
    const socketRef = useRef();
    const pcRef = useRef();
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
            // muteBtn.innerText = 'Unmute';
            setMuted(true);
        } else {
            // muteBtn.innerText = 'Mute';
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
            console.log(audioSander);
        }
    };

    const getLocalStream = useCallback(async deviceId => {
        console.log(deviceId);
        const initialConstraints = {
            audio: true,
        };

        const constraints = {
            audio: { deviceId: { exact: deviceId } },
        };

        try {
            const localStream = await navigator.mediaDevices.getUserMedia(
                deviceId ? constraints : initialConstraints
            );

            localStreamRef.current = localStream;

            if (localVideoRef.current)
                localVideoRef.current.srcObject = localStream;

            if (!socketRef.current) return;

            socketRef.current.emit('join_room', {
                room: '1234',
                email: 'sample@naver.com',
            });
        } catch (e) {
            console.log(`getUserMedia error: ${e}`);
        }
    }, []);

    const createPeerConnection = useCallback((socketID, email) => {
        try {
            const pc = new RTCPeerConnection(pc_config);

            pc.onicecandidate = e => {
                if (!(socketRef.current && e.candidate)) return;
                console.log('onicecandidate');
                socketRef.current.emit('candidate', {
                    candidate: e.candidate,
                    candidateSendID: socketRef.current.id,
                    candidateReceiveID: socketID,
                });
            };

            pc.oniceconnectionstatechange = e => {
                // console.log(e);
            };

            pc.ontrack = e => {
                console.log('ontrack success');
                setUsers(oldUsers =>
                    oldUsers
                        .filter(user => user.id !== socketID)
                        .concat({
                            id: socketID,
                            stream: e.streams[0],
                        })
                );
            };

            if (localStreamRef.current) {
                console.log('localstream add');
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
        socketRef.current = io.connect(SOCKET_SERVER_URL);
        getLocalStream().then(() => getDevices());

        socketRef.current.on('all_users', allUsers => {
            allUsers.forEach(async user => {
                if (!localStreamRef.current) return;
                const pc = createPeerConnection(user.id, user.emial);
                if (!(pc && socketRef.current)) return;
                const obj = { [user.id]: pc };
                pcsRef.current = { ...pcsRef.current, ...obj };
                console.log(pcsRef.current);

                try {
                    const localSdp = await pc.createOffer({
                        offerToReceiveAudio: true,
                        offerToReceiveVideo: true,
                    });
                    console.log('create offer success');
                    await pc.setLocalDescription(
                        new RTCSessionDescription(localSdp)
                    );
                    console.log(pc);
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
            console.log('get offer');
            if (!localStreamRef.current) return;
            const pc = createPeerConnection(offerSendID, offerSendEmail);
            if (!(pc && socketRef.current)) return;
            const obj = { [offerSendID]: pc };
            pcsRef.current = { ...pcsRef.current, ...obj };

            try {
                await pc.setRemoteDescription(new RTCSessionDescription(sdp));
                console.log('answer set remote description success');
                const localSdp = await pc.createAnswer({
                    offerToReceiveVideo: true,
                    offerToReceiveAudio: true,
                });
                await pc.setLocalDescription(
                    new RTCSessionDescription(localSdp)
                );
                console.log(pc);
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
            console.log('get answer');
            const pc = pcsRef.current[answerSendID];
            if (!pc) return;
            pc.setRemoteDescription(new RTCSessionDescription(sdp));
        });

        socketRef.current.on('getCandidate', async data => {
            console.log('get candidate');
            const pc = pcsRef.current[data.candidateSendID];
            if (!pc) return;
            await pc.addIceCandidate(new RTCIceCandidate(data.candidate));
            console.log('candidate add success');
        });

        socketRef.current.on('user_exit', data => {
            if (!pcsRef.current[data.id]) return;
            pcsRef.current[data.id].close();
            delete pcsRef.current[data.id];
            setUsers(oldUsers => oldUsers.filter(user => user.id !== data.id));
        });

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
    }, [createPeerConnection, getLocalStream]);

    if (!micsRef.current && !speakersRef.current) {
        getDevices();
        return <></>;
    } else {
        return (
            <>
                <div>
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
                </div>
            </>
        );
    }
};

export default Chat;
