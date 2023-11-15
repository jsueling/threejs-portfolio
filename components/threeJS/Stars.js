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
    for (let i=0; i < frequency; i++) {
      arr.push(...genStar(50).toArray())
    }
    return new Float32Array(arr)
  }, [frequency])

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
      position={homePosition}
    >
      <PointMaterial
        transparent
        color={dark ? 'white' : 'black'}
        size={dark ? 0.1 : 0.6}
        depthWrite={false} // https://threejs.org/docs/#api/en/materials/Material.depthWrite
      />
    </Points>
  )
}