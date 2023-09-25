import { Canvas } from "@react-three/fiber";
import MyObject from "./MyObject";
import { Environment, OrbitControls } from "@react-three/drei";
import Ground from "./Ground";

function ReflactionComponent() {
  return (
    <>
      <Canvas dpr={[1, 1.5]} camera={{ fov: 40, position: [5, 20, 50] }}>
        <directionalLight />
        <ambientLight />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <group>
          <MyObject />

          <Ground />
        </group>

        <Environment preset="city" />
      </Canvas>
    </>
  );
}

export default ReflactionComponent;
