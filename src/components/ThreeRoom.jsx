import React, { useRef, useState } from "react";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";
const ThreeRoom = () => {
  function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>;
  }

  function Model(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/Poinmandres.gltf");
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve007_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve007_2.geometry}
          material={materials["Material.002"]}
        />
      </group>
    );
  }

  useGLTF.preload("/Poinmandres.gltf");

  function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef();
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += 0.01));
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    );
  }

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Suspense fallback={<Loader />}>
        <Model />
        <OrbitControls />
        <Environment preset="sunset" background />
      </Suspense>
    </Canvas>
  );
};

export default ThreeRoom;
