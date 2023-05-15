import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

export default function RainModel(props) {
    const ref = useRef();
  const { nodes, materials } = useGLTF("/organic_spike_ball.glb");
useFrame((state, delta) => (ref.current.rotation.y += 0.05 * delta));
  return (
    <group ref={ref} {...props} dispose={null}>
      <group position={[0, -3.5, 0]}
      rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, 3.6, 0]}
            rotation={[-Math.PI, -0.61, -Math.PI]}
            scale={2.24}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials["soft-skin"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials["soft-skin"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials["soft-skin"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/organic_spike_ball.glb");
