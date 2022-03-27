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

const Container = styled.div``;

const VideoContainer = styled.video``;

const UserLabel = styled.p``;

export default Video;
