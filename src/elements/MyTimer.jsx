import React, { useEffect, useState } from 'react';

const MyTimer = () => {
    const [minutes, setMinutes] = useState(30);
    const [seconds, setSeconds] = useState(0);
    const [streamDuration, setStreamDuration] = useState(0);

    useEffect(() => {
        const countdown = setInterval(() => {
            setStreamDuration(streamDuration + 1);
            console.log(streamDuration);
            if (parseInt(seconds) > 0) {
                setSeconds(parseInt(seconds) - 1);
            }
            if (parseInt(seconds) === 0) {
                if (parseInt(minutes) === 0) {
                    clearInterval(countdown);
                } else {
                    setMinutes(parseInt(minutes) - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [minutes, seconds]);

    return (
        <div>
            {minutes}:{seconds > 10 ? seconds : '0' + seconds}
        </div>
    );
};

export default MyTimer;
