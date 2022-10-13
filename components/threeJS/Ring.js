import { useRef, useMemo, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { animated } from '@react-spring/three'

import Sphere from './Sphere'

export default function Spheres({ ringPosition, dark }) {

  const group = useRef()

  const [info, setInfo] = useState()

  const spherePositions = useMemo(() => {

    const numSpheres = 10
    const sphereAngle = (2 * Math.PI) / numSpheres
    const radius = 5
  
    return (new Array(numSpheres).fill()).map((_, i) => 
      [(info + radius) * Math.cos(sphereAngle*i), (info + radius) * Math.sin(sphereAngle*i), 0]
    )
  }, [info])

  useFrame((state) => {
    const a = ringPosition[1]
    const b = ringPosition[2]
    const c = state.camera.position.y
    const d = state.camera.position.z
    setInfo(0.25 * (Math.sqrt((a-c) ** 2 + (b-d) ** 2)))
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