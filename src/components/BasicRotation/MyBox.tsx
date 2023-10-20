import { useFrame } from "@react-three/fiber";
import { update } from "three/examples/jsm/libs/tween.module.js";
import { useRef } from "react";
import { Mesh } from "three";
function MyBox() {
  const myMesh = useRef<Mesh>(null);

  useFrame(() => {
    update();
    myMesh.current?.rotateX(0.02);
    myMesh.current?.rotateZ(0.02);
    myMesh.current?.rotateY(0.01);
  });
  return (
    <mesh ref={myMesh}>
      <boxGeometry args={[2, 1, 2]} />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
}

export default MyBox;
