import {  ArcballControls, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Arcball({ scroll, enabled }) {
  

  const controls = useRef()
  useFrame((state,delta) => {
    if (!enabled) {
      // angle from origin to camera for vector position
      const angle = scroll * Math.PI * 2
      // angle from camera to origin for quaternion orientation
      const theta = Math.PI-angle

      const distance = 20

      state.camera.quaternion.slerp(new THREE.Quaternion(Math.cos(-theta/2),0,0,Math.sin(-theta/2)), 0.1)
      state.camera.position.lerp(new THREE.Vector3(0, distance *Math.sin(angle), distance *Math.cos(angle)), 0.1)
      state.camera.updateProjectionMatrix()
    }
  })

  // TODO, when enabling or disabling ArcballControls, smoothly transition/lerp orientation and position
  // TODO maintain orientation/position between having ArcaBallControls enabled and disabled i.e. single source of truth
  // TODO 1. orbit camera around the y axis while idle or 2. orbit light source
  return (
    <>
      <ArcballControls ref={controls} dampingFactor={1} enabled={enabled}/>
      {/* <OrbitControls ref={controls} /> */}
      <axesHelper />
    </>
  )
}
