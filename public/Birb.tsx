/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 birb.glb -t 
Author: Wen Yeh (https://sketchfab.com/wenyeh1110)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/bird-orange-0d31748606c2499fb652c0c1052b7cfa
Title: Bird Orange
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_51: THREE.SkinnedMesh
    _rootJoint: THREE.Bone
  }
  materials: {
    BirdOrange_LMB: THREE.MeshStandardMaterial
  }
}

type ActionName = 'anim'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['skinnedMesh'] | JSX.IntrinsicElements['bone']>>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/birb.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={46.683}>
          <group name="bfb1ea86655f4c4ab4c6cbbb449cedf4fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="BirdOrange_all">
                  <group name="Main" position={[-0.083, 0, 0.451]} rotation={[0, -0.074, 0]}>
                    <group name="Object_6">
                      <primitive object={nodes._rootJoint} />
                      <group name="Object_50" />
                      <skinnedMesh name="Object_51" geometry={nodes.Object_51.geometry} material={materials.BirdOrange_LMB} skeleton={nodes.Object_51.skeleton} />
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
  )
}

useGLTF.preload('/birb.glb')