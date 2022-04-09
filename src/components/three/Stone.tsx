/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Sahir Virmani (https://sketchfab.com/sahirvirmani)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/japanese-stone-lantern-e0417d1e05984727a50f9ab1451d162d
title: Japanese Stone Lantern
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Stone() {
  const group = useRef()
  const gltf = useGLTF('/models/stone/model-transformed.glb')
  return (
    <group ref={group} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-56.06, 30.84, 175.87]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh castShadow receiveShadow geometry={nodes.Cube024_stone_0.geometry} material={materials.stone} />
          </group>
          <group position={[-56.14, 102.21, 176.44]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh castShadow receiveShadow geometry={nodes.Cube025_wood_0.geometry} material={materials.wood} />
          </group>
          <group position={[-56.1, 119.3, 175.81]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh castShadow receiveShadow geometry={nodes.Cube026_wood_lantern_0.geometry} material={materials.wood_lantern} />
            <mesh castShadow receiveShadow geometry={nodes.Cube026_paper_0.geometry} material={materials.paper} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/stone/model-transformed.glb')
