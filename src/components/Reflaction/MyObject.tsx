import { CameraShake, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
const GOLDENRATIO = 1.61803398875;

function MyObject() {
  const [color, setColor] = useState("rgb(0,0,255)");
  const random = () => Math.floor(Math.random() * 255);
  const meshRef = useRef<THREE.Mesh>(null);
  const onColorChange = () => {
    setColor(() => `rgb(${random()},${random()},${random()})`);
  };
  const [scale, setScale] = useState(false);
  const [isScale, setIsScale] = useState(false);
  useFrame(() => {
    console.log(scale, isScale);
    if (!isScale) return;
    if (!meshRef.current?.scale?.x) return;
    if (scale) {
      console.log("INC");
      meshRef.current?.scale.setX(meshRef.current?.scale.x + 0.2);
    } else {
      console.log("DEC");
      meshRef.current?.scale.setX(meshRef.current?.scale.x - 0.2);
    }
    if (meshRef.current?.scale.x < 1 || meshRef.current?.scale.x > 2) {
      setIsScale(false);
      return;
    }
  });
  return (
    <mesh
      ref={meshRef}
      onClick={() => {
        setScale((prev) => !prev);
        setIsScale(true);
        onColorChange();
      }}
      position={[0, 2, 0]}
      // scale={scale}
    >
      <boxGeometry  args={[4, 3, 3]} />
      <OrbitControls enableRotate enablePan enableZoom />

      <meshPhongMaterial  color={color} />
    </mesh>
  );
}

export default MyObject;
