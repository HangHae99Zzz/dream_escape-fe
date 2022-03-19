import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

// Reference to a set of active KeyboardEvent.code entries
const useCodes = () => {
  const codes = useRef(new Set());
  useEffect(() => {
    const onKeyDown = (e) => codes.current.add(e.code);
    const onKeyUp = (e) => codes.current.delete(e.code);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);
  return codes;
};

const vec = new Vector3();

// Rotation logic from three/examples/jsm/controls/PointerLockControls.js
export default function WasdControls() {
  const { camera } = useThree();
  const code = useCodes();
  const moveForward = (distance) => {
    vec.setFromMatrixColumn(camera.matrix, 0);
    vec.crossVectors(camera.up, vec);
    camera.position.addScaledVector(vec, distance);
  };
  const moveRight = (distance) => {
    vec.setFromMatrixColumn(camera.matrix, 0);
    camera.position.addScaledVector(vec, distance);
  };
  useFrame((_, delta) => {
    const speed = code.current.has("ShiftLeft") ? 5 : 2;
    if (code.current.has("KeyW")) moveForward(delta * speed);
    if (code.current.has("KeyA")) moveRight(-delta * speed);
    if (code.current.has("KeyS")) moveForward(-delta * speed);
    if (code.current.has("KeyD")) moveRight(delta * speed);
  });
  return null;
}
