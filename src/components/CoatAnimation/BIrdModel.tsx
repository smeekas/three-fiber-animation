/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
type GLTFResult = GLTF & {
  nodes: {
    Object_51: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    BirdOrange_LMB: THREE.MeshStandardMaterial;
  };
};

type ActionName = "anim";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<
    JSX.IntrinsicElements["skinnedMesh"] | JSX.IntrinsicElements["bone"]
  >
>;
type BirdProps = {
  timeScale: number;
};
export function BirdModel(props: BirdProps) {
  const group = useRef<THREE.Group>(null);

  const animate = useRef(false);
  const setAnimate = useCallback(() => {
    animate.current = !animate.current;
  }, [animate]);
  const { nodes, materials, animations } = useGLTF("/birb.glb") as GLTFResult;
  const { actions } = useAnimations(animations, group);
  const key = "anim";
  useFrame(() => {
    if (!actions[key]) return;
    if (animate.current) {
      actions[key].timeScale = props.timeScale;
      // actions[key].
      actions[key].paused = false;
      actions[key].play();
    } else {
      actions[key].paused = true;
    }
  });
  const startAnimation = useCallback(() => {
    setAnimate();
  }, [setAnimate]);
  useEffect(() => {
    startAnimation();
  }, [startAnimation]);
  const stopAnimation = () => {
    setAnimate();
  };
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={46.683}
        >
          <group
            name="bfb1ea86655f4c4ab4c6cbbb449cedf4fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="BirdOrange_all">
                  <group
                    name="Main"
                    position={[-0.083, 0, 0.451]}
                    rotation={[0, -0.074, 0]}
                  >
                    <group name="Object_6">
                      <primitive object={nodes._rootJoint} />
                      <group name="Object_50" />
                      <skinnedMesh
                        onPointerEnter={stopAnimation}
                        onPointerLeave={startAnimation}
                        name="Object_51"
                        geometry={nodes.Object_51.geometry}
                        material={materials.BirdOrange_LMB}
                        skeleton={nodes.Object_51.skeleton}
                      />
                    </group>
                  </group>
                  <group name="Geometry">
                    <group name="BirdOrange" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/birb.glb");
