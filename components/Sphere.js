import { useRef } from 'react'

export default function Sphere(props) {
  const mesh = useRef()
  return (
    <mesh
      {...props}
      ref={mesh}
      >
      <sphereGeometry args={[0.5, 32, 16]}/>
      <meshPhongMaterial color={'red'} />
    </mesh>
  )
}