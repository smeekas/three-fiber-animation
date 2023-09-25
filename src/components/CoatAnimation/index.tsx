import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useRef, Suspense, useState } from "react";
import { Group } from "three";
import { BirdModel } from "./BIrdModel";
import "./styles.css";
export function CoatAnimation() {
  const groupRef = useRef<Group | null>(null);
  const [timeScale, setTimeScale] = useState(1);
  return (
    <div className="birdContainer">
      <div className="birdController">
        Animation Speed:
        <input
          type="range"
          min={1}
          max={3}
          defaultValue={1}
          onChange={(e) => setTimeScale(+e.target.value)}
        />
      </div>
      <Canvas>
        <OrbitControls />
        <Suspense fallback={null}>
          <group ref={groupRef}>
            <BirdModel timeScale={timeScale} />
          </group>
          <Environment preset="forest" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
