import React, { useRef, useState, useEffect } from "react";
import { Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Html,
  useProgress,
  OrbitControls,
  PerspectiveCamera,
  PointerLockControls,
} from "@react-three/drei";
import WasdControls from "../elements/WasdControls";
import Test from "../elements/Test";
import ClueModal from "../modal/ClueModal";
import Modal from "../modal/Modal";

const ThreeRoom = () => {
  // quiz 모달, hint modal 분리하기
  const [modalOpen, setModalOpen] = useState(false);
  const [quizType, setQuizType] = useState("");
  const [clueModalOpen, setClueModalOpen] = useState(false);
  const [clueType, setClueType] = useState(false);
  console.log(modalOpen, quizType, typeof quizType);

  function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>;
  }

  // useEffect(() => {
  //   console.log(modalOpen, "esc 버튼아 눌려라");
  //   var event = new KeyboardEvent('keydown', {
  //     key: 'Escape',
  //   });
  //   document.dispatchEvent(event);
  // }, [modalOpen]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {modalOpen && <Modal setOpenModal={setModalOpen} quizType={quizType} />}
      {clueModalOpen && (
        <ClueModal setClueModalOpen={setClueModalOpen} clueType={clueType} />
      )}
      {!modalOpen && !clueModalOpen && (
        <div
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            zIndex: 10,
            border: "2px solid #fff",
            borderRadius: "50%",
          }}
        ></div>
      )}

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
        {/* <OrbitControls /> */}
        {/* {modalOpen ? (
          <PointerLockControls enabled={false} />
        ) : (
          <PointerLockControls enabled={true} />
        )} */}
        <WasdControls />
        <PointerLockControls />
        <Suspense fallback={<Loader />}>
          <Test
            setModalOpen={setModalOpen}
            setQuizType={setQuizType}
            setClueModalOpen={setClueModalOpen}
            setClueType={setClueType}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeRoom;
