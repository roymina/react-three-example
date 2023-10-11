import {Canvas, useLoader} from "@react-three/fiber";
import {OrbitControls, Stage} from "@react-three/drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {Html, useProgress} from "@react-three/drei";
import {Suspense} from "react";
function Loader() {
  const {progress} = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function Model() {
  const {nodes, materials} = useLoader(GLTFLoader, "/ivc.gltf");
  console.log(materials);
  return (
    <group dispose={null}>
      <mesh geometry={nodes.A014_1.geometry} />
    </group>
  );
}

export default function Learn() {
  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <OrbitControls />
        <Stage>
          <Model />
        </Stage>
      </Suspense>
    </Canvas>
  );
}
