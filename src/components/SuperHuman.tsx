import { useGLTF, useScroll } from "@react-three/drei";
import React, { useLayoutEffect, useRef } from "react";
import { SuperHumanGLTF } from "../typings";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
type Props = {};

// gsap.registerPlugin(ScrollTrigger);

// from(menu_items.children ,{
//     opacity:0,
//     x:0,
//     duration:1,
//     delay:1.5,
//     stagger:{
//         amount:1
//     }
// })

function Foo() {
  const { camera } = useThree();
  console.log(camera.position);
}

const SuperHuman = (props: Props) => {
  const gltf = useGLTF("/super_human.glb") as SuperHumanGLTF;
  const human = useRef();
  const scroll = useScroll();
  const tl = useRef();

  Foo();

  //   const { positionX, positionY, positionZ } = useControls({
  //     positionX: { value: 2.1, step: 0.1 },
  //     positionY: { value: 0.7, step: 0.1 },
  //     positionZ: { value: 0, step: 0.1 },
  //     // positionX: { value: -.6, step: 0.1 },
  //     // positionY: { value: 0, step: 0.1 },
  //     // positionZ: { value: -1, step: 0.1 },
  //   });

  //   const { rotationX, rotationY, rotationZ } = useControls({
  //     rotationX: { value: -Math.PI / 2, step: Math.PI / 36 },
  //     rotationY: { value: 0, step: Math.PI / 36 },
  //     rotationZ: { value: 0, step: Math.PI / 36 },
  //   });

  //   // UseFrame is optional, just to visualize the effect
  //   useFrame(({ scene }) => {
  //     // Accessing the group object by name and updating its position
  //     const group = scene.getObjectByName("myGroup");
  //     if (group) {
  //       group.position.set(positionX, positionY, positionZ);
  //       group.rotation.set(rotationX, rotationY, rotationZ);
  //     }
  //   });

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });

    tl.current
      .to(human.current.rotation, { y: -1 }, 2)
      .to(human.current.position, { x: 1 }, 2)

      .to(human.current.rotation, { y: 1 }, 6)
      .to(human.current.position, { x: -1 }, 6)

      .to(human.current.rotation, { y: 0 }, 11)
      .to(human.current.rotation, { x: 1 }, 11)
      .to(human.current.position, { x: 0 }, 11)

      .to(human.current.rotation, { y: 0 }, 13)
      .to(human.current.rotation, { x: -1 }, 13)
      .to(human.current.position, { x: 0 }, 13)

      .to(human.current.rotation, { y: 0 }, 16)
      .to(human.current.rotation, { x: 0 }, 16)
      .to(human.current.position, { x: 0 }, 16)

      .to(human.current.rotation, { y: 0 }, 20)
      .to(human.current.rotation, { x: 0 }, 20)
      .to(human.current.position, { x: 0 }, 20);
  }, []);

  return (
    <>
      <group
        ref={human}
        scale={0.01}
        rotation-x={[-Math.PI / 2]}
        position={[2.1, 0.7, 0]}
        name="myGroup"
      >
        {/* <primitive ref={modelRef} object={gltf.scene} /> */}
        <mesh
          geometry={gltf.nodes.Object_4.geometry}
          material={gltf.materials.temp_ldefault1}
        />
        <mesh
          geometry={gltf.nodes.Object_3.geometry}
          material={gltf.materials.blinn1SG}
        />
        <mesh
          geometry={gltf.nodes.Object_2.geometry}
          material={gltf.materials.blinn1SG}
        />
      </group>
    </>
  );
};

export default SuperHuman;
