import { Canvas } from "@react-three/fiber";
import "./parallax.css";
import Parallax from "./Parallax";
const ParallaxContainer = () => {
  return (
    <Canvas>
      <directionalLight />
      <ambientLight />
      <Parallax />
    </Canvas>
  );
};
export default ParallaxContainer;
