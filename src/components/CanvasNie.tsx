import { Stats, OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Arena from "./Arena";

const CanvasNie = ({ handleChange }) => {
  const ref = useRef();

  return (
    <Canvas
      camera={{
        position: [0, 0.5, 1.3],
      }}
      shadows
    >
      {/* <axesHelper /> */}
      <OrbitControls ref={ref} target={[0, 0.5, 0]} />
      <ambientLight />
      <Arena controls={ref} handleChange={handleChange} />
    </Canvas>
  );
};

export default CanvasNie;
