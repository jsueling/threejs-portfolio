import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { animated } from '@react-spring/three'

import Sphere from './Sphere'

export default function Spheres({ axis, groupAngle, dark, scroll }) {
  const numSpheres = 10
  const sphereAngle = (2 * Math.PI) / numSpheres

  const spherePositions = (new Array(numSpheres).fill()).map((_, i) => 
    [Math.cos(sphereAngle*i), Math.sin(sphereAngle*i), 0]
  )

  // useThree(({ camera }) => {
    // camera.position.x = 70 * scroll - 35
  // })

  const group = useRef()

  useFrame((state, delta) => {
    group.current.rotateOnAxis(axis, groupAngle)
    group.current.rotation.z = scroll * (2*Math.PI)
    group.current.rotation.x = scroll * (Math.PI)
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