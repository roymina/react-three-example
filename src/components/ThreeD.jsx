import {Canvas, useFrame} from "@react-three/fiber";
import {useState} from "react";
import {useRef} from "react";
import {Stage, Gltf, OrbitControls} from "@react-three/drei";

function ThreeD() {
  const gltfRef = useRef();
  // Function to access and manipulate the loaded model
  const handleModelLoaded = (group) => {
    // Access the child object by name (if you named it in your 3D modeling software)
    console.log(group);
    const childObject = group.getObjectByName("A014_1");

    // Now you can manipulate 'childObject' as needed
    if (childObject) {
      childObject.rotation.x += 45; // Example: Rotate the child object
    }
  };
  return (
    <Canvas className='w-full h-full'>
      <OrbitControls />
      <Stage adjustCamera intensity={0.5} shadows='contact' environment='city'>
        <Gltf ref={gltfRef} src='/ivc.gltf' onLoad={handleModelLoaded} />
      </Stage>
    </Canvas>
  );
}

export default ThreeD;
