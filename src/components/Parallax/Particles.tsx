import { Point, Points } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React from "react";
const random = () => Math.random();

const Particles = () => {
  const size = 1000;
  const { width, height } = useThree((state) => state.viewport);

  const particleColors = ["violet", "indigo", "blue", "green", "yellow", "red"];
  const getRandomColor = () =>
    particleColors[Math.floor(Math.random() * (particleColors.length - 1))];
  return (
    <Points limit={size}>
      <pointsMaterial size={0.25} vertexColors />
      {React.Children.toArray(
        Array.from({ length: size }).map(() => {
          return (
            <>
              <Point
                position={[
                  (0.5 - random()) * width,
                  (0.5 - random()) * height * 2,
                  (0.5 - random()) * 20,
                ]}
                color={getRandomColor()}
              />
            </>
          );
        })
      )}
    </Points>
  );
};
export default Particles;
