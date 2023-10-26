import Left from "./components/Left";
import {Model} from "./glbjsx/ivc";
import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import {OrbitControls, Stage, Html, useProgress} from "@react-three/drei";

function Loader() {
  const {progress} = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function App() {
  return (
    <div className='w-screen h-screen flex'>
      <div className='w-1/3 flex flex-col items-center justify-center bg-gray-900 text-white'>
        <Left />
      </div>

      <div className='flex-1'>
        <Canvas>
          <Suspense fallback={<Loader />}>
            <Stage>
              <OrbitControls />
              <Model />
            </Stage>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
export default App;
