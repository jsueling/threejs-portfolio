import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Sphere() {
  const mesh = useRef()
  // goal is to orbit around a point
  useFrame((state, delta) => (mesh.current.position.x += 0.01))
  return (
    <mesh
      ref={mesh}
      >
      <sphereGeometry args={[0.5, 32, 16]}/>
      <meshPhongMaterial color={'red'} />
    </mesh>
  )
}