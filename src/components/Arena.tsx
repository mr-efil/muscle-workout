import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { SuperHumanGLTF } from "./../typings";
import { useEffect, useLayoutEffect } from "react";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

interface Position {
  x: number;
  y: number;
  z: number;
}

interface HandleChange {
  position: Position;
  lookAt: Position;
}

interface ArenaProps {
  controls: React.RefObject<OrbitControlsImpl>;
  handleChange: HandleChange;
  setIsLoaded: (value: boolean) => void;
  isLoaded: boolean;
}

export default function Arena({
  controls,
  handleChange,
  setIsLoaded,
}: ArenaProps) {
  const gltf = useGLTF("/super_human.glb") as SuperHumanGLTF;

  useEffect(() => {
    // Check if all necessary nodes and materials are loaded
    if (gltf) {
      setIsLoaded(true);
    }
  }, [gltf, setIsLoaded]);

  const { camera } = useThree();
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    if (controls.current) {
      tl.to(camera.position, {
        x: handleChange.position.x,
        y: handleChange.position.y,
        z: handleChange.position.z,
        duration: 0.5,
        // ease: "power2.out",
      }).to(controls.current.target, {
        x: handleChange.lookAt.x,
        y: handleChange.lookAt.y,
        z: handleChange.lookAt.z,
        duration: 0.5,
        // delay: 0.5,
        // ease: "power2.out",
      });
    }
  }, [handleChange, camera.position, controls, tl]);

  return (
    <group dispose={null} rotation-x={[-Math.PI / 2]}>
      <mesh
        geometry={gltf.nodes.Object_4.geometry}
        material={gltf.materials.temp_ldefault1}
        position={[0, 0, 0]}
        scale={0.01}
        castShadow
        receiveShadow
        material-envMapIntensity={0.4}
        onDoubleClick={({ point }) => {
          if (controls.current) {
            gsap.to(controls.current.target, {
              x: point.x,
              y: point.y,
              z: point.z,
              duration: 1,
              ease: "power2.out",
            });
          }
        }}
      />
      <mesh
        geometry={gltf.nodes.Object_3.geometry}
        material={gltf.materials.blinn1SG}
        position={[0, 0, 0]}
        scale={0.01}
        castShadow
        receiveShadow
        material-envMapIntensity={0.4}
        onDoubleClick={({ point }) => {
          if (controls.current) {
            gsap.to(controls.current.target, {
              x: point.x,
              y: point.y,
              z: point.z,
              duration: 1,
              ease: "power2.out",
            });
          }
        }}
      />
      <mesh
        geometry={gltf.nodes.Object_2.geometry}
        material={gltf.materials.blinn1SG}
        position={[0, 0, 0]}
        scale={0.01}
        castShadow
        receiveShadow
        material-envMapIntensity={0.4}
        onDoubleClick={({ point }) => {
          if (controls.current) {
            gsap.to(controls.current.target, {
              x: point.x,
              y: point.y,
              z: point.z,
              duration: 1,
              ease: "power2.out",
            });
          }
        }}
      />
    </group>
  );
}
