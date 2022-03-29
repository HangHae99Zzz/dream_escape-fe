import React, { useState, Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress, PointerLockControls } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import WasdControls from "./WasdControls";
import { Modal, ClueModal, GameEndModal, SurveyModal } from "./Modal";
import GameUsers from "./UI/GameUsers";
import { EndingCredit } from "../Main";

const ThreeRoom = () => {
  const Room = React.lazy(() => import("./Room"));

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

  function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>;
  }

  return (
    <Container>
      <GameUsers
        gameEnd={gameEnd}
        setGameEnd={setGameEnd}
        gamePassed={gamePassed}
        count={count}
        countLimit={countLimit}
        chance={chance}
        isFirst={isFirst}
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
        <WasdControls />
        <Suspense fallback={<Loader />}>
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
