import React, {useRef, Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import './App.css';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model(props) {
  const group = useRef();
  const {nodes, material} = useGLTF('/carla.glb')
  return(
    <group ref={group} {...props} dispose={null}>
      <mesh
      geometry={nodes.geometry}
      material={nodes.material}
      position={[0,0,0]}
      />
    </group>
  )
}

function Box() {
  return(
  <mesh>
    <boxBufferGeometry attach="geometry"/>
    <meshLambertMaterial attach="material" color="hotpink"/>
  </mesh>
  )
}

export default function App(){
  return(

<Canvas>
  <Suspense fallback={null}>
  <OrbitControls/>
  <ambientLight intensity={0.5}/>
  <spotLight  position={[10,15,10]} angle={0.3}/>
  <Model/>
  <Box/>
  </Suspense>
</Canvas>
  )
}
