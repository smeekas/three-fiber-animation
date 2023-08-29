import { MeshReflectorMaterial, useTexture } from "@react-three/drei";
// import { MeshReflectorMaterialProps } from "@react-three/drei/materials/MeshReflectorMaterial";
// import React from "react";
import textureImg from "../../../public/texture.png";
import React from "react";

function Ground() {
  const texture = useTexture(textureImg);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,-2,0]}>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        // roughnessMap={texture}

        mirror={1}
        blur={[300, 100]}
        resolution={2048}
        mixBlur={0.4}
        mixStrength={80}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#050505"
        metalness={0}
      />
    </mesh>
  );
}

export default Ground;
