import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSpring, config, animated } from '@react-spring/three'

import Sphere from './Sphere'

export default function Spheres(props) {
  const numSpheres = 10
  const angle = (2 * Math.PI) / numSpheres
  const sphereArray = (new Array(numSpheres).fill()).map((_, i) => 
    [Math.cos(angle*i), Math.sin(angle*i), 0]
  )

  const group = useRef()

  // const { magnitude } = useSpring({
  //   magnitude: props.dark ? 10 : 2,
  //   config: config.wobbly
  // })

  // goal is to orbit around a point
  useFrame((state, delta) => {
    group.current.rotateOnAxis(props.axis, props.angle)
  })

  return (
    <animated.group ref={group}>
      {sphereArray.map((v,i) =>
        <Sphere
          position={v}
          key={i}
        />
      )}
    </animated.group>
  )
}