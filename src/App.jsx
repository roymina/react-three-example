import Left from "./components/Left";
import ThreeD from "./components/ThreeD";

function App() {
  return (
    <div className='w-screen h-screen flex'>
      <div className='w-1/3 flex flex-col items-center justify-center bg-gray-900 text-white'>
        <Left />
      </div>

      <div className='flex-1'>
        <ThreeD />
      </div>
    </div>
  );
}
export default App;
