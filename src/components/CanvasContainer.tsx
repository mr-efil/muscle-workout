import { Canvas, useFrame } from "@react-three/fiber";
import React, { useLayoutEffect, useRef } from "react";
import SuperHuman from "./SuperHuman";
import Human from "./Human";
import {
  Backdrop,
  Environment,
  Float,
  OrbitControls,
  Ring,
  Scroll,
  ScrollControls,
  Sparkles,
  useScroll,
} from "@react-three/drei";
type Props = {};

const CanvasContainer = (props: Props) => {
  const robot = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2 },
    });

    tl.current.from(robot.current, {
      opacity: 0,
      x: 0,
      duration: 1,
      delay: 1.5,
      stagger: {
        amount: 1,
      },
    });
  }, []);

  return (
    <Canvas
      camera={{
        position: [3.457169022316818, 1.6374144186009632, 0.9878146190230731],
        // position: [-2.34761193821242, 0.45654240180076505, 0.5884486560855917],
      }}
      
    >
      <ambientLight />
      {/* <Human/> */}
      {/* <OrbitControls /> */}
      <color attach="background" args={["#333333"]} />
      <ambientLight intensity={0.2} />
      <spotLight
        position={[0, 25, 0]}
        angle={1.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />
      <Environment preset="warehouse" />

      <ScrollControls pages={6} damping={0.1}>
        <SuperHuman />
        <Sparkles size={2} color={"#fff"} scale={[10, 10, 10]}></Sparkles>
        <Backdrop
          receiveShadow
          floor={20.5} // Stretches the floor segment, 0.25 by default
          segments={100} // Mesh-resolution, 20 by default
          scale={[50, 30, 10]}
          position={[4, -10, 0]}
        >
          <meshStandardMaterial color="#0a1a1f" />
        </Backdrop>

        <Float
          speed={4} // Animation speed, defaults to 1
          rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Ring
            scale={3.5}
            position-z={-2.5}
            position-y={-1}
            args={[0, 0.95, 60]}
            receiveShadow
          >
            <meshStandardMaterial color="#2a3a3f" />
          </Ring>
        </Float>
        <Scroll html style={{ width: "100%" }}>
          <div className="text-red-600 font-bold text-xl" ref={robot}>
            dadada
          </div>
          <h1
            className="title"
            style={{
              color: "#cdcbca",
              position: "absolute",
              top: `65vh`,
              left: "50%",
              fontSize: "13em",
              transform: `translate(-50%,-50%)`,
            }}
          >
            PHANTOM
          </h1>

          <div className="row" style={{ position: "absolute", top: `132vh` }}>
            <h2>Be a Man of the Future.</h2>
            <p style={{ maxWidth: "400px" }}>
              Featuring a sleek, metallic design inspired by advanced
              technology, this aftershave bottle is as stylish as it is
              functional. But it's not just a pretty face - inside, you'll find
              a nourishing and protective aftershave formula that will leave
              your skin feeling refreshed and hydrated.
            </p>
            <button>Read more</button>
          </div>

          <div className="row" style={{ position: "absolute", top: `230vh` }}>
            <div
              className="col"
              style={{ position: "absolute", right: `40px`, width: "540px" }}
            >
              <h2 style={{ maxWidth: "440px" }}>Tech-Savvy Side</h2>
              <p style={{ maxWidth: "440px" }}>
                Featuring a sleek, metallic design inspired by advanced
                technology, this aftershave bottle is as stylish as it is
                functional. But it's not just a pretty face - inside, you'll
                find a nourishing and protective aftershave formula that will
                leave your skin feeling refreshed and hydrated.
              </p>
              <button>Read more</button>
            </div>
          </div>

          <h2
            style={{
              position: "absolute",
              top: "350vh",
              left: "50%",
              transform: `translate(-50%,-50%)`,
            }}
          >
            Cutting-Edge of Grooming
          </h2>

          <button
            style={{
              position: "absolute",
              top: `590vh`,
              left: "50%",
              transform: `translate(-50%,-50%)`,
            }}
          >
            Buy now
          </button>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default CanvasContainer;
