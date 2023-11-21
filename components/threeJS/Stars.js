import { useRef, useMemo } from 'react'
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

export default function Stars({ dark, frequency, homePosition }) {

  const ref = useRef()
  const sphere = useMemo(() => {
    let arr = []
    let sphereRadius = dark ? 50 : 70
    for (let i=0; i < frequency; i++) {
      arr.push(...genStar(sphereRadius).toArray())
    }
    return new Float32Array(arr)
  }, [frequency, dark])

  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.01
    ref.current.rotation.y += delta * 0.03
  })
  return (
    <Points
      ref={ref}
      positions={sphere}
      stride={3}
      frustumCulled={false}
      position={homePosition}
    >
      <PointMaterial
        transparent
        color={dark ? 'white' : 'black'}
        size={dark ? 0.1 : 1}
        depthWrite={false} // https://threejs.org/docs/#api/en/materials/Material.depthWrite
      />
    </Points>
  )
}