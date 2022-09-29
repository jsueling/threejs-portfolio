import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { animated } from '@react-spring/three'
import * as THREE from 'three'

import Sphere from './Sphere'

export default function Spheres({ offsetPos, dark, scroll }) {

  const spherePositions = useMemo(() => {

    const numSpheres = 10
    const sphereAngle = (2 * Math.PI) / numSpheres
    const basePositionFactor = 10

    return (new Array(numSpheres).fill()).map((_, i) => 
      [basePositionFactor * Math.cos(sphereAngle*i) + offsetPos[0], basePositionFactor * Math.sin(sphereAngle*i) + offsetPos[1], offsetPos[2]]
    )  
  }, [offsetPos])

  const group = useRef()

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