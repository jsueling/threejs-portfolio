import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { animated } from '@react-spring/three'
import * as THREE from 'three'

import Sphere from './Sphere'

export default function Spheres({ offsetPos, dark, scroll }) {
  const group = useRef()

  const spherePositions = useMemo(() => {

    const numSpheres = 20
    const sphereAngle = (2 * Math.PI) / numSpheres
    const radius = 5

    return (new Array(numSpheres).fill()).map((_, i) => 
      [radius * Math.cos(sphereAngle*i) + offsetPos[0], radius * Math.sin(sphereAngle*i) + offsetPos[1], offsetPos[2]]
    )
  }, [offsetPos])

  // https://stackoverflow.com/questions/63064828/react-three-fiber-rotate-around-a-certain-axis

  useEffect(() => {
    group.current.rotateOnAxis(new THREE.Vector3(offsetPos[0],offsetPos[1],offsetPos[2]), offsetPos[3])
  }, [offsetPos])

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