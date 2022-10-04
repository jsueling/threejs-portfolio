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

  // https://stackoverflow.com/questions/28848863/threejs-how-to-rotate-around-objects-own-center-instead-of-world-center
  // https://stackoverflow.com/questions/37779104/how-can-i-rotate-around-the-center-of-a-group-in-three-js
  // https://jsfiddle.net/f2Lommf5/6202/
  // using group as pivot point
  
  console.log(offsetPos.slice(0,3));
  console.log(group.current.position);

  useEffect(() => {
    // group.current.rotation.x = offsetPos[3] / 2
  }, [])

  return (
    <group>
      <animated.group position={offsetPos.slice(0,3)} ref={group}>
        {spherePositions.map((v,i) =>
          <Sphere
            dark={dark}
            basePosition={v}
            key={v}
          />
        )}
      </animated.group>
    </group>
  )
}