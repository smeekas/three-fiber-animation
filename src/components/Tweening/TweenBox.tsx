import { useFrame, useThree } from "@react-three/fiber";
import { Tween, update } from "three/examples/jsm/libs/tween.module.js";
import { useEffect, useRef } from "react";
import { Mesh, Vector3 } from "three";
import { OrbitControls } from "@react-three/drei";
function TweenBox() {
  const myMesh = useRef<Mesh>(null);
  const three = useThree();

  const radius = 10;
  useEffect(() => {
    three.camera.lookAt(new Vector3(2, 1, 2));
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
        three.camera.position.y = x;
        three.camera.position.x = y;
      })
      .repeat(10)
      .start();
  }, [three.camera]);

  useFrame(() => {
    if (myMesh.current) myMesh.current.rotateY(0.02);
    update();
  });
  return (
    <mesh ref={myMesh}>
      <OrbitControls
        enableRotate={false}
        enablePan={false}
        enableZoom={false}
      />
      <boxGeometry args={[2, 1, 2]} />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
}

export default TweenBox;
