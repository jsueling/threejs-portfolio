import {  ArcballControls } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Arcball({ scroll, enabled }) {

  const controls = useRef()
  const origin = new THREE.Vector3(0,0,0)
  useFrame((state,delta) => {
    if (!enabled) {
      const angle = scroll * Math.PI * 2
      controls.current.camera.lookAt(origin)
      controls.current.camera.position.lerp(new THREE.Vector3(0, 35*Math.sin(angle), 35*Math.cos(angle)), 0.1)
      controls.current.camera.updateProjectionMatrix()
    }
  })

  return (
    <ArcballControls ref={controls} dampingFactor={0.1} enabled={enabled}/>
  )
}
