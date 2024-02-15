import { useGLTF } from "@react-three/drei";
import { DumbleGLTF } from "../../typings";

export default function Dumble() {
  const gltf = useGLTF("/dumble.glb") as DumbleGLTF;
  return (
    <>
      <group
        scale={0.01}
        position={[0, 0, 0]}
        name="myGroup"
      >
        {/* <primitive ref={modelRef} object={gltf.scene} /> */}
        <mesh
          geometry={gltf.nodes.Object_2.geometry}
          material={gltf.materials.wire_008008136}
        />
        <mesh
          geometry={gltf.nodes.Object_3.geometry}
          material={gltf.materials.temp_ldefault1}
        />
        <mesh
          geometry={gltf.nodes.Dumbleobjcleanermaterialmergergles.geometry}
          material={gltf.materials.temp_ldefault1}
        />
      </group>
    </>
  );
}
