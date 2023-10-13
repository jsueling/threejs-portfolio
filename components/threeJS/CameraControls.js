import {  ArcballControls, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Arcball({ scroll, enabled }) {
  

  const controls = useRef()
  const origin = new THREE.Vector3(0,0,0)
  useFrame((state) => {
    if (!enabled) {
      // angle from origin to camera for vector position
      const angle = scroll * Math.PI * 2
      const distance = 20
      state.camera.position.lerp(new THREE.Vector3(distance * Math.sin(angle), 0, distance * Math.cos(angle)), 0.1)
      state.camera.lookAt(origin)
    }
  })

  // TODO, when enabling or disabling ArcballControls, smoothly transition/lerp orientation and position
  // TODO maintain orientation/position between having ArcaBallControls enabled and disabled i.e. single source of truth
  // TODO 1. orbit camera around the y axis while idle or 2. orbit light source
  return (
    <>
      <ArcballControls ref={controls} dampingFactor={1} enabled={enabled}/>
      {/* <OrbitControls ref={controls} /> */}
    </>
  )
}
