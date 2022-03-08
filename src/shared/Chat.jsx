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
        pcRef.current = createPeerConnection();
        console.log(pcRef.current);

        await getLocalStream(micSelect.current.value);
        if (pcRef.current) {
            const audioTrack = localStreamRef.current.getAudioTracks()[0];
            const audioSander = pcRef.current
                .getSenders()
                .find(sender => sender.track.kind === 'audio');
            audioSander.replaceTrack(audioTrack);
            console.log(audioSander);
        }
    };

    const getLocalStream = useCallback(async deviceId => {
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

            localVideoRef.current.srcObject = localStream;

            if (!deviceId) await getDevices();

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
            pcRef.current = new RTCPeerConnection(pc_config);

            pcRef.current.onicecandidate = e => {
                if (!(socketRef.current && e.candidate)) return;
                socketRef.current.emit('candidate', {
                    candidate: e.candidate,
                    candidateSendID: socketRef.current.id,
                    candidateReceiveID: socketID,
                });
            };

            pcRef.current.oniceconnectionstatechange = e => {
                // console.log(e);
            };

            pcRef.current.ontrack = e => {
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
                localStreamRef.current.getTracks().forEach(track => {
                    if (!localStreamRef.current) return;
                    pcRef.current.addTrack(track, localStreamRef.current);
                });
            } else {
                console.log('no local stream');
            }

            return pcRef.current;
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
                pcRef.current = createPeerConnection(user.id, user.emial);
                if (!(pcRef.current && socketRef.current)) return;
                const obj = { [user.id]: pcRef.current };
                pcsRef.current = { ...pcsRef.current, ...obj };
                console.log(pcsRef.current);

                try {
                    const localSdp = await pcRef.current.createOffer({
                        offerToReceiveAudio: true,
                        offerToReceiveVideo: true,
                    });
                    await pcRef.current.setLocalDescription(
                        new RTCSessionDescription(localSdp)
                    );
                    console.log(pcRef.current);
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
            pcRef.current = createPeerConnection(offerSendID, offerSendEmail);
            if (!(pcRef.current && socketRef.current)) return;
            const obj = { [offerSendID]: pcRef.current };
            pcsRef.current = { ...pcsRef.current, ...obj };

            try {
                await pcRef.current.setRemoteDescription(
                    new RTCSessionDescription(sdp)
                );
                const localSdp = await pcRef.current.createAnswer({
                    offerToReceiveAudio: true,
                });
                await pcRef.current.setLocalDescription(
                    new RTCSessionDescription(localSdp)
                );
                console.log(pcRef.current);
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
            pcRef.current = pcsRef.current[answerSendID];
            if (!pcRef.current) return;
            pcRef.current.setRemoteDescription(new RTCSessionDescription(sdp));
        });

        socketRef.current.on('getCandidate', async data => {
            pcRef.current = pcsRef.current[data.candidateSendID];
            if (!pcRef.current) return;
            await pcRef.current.addIceCandidate(
                new RTCIceCandidate(data.candidate)
            );
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
