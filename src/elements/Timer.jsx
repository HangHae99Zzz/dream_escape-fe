import React, { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator as gameActions } from "../redux/modules/game";

const Timer = ({ setGameTime, gameEnd }) => {
  const dispatch = useDispatch();

  const roomId = useSelector((state) => state.room.roomInfo.roomId);

  const [renderedStreamDuration, setRenderedStreamDuration] =
      useState("00:30:00"),
    streamDuration = useRef(0),
    previousTime = useRef(0),
    requestAnimationFrameId = useRef(null),
    [isStartTimer, setIsStartTimer] = useState(false);

  const updateTimer = useCallback(() => {
    let now = performance.now();
    let dt = now - previousTime.current;

    if (dt >= 1000) {
      // 1초에 한번씩 stream duration -> 몇 초 지났는지, Math.round로 소수점 보정해줌
      streamDuration.current = streamDuration.current - Math.round(dt / 1000);
      const formattedStreamDuration = new Date(streamDuration.current * 1000)
        .toISOString()
        .substr(11, 8);
      // format 형식 맞춰서 바꿔준다.
      setRenderedStreamDuration(formattedStreamDuration);
      previousTime.current = now;
    }
    // 타이머를 하나씩 맞춰준다.
    requestAnimationFrameId.current = requestAnimationFrame(updateTimer);
  }, []);

  const startTimer = useCallback(() => {
    previousTime.current = performance.now();
    requestAnimationFrameId.current = requestAnimationFrame(updateTimer);
  }, [updateTimer]);

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    if (!gameEnd) return;
    console.log("Timer.jsx에서 dispatch");
    const _temp = Math.abs(streamDuration.current);

    //초를 시 분 초로 변경
    function sec2time(timeInSeconds) {
      var pad = function (num, size) {
          return ("000" + num).slice(size * -1);
        },
        time = parseFloat(timeInSeconds).toFixed(3),
        hours = Math.floor(time / 60 / 60),
        minutes = Math.floor(time / 60) % 60,
        seconds = Math.floor(time - minutes * 60),

      return pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2);
    }

    var _value = sec2time(_temp);

    dispatch(gameActions.deleteGame(roomId, _value));
    // dispatch(rankActions.recordTime();
  }, [gameEnd]);

  return (
    <div className="timer-controller-wrapper">
      <div className="timer-display">{renderedStreamDuration}</div>
    </div>
  );
};

export default Timer;
