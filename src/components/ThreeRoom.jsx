import React, { useRef, useState } from "react";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";
import Hacker from "../elements/Hacker";
import Test from "../elements/Test";
import Model from "../elements/Model";
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

  return (
    <div>
      {modalOpen && <Modal setOpenModal={setModalOpen} quizType={quizType} />}
      {clueModalOpen && (
        <ClueModal setClueModalOpen={setClueModalOpen} clueType={clueType} />
      )}

      <Canvas style={{ width: "100%", height: "100vh" }}>
        <axesHelper size={5} />
        <directionalLight intensity={0.75} color={0xcaa7d9} />
        <pointLight
          position={[-1, 2, -2]}
          intensity={0.75}
          color={0xffb348}
          decay={2}
        />
        <pointLight
          position={[2, 1.5, -2]}
          intensity={0.75}
          color={0xbf492e}
          decay={2}
        />
        <pointLight position={[1, 1, 1]} color={0xff613d} />
        <OrbitControls enableZoom={true} />
        <perspectiveCamera fov={0} aspect={1} />
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
