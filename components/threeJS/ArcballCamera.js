import {  ArcballControls } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ArcballCamera({ scroll, enabled }) {

  const cameraRef = useRef()
  const origin = new THREE.Vector3(0,0,0)
  useFrame((state) => {
    if (!enabled) {
      // angle from origin to camera for vector position
      const angle = scroll * Math.PI * 0.5
      const distance = 20
      state.camera.position.lerp(new THREE.Vector3(distance * Math.sin(angle), 0, distance * Math.cos(angle)), 0.1)
      state.camera.lookAt(origin)
    }
  })

  return (
    <ArcballControls
      ref={cameraRef}
      enabled={enabled}
      dampingFactor={0.99}
    />
  )
}
