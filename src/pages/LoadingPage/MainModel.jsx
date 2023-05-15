

import { useRef, useState } from 'react'
import { useGLTF} from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF("/abstract_snot.glb");
  const ref = useRef();
  
  useFrame((state, delta) => (ref.current.rotation.x += 0.5 * delta));
  // useFrame((state, delta) => (ref.current.rotation.x += delta))

  return (
    <group  ref={ref} scale={0.4} {...props} dispose={null}>
         <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
        
          <group position={[0, -9.41, 0]} scale={16.21}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <group position={[2.35, -0.88, -0.09]} scale={[14.86,0 , 0.98]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[-3.94, 0, -2.11]} scale={1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.Snot}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/abstract_snot.glb");
