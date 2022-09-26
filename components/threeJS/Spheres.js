import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { animated } from '@react-spring/three'
import * as THREE from 'three'

import Sphere from './Sphere'

export default function Spheres({ dark, scroll }) {
  const numSpheres = 100
  const sphereAngle = (2 * Math.PI) / numSpheres
  // const axis = new THREE.Vector3(0,1,1)
  // const groupAngle = Math.PI * 0.0001
  const basePositionFactor = 10
  
  const spherePositions = (new Array(numSpheres).fill()).map((_, i) => 
    [basePositionFactor * Math.cos(sphereAngle*i), basePositionFactor * Math.sin(sphereAngle*i), 0]
  )

  const group = useRef()

  // useFrame((state, delta) => {
  //   group.current.rotateOnAxis(axis, groupAngle)
  // })

  return (
    <animated.group ref={group} >
      {spherePositions.map((v,i) =>
        <Sphere
          dark={dark}
          basePosition={v}
          key={v}
        />
      )}
    </animated.group>
  )
}