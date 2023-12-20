import { Point, Points } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useState } from "react";

function Particles() {
  const [parts, setParts] = useState<Array<[number, number, number]>>([]);
  const { width, height } = useThree((state) => state.viewport);
  const random = () => Math.random();
  const size = 1000;
  useEffect(() => {
    const arr: Array<[number, number, number]> = [];
    for (let i = 0; i < size; i++) {
      arr.push([
        (0.5 - random()) * width,
        (0.5 - random()) * height * 2,
        (0.5 - random()) * 40,
      ]);
    }
    setParts(arr);
  }, [height, width]);

  useFrame(() => {
    setParts((prev) => {
      return prev.map((partItem) => {
        if (partItem[2] > 20) {
          return [partItem[0], partItem[1], -20];
        }
        return [partItem[0], partItem[1], partItem[2] + 0.2];
      });
    });
  });
  return (
    <Points limit={size}>
      <pointsMaterial size={0.05} vertexColors />
      {React.Children.toArray(
        parts.map((partItem) => {
          return (
            <>
              <Point
                position={[partItem[0], partItem[1], partItem[2]]}
                color="while"
              />
            </>
          );
        })
      )}
    </Points>
  );
}

export default Particles;
