import React, { useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Group } from "three";

import { DumbleGLTF, SuperHumanGLTF } from "../../typings";

type Position = [number, number, number];

function randomizeColor() {
  const r = Math.floor(Math.random() * 256); // Random value between 0 and 255 for red
  const g = Math.floor(Math.random() * 256); // Random value between 0 and 255 for green
  const b = Math.floor(Math.random() * 256); // Random value between 0 and 255 for blue

  return { r: r, g: g, b: b, isColor: true }; // Returning an object with randomized color values
}

function boxCollisionDumble({ box1, box2 }: { box1: any; box2: any }) {
  // console.log(box1, box2);
  const xCollision = box1.right >= box2.left && box1.left <= box2.right;
  const yCollision = box1.top >= box2.bottom && box1.bottom <= box2.top;
  const zCollision = box1.front >= box2.back && box1.back <= box2.front;
  // console.log(xCollision, yCollision, zCollision);
  return xCollision && yCollision && zCollision;
}

function boxCollision({ box1, box2 }: { box1: any; box2: any }) {
  const xCollision = box1.right >= box2.left && box1.left <= box2.right;
  const yCollision =
    box1.bottom + box1.velocity[1] <= box2.top && box1.top >= box2.bottom;
  const zCollision = box1.front >= box2.back && box1.back <= box2.front;
  return xCollision && yCollision && zCollision;
}

function boxCollisionEnemy({ box1, box2 }: { box1: any; box2: any }) {
  // console.log(box1, box2);
  const xCollision = box1.right >= box2.left && box1.left <= box2.right;
  const yCollision =
    Math.abs(box1.bottom) <= Math.abs(box2.top) && box1.top >= box2.bottom;
  const zCollision =
    Math.abs(box1.front) >= box2.back && Math.abs(box1.back) <= box2.front;
  // console.log(xCollision, yCollision, zCollision);
  return xCollision && yCollision && zCollision;
}

const Box = ({
  position,
  dimensions,
  velocity,
  planePosition,
  planeDimensions,
  enemyPosition,
  stopAnimation,
  setStopAnimation,
}: {
  position: [number, number, number];
  dimensions: [number, number, number];
  velocity: [number, number, number];
  planePosition: [number, number, number];
  planeDimensions: [number, number, number];
  stopAnimation: boolean;
  enemyPosition: Position[];
  setStopAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const boxRef = React.useRef<Group | null>(null);

  useFrame(() => {
    if (stopAnimation) {
      return null;
    }
    if (boxRef.current) {
      velocity[1] += -0.005;
      const bottom = boxRef.current.position.y - dimensions[1] / 2;
      const top = boxRef.current.position.y + dimensions[1] / 2;
      const right = boxRef.current.position.x + 1.5 + dimensions[0] / 4;
      const left = boxRef.current.position.x + 1.5 - dimensions[0] / 4;
      const front = boxRef.current.position.z + dimensions[2] / 2;
      const back = boxRef.current.position.z - dimensions[2] / 2;

      const box1 = {
        bottom,
        top,
        right,
        left,
        front,
        back,
        velocity,
      };
      const box2 = {
        bottom: planePosition[1] + 0.3 - planeDimensions[1] / 2,
        top: planePosition[1] + 0.3 + planeDimensions[1] / 2,
        right: planePosition[0] + 2 + planeDimensions[0] / 2,
        left: planePosition[0] + 2 - planeDimensions[0] / 2,
        front: planePosition[2] + planeDimensions[2] / 2,
        back: planePosition[2] - planeDimensions[2] / 2,
      };

      enemyPosition.forEach((enemy) => {
        // Calculate the bounding box for the current enemy
        const box3 = {
          bottom: enemy[1] + 0.3 - dimensions[1] / 2,
          top: enemy[1] + 0.3 + dimensions[1] / 2,
          right: enemy[0] - 11.6 + dimensions[0] / 2,
          left: enemy[0] - 11.6 - dimensions[0] / 2,
          front: enemy[2] - 1.4 + dimensions[2] / 2,
          back: enemy[2] + 1.4 - dimensions[2] / 2,
        };

        if (boxCollisionDumble({ box1: box1, box2: box3 })) {
          setStopAnimation(true);
        }
      });

      if (boxCollision({ box1, box2 })) {
        // 1.75 comes from plane is -2 and its thickness is 0.5
        velocity[1] *= 0.8; // add friction
        velocity[1] = -velocity[1];
        boxRef.current.position.x += velocity[0];
        boxRef.current.position.z += velocity[2];
      } else {
        boxRef.current.position.y += velocity[1];
        boxRef.current.position.x += velocity[0];
        boxRef.current.position.z += velocity[2];
      }

      if (boxRef.current.position.y < -1) {
        setStopAnimation(true);
      }
    }
  });
  const { nodes, materials } = useGLTF(
    "/super_human-transformed.glb"
  ) as SuperHumanGLTF;

  return (
    <group
      ref={boxRef}
      dispose={null}
      scale={0.01}
      rotation={[0, Math.PI, 0]}
      position={position}
    >
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.blinn1SG}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow={true}
      />
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.temp_ldefault1}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow={true}
      />
    </group>
  );
};

const EnemyBox = ({
  position,
  dimensions,
  velocity,
  planePosition,
  planeDimensions,
  stopAnimation,
  setEnemyPosition,
  index,
  enemyPosition,
}: {
  position: [number, number, number];
  dimensions: [number, number, number];
  velocity: [number, number, number];
  planePosition: [number, number, number];
  planeDimensions: [number, number, number];
  enemyPosition: Position[];
  stopAnimation: boolean;
  index: number;
  setEnemyPosition: React.Dispatch<React.SetStateAction<Position[]>>;
}) => {
  const boxRef2 = React.useRef<Group | null>(null);
  useFrame(() => {
    if (stopAnimation) {
      return null;
    }
    if (boxRef2.current) {
      //   velocity[1] += -0.0009;
      //   boxRef2.current.rotateX(0.001);
      const bottom = boxRef2.current.position.y - 0.5 - dimensions[1] / 2;
      const top = boxRef2.current.position.y - 0.5 + dimensions[1] / 2;
      const right = boxRef2.current.position.x - 13 + dimensions[0] / 2;
      const left = boxRef2.current.position.x - 13 - dimensions[0] / 2;
      const front = boxRef2.current.position.z + 1 + dimensions[2] / 2;
      const back = boxRef2.current.position.z + 1 - dimensions[2] / 2;
      //   console.log(boxRef2.current.position);

      //   if (boxRef2.current.position.z > 10) {
      //     // Get a copy of the current enemyPosition array
      //     const updatedEnemyPosition = [...enemyPosition];

      //     updatedEnemyPosition[index] = [0, 0, 0];
      //     setEnemyPosition(updatedEnemyPosition);
      //   }
      const box1 = {
        bottom,
        top,
        right,
        left,
        front,
        back,
        velocity,
      };
      const box2 = {
        bottom: planePosition[1] - planeDimensions[1] / 2,
        top: planePosition[1] + planeDimensions[1] / 2,
        right: planePosition[0] + planeDimensions[0] / 2,
        left: planePosition[0] - planeDimensions[0] / 2,
        front: planePosition[2] + planeDimensions[2] / 2,
        back: planePosition[2] - planeDimensions[2] / 2,
      };

      if (boxCollisionEnemy({ box1, box2 })) {
        const newEnemy = [...enemyPosition];
        newEnemy[index][0] = boxRef2.current.position.x;
        newEnemy[index][1] = boxRef2.current.position.y;
        newEnemy[index][2] = boxRef2.current.position.z;
        setEnemyPosition(newEnemy);
        velocity[1] *= 0.8; // add friction
        velocity[1] = -velocity[1];
        boxRef2.current.position.x += velocity[0];
        boxRef2.current.position.z += velocity[2];
      } else {
        boxRef2.current.position.y += -0.1;
        boxRef2.current.position.x += velocity[0];
        boxRef2.current.position.z += velocity[2];
      }
    }
  });
  const gltf = useGLTF("/dumble.glb") as DumbleGLTF;
  gltf.materials.wire_008008136.color = randomizeColor();
  return (
    <group scale={0.003} position={position} dispose={null} ref={boxRef2}>
      {/* <primitive ref={modelRef} object={gltf.scene} /> */}
      <mesh
        geometry={gltf.nodes.Object_2.geometry}
        material={gltf.materials.wire_008008136}
        castShadow={true}
      />
      <mesh
        geometry={gltf.nodes.Object_3.geometry}
        material={gltf.materials.temp_ldefault1}
        castShadow={true}
      />
      <mesh
        geometry={gltf.nodes.Dumbleobjcleanermaterialmergergles.geometry}
        material={gltf.materials.temp_ldefault1}
        castShadow={true}
      />
    </group>
  );
};
const Plane = ({
  position,
  dimensions,
}: {
  position: [number, number, number];
  dimensions: [number, number, number];
}) => {
  // This hook rotates the box in the scene

  return (
    <mesh position={position} receiveShadow={true}>
      <boxGeometry args={dimensions} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
};

const CanvasBox = ({
  setGameOver,
  gameOver,
}: {
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  gameOver: boolean;
}) => {
  const [velocity, setVelocity] = useState<[number, number, number]>([0, 0, 0]);
  const [enemyPosition, setEnemyPosition] = useState<Position[]>([
    [14, -0.2, -6],
  ]);
  const [stopAnimation, setStopAnimation] = useState(false);
  const planeDimensions: [number, number, number] = [6, 0.5, 12];
  const [humanPosition, setHumanPosition] = useState<Position>([0, 0, 0]);

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.code) {
      case "KeyA":
        setVelocity((prevVelocity) => [
          prevVelocity[0] - 0.1,
          prevVelocity[1],
          prevVelocity[2],
        ]);
        break;
      case "KeyD":
        setVelocity((prevVelocity) => [
          prevVelocity[0] + 0.1,
          prevVelocity[1],
          prevVelocity[2],
        ]);
        break;
      case "KeyS":
        setVelocity((prevVelocity) => [
          prevVelocity[0],
          prevVelocity[1],
          prevVelocity[2] + 0.1,
        ]);
        break;
      case "KeyW":
        setVelocity((prevVelocity) => [
          prevVelocity[0],
          prevVelocity[1],
          prevVelocity[2] - 0.1,
        ]);
        break;
      default:
        break;
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    switch (event.code) {
      case "KeyA":
        setVelocity((prevVelocity) => [
          prevVelocity[0] + 0.1,
          prevVelocity[1],
          prevVelocity[2],
        ]);
        break;
      case "KeyD":
        setVelocity((prevVelocity) => [
          prevVelocity[0] - 0.1,
          prevVelocity[1],
          prevVelocity[2],
        ]);
        break;
      case "KeyS":
        setVelocity((prevVelocity) => [
          prevVelocity[0],
          prevVelocity[1],
          prevVelocity[2] - 0.1,
        ]);
        break;
      case "KeyW":
        setVelocity((prevVelocity) => [
          prevVelocity[0],
          prevVelocity[1],
          prevVelocity[2] + 0.1,
        ]);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (stopAnimation) {
      setGameOver(true);
    }
  }, [stopAnimation]);

  useEffect(() => {
    if (stopAnimation && !gameOver) {
      console.log("dcscs",humanPosition)
      setStopAnimation(false);
      setEnemyPosition([]);
      setVelocity([0, 0, 0]);
      setHumanPosition([0, 0, 0]);
    }
  }, [gameOver]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random position for the new enemy
      const newPosition = [
        Math.random() * (16 - 11) + 11,
        -0.2,
        -6,
      ] as Position;

      setEnemyPosition((prevEnemyPositions) => [
        ...prevEnemyPositions,
        newPosition,
      ]);
    }, 1500);

    let timer: any;
    if (stopAnimation) {
      clearInterval(interval);
    } else {
      timer = setTimeout(() => {
        setEnemyPosition([]);
        clearInterval(interval);
        const newInterval = setInterval(() => {
          const newPosition = [Math.random() * 6 + 11, -0.2, -6] as Position;

          setEnemyPosition((prevEnemyPositions) => [
            ...prevEnemyPositions,
            newPosition,
          ]);
        }, 1500);
        return () => clearInterval(newInterval);
      }, 30000);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [stopAnimation]);


  return (
    <Canvas
      camera={{
        position: [4.61, 2.74, 8],
      }}
      shadows={true}
    >
      {/* <axesHelper args={[5]} /> */}
      <ambientLight intensity={0.5} position={[0, 0, 5]} />
      {/* <pointLight position={[10, 10, 10]} castShadow={true}/> */}
      <directionalLight position={[0, 3, 1]} castShadow={true} />
      {!gameOver && <Box
        position={humanPosition}
        dimensions={[1.5, 1.5, 1.5]}
        velocity={velocity}
        planePosition={[0, -2, 0]}
        planeDimensions={planeDimensions}
        enemyPosition={enemyPosition}
        stopAnimation={stopAnimation}
        setStopAnimation={setStopAnimation}
      />}
      {enemyPosition.map((enemy, index) => (
        <EnemyBox
          key={index}
          position={enemy}
          dimensions={[1.5, 1.5, 1.5]}
          velocity={
            enemy[0] === 0 && enemy[1] === 0 && enemy[2] === 0
              ? [0, 0, 0]
              : [0, 0, 0.03]
          }
          planePosition={[0, -2, 0]}
          planeDimensions={planeDimensions}
          setEnemyPosition={setEnemyPosition}
          stopAnimation={stopAnimation}
          index={index}
          enemyPosition={enemyPosition}
        />
      ))}

      <Plane position={[0, -2, 0]} dimensions={planeDimensions} />
      <OrbitControls />
    </Canvas>
  );
};

export default CanvasBox;
