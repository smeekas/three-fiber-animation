import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";
import { Scroll, ScrollControls } from "@react-three/drei";

const Parallax = () => {
  return (
    <Canvas>
      <directionalLight />
      <ambientLight />
      <ScrollControls pages={2}>
        <Scroll>
          <Particles />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};
export default Parallax;
