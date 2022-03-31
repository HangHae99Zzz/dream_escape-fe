import React, { useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress, PointerLockControls } from "@react-three/drei";
import { useSelector } from "react-redux";

import { actionCreator as roomActions } from "../../redux/modules/room";
import { actionCreator as userActions } from "../../redux/modules/user";

import { SvgHome } from "../../Asset/Icon/sidebar/svg_sidebar";
import Room from "./Room";
import WasdControls from "./WasdControls";
import { Modal, ClueModal, GameEndModal, SurveyModal } from "./Modal";
import GameUsers from "./UI/GameUsers";
import { EndingCredit } from "../Main";

const ThreeRoom = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quizType, setQuizType] = useState("");
  const [clueType, setClueType] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [clueModalOpen, setClueModalOpen] = useState(false);
  const [surveyModalOpen, setSurveyModalOpen] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [gamePassed, setGamePassed] = useState(false);
  const [isCredit, setIsCredit] = useState(false);
  const [isFirst, setIsFirst] = useState(false);

  const { count, countLimit, chance } = useSelector(({ game }) => game);
  const { socket } = useSelector(({ socket }) => socket);

  function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>;
  }

  const exit = () => {
    socket.close();
    dispatch(userActions.isIn(false));
    dispatch(userActions.isCreator(false));
    dispatch(roomActions.getRoomInfo(null));
    navigate("/");
  };

  return (
    <Container>
      <SvgHome
        width={37}
        height={37}
        style={{
          position: "absolute",
          zIndex: "2",
          top: "54px",
          left: "50px",
          cursor: "pointer",
        }}
        onClick={exit}
      >
        나가기
      </SvgHome>
      <GameUsers
        gameEnd={gameEnd}
        setGameEnd={setGameEnd}
        gamePassed={gamePassed}
        count={count}
        countLimit={countLimit}
        chance={chance}
        isFirst={isFirst}
        setIsFirst={setIsFirst}
      />
      {gameEnd && (
        <GameEndModal setGameEnd={setGameEnd} setIsCredit={setIsCredit} />
      )}
      {surveyModalOpen && (
        <SurveyModal setSurveyModalOpen={setSurveyModalOpen} />
      )}
      {modalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          quizType={quizType}
          setGamePassed={setGamePassed}
          gameEnd={gameEnd}
          setGameEnd={setGameEnd}
          setIsFirst={setIsFirst}
        />
      )}
      {clueModalOpen && (
        <ClueModal setClueModalOpen={setClueModalOpen} clueType={clueType} />
      )}
      {/* 가운데 원 */}
      {!modalOpen && !clueModalOpen && !isCredit && !surveyModalOpen && (
        <MouseCircle></MouseCircle>
      )}

      <Canvas
        style={{ width: "100%", height: "100vh" }}
        camera={{ fov: 45, position: [1, 4, 3] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight intensity={1.5} color={0xb8b7ff} />
          <pointLight
            position={[-1, 2, -2]}
            intensity={0.5}
            color={0x29bfff}
            decay={2}
          />
          <pointLight
            position={[2, 1.5, -2]}
            intensity={0.5}
            color={0xff7ee3}
            decay={2}
          />
          <pointLight position={[1, 1, 1]} color={0xf242cb} />
          {modalOpen || clueModalOpen || gameEnd || surveyModalOpen ? (
            <PointerLockControls enabled={false} />
          ) : (
            <PointerLockControls enabled={true} />
          )}
          {!modalOpen && !clueModalOpen && <WasdControls />}
          <Room
            setGameEnd={setGameEnd}
            setGamePassed={setGamePassed}
            setModalOpen={setModalOpen}
            setQuizType={setQuizType}
            setClueModalOpen={setClueModalOpen}
            setClueType={setClueType}
            setSurveyModalOpen={setSurveyModalOpen}
            count={count}
            countLimit={countLimit}
          />
        </Suspense>
      </Canvas>
      {isCredit ? <EndingCredit /> : <></>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MouseCircle = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  z-index: 10;
  border: 2px solid #fff;
  border-radius: 50%;
`;

export default ThreeRoom;
