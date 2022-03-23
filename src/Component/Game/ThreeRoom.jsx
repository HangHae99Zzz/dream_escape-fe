import React, { useState } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress, PointerLockControls } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import WasdControls from "./WasdControls";
import Room from "./Room";
import { actionCreator as quizActions } from "../../redux/modules/quiz";
import { Modal, ClueModal, GameEndModal } from "./Modal";
import InGameUsers from "./UI/GameUsers";
import { EndingCredit } from "../Main";
import { useEffect } from "react";

const ThreeRoom = () => {
  const dispatch = useDispatch();

  const roomId = useSelector((state) => state.room.roomInfo.roomId);

  // quiz 모달, hint modal 분리하기
  const [modalOpen, setModalOpen] = useState(false);
  const [quizType, setQuizType] = useState("");
  const [clueModalOpen, setClueModalOpen] = useState(false);
  const [clueType, setClueType] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [IsCredit, setIsCredit] = useState(false);

  const { count, countLimit } = useSelector(({ game }) => game);

  function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>;
  }

  return (
    <Container>
      <InGameUsers gameEnd={gameEnd} />
      {gameEnd && (
        <GameEndModal setGameEnd={setGameEnd} setIsCredit={setIsCredit} />
      )}
      {modalOpen && <Modal setModalOpen={setModalOpen} quizType={quizType} />}
      {clueModalOpen && (
        <ClueModal setClueModalOpen={setClueModalOpen} clueType={clueType} />
      )}
      {/* 가운데 원 */}
      {!modalOpen && !clueModalOpen && <MouseCircle></MouseCircle>}

      <Canvas
        style={{ width: "100%", height: "100vh" }}
        camera={{ position: [1, 4, 3] }}
      >
        <axesHelper size={5} />
        <directionalLight intensity={1.5} color={0xeec4ff} />
        <pointLight
          position={[-1, 2, -2]}
          intensity={0.5}
          color={0xffb9f0}
          decay={2}
        />
        <pointLight
          position={[2, 1.5, -2]}
          intensity={0.5}
          color={0xff7ee3}
          decay={2}
        />
        <pointLight position={[1, 1, 1]} color={0xf242cb} />
        {modalOpen || clueModalOpen || gameEnd ? (
          <PointerLockControls enabled={false} />
        ) : (
          <PointerLockControls enabled={true} />
        )}
        <WasdControls />
        <Suspense fallback={<Loader />}>
          <Room
            setGameEnd={setGameEnd}
            setModalOpen={setModalOpen}
            setQuizType={setQuizType}
            setClueModalOpen={setClueModalOpen}
            setClueType={setClueType}
            count={count}
            countLimit={countLimit}
          />
        </Suspense>
      </Canvas>
      {IsCredit ? <EndingCredit /> : <></>}
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
