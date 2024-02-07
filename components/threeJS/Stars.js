import { useRef, useMemo } from 'react'
import { Points } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Vector3, Spherical } from "three"

import PulsingPoint from './PulsingPoint'

// Adapted from: https://github.com/pmndrs/drei/blob/master/src/core/Stars.tsx + https://codesandbox.io/s/2csbr1

const generateSpherePosition = r => {
  return new Vector3().setFromSpherical( // https://threejs.org/docs/#api/en/math/Spherical
    new Spherical(
      r,
      Math.acos(1 - Math.random() * 2),
      Math.random() * 2 * Math.PI
    )
  )
}

export default function Stars({ dark, frequency, homePosition }) {

  const ref = useRef()

  const spherePositions = useMemo(() => {
    let arr = []
    let sphereRadius = dark ? 50 : 70
    for (let i=0; i < frequency; i++) {
      arr.push(new Vector3(...generateSpherePosition(sphereRadius)))
    }
    return arr
  }, [frequency, dark])

  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.01
    ref.current.rotation.y += delta * 0.03
  })

  return ( // 2 ways of using Points API: https://github.com/pmndrs/drei?tab=readme-ov-file#points
    <Points
      ref={ref}
      position={homePosition}
    >
      {spherePositions.map((position) =>  {
        return (
          <PulsingPoint
            key={position.x}
            dark={dark}
            position={position}
          /> 
        )
      })}
    </Points>
  )
}