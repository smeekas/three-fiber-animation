import { useFrame, useThree } from "@react-three/fiber";
import { Tween, update } from "three/examples/jsm/libs/tween.module.js";
import { useEffect, useRef } from "react";
import { Mesh, Vector3 } from "three";
import { OrbitControls } from "@react-three/drei";
function TweenBox() {
  const myMesh = useRef<Mesh>(null);
  const abc = useThree();
  const radius = 10;
  useEffect(() => {
    abc.camera.lookAt(new Vector3(2, 1, 2));
    if (!myMesh.current) return;

    new Tween({ angle: 0 })
      .to(
        {
          angle: 360,
        },
        4000
      )
      .onUpdate((updated) => {
        const x = radius * Math.sin((Math.PI * 2 * updated.angle) / 360);
        const y = radius * Math.cos((Math.PI * 2 * updated.angle) / 360);
        abc.camera.position.y = x;
        abc.camera.position.x = y;
      })
      .repeat(10)
      .start();
  }, []);

  useFrame(() => {
    if (myMesh.current) myMesh.current.rotateY(0.02);
    update();
  });
  return (
    <mesh ref={myMesh}>
      <OrbitControls />
      <boxGeometry args={[2, 1, 2]} />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
}

export default TweenBox;
