import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { animated } from '@react-spring/three'

import Sphere from './Sphere'

export default function Spheres({ ringPosition, dark }) {

  const group = useRef()

  const originalPositions = useMemo(() => {

    const numSpheres = 20
    const sphereAngle = (2 * Math.PI) / numSpheres
    const radius = 5
  
    return (new Array(numSpheres).fill()).map((_, i) => 
      [radius * Math.cos(sphereAngle*i), radius * Math.sin(sphereAngle*i), 0]
    )
  }, [])

  // console.log(originalPositions);
  const finalPositions = originalPositions.slice()

  useFrame((state) => {
    const a = ringPosition[1]
    const b = ringPosition[2]
    const c = state.camera.position.y
    const d = state.camera.position.z
    const cameraDist = (a-c) ** 2 + (b-d) ** 2

    finalPositions.forEach((pos) => {
      pos[1] = cameraDist
      pos[2] = cameraDist
    })
    console.log(finalPositions);
  })

  // console.log(finalPositions);

  // useFrame to get cameraPos, calculate pythag dist between camera and each ring then pass to Ring

  useEffect(() => {
    group.current.rotation.x = ringPosition[3]
  }, [ringPosition])

  // https://stackoverflow.com/questions/63064828/react-three-fiber-rotate-around-a-certain-axis

  // https://stackoverflow.com/questions/28848863/threejs-how-to-rotate-around-objects-own-center-instead-of-world-center
  // https://stackoverflow.com/questions/37779104/how-can-i-rotate-around-the-center-of-a-group-in-three-js
  // https://jsfiddle.net/f2Lommf5/6202/
  // using group as pivot point

  return (
    <animated.group position={ringPosition.slice(0,3)} ref={group}>
      {finalPositions.map((v,i) =>
        <Sphere
          dark={dark}
          basePosition={v}
          key={v}
        />
      )}
    </animated.group>
  )
}