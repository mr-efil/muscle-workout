import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import Arena from "./Arena";

import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

type SceneConfig = {
  position: { x: number; y: number; z: number };
  lookAt: { x: number; y: number; z: number };
  light: { x: number; y: number; z: number };
  embedID: string[];
};

const CanvasNie = ({
  handleChange,
  setIsLoaded,
  isLoaded,
}: {
  handleChange: SceneConfig;
  setIsLoaded: (value: boolean) => void;
  isLoaded: boolean;
}) => {
  const ref = useRef<OrbitControlsImpl>(null);
  return (
    <Canvas
      camera={{
        position: [0, 0.5, 1.3],
      }}
      shadows
    >
      <OrbitControls ref={ref} target={[0, 0.5, 0]} />
      <directionalLight
        color={"white"}
        castShadow
        intensity={60}
        position={[
          handleChange.light.x,
          handleChange.light.y,
          handleChange.light.z,
        ]}
      />
      <ambientLight />
      <Arena
        controls={ref}
        handleChange={handleChange}
        setIsLoaded={setIsLoaded}
        isLoaded={isLoaded}
      />
    </Canvas>
  );
};

export default CanvasNie;
