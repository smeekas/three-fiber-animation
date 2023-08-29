import { Canvas } from "@react-three/fiber";
import React from "react";
import MyObject from "./MyObject";
import { CameraShake, Environment, OrbitControls } from "@react-three/drei";
import Ground from "./Ground";
import MyBox from "../BasicRotation/MyBox";

function ReflactionComponent() {
  return (
    <>
      <Canvas dpr={[1, 1.5]} camera={{ fov: 40, position: [0, 2, 15] }}>
        <directionalLight />
        <ambientLight />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <group>
          <MyObject />
          {/* <MyBox /> */}
          <Ground />
        </group>

        <Environment preset="city" />
      </Canvas>
    </>
  );
}

export default ReflactionComponent;
