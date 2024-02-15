import { Canvas } from "@react-three/fiber";
import SuperHuman from "./SuperHuman";
import { useControls } from "leva";

const CanvasContainer = ({
  region,
  setIsLoaded,
  isLoaded,
}: {
  region: string;
  setIsLoaded: (value: boolean) => void;
  isLoaded: boolean;
}) => {
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
        position: [0, 0, 0],
        // position: [-2.34761193821242, 0.45654240180076505, 0.5884486560855917],
      }}
      scene={{
        position: [0, -0.2, -2.1],
        rotation: [0, 0, 0],
      }}
    >
      {/* <axesHelper args={[10]} /> */}
      <color attach="background" args={["#202020"]} />
      <SuperHuman
        region={region}
        setIsLoaded={setIsLoaded}
        isLoaded={isLoaded}
      />
      <directionalLight
        color={"white"}
        castShadow
        intensity={60}
        position={[
          directionalLightPositionX,
          directionalLightPositionY,
          directionalLightPositionZ,
        ]}
      />
      <spotLight
        color={"#f7f6f1"}
        castShadow
        intensity={60}
        position={[
          directionalLightPositionX,
          directionalLightPositionY,
          directionalLightPositionZ,
        ]}
      />
      {/* <Environment preset="city" /> */}
    </Canvas>
  );
};

export default CanvasContainer;
