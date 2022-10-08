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

    const cameraDist = Math.abs(offsetPos[3] - scroll * Math.PI * 2)
    console.log(cameraDist);

    return (new Array(numSpheres).fill()).map((_, i) => 
      [cameraDist + radius * Math.cos(sphereAngle*i), cameraDist + radius * Math.sin(sphereAngle*i), 0]
    )
  }, [scroll, offsetPos])

  // useFrame((state) => {
  //   console.log(group.current.position,state.camera.position.x);
  // })

  useEffect(() => {
    group.current.rotation.x = offsetPos[3]
  }, [offsetPos])

  // https://stackoverflow.com/questions/63064828/react-three-fiber-rotate-around-a-certain-axis

  // https://stackoverflow.com/questions/28848863/threejs-how-to-rotate-around-objects-own-center-instead-of-world-center
  // https://stackoverflow.com/questions/37779104/how-can-i-rotate-around-the-center-of-a-group-in-three-js
  // https://jsfiddle.net/f2Lommf5/6202/
  // using group as pivot point

  return (
    <animated.group position={offsetPos.slice(0,3)} ref={group}>
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