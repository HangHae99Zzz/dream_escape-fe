import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const ref = useRef();
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "https://test001-s3-bucket.s3.ap-northeast-2.amazonaws.com/Poinmandres.gltf"
  );
  useFrame((state, delta) => (ref.current.rotation.y += 0.01));

  return (
    <group ref={ref} {...props} dispose={null} scale={0.3}>
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

useGLTF.preload(
  "https://test001-s3-bucket.s3.ap-northeast-2.amazonaws.com/Poinmandres.gltf"
);
