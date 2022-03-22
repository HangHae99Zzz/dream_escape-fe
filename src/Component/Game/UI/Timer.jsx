import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator as gameActions } from '../../../redux/modules/game';

const Timer = ({ setGameTime, gameEnd }) => {
    const dispatch = useDispatch();

    const roomId = useSelector(state => state.room.roomInfo.roomId);
    const { isCreator } = useSelector(({ user }) => user);

    const [minutes, setMinutes] = useState(30);
    const [seconds, setSeconds] = useState(0);
    const [streamDuration, setStreamDuration] = useState(0);

    useEffect(() => {
        const countdown = setInterval(() => {
            setStreamDuration(streamDuration + 1);
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

    useEffect(() => {
        if (gameEnd && isCreator) {
            console.log('Timer.jsx에서 dispatch');
            const _temp = streamDuration;

            //초를 시 분 초로 변경
            var _value = new Date(_temp * 1000).toISOString().substr(11, 8);
            console.log(_value);

            dispatch(gameActions.deleteGame(roomId, _value));
        }
        // dispatch(rankActions.recordTime();
    }, [gameEnd]);

    return (
        <div>
            {minutes}:{seconds > 10 ? seconds : '0' + seconds}
        </div>
    );
};

export default Timer;
