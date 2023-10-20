import { Canvas } from "@react-three/fiber";
import TweenBox from "./TweenBox";
import { Environment } from "@react-three/drei";

function Tweening() {
  return (
    <>
      <Canvas>
        <TweenBox />
        <ambientLight intensity={0.1} />
        <Environment preset="sunset" background />

        <directionalLight position={[1, 0, 5]} />
      </Canvas>
    </>
  );
}

export default Tweening;
