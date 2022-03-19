import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Video = ({ stream, muted }) => {
    const ref = useRef();
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        if (ref.current) ref.current.srcObject = stream;
        if (muted) setIsMuted(muted);
    }, [stream, muted]);

    return (
        <Container>
            <VideoContainer ref={ref} muted={isMuted} autoPlay />
            <UserLabel></UserLabel>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    display: inline-block;
    width: 240px;
    height: 270px;
    margin: 5px;
`;

const VideoContainer = styled.video`
    width: 240px;
    height: 240px;
    background-color: black;
`;

const UserLabel = styled.p`
    display: inline-block;
    position: absolute;
    top: 230px;
    left: 0px;
`;

export default Video;
