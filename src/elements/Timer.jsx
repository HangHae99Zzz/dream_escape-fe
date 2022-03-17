import React, { useEffect, useRef, useState, useCallback } from 'react';

const Timer = ({ setGameTime }) => {
    const [renderedStreamDuration, setRenderedStreamDuration] =
            useState('00:30:00'),
        streamDuration = useRef(0),
        previousTime = useRef(0),
        requestAnimationFrameId = useRef(null),
        [isStartTimer, setIsStartTimer] = useState(false);

    const updateTimer = useCallback(() => {
        let now = performance.now();
        let dt = now - previousTime.current;

        if (dt >= 1000) {
            streamDuration.current =
                streamDuration.current - Math.round(dt / 1000);
            const formattedStreamDuration = new Date(
                streamDuration.current * 1000
            )
                .toISOString()
                .substr(11, 8);
            setRenderedStreamDuration(formattedStreamDuration);
            previousTime.current = now;
        }
        requestAnimationFrameId.current = requestAnimationFrame(updateTimer);
    }, []);

    const startTimer = useCallback(() => {
        previousTime.current = performance.now();
        requestAnimationFrameId.current = requestAnimationFrame(updateTimer);
    }, [updateTimer]);

    useEffect(() => {
        startTimer();
    }, []);

    return (
        <div className="timer-controller-wrapper">
            <div className="timer-display">{renderedStreamDuration}</div>
        </div>
    );
};

export default Timer;
