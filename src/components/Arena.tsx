import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls, button, folder } from "leva";
import gsap from "gsap";
import annotations from "./../annotations.json";
import { SuperHumanGLTF } from "./../typings";
import { useEffect, useLayoutEffect } from "react";

export default function Arena({ controls, handleChange }) {
  const gltf = useGLTF("/super_human.glb") as SuperHumanGLTF;

  const { camera, scene } = useThree();
  const tl = gsap.timeline();

  useLayoutEffect(() => {
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
  }, [handleChange, camera.position, controls, tl]);

  //   const {
  //     TargetX,
  //     TargetY,
  //     TargetZ,
  //     cameraPositionX,
  //     cameraPositionY,
  //     cameraPositionZ,
  //     // sceneRotationX,
  //     // sceneRotationY,
  //     // sceneRotationZ,
  //     // objectPositionX,
  //     // objectPositionY,
  //     // objectPositionZ,
  //     // objectRotationX,
  //     // objectRotationY,
  //     // objectRotationZ,
  //   } = useControls("Box", {
  //     Target: folder({
  //       TargetX: { value: 0, min: -10, max: 10, step: 0.01 },
  //       TargetY: { value: 0, min: -10, max: 10, step: 0.01 },
  //       TargetZ: { value: 0, min: -10, max: 10, step: 0.01 },
  //     }),
  //     cameraPosition: folder({
  //       cameraPositionX: {
  //         value: 3.457169,
  //         min: -10,
  //         max: 10,
  //         step: 0.01,
  //       },
  //       cameraPositionY: {
  //         value: 1.63741441,
  //         min: -10,
  //         max: 10,
  //         step: 0.01,
  //       },
  //       cameraPositionZ: {
  //         value: 0.987814,
  //         min: -10,
  //         max: 10,
  //         step: 0.01,
  //       },
  //     }),
  //     //     scenePosition: folder({
  //     //       scenePositionX: { value: 0, min: -5, max: Math.PI * 2, step: 0.01 },
  //     //       scenePositionY: { value: -0.3, min: -5, max: Math.PI * 2, step: 0.01 },
  //     //       scenePositionZ: { value: -2.1, min: -5, max: Math.PI * 2, step: 0.01 },
  //     //     }),
  //     //     sceneRotation: folder({
  //     //       sceneRotationX: {
  //     //         value: 0,
  //     //         min: -Math.PI * 2,
  //     //         max: Math.PI * 2,
  //     //         step: 0.01,
  //     //       },
  //     //       sceneRotationY: {
  //     //         value: 0,
  //     //         min: -Math.PI * 2,
  //     //         max: Math.PI * 2,
  //     //         step: 0.01,
  //     //       },
  //     //       sceneRotationZ: {
  //     //         value: 0,
  //     //         min: -Math.PI * 2,
  //     //         max: Math.PI * 2,
  //     //         step: 0.01,
  //     //       },
  //     //     }),

  //     //     objectPosition: folder({
  //     //       objectPositionX: { value: 2.1, min: -5, max: Math.PI * 2, step: 0.01 },
  //     //       objectPositionY: { value: 0.7, min: -5, max: Math.PI * 2, step: 0.01 },
  //     //       objectPositionZ: { value: 0, min: -5, max: Math.PI * 2, step: 0.01 },
  //     //     }),
  //     //     objectRotation: folder({
  //     //       objectRotationX: {
  //     //         value: -Math.PI / 2,
  //     //         min: -Math.PI * 2,
  //     //         max: Math.PI * 2,
  //     //         step: 0.01,
  //     //       },
  //     //       objectRotationY: {
  //     //         value: 0,
  //     //         min: -Math.PI * 2,
  //     //         max: Math.PI * 2,
  //     //         step: 0.01,
  //     //       },
  //     //       objectRotationZ: {
  //     //         value: 0,
  //     //         min: -Math.PI * 2,
  //     //         max: Math.PI * 2,
  //     //         step: 0.01,
  //     //       },
  //     //     }),
  //   });

  //   useFrame(() => {
  //     controls.current.target.x = TargetX;
  //     controls.current.target.y = TargetY;
  //     controls.current.target.z = TargetZ;

  //     camera.position.x = cameraPositionX;
  //     camera.position.y = cameraPositionY;
  //     camera.position.z = cameraPositionZ;

  //     // camera.position.x = scenePositionX;
  //     // camera.position.y = scenePositionY;
  //     // camera.position.z = scenePositionZ;
  //     // scene.rotation.x = sceneRotationX;
  //     // scene.rotation.y = sceneRotationY;
  //     // scene.rotation.z = sceneRotationZ;

  //     // human.current.position.x = objectPositionX;
  //     // human.current.position.y = objectPositionY;
  //     // human.current.position.z = objectPositionZ;

  //     // human.current.rotation.x = objectRotationX;
  //     // human.current.rotation.y = objectRotationY;
  //     // human.current.rotation.z = objectRotationZ;
  //   });

  // useControls("Camera", () => {
  //   console.log("creating buttons");

  //   const _buttons = annotations.reduce(
  //     (acc, { title, position, lookAt }) =>
  //       Object.assign(acc, {
  //         [title]: button(() => {
  //           tl.to(camera.position, {
  //             x: position.x,
  //             y: position.y,
  //             z: position.z,
  //             duration: 0.5,
  //             // ease: "power2.out",
  //           }).to(controls.current.target, {
  //             x: lookAt.x,
  //             y: lookAt.y,
  //             z: lookAt.z,
  //             duration: 0.5,
  //             // delay: 0.5,
  //             // ease: "power2.out",
  //           });

  //           // gsap.to(camera.position, {
  //           //   x: cameraPosition.x,
  //           //   y: cameraPosition.y,
  //           //   z: cameraPosition.z,
  //           //   duration: 0.5,
  //           //   //   ease: "circ",
  //           // });

  //           // gsap.to(scene.position, {
  //           //   x: scenePosition.x,
  //           //   y: scenePosition.y,
  //           //   z: scenePosition.z,
  //           //   duration: 0.5,
  //           //   //   ease: "circ",
  //           // });

  //           // gsap.to(scene.rotation, {
  //           //   x: sceneRotation.x,
  //           //   y: sceneRotation.y,
  //           //   z: sceneRotation.z,
  //           //   duration: 0.5,
  //           //   //   ease: "circ",
  //           // });
  //         }),
  //       }),
  //     {}
  //   );
  //   return _buttons;
  // });

  // useFrame(() => {
  //   gsap.updateRoot(1);
  // });

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
          gsap.to(controls.current.target, {
            x: point.x,
            y: point.y,
            z: point.z,
            duration: 1,
            ease: "power2.out",
          });
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
          gsap.to(controls.current.target, {
            x: point.x,
            y: point.y,
            z: point.z,
            duration: 1,
            ease: "power2.out",
          });
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
          gsap.to(controls.current.target, {
            x: point.x,
            y: point.y,
            z: point.z,
            duration: 1,
            ease: "power2.out",
          });
        }}
      />
    </group>
  );
}
