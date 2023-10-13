import { useRef, useState } from 'react'
import { Points, PointMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Vector3, Spherical } from "three"

// Adapted from: https://github.com/pmndrs/drei/blob/master/src/core/Stars.tsx + https://codesandbox.io/s/2csbr1

const genStar = r => {
  return new Vector3().setFromSpherical( // https://threejs.org/docs/#api/en/math/Spherical
    new Spherical(
      r,
      Math.acos(1 - Math.random() * 2),
      Math.random() * 2 * Math.PI
    )
  )
}

export default function Stars({ dark, frequency }) {

  const ref = useRef()
  const [sphere] = useState(() => {
    let arr = []
    for (let i=0; i < frequency; i++) {
      arr.push(...genStar(50).toArray())
    }
    return new Float32Array(arr)
  })
  useFrame((_, delta) => {
    ref.current.rotation.x += delta / 10
    ref.current.rotation.y += delta / 30
  })
  return (
    <Points
      ref={ref}
      positions={sphere}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color={dark ? 'white' : 'black'}
        size={0.4}
        depthWrite={false} // https://threejs.org/docs/#api/en/materials/Material.depthWrite
      />
    </Points>
  )
}