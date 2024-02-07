import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function PulsingPoint({ dark, position }) {
  const meshRef = useRef()

  const randomSize = useRef(Math.random() * 0.1 + 0.05).current
  const speed = useRef(Math.random() * 0.00005 + 0.0002).current

  const rotationX = useRef(Math.random() * 0.25).current
  const rotationY = useRef(Math.random() * 0.25).current
  const rotationZ = useRef(Math.random() * 0.25).current

  const widthSegments = useRef(Math.floor(Math.random() * 2) + 3).current
  const heightSegments = useRef(Math.floor(Math.random() * 2) + 2).current

  useFrame((_, delta) => {
    if (!dark) {
      
      const newScale = Math.sin(Date.now() * speed * Math.PI) * 5 + 5 // returns 0-10 where Math.sin(...) varies between -1 and 1

      meshRef.current.scale.set(
        newScale,
        newScale,
        newScale
      )

      meshRef.current.rotation.x += delta * rotationX
      meshRef.current.rotation.z += delta * rotationY
      meshRef.current.rotation.z += delta * rotationZ
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[dark ? 0.1 : randomSize, widthSegments, heightSegments]} />
      {
        dark
        ? <meshBasicMaterial  color={'white'} />
        : <meshStandardMaterial metalness={1} color={'white'}/>
      }
    </mesh>
  )
}