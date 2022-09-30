import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { animated } from '@react-spring/three'
import * as THREE from 'three'

import Sphere from './Sphere'

export default function Spheres({ offsetPos, dark, scroll }) {
  const group = useRef()
  // console.log(offsetPos);

  const spherePositions = useMemo(() => {

    const numSpheres = 20
    const sphereAngle = (2 * Math.PI) / numSpheres
    const radius = 5

    return (new Array(numSpheres).fill()).map((_, i) => 
      [radius * Math.cos(sphereAngle*i) + offsetPos[0], radius * Math.sin(sphereAngle*i) + offsetPos[1], offsetPos[2]]
    )  
  }, [offsetPos])

  // if (group.current) {
  //   group.current.rotation.y = offsetPos[3] / 8
  // }

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