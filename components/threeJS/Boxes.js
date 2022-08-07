import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { animated } from '@react-spring/three'

import Box from './Box'

export default function Spheres({ scroll, dark }) {

  const group = useRef()

  useFrame((state, delta) => {
    group.current.rotation.x = scroll * (Math.PI)
  })

  return (
    <animated.group ref={group} >
      <Box position={[5, 0, 0]} scroll={scroll} dark={dark} />
      <Box position={[-5, 0, 0]} scroll={scroll} dark={dark} />
    </animated.group>
  )
}