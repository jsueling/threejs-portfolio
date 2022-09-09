import {  ArcballControls, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Arcball({ scroll, enabled }) {
  
  // camera perspective flipping when rotating threejs
  // https://stackoverflow.com/questions/17696587/three-js-camera-rotation-issue
  // https://github.com/mrdoob/three.js/blob/master/src/core/Object3D.js#L260

  // https://discourse.threejs.org/t/solved-lookat-flips-cam-rotation-180-degrees-how-do-i-remove-this/2066

  // https://threejs.org/docs/#api/en/math/Spherical
  // https://threejs.org/docs/#api/en/math/Quaternion

  // https://github.com/simondevyoutube/ThreeJS_Tutorial_LoadingModels/blob/04d5161a45c422ee14a94b6d05de0dcbfb7af1ea/main.js#L233
  // https://www.3dgep.com/understanding-quaternions/#unit-quaternion

  const controls = useRef()
  const origin = new THREE.Vector3(0,0,0)
  // useFrame((state,delta) => {
  //   if (!enabled) {
  //     const angle = scroll * Math.PI * 2

  //     controls.current.camera.quaternion.copy(new THREE.Spherical(35, Math.PI/2 - angle, 0), 0.1);
  //     console.log(controls.current.camera.position);

      // controls.current.camera.lookAt(origin)
      // controls.current.camera.position.lerp(new THREE.Vector3(0, 35*Math.sin(angle), 35*Math.cos(angle)), 0.1)
  //     controls.current.camera.updateProjectionMatrix()
  //   }
  // })
  console.log(controls.current.target);
  return (
    <>
      <ArcballControls ref={controls} dampingFactor={0.1} enabled={enabled}/>
      {/* <OrbitControls ref={controls} /> */}
      <axesHelper args={[20]} />
    </>
  )
}
