import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";
import { CameraShake } from "@react-three/drei";

const MovingSpace = () => {
  return (
    <Canvas>
      <directionalLight />
      <ambientLight />
      <Particles />
      <CameraShake
        yawFrequency={0.2}
        pitchFrequency={0.2}
        rollFrequency={0.2}
      />
      <color attach="background" args={[0, 0, 0]} />
    </Canvas>
  );
};
export default MovingSpace;
