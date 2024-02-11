import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { SuperHumanGLTF } from "../typings";

export default function Human(props) {
  const { nodes, materials } = useGLTF(
    "/super_human-transformed.glb"
  ) as SuperHumanGLTF;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.blinn1SG}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.temp_ldefault1}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/super_human-transformed.glb");
