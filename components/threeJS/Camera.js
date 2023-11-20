import {  CameraControls } from '@react-three/drei'
import { useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/router';
import * as THREE from 'three'

export default function Camera({ scroll, enabled, homePosition, projectPosition }) {
  const { pathname } = useRouter()
  const origin = new THREE.Vector3(0,0,0)
  const homeVector = new THREE.Vector3(...homePosition)
  const projectVector = new THREE.Vector3(...projectPosition)

  // credits to: https://github.com/pmndrs/react-three-fiber/discussions/807#discussioncomment-129132
  const [vectorLookAt, _] = useState(() => new THREE.Vector3())

  useFrame((state) => {
    if (!enabled) {
      const angle = Math.PI * 0.5 - scroll * Math.PI * 0.5
      const distance = 20
      switch(pathname) {
        case '/':
          state.camera.position.lerp(origin, 0.01)
          state.camera.lookAt(vectorLookAt.lerp(homeVector, 0.01))
          break
        case '/about':
          state.camera.position.lerp(new THREE.Vector3(homePosition[0] + distance * Math.sin(angle), homePosition[1], homePosition[2] + distance * Math.cos(angle)), 0.01)
          state.camera.lookAt(vectorLookAt.lerp(homeVector, 0.01))
          break
        case '/projects':
          state.camera.position.lerp(new THREE.Vector3(projectPosition[0] + distance * Math.sin(angle), projectPosition[1], projectPosition[2] + distance * Math.cos(angle)), 0.01)
          state.camera.lookAt(vectorLookAt.lerp(projectVector, 0.01))
          break
      }
    }
  })

  return (
    <CameraControls
      enabled={enabled}
    />
  )
}