import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/room.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-2.99, 1.12, -0.27]}
        rotation={[-Math.PI, -1.23, -Math.PI / 2]}
        scale={1.01}
      >
        <mesh
          geometry={nodes.Circle013.geometry}
          material={nodes.Circle013.material}
          position={[-1.12, 0.01, -0.02]}
          scale={1.3}
        />
        <mesh
          geometry={nodes.Vert006.geometry}
          material={materials["cable.005"]}
          position={[0, 0.63, 0]}
          scale={[1, 1.06, 1]}
        />
      </group>
      <mesh
        geometry={nodes.Plane029.geometry}
        material={nodes.Plane029.material}
        position={[-8.77, 4.2, -5.83]}
        rotation={[-0.1, 0.1, -0.01]}
      >
        <mesh
          geometry={nodes.Plane028_1.geometry}
          material={nodes.Plane028_1.material}
        />
      </mesh>
      <mesh
        geometry={nodes.Plane015.geometry}
        material={nodes.Plane015.material}
        position={[-8.08, 3.84, -9.16]}
        rotation={[0.33, -0.25, 0]}
      >
        <mesh
          geometry={nodes.Plane008.geometry}
          material={nodes.Plane008.material}
        />
      </mesh>
      <mesh
        geometry={nodes.Plane051.geometry}
        material={nodes.Plane051.material}
        position={[-4.85, 2.84, -8.61]}
        rotation={[0.17, 0.21, 0.1]}
      >
        <mesh
          geometry={nodes.Plane049.geometry}
          material={nodes.Plane049.material}
        />
        <mesh
          geometry={nodes.Plane035_1.geometry}
          material={nodes.Plane035_1.material}
        />
        <mesh
          geometry={nodes.Plane035_2.geometry}
          material={materials["led.005"]}
        />
      </mesh>
      <group position={[6.51, 0, 6.27]} rotation={[0, -0.61, 0]} scale={3.34}>
        <mesh
          geometry={nodes.Plane033.geometry}
          material={nodes.Plane033.material}
        />
        <mesh
          geometry={nodes.Plane033_1.geometry}
          material={nodes.Plane033_1.material}
        />
        <mesh
          geometry={nodes.Plane033_2.geometry}
          material={nodes.Plane033_2.material}
        />
        <mesh
          geometry={nodes.Circle002_1.geometry}
          material={nodes.Circle002_1.material}
          position={[0, 0.32, 0.57]}
        />
        <group position={[0, 0.31, -0.01]} scale={[-1, -1, 1]}>
          <mesh
            geometry={nodes.Cube_1.geometry}
            material={nodes.Cube_1.material}
          />
          <mesh
            geometry={nodes.Cube_2.geometry}
            material={nodes.Cube_2.material}
          />
        </group>
        <group position={[0, 0.31, -0.01]}>
          <mesh
            geometry={nodes.Cube_1.geometry}
            material={nodes.Cube_1.material}
          />
          <mesh
            geometry={nodes.Cube_2.geometry}
            material={nodes.Cube_2.material}
          />
        </group>
        <mesh
          geometry={nodes.Cylinder002.geometry}
          material={nodes.Cylinder002.material}
          position={[0, 0.31, -0.01]}
        />
        <mesh
          geometry={nodes.Cylinder003.geometry}
          material={nodes.Cylinder003.material}
          position={[0, 0.32, 0.57]}
        />
        <mesh
          geometry={nodes.Plane025.geometry}
          material={nodes.Plane025.material}
          position={[0.04, 0.31, -0.01]}
        />
        <mesh
          geometry={nodes.Plane026_1.geometry}
          material={nodes.Plane026_1.material}
          position={[0, 0.9, -0.19]}
          scale={1.19}
        />
        <mesh
          geometry={nodes.Plane027.geometry}
          material={nodes.Plane027.material}
          position={[0.04, 0.31, -0.01]}
        />
        <mesh
          geometry={nodes.Plane030.geometry}
          material={nodes.Plane030.material}
          position={[0.04, 0.32, -0.52]}
          scale={0.68}
        />
        <group position={[0, 0.32, -0.52]}>
          <mesh
            geometry={nodes.Plane046_1.geometry}
            material={nodes.Plane046_1.material}
          />
          <mesh
            geometry={nodes.Plane046_2.geometry}
            material={nodes.Plane046_2.material}
          />
        </group>
        <group position={[0, 0.32, 0.57]}>
          <mesh
            geometry={nodes.Plane046_3.geometry}
            material={nodes.Plane046_3.material}
          />
          <mesh
            geometry={nodes.Plane046_4.geometry}
            material={nodes.Plane046_4.material}
          />
        </group>
        <mesh
          geometry={nodes.Vert_1.geometry}
          material={nodes.Vert_1.material}
          position={[0, 0, -0.52]}
        />
      </group>
      <group
        position={[-0.34, 0, -0.36]}
        rotation={[-Math.PI, 0.02, -Math.PI]}
        scale={2.43}
      >
        <mesh
          geometry={nodes.Plane048.geometry}
          material={materials["wall.002"]}
        />
        <mesh
          geometry={nodes.Plane048_1.geometry}
          material={materials["floor.001"]}
        />
      </group>
      <group scale={2.43}>
        <mesh geometry={nodes.Plane_1.geometry} material={materials.wall} />
        <mesh geometry={nodes.Plane_2.geometry} material={materials.floor} />
      </group>
      <mesh
        geometry={nodes.Table.geometry}
        material={nodes.Table.material}
        position={[-8.8, 1.45, -6.99]}
      >
        <mesh
          geometry={nodes.Plane002.geometry}
          material={nodes.Plane002.material}
        />
      </mesh>
      <mesh
        geometry={nodes.Table002.geometry}
        material={nodes.Table002.material}
        position={[-5.15, 1.45, -8.61]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          geometry={nodes.Plane007.geometry}
          material={nodes.Plane007.material}
        />
      </mesh>
      <mesh
        geometry={nodes.Sofa.geometry}
        material={nodes.Sofa.material}
        position={[-1.44, 0, 7.3]}
        rotation={[0, -0.22, 0]}
        scale={1.2}
      >
        <mesh
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          position={[-1.36, 2.14, -0.13]}
          rotation={[-0.14, 0.7, -0.7]}
        />
        <mesh
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          position={[1.14, 1.02, -0.44]}
          rotation={[0.08, -1.26, 0.37]}
        />
      </mesh>
      <mesh
        geometry={nodes.Table001.geometry}
        material={nodes.Table001.material}
        position={[-0.33, 1.38, 4.38]}
        rotation={[0.44, 0.42, 0]}
      >
        <mesh
          geometry={nodes.Plane005.geometry}
          material={nodes.Plane005.material}
        />
      </mesh>
      <mesh
        geometry={nodes.Pipe003.geometry}
        material={nodes.Pipe003.material}
        position={[-9.47, 5.2, -5.72]}
      />
      <mesh
        geometry={nodes.Pipe001.geometry}
        material={nodes.Pipe001.material}
        position={[-8.91, 5.2, -2.06]}
      />
      <mesh
        geometry={nodes.Pipe002.geometry}
        material={nodes.Pipe002.material}
        position={[-9.64, 0, -3.8]}
      />
      <mesh
        geometry={nodes.Pipe.geometry}
        material={nodes.Pipe.material}
        position={[-9.64, 0, -3.66]}
      />
      <mesh
        geometry={nodes.PC001.geometry}
        material={nodes.PC001.material}
        position={[-6.81, 1.82, -8.84]}
        rotation={[0, 0.01, 0]}
        scale={1.25}
      >
        <mesh
          geometry={nodes.Plane009.geometry}
          material={nodes.Plane009.material}
        />
        <mesh
          geometry={nodes.Plane010.geometry}
          material={nodes.Plane010.material}
        />
        <mesh
          geometry={nodes.Plane011.geometry}
          material={nodes.Plane011.material}
          position={[0.42, 0.2, 0.44]}
          rotation={[-0.16, 0, 0]}
        />
        <group position={[-0.47, 0.12, 0.45]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Plane010_1.geometry}
            material={nodes.Plane010_1.material}
          />
          <mesh
            geometry={nodes.Plane010_2.geometry}
            material={nodes.Plane010_2.material}
          />
        </group>
        <group position={[-0.42, 0.12, 0.45]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Plane010_1.geometry}
            material={nodes.Plane010_1.material}
          />
          <mesh
            geometry={nodes.Plane010_2.geometry}
            material={nodes.Plane010_2.material}
          />
        </group>
        <group position={[0.05, 0.32, 0.06]}>
          <mesh
            geometry={nodes.Plane011_1.geometry}
            material={nodes.Plane011_1.material}
          />
          <mesh
            geometry={nodes.Plane011_2.geometry}
            material={materials["screen-qb"]}
          />
        </group>
      </mesh>
      <mesh
        geometry={nodes.PC002.geometry}
        material={nodes.PC002.material}
        position={[-8.65, 1.82, -8.33]}
        rotation={[0, 0.92, 0]}
        scale={1.25}
      >
        <mesh
          geometry={nodes.Plane035.geometry}
          material={nodes.Plane035.material}
        />
        <mesh
          geometry={nodes.Plane036_1.geometry}
          material={nodes.Plane036_1.material}
          position={[0, 0, -0.09]}
        />
        <mesh
          geometry={nodes.Plane037.geometry}
          material={nodes.Plane037.material}
          position={[0.42, 0.2, 0.44]}
          rotation={[-0.16, 0, 0]}
        />
        <group position={[-0.47, 0.12, 0.45]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Plane010_1.geometry}
            material={nodes.Plane010_1.material}
          />
          <mesh
            geometry={nodes.Plane010_2.geometry}
            material={nodes.Plane010_2.material}
          />
        </group>
        <group position={[-0.42, 0.12, 0.45]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Plane010_1.geometry}
            material={nodes.Plane010_1.material}
          />
          <mesh
            geometry={nodes.Plane010_2.geometry}
            material={nodes.Plane010_2.material}
          />
        </group>
        <group position={[0.02, 0.32, 0.06]} scale={1.24}>
          <mesh
            geometry={nodes.Plane016_1.geometry}
            material={nodes.Plane016_1.material}
          />
          <mesh
            geometry={nodes.Plane016_2.geometry}
            material={materials["screen-nc"]}
          />
        </group>
      </mesh>
      <mesh
        geometry={nodes.Keyboard001.geometry}
        material={nodes.Keyboard001.material}
        position={[-7.68, 1.83, -7.43]}
        rotation={[-0.2, 0.63, 0]}
        scale={1.25}
      >
        <mesh
          geometry={nodes.Plane018.geometry}
          material={nodes.Plane018.material}
          position={[-0.04, 0.05, 0.03]}
          rotation={[0.08, 0, 0]}
        />
      </mesh>
      <mesh
        geometry={nodes.Keyboard.geometry}
        material={nodes.Keyboard.material}
        position={[-3.78, 2.59, -9.41]}
        rotation={[1.42, -1.57, 0]}
        scale={1.25}
      >
        <mesh
          geometry={nodes.Plane043.geometry}
          material={nodes.Plane043.material}
          position={[-0.04, 0.05, 0.03]}
          rotation={[0.08, 0, 0]}
        />
      </mesh>
      <mesh
        geometry={nodes.TV.geometry}
        material={nodes.TV.material}
        position={[-4.85, 1.82, -8.8]}
        rotation={[0, -0.24, 0]}
        scale={1.22}
      >
        <mesh
          geometry={nodes.Plane040_1.geometry}
          material={nodes.Plane040_1.material}
        />
        <mesh
          geometry={nodes.Plane040_2.geometry}
          material={materials["screen-dos-game"]}
        />
        <mesh
          geometry={nodes.Plane019_1.geometry}
          material={nodes.Plane019_1.material}
        />
        <mesh
          geometry={nodes.Plane020_2.geometry}
          material={nodes.Plane020_2.material}
        />
        <mesh
          geometry={nodes.Plane021.geometry}
          material={nodes.Plane021.material}
          position={[0.52, 0.09, 0.31]}
        />
      </mesh>
      <group position={[-8.74, 0, 6.78]} scale={1.13}>
        <mesh
          geometry={nodes.Plane050.geometry}
          material={nodes.Plane050.material}
        />
        <mesh
          geometry={nodes.Plane050_1.geometry}
          material={materials["screen-arcade"]}
        />
        <mesh
          geometry={nodes.Plane050_2.geometry}
          material={materials["arcade-header"]}
        />
        <mesh
          geometry={nodes.Plane050_3.geometry}
          material={materials["led.001"]}
        />
        <mesh
          geometry={nodes.Plane050_4.geometry}
          material={materials["led.002"]}
        />
        <mesh
          geometry={nodes.Plane031_1.geometry}
          material={nodes.Plane031_1.material}
          position={[0.64, 1.92, 0.46]}
          rotation={[0, 0, -0.27]}
          scale={0.69}
        >
          <group position={[0, 0.08, 0]} scale={1.45}>
            <mesh
              geometry={nodes.Cylinder_1.geometry}
              material={nodes.Cylinder_1.material}
            />
            <mesh
              geometry={nodes.Cylinder_2.geometry}
              material={nodes.Cylinder_2.material}
            />
          </group>
        </mesh>
        <mesh
          geometry={nodes.Plane032_1.geometry}
          material={nodes.Plane032_1.material}
          position={[0.64, 1.92, -0.3]}
          rotation={[0, 0, -0.27]}
          scale={0.69}
        >
          <group position={[0, 0.08, 0]} scale={1.45}>
            <mesh
              geometry={nodes.Cylinder_1.geometry}
              material={nodes.Cylinder_1.material}
            />
            <mesh
              geometry={nodes.Cylinder_2.geometry}
              material={nodes.Cylinder_2.material}
            />
          </group>
        </mesh>
        <mesh
          geometry={nodes.Plane033_3.geometry}
          material={nodes.Plane033_3.material}
        />
      </group>
      <mesh
        geometry={nodes.Mouse.geometry}
        material={nodes.Mouse.material}
        position={[-6.7, 1.82, -7.96]}
        scale={1.15}
      />
      <mesh
        geometry={nodes.Cable001.geometry}
        material={nodes.Cable001.material}
        position={[-6.69, 1.83, -8.06]}
      />
      <mesh
        geometry={nodes.Cable002.geometry}
        material={nodes.Cable002.material}
        position={[-7.8, 1.87, -7.65]}
      />
      <mesh
        geometry={nodes.Cable003.geometry}
        material={nodes.Cable003.material}
        position={[-4.21, 2.76, -9.04]}
      />
      <mesh
        geometry={nodes.Cable004.geometry}
        material={nodes.Cable004.material}
        position={[-3.54, 2.66, -9.38]}
      />
      <group position={[-8.81, 1.94, -5.76]} rotation={[-0.12, 0.11, 0]}>
        <mesh
          geometry={nodes.Plane054_1.geometry}
          material={nodes.Plane054_1.material}
        />
        <mesh
          geometry={nodes.Plane054_2.geometry}
          material={materials["screen-dos"]}
        />
        <mesh
          geometry={nodes.Plane045.geometry}
          material={nodes.Plane045.material}
          position={[0.46, 0.22, 0.05]}
          rotation={[Math.PI / 2, 1.35, -Math.PI / 2]}
          scale={1.25}
        />
        <mesh
          geometry={nodes.Plane056.geometry}
          material={nodes.Plane056.material}
        />
        <mesh
          geometry={nodes.Plane056_1.geometry}
          material={nodes.Plane056_1.material}
        />
        <mesh
          geometry={nodes.Plane056_2.geometry}
          material={nodes.Plane056_2.material}
        />
      </group>
      <mesh
        geometry={nodes.Chair.geometry}
        material={nodes.Chair.material}
        position={[-5.27, 0.79, -6.03]}
        rotation={[2.84, 1.2, -2.81]}
        scale={0.11}
      >
        <mesh
          geometry={nodes.Circle001.geometry}
          material={nodes.Circle001.material}
          scale={9.45}
        />
        <mesh
          geometry={nodes.Plane047.geometry}
          material={nodes.Plane047.material}
          position={[0, 10.02, 0]}
          rotation={[0, -0.34, 0]}
          scale={10.29}
        >
          <mesh
            geometry={nodes.Vert008_3.geometry}
            material={nodes.Vert008_3.material}
            scale={0.92}
          />
        </mesh>
      </mesh>
      <mesh
        geometry={nodes.Trash.geometry}
        material={nodes.Trash.material}
        position={[-8.54, 0.16, -5.41]}
        rotation={[-0.43, 0, 0]}
      />
      <group position={[-6.47, 3.84, -9.52]} rotation={[0, 0, -0.28]}>
        <mesh
          geometry={nodes.Plane058.geometry}
          material={nodes.Plane058.material}
        />
        <mesh
          geometry={nodes.Plane058_1.geometry}
          material={materials.poster1}
        />
      </group>
      <group
        position={[-3.38, 3.71, -9.53]}
        rotation={[0, 0, 0.5]}
        scale={0.84}
      >
        <mesh
          geometry={nodes.Plane059.geometry}
          material={nodes.Plane059.material}
        />
        <mesh
          geometry={nodes.Plane059_1.geometry}
          material={materials.poster2}
        />
      </group>
      <mesh
        geometry={nodes.Shelf.geometry}
        material={nodes.Shelf.material}
        position={[-9.73, 3.91, -7.17]}
      />
      <group position={[-3.06, 1.82, -8.18]} rotation={[0, 0.41, 0]}>
        <mesh
          geometry={nodes.Plane061_1.geometry}
          material={nodes.Plane061_1.material}
        />
        <mesh
          geometry={nodes.Plane061_2.geometry}
          material={nodes.Plane061_2.material}
        />
        <mesh
          geometry={nodes.Plane052.geometry}
          material={nodes.Plane052.material}
          position={[-0.05, 0.05, 0.08]}
          rotation={[-0.16, 0, 0]}
        />
        <group position={[-1, 0.06, -0.1]} rotation={[0, 1.02, 1.71]}>
          <mesh
            geometry={nodes.Plane063_1.geometry}
            material={nodes.Plane063_1.material}
          />
          <mesh
            geometry={nodes.Plane063_2.geometry}
            material={nodes.Plane063_2.material}
          />
        </group>
        <mesh
          geometry={nodes.Vert009.geometry}
          material={nodes.Vert009.material}
          position={[0.16, 0.03, 0.09]}
        />
      </group>
      <mesh
        geometry={nodes.Cable005.geometry}
        material={nodes.Cable005.material}
        position={[-9.32, 0, -3.59]}
      />
      <mesh
        geometry={nodes.Paper001.geometry}
        material={nodes.Paper001.material}
        position={[0.13, 1.88, 4.35]}
        rotation={[0.44, 0, 0]}
      />
      <mesh
        geometry={nodes.Paper002.geometry}
        material={nodes.Paper002.material}
        position={[0.02, 1.88, 4.35]}
        rotation={[0.06, 0.66, 0.37]}
      />
      <mesh
        geometry={nodes.Paper003.geometry}
        material={nodes.Paper003.material}
        position={[-0.26, 1.95, 4.21]}
        rotation={[0.44, -0.88, 0]}
      />
      <mesh
        geometry={nodes.Plane077.geometry}
        material={materials.bg}
        position={[0, -0.24, 0]}
        scale={9.82}
      />
      <mesh
        geometry={nodes.Cable.geometry}
        material={nodes.Cable.material}
        position={[-9.64, 4.4, -5.87]}
      />
      <group
        position={[-1.63, 0.72, 2.09]}
        rotation={[0.24, 1.2, 2.68]}
        scale={[1.14, 0.67, 0.9]}
      >
        <mesh
          geometry={nodes.Plane067_1.geometry}
          material={nodes.Plane067_1.material}
        />
        <mesh
          geometry={nodes.Plane067_2.geometry}
          material={nodes.Plane067_2.material}
        />
      </group>
      <group
        position={[-1.68, 1.19, 1.87]}
        rotation={[-2.09, 1.12, -0.54]}
        scale={[0.96, 1.06, 0.96]}
      >
        <mesh
          geometry={nodes.Plane067_1.geometry}
          material={nodes.Plane067_1.material}
        />
        <mesh
          geometry={nodes.Plane067_2.geometry}
          material={nodes.Plane067_2.material}
        />
      </group>
      <mesh
        geometry={nodes.Lamp.geometry}
        material={nodes.Lamp.material}
        position={[-9.4, 1.82, -7.06]}
        rotation={[0, 1.3, 0]}
        scale={1.08}
      >
        <mesh
          geometry={nodes.Circle005.geometry}
          material={nodes.Circle005.material}
          position={[0, 1.3, 0.48]}
          rotation={[-0.44, 0, 0]}
          scale={1.12}
        >
          <mesh
            geometry={nodes.Icosphere.geometry}
            material={nodes.Icosphere.material}
            position={[0, -0.11, 0]}
            rotation={[0.44, -1.05, 0]}
            scale={0.89}
          />
        </mesh>
        <mesh
          geometry={nodes.Vert012.geometry}
          material={nodes.Vert012.material}
          position={[0, 0.06, 0]}
        />
      </mesh>
      <group position={[-7.63, 0, 4.65]} scale={1.13}>
        <mesh
          geometry={nodes.Plane014.geometry}
          material={materials["black.002"]}
        />
        <mesh
          geometry={nodes.Plane014_1.geometry}
          material={materials["screen-arcade.001"]}
        />
        <mesh
          geometry={nodes.Plane014_2.geometry}
          material={materials["arcade-header.001"]}
        />
        <mesh
          geometry={nodes.Plane014_3.geometry}
          material={materials["led.004"]}
        />
        <mesh
          geometry={nodes.Plane014_4.geometry}
          material={materials["led.003"]}
        />
      </group>
      <mesh
        geometry={nodes.Artwork001.geometry}
        material={materials["chris-dien-m8-drizzt3"]}
        position={[3.42, 3.74, -9.47]}
        rotation={[Math.PI / 2, 0, -0.02]}
        scale={2.62}
      />
      <group
        position={[8.6, 0.57, -8.15]}
        rotation={[-2.66, 1.2, 2.77]}
        scale={1.25}
      >
        <mesh
          geometry={nodes.Cylinder032.geometry}
          material={materials.Steel}
        />
        <mesh
          geometry={nodes.Cylinder032_1.geometry}
          material={materials["Grey.001"]}
        />
        <mesh
          geometry={nodes.Cylinder032_2.geometry}
          material={materials["White.004"]}
        />
      </group>
      <mesh
        geometry={nodes.Board.geometry}
        material={nodes.Board.material}
        position={[-9.42, 3.44, -0.09]}
        rotation={[-0.32, 1.57, 0]}
      >
        <mesh
          geometry={nodes.Plane001_1.geometry}
          material={nodes.Plane001_1.material}
          position={[-1.78, -1.25, 0.53]}
          rotation={[0.58, 0.26, -0.53]}
          scale={[1, 1, 0.74]}
        />
        <mesh
          geometry={nodes.Plane003_1.geometry}
          material={nodes.Plane003_1.material}
          position={[-1.77, -1.77, 0.67]}
          rotation={[1.1, -0.94, -1.35]}
        />
        <mesh
          geometry={nodes.Plane004_1.geometry}
          material={nodes.Plane004_1.material}
          position={[2.17, -0.53, 1.03]}
          rotation={[-0.31, -0.02, 0.13]}
          scale={0.64}
        />
        <mesh
          geometry={nodes.Plane016.geometry}
          material={materials.birch_wood_varnished}
        />
        <mesh geometry={nodes.Plane086.geometry} material={materials.Board} />
      </mesh>
      <mesh
        geometry={nodes.Tires.geometry}
        material={materials.rubber}
        position={[7.94, -0.06, 0.94]}
        rotation={[0, 0.13, 0]}
        scale={1.93}
      />
      <group
        position={[2.35, 0.43, 7.72]}
        rotation={[-Math.PI, 0.48, -Math.PI]}
        scale={1.77}
      >
        <mesh
          geometry={nodes.Cylinder082.geometry}
          material={materials["metal.007"]}
        />
        <mesh
          geometry={nodes.Cylinder082_1.geometry}
          material={materials["lamp.001"]}
        />
        <mesh
          geometry={nodes.Cylinder082_2.geometry}
          material={materials["traffic.002"]}
        />
        <mesh
          geometry={nodes.Cylinder082_3.geometry}
          material={materials["traffic.001"]}
        />
        <mesh
          geometry={nodes.Cylinder082_4.geometry}
          material={materials.traffic}
        />
      </group>
      <mesh
        geometry={nodes.Cables.geometry}
        material={materials["cable.004"]}
        position={[-0.35, 0, -1.43]}
        rotation={[Math.PI, -1.23, Math.PI]}
        scale={1.01}
      />
      <mesh
        geometry={nodes.Cables001.geometry}
        material={materials.cable}
        position={[-1.66, 0.58, -0.82]}
        rotation={[Math.PI, -1.23, Math.PI]}
        scale={1.01}
      >
        <mesh
          geometry={nodes.Vert001_1.geometry}
          material={materials["cable.001"]}
          position={[0, 0, -0.68]}
        />
        <mesh
          geometry={nodes.Vert004_2.geometry}
          material={materials["cable.002"]}
          position={[0, 0, -1.37]}
        />
        <mesh
          geometry={nodes.Vert005_1.geometry}
          material={materials["cable.003"]}
          position={[0, 0, -2.05]}
        />
      </mesh>
      <group
        position={[-0.35, 0, -1.59]}
        rotation={[Math.PI, -1.23, Math.PI]}
        scale={1.01}
      >
        <mesh
          geometry={nodes.Plane034.geometry}
          material={nodes.Plane034.material}
        />
        <mesh geometry={nodes.Plane034_1.geometry} material={materials.LCD} />
        <mesh
          geometry={nodes.Circle007.geometry}
          material={nodes.Circle007.material}
          position={[0.65, 0.89, -0.18]}
        />
        <mesh
          geometry={nodes.Circle018_1.geometry}
          material={nodes.Circle018_1.material}
          position={[0.65, 0.89, 0.31]}
        />
        <mesh
          geometry={nodes.Circle008_1.geometry}
          material={nodes.Circle008_1.material}
          position={[-0.63, 0.66, 1.5]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.27}
        />
        <mesh
          geometry={nodes.Circle009_1.geometry}
          material={nodes.Circle009_1.material}
          position={[-0.5, 0.66, 1.5]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.27}
        />
        <mesh
          geometry={nodes.Circle010.geometry}
          material={nodes.Circle010.material}
          position={[-0.37, 0.66, 1.5]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.27}
        />
        <mesh
          geometry={nodes.Circle011.geometry}
          material={nodes.Circle011.material}
          position={[0.65, 0.89, 0.31]}
        />
        <mesh
          geometry={nodes.Circle012.geometry}
          material={nodes.Circle012.material}
          position={[0.65, 0.89, -0.18]}
        />
        <mesh
          geometry={nodes.Circle019.geometry}
          material={nodes.Circle019.material}
          position={[0.75, 0.89, 1.25]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[1, 0.86, 0.86]}
        />
        <mesh
          geometry={nodes.Circle020.geometry}
          material={nodes.Circle020.material}
          position={[-0.75, 0.89, 1.25]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[1, 0.86, 0.86]}
        />
        <mesh
          geometry={nodes.Circle024.geometry}
          material={nodes.Circle024.material}
          position={[1, 0.57, -1.03]}
        />
        <mesh
          geometry={nodes.Circle027.geometry}
          material={nodes.Circle027.material}
          position={[1, 0.57, -0.34]}
        />
        <mesh
          geometry={nodes.Circle028.geometry}
          material={nodes.Circle028.material}
          position={[1, 0.57, 0.34]}
        />
        <mesh
          geometry={nodes.Circle029.geometry}
          material={nodes.Circle029.material}
          position={[1, 0.57, 1.03]}
        />
        <mesh
          geometry={nodes.Vert003.geometry}
          material={nodes.Vert003.material}
          position={[-0.75, 0.89, 1.25]}
        />
      </group>
      <mesh
        geometry={nodes.Door.geometry}
        material={materials["Wood.001"]}
        position={[-1.44, 0.3, -5.33]}
        rotation={[0, 0, 0.24]}
      >
        <mesh
          geometry={nodes.Circle038.geometry}
          material={materials["Metal.004"]}
          position={[1.64, 2.02, -4.25]}
        />
      </mesh>
      <mesh
        geometry={nodes.Sandwich001.geometry}
        material={nodes.Sandwich001.material}
        position={[-4.75, 2.27, -7.79]}
        rotation={[-2.18, -0.57, 0.57]}
        scale={0.81}
      >
        <mesh
          geometry={nodes.Plane048_2.geometry}
          material={nodes.Plane048_2.material}
          position={[0, -0.08, 0]}
        />
        <mesh
          geometry={nodes.Plane042.geometry}
          material={nodes.Plane042.material}
          position={[-0.04, -0.01, 0.1]}
          rotation={[0.04, 0.34, -0.01]}
        />
        <mesh
          geometry={nodes.Plane044.geometry}
          material={nodes.Plane044.material}
          position={[-0.04, -0.02, 0.1]}
        />
      </mesh>
      <mesh
        geometry={nodes.VHS002.geometry}
        material={nodes.VHS002.material}
        position={[-4.18, 3.73, -8.4]}
        rotation={[-1.68, -0.42, -1.22]}
        scale={1.22}
      />
      <mesh
        geometry={nodes.VHS003.geometry}
        material={nodes.VHS003.material}
        position={[-4.44, 3.37, -8.62]}
        rotation={[0.51, -0.5, 0.3]}
        scale={1.22}
      />
      <mesh
        geometry={nodes.Plate001.geometry}
        material={materials["black-gloss.002"]}
        position={[-4.73, 1.92, -7.71]}
        rotation={[0.42, 1.36, -0.59]}
        scale={0.81}
      />
      <group position={[-9.15, 4.3, -6.65]} rotation={[1.42, -1.57, 0]}>
        <mesh
          geometry={nodes.Plane020.geometry}
          material={nodes.Plane020.material}
        />
        <mesh
          geometry={nodes.Plane020_1.geometry}
          material={nodes.Plane020_1.material}
        />
      </group>
      <group
        position={[-9.15, 4.28, -6.77]}
        rotation={[Math.PI / 2, -1.57, 0]}
        scale={[0.9, 0.67, 0.9]}
      >
        <mesh
          geometry={nodes.Plane020.geometry}
          material={nodes.Plane020.material}
        />
        <mesh
          geometry={nodes.Plane020_1.geometry}
          material={nodes.Plane020_1.material}
        />
      </group>
      <group
        position={[-9.15, 4.29, -6.89]}
        rotation={[Math.PI / 2, -1.57, 0]}
        scale={[0.96, 1.06, 0.96]}
      >
        <mesh
          geometry={nodes.Plane020.geometry}
          material={nodes.Plane020.material}
        />
        <mesh
          geometry={nodes.Plane020_1.geometry}
          material={nodes.Plane020_1.material}
        />
      </group>
      <group
        position={[-8.69, 4.69, -6.97]}
        rotation={[-Math.PI / 2, -1.11, Math.PI]}
        scale={[1.14, 0.67, 0.9]}
      >
        <mesh
          geometry={nodes.Plane020.geometry}
          material={nodes.Plane020.material}
        />
        <mesh
          geometry={nodes.Plane020_1.geometry}
          material={nodes.Plane020_1.material}
        />
      </group>
      <group
        position={[-9.15, 4.29, -7.09]}
        rotation={[Math.PI / 2, -1.57, 0]}
        scale={[0.96, 1.06, 0.96]}
      >
        <mesh
          geometry={nodes.Plane020.geometry}
          material={nodes.Plane020.material}
        />
        <mesh
          geometry={nodes.Plane020_1.geometry}
          material={nodes.Plane020_1.material}
        />
      </group>
      <group
        position={[-8.62, 4.88, -7.23]}
        rotation={[-Math.PI / 2, -0.94, 3.02]}
      >
        <mesh
          geometry={nodes.Plane020.geometry}
          material={nodes.Plane020.material}
        />
        <mesh
          geometry={nodes.Plane020_1.geometry}
          material={nodes.Plane020_1.material}
        />
      </group>
      <group
        position={[-9.15, 4.28, -7.34]}
        rotation={[Math.PI / 2, -1.57, 0]}
        scale={[0.9, 0.67, 0.9]}
      >
        <mesh
          geometry={nodes.Plane020.geometry}
          material={nodes.Plane020.material}
        />
        <mesh
          geometry={nodes.Plane020_1.geometry}
          material={nodes.Plane020_1.material}
        />
      </group>
      <group
        position={[-9.15, 4.29, -7.46]}
        rotation={[Math.PI / 2, -1.57, 0]}
        scale={[0.96, 1.06, 0.96]}
      >
        <mesh
          geometry={nodes.Plane020.geometry}
          material={nodes.Plane020.material}
        />
        <mesh
          geometry={nodes.Plane020_1.geometry}
          material={nodes.Plane020_1.material}
        />
      </group>
      <group
        position={[-9.15, 4.35, -7.54]}
        rotation={[Math.PI / 2, -1.57, 0]}
        scale={[1.14, 0.67, 0.9]}
      >
        <mesh
          geometry={nodes.Plane020.geometry}
          material={nodes.Plane020.material}
        />
        <mesh
          geometry={nodes.Plane020_1.geometry}
          material={nodes.Plane020_1.material}
        />
      </group>
      <group
        position={[-9.15, 4.29, -7.66]}
        rotation={[Math.PI / 2, -1.57, 0]}
        scale={[0.96, 1.06, 0.96]}
      >
        <mesh
          geometry={nodes.Plane020.geometry}
          material={nodes.Plane020.material}
        />
        <mesh
          geometry={nodes.Plane020_1.geometry}
          material={nodes.Plane020_1.material}
        />
      </group>
      <group
        position={[-9.15, 4.35, -7.84]}
        rotation={[1.93, -1.57, 0]}
        scale={[1.14, 0.67, 0.9]}
      >
        <mesh
          geometry={nodes.Plane020.geometry}
          material={nodes.Plane020.material}
        />
        <mesh
          geometry={nodes.Plane020_1.geometry}
          material={nodes.Plane020_1.material}
        />
      </group>
      <group
        position={[-8.97, 4.09, -8.39]}
        rotation={[-Math.PI, 1.38, 0]}
        scale={[0.96, 1.06, 0.96]}
      >
        <mesh
          geometry={nodes.Plane020.geometry}
          material={nodes.Plane020.material}
        />
        <mesh
          geometry={nodes.Plane020_1.geometry}
          material={nodes.Plane020_1.material}
        />
      </group>
      <group
        position={[-8.95, 4.35, -8.44]}
        rotation={[0.04, 1.17, 2.8]}
        scale={[1.14, 0.67, 0.9]}
      >
        <mesh
          geometry={nodes.Plane020.geometry}
          material={nodes.Plane020.material}
        />
        <mesh
          geometry={nodes.Plane020_1.geometry}
          material={nodes.Plane020_1.material}
        />
      </group>
      <group
        position={[-8.88, 4.7, -8.57]}
        rotation={[-2.35, 1.22, -0.37]}
        scale={[0.96, 1.06, 0.96]}
      >
        <mesh
          geometry={nodes.Plane020.geometry}
          material={nodes.Plane020.material}
        />
        <mesh
          geometry={nodes.Plane020_1.geometry}
          material={nodes.Plane020_1.material}
        />
      </group>
      <mesh
        geometry={nodes.Plane022.geometry}
        material={materials["Material.004"]}
        position={[5.63, 2.89, -7.19]}
        rotation={[-2.4, -1.49, -2.4]}
      />
      <mesh
        geometry={nodes.Plane023.geometry}
        material={materials["Material.003"]}
        position={[6.01, 0.02, -8.46]}
        rotation={[-2.4, -1.49, -2.4]}
      />
      <mesh
        geometry={nodes.Plane024.geometry}
        material={materials.Material}
        position={[6.01, 0.02, -8.46]}
        rotation={[-2.4, -1.49, -2.4]}
      />
      <mesh
        geometry={nodes.Circle004.geometry}
        material={materials["Black.002"]}
        position={[-4.89, 3.97, -9.3]}
        rotation={[0.3, 0.33, 0.24]}
      />
      <mesh
        geometry={nodes.Circle021.geometry}
        material={materials["White.002"]}
        position={[-4.89, 3.97, -9.3]}
        rotation={[0.3, 0.33, 0.24]}
      />
      <mesh
        geometry={nodes.Plane101.geometry}
        material={nodes.Plane101.material}
        position={[-4.86, 3.94, -9.21]}
        rotation={[0.3, 0.33, 1.37]}
      />
      <mesh
        geometry={nodes.Plane102.geometry}
        material={nodes.Plane102.material}
        position={[-4.85, 3.96, -9.19]}
        rotation={[0.3, 0.31, -0.3]}
      />
    </group>
  );
}

useGLTF.preload("/room.gltf");
