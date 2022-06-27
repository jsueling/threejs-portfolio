import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import Sphere from './Sphere'

export default function Spheres(props) {
  const newArray = new Array(10).fill()
  const group = useRef()

  // goal is to orbit around a point
  useFrame((state, delta) => group.current.rotateOnAxis(props.axis, props.angle))
  return (
    <group ref={group}>
      {newArray.map((v,i) =>
        <Sphere position={[i*2,0,0]} key={i} />
      )}
    </group>
  )
}