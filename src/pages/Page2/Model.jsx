
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'


export default function Model(props) {
  const ref = useRef();
  const { nodes, materials, animations } = useGLTF("/organic_voroni_ball.glb");


  
//   useFrame((state, delta) => (ref.current.rotation.y += delta))
useFrame((state, delta) => (ref.current.rotation.y += 0.05 * delta));

  return (
    <group ref={ref} {...props} dispose={null} scale={1.7} >
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.43}
          position={[0, -1, 0]} 
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cube_2" position={[0, 1, 0]}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.rainbow}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.rainbow}
                />
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.rainbow}
                />
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials.rainbow}
                />
              </group>
            </group>
          </group>
        </group>
      </group>

    </group>
  );
}

useGLTF.preload("/organic_voroni_ball.glb");
