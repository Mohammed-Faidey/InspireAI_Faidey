/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 kira.glb 
*/

import React, { useRef ,useEffect } from 'react'
import { useGLTF,useAnimations } from '@react-three/drei'


const model_path = '/kira.glb';
export default function Model({ ...props }) {

  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    model_path
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Armature|mixamo.com|Layer0"].play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[2.136, -0.404, -0.243]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <primitive object={nodes.spine_03} />
        <mesh geometry={nodes.Kira_Feet.geometry} material={materials['Mat_Kira.002']} />
        <mesh geometry={nodes.Kira_Pants_B.geometry} material={materials['Mat_Kira.002']} />
        <mesh geometry={nodes.Kira_Shirt_right.geometry} material={materials['Mat_Kira.002']} />
        <skinnedMesh geometry={nodes.Kira_Hair_A.geometry} material={materials['Mat_Kira.002']} skeleton={nodes.Kira_Hair_A.skeleton} />
        <skinnedMesh geometry={nodes.Kira_Head_B.geometry} material={materials['Mat_Kira.002']} skeleton={nodes.Kira_Head_B.skeleton} />
        <skinnedMesh geometry={nodes.Kira_Shirt_left.geometry} material={materials['Mat_Kira.002']} skeleton={nodes.Kira_Shirt_left.skeleton} />
      </group>
      <mesh geometry={nodes.boule.geometry} material={nodes.boule.material} position={[1.784, 1.023, -0.25]} scale={0.551} />
      <mesh geometry={nodes.rideaux_d.geometry} material={materials['bleu rideaux']} position={[0.725, 1.112, -5.497]} />
      <mesh geometry={nodes.rideaux_g.geometry} material={materials['bleu rideaux']} position={[0.725, 1.112, -5.497]} />
      <mesh geometry={nodes.tringle.geometry} material={materials['Material.010']} position={[0.725, 1.098, -5.497]} />
      <mesh geometry={nodes.rideaux_d001.geometry} material={materials['bleu rideaux']} position={[3.003, 1.112, -3.754]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.rideaux_g001.geometry} material={materials['bleu rideaux']} position={[3.003, 1.112, -3.754]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.tringle001.geometry} material={materials['Material.010']} position={[3.003, 1.098, -3.754]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.armchair.geometry} material={materials['Material.002']} position={[2.115, 0.003, -0.349]} rotation={[0, -1.569, 0]} />
      <group position={[2.792, 0.546, -2.23]} scale={[0.228, 0.342, 0.342]}>
        <mesh geometry={nodes.Cube004.geometry} material={materials.Drop_Front} />
        <mesh geometry={nodes.Cube004_1.geometry} material={materials.Drop_Front_1} />
        <mesh geometry={nodes.Cube004_2.geometry} material={materials.Drop_Front_2} />
      </group>
      <group position={[0.523, 0, -1.77]} rotation={[0, -1.332, 0]}>
        <mesh geometry={nodes.Armchair_Cube025_1001.geometry} material={materials.F44336} />
        <mesh geometry={nodes.Armchair_Cube025_1001_1.geometry} material={materials['795548.001']} />
      </group>
      <group position={[2.889, 1.212, -2.065]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.Lamp_1.geometry} material={materials['Mat.002']} />
        <mesh geometry={nodes.Lamp_1_1.geometry} material={materials['Material.004']} />
      </group>
      <group position={[0.736, 3.253, -1.909]} rotation={[-Math.PI, 0, 0]}>
        <mesh geometry={nodes['Standing_lamp_01_Circle003-Mesh'].geometry} material={materials['795548']} />
        <mesh geometry={nodes['Standing_lamp_01_Circle003-Mesh_1'].geometry} material={materials.DD9944} />
        <mesh geometry={nodes['Standing_lamp_01_Circle003-Mesh_2'].geometry} material={materials['455A64']} />
        <mesh geometry={nodes['Standing_lamp_01_Circle003-Mesh_3'].geometry} material={materials.FFEB3B} />
      </group>
      <mesh geometry={nodes.lit.geometry} material={materials['lit raye bleu']} position={[2.022, 0.092, 0.877]} />
      <mesh geometry={nodes.murs.geometry} material={materials.murs} position={[0.003, 1, -0.008]} />
      <mesh geometry={nodes.oreiller.geometry} material={materials.White} position={[2.624, 0.467, 0.699]} rotation={[-Math.PI / 2, -0.724, -Math.PI / 2]} />
      <group position={[1.563, 0.008, -1.743]} rotation={[0, -1.023, 0]}>
        <mesh geometry={nodes['Node-Mesh003'].geometry} material={materials.Wing_Chair} />
        <mesh geometry={nodes['Node-Mesh003_1'].geometry} material={materials.Wing_Chair_1} />
      </group>
      <mesh geometry={nodes.plafond.geometry} material={materials['Material.009']} position={[0.003, 1, -0.008]} />
      <mesh geometry={nodes.Radiator.geometry} material={materials['Mat.001']} position={[-1.069, 0.006, -3.603]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.sol.geometry} material={materials['Material.008']} position={[0.003, 1, -0.008]} />
      <mesh geometry={nodes.Table.geometry} material={materials.mat20} position={[0.791, 0.011, -0.6]} />
      <mesh geometry={nodes.Table_haute.geometry} material={materials['Material.003']} position={[1.569, 0.001, -3.554]} rotation={[-Math.PI / 2, 0, 3.073]} />
      <group position={[-1.271, 1.1, -2.055]}>
        <mesh geometry={nodes['Wall_Painting_01_Plane002-Mesh001'].geometry} material={materials['795548.002']} />
        <mesh geometry={nodes['Wall_Painting_01_Plane002-Mesh001_1'].geometry} material={materials['039BE5']} />
      </group>
      <group position={[-1.271, 1.129, -1.082]} scale={1.271}>
        <mesh geometry={nodes['Wall_Painting_01_Plane002-Mesh003'].geometry} material={materials['795548.002']} />
        <mesh geometry={nodes['Wall_Painting_01_Plane002-Mesh003_1'].geometry} material={materials['039BE5']} />
      </group>
      <group position={[3.053, 2.13, -0.193]} rotation={[Math.PI, 0, Math.PI]} scale={0.839}>
        <mesh geometry={nodes['Wall_Painting_01_Plane002-Mesh004'].geometry} material={materials['795548.002']} />
        <mesh geometry={nodes['Wall_Painting_01_Plane002-Mesh004_1'].geometry} material={materials['039BE5']} />
      </group>
      <mesh geometry={nodes.window1.geometry} material={materials.mat18} position={[0.848, 1.186, -5.575]} />
      <mesh geometry={nodes.window2.geometry} material={materials.mat18} position={[3.074, 1.186, -3.631]} rotation={[0, -Math.PI / 2, 0]} />
    </group>
  )
}

useGLTF.preload('/kira.glb')