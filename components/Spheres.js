import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { animated } from '@react-spring/three'

import Sphere from './Sphere'

export default function Spheres({ axis, groupAngle, dark, percentScrolled }) {
  const numSpheres = 10
  const sphereAngle = (2 * Math.PI) / numSpheres

  // console.log(percentScrolled);

  const spherePositions = (new Array(numSpheres).fill()).map((_, i) => 
    [Math.cos(sphereAngle*i), Math.sin(sphereAngle*i), 0]
  )

  useThree(({ camera }) => {
    camera.position.z = 35 + 0.01 * percentScrolled
    // camera.rotation.x = -0.00001 * scroll
    // console.log(camera.position.z);
  })

  const group = useRef()

  useFrame((state, delta) => {
    group.current.rotateOnAxis(axis, groupAngle)
  })

  return (
    <animated.group ref={group} >
      {spherePositions.map((v,_) =>
        <Sphere
          dark={dark}
          basePosition={v}
          key={v}
        />
      )}
    </animated.group>
  )
}