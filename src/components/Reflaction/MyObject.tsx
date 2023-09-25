import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import THREE from "three";
function MyObject() {
  const [color, setColor] = useState("rgb(0,0,255)");
  const random = () => Math.floor(Math.random() * 255);
  const meshRef = useRef<THREE.Mesh>(null);
  const onColorChange = () => {
    setColor(() => `rgb(${random()},${random()},${random()})`);
  };
  const [isScale, setIsScale] = useState(true);
  const [angle, setAngle] = useState(0);

  const radius = 20;
  const x = 2,
    y = 2;
  useFrame(() => {
    if (!isScale) return;
    if (!meshRef.current?.position) return;
    if (isScale) {
      meshRef.current.position.x = x + radius * Math.cos(angle);
      meshRef.current.position.z = y + radius * Math.sin(angle);

      setAngle((a) => {
        return (a + Math.PI / 360) % (Math.PI * 2);
      });
    }
  });
  return (
    <mesh
      ref={meshRef}
      onPointerEnter={() => {
        setIsScale(false);
      }}
      onPointerLeave={() => {
        setIsScale(true);
      }}
      onClick={() => {
        setIsScale((p) => !p);
        onColorChange();
      }}
      position={[0, 2, 0]}
    >
      <boxGeometry args={[4, 3, 3]} />

      <OrbitControls enableRotate enablePan enableZoom />

      <meshPhongMaterial color={color} />
    </mesh>
  );
}

export default MyObject;
