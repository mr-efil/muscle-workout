import {  useGLTF } from "@react-three/drei";
import  { useEffect, useLayoutEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SuperHumanGLTF } from "../../typings";


gsap.registerPlugin(ScrollTrigger);

const SuperHuman = ({
  region,
}: {
  region: string;
  setIsLoaded: (value: boolean) => void;
  isLoaded: boolean;
}) => {
  const gltf = useGLTF("/super_human.glb") as SuperHumanGLTF;
  const human = useRef(null!);
  const tl = gsap.timeline();
  const { scene, camera } = useThree();

  useEffect(() => {
    if (region === "shoulder") {
      tl.to(camera.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
      })
        .to(scene.position, {
          x: 0,
          y: -0.3,
          z: -2.1,
          duration: 1,
        })
        .to(scene.rotation, {
          x: 0,
          y: 0,
          z: 0,
          duration: 1,
        });
    } else if (region === "knee") {
      tl.to(camera.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.5,
      })
        .to(scene.position, {
          x: 0,
          y: -0.35,
          z: -0.43,
          duration: 0.5,
        })
        .to(scene.rotation, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.5,
        });
    } else if (region === "origin") {
      tl.to(camera.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
      })
        .to(scene.position, {
          x: 0,
          y: -0.3,
          z: -2.1,
          duration: 1,
        })
        .to(scene.rotation, {
          x: 0,
          y: 0,
          z: 0,
          duration: 1,
        });
    }
  }, [region]);

  useLayoutEffect(() => {
    new ScrollTrigger({});
    // component About.tsx
    tl.to(camera.position, {
      x: 0,
      y: 0,
      z: 0,
    })
      .to(scene.position, {
        x: 0,
        y: -0.5,
        z: -2.2,
      })

      .to(scene.rotation, {
        x: 0.35,
        y: 0,
        z: 0,
      })
      .to(camera.position, {
        x: 0,
        y: 0,
        z: 0,

        scrollTrigger: {
          trigger: ".second-section",
          start: "top 30%",
          end: "bottom bottom",
          scrub: true,
          immediateRender: false,
          // markers: true,
          //  toggleActions: "play reverse play reverse",
        },
      })

      .to(scene.position, {
        x: 0,
        y: -0.3,
        z: -2.1,

        scrollTrigger: {
          trigger: ".second-section",
          start: "top 30%",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
          //  toggleActions: "play reverse play reverse",
        },
      })
      .to(scene.rotation, {
        x: 0,
        y: 0,
        z: 0,

        scrollTrigger: {
          trigger: ".second-section",
          start: "top 30%",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
          //  toggleActions: "play reverse play reverse",
        },
      })
      .to(camera.position, {
        x: 0,
        y: 0,
        z: 2.26,

        delay: 0.5,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
          //  toggleActions: "play reverse play reverse",
        },
      })
      .to(scene.position, {
        x: 0,
        y: -0.2,
        z: 1.53,

        delay: 0.5,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
          //  toggleActions: "play reverse play reverse",
        },
      })
      .to(scene.rotation, {
        x: 0,
        y: 0,
        z: 0,

        delay: 0.5,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
          //  toggleActions: "play reverse play reverse",
        },
      })
      .to(camera.position, {
        x: 0,
        y: 0,
        z: 0,

        scrollTrigger: {
          trigger: ".fourth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
          //  toggleActions: "play reverse play reverse",
        },
      })
      .to(scene.position, {
        x: 0,
        y: 0,
        z: -2.14,

        scrollTrigger: {
          trigger: ".fourth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
          //  toggleActions: "play reverse play reverse",
        },
      })
      .to(scene.rotation, {
        x: 0.29,
        y: 3.17,
        z: 0,

        scrollTrigger: {
          trigger: ".fourth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
          //  toggleActions: "play reverse play reverse",
        },
      })
      .to(camera.position, {
        x: 0,
        y: 0,
        z: 0,

        scrollTrigger: {
          trigger: ".fifth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
          //  toggleActions: "play reverse play reverse",
        },
      })
      .to(scene.position, {
        x: 0,
        y: -0.09,
        z: -2.1,

        scrollTrigger: {
          trigger: ".fifth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
          //  toggleActions: "play reverse play reverse",
        },
      })
      .to(scene.rotation, {
        x: 0,
        y: 1.76,
        z: 0.35,

        scrollTrigger: {
          trigger: ".fifth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
          //  toggleActions: "play reverse play reverse",
        },
      });
  }, []);

  
  // useEffect(() => {
  //   if (gltf) {
  //     setIsLoaded(true);
  //   }
  // }, [gltf,setIsLoaded]);

  return (
    <>
      <group
        ref={human}
        scale={0.01}
        rotation-x={[-Math.PI / 2]}
        position={[0, 0, 0]}
        name="myGroup"
      >
        <mesh
          position={[0, -1.03, 0]}
          castShadow
          receiveShadow
          geometry={gltf.nodes.Object_4.geometry}
          material={gltf.materials.temp_ldefault1}
        />
        <mesh
          position={[0, -1.03, 0]}
          castShadow
          receiveShadow
          geometry={gltf.nodes.Object_3.geometry}
          material={gltf.materials.blinn1SG}
        />
        <mesh
          position={[0, -1.03, 0]}
          castShadow
          receiveShadow
          geometry={gltf.nodes.Object_2.geometry}
          material={gltf.materials.blinn1SG}
        />
      </group>
    </>
  );
};

export default SuperHuman;
