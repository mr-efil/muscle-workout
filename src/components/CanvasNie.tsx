import { Stats, OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Arena from "./Arena";
import { useControls } from "leva";

type SceneConfig = {
  position: { x: number; y: number; z: number };
  lookAt: { x: number; y: number; z: number };
  light: { x: number; y: number; z: number };
  embedID: string[];
};

const CanvasNie = ({ handleChange }: { handleChange: SceneConfig }) => {
  const ref = useRef();
  const {
    directionalLightPositionX,
    directionalLightPositionY,
    directionalLightPositionZ,
  } = useControls("Directional Light", {
    directionalLightPositionX: {
      value: 0,
      min: -10,
      max: 10,
      step: 0.1,
    },
    directionalLightPositionY: {
      value: 10,
      min: -10,
      max: 20,
      step: 0.1,
    },
    directionalLightPositionZ: {
      value: 0,
      min: -10,
      max: 10,
      step: 0.1,
    },
  });

  return (
    <Canvas
      camera={{
        position: [0, 0.5, 1.3],
      }}
      shadows
    >
      {/* <axesHelper /> */}
      <OrbitControls ref={ref} target={[0, 0.5, 0]} />
      {/* <color attach="background" args={["#202020"]} /> */}
      <directionalLight
        color={"white"}
        castShadow
        intensity={60}
        // position={[
        //   directionalLightPositionX,
        //   directionalLightPositionY,
        //   directionalLightPositionZ,
        // ]}
        position={[
          handleChange.light.x,
          handleChange.light.y,
          handleChange.light.z,
        ]}
      />
      <ambientLight />
      <Arena controls={ref} handleChange={handleChange} />
    </Canvas>
  );
};

export default CanvasNie;
