import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator as gameActions } from "../../../redux/modules/game";

const Timer = ({
  setGameTime,
  gameEnd,
  setGameEnd,
  gamePassed,
  isFirst,
  setIsFirst,
}) => {
  const dispatch = useDispatch();

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
      if (streamDuration === 1800) {
        // 30분 되면 게임 끝
        setGameEnd(true);
        setIsFirst(true);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  useEffect(() => {
    if (gameEnd && isFirst) {
      console.log("Timer.jsx에서 dispatch");
      const _temp = streamDuration;

      //초를 시 분 초로 변경
      var _value = new Date(_temp * 1000).toISOString().substr(11, 8);
      console.log(_value);

      dispatch(gameActions.deleteGame(gamePassed, _value));
    }
    // dispatch(rankActions.recordTime();
  }, [isFirst]);

  return (
    <div>
      {minutes}:{seconds > 9 ? seconds : "0" + seconds}
    </div>
  );
};

export default Timer;
