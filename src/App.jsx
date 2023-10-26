/* eslint-disable react/no-unknown-property */
import {Canvas} from "@react-three/fiber";
import {Suspense, useState} from "react";
import {OrbitControls, Stage, Html, useProgress, useGLTF, Select} from "@react-three/drei";

import {Model} from "./glbjsx/ivc";
function Loader() {
  const {progress} = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

// function GLTFModel() {
//   //直接载入模型，模型可以放在任何地方
//   const result = useGLTF("/ivc.glb");
//   setupScene(result.scene);
//   return <primitive object={result.scene} onClick={handleSceneClick} onPointerOver={handlePointerOver} />;
// }
// //处理场景，写交互
// function setupScene(scene) {
//   var object = scene.getObjectByName("A014_1");
//   console.log(object);
// }
// //处理点击事件
// function handleSceneClick(e) {
//   console.log(e); //查看事件所有参数
//   e.stopPropagation(); //阻止点击穿透
//   console.log(e.object.name);
// }
// //处理悬停事件
// function handlePointerOver(e) {
//   e.stopPropagation(); //阻止点击穿透

// }
function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [info, setInfo] = useState("");

  const handleSceneClick = (e) => {
    console.log(e); //查看事件所有参数
    e.stopPropagation(); //阻止点击穿透
    console.log(e.object.name);
  };
  //处理悬停事件
  const handlePointerOver = (e) => {
    e.stopPropagation(); //阻止点击穿透
    //console.log(e.object.name);
    setInfo(e.object.name);
    setShowInfo(true);
  };

  return (
    <div className='w-screen h-screen flex'>
      <div className='w-1/3 flex flex-col items-center justify-center bg-gray-900 text-white'>
        <div className='text-3xl'>Three.js+fiber+deri example</div>
        <div className='h-1 mt-6 rounded-full w-16 bg-white'></div>
      </div>

      <div className='flex-1'>
        <Canvas>
          <Suspense fallback={<Loader />}>
            <Stage>
              {showInfo && (
                <Html>
                  <div className='bg-gray-800 rounded-md px-4 py-2 text-white'>{info}</div>
                </Html>
              )}

              <OrbitControls />
              <Select border={"rgba(75, 160, 255, 0.1)"} onChange={console.log} filter={(items) => items}>
                <Model onClick={handleSceneClick} onPointerOver={handlePointerOver} onPointerLeave={(e) => setShowInfo(false)} />
              </Select>
            </Stage>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
export default App;
