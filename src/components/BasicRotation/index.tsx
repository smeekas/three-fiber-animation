import { Canvas } from "@react-three/fiber";
import MyBox from "./MyBox";
function BasicRotation() {
  return (
    <>
      <Canvas>
        <MyBox />
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]}/>
        
      </Canvas>
    </>
  );
}

export default BasicRotation;
