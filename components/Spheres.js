import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { animated } from '@react-spring/three'

import Sphere from './Sphere'

export default function Spheres(props) {
  const numSpheres = 10
  const angle = (2 * Math.PI) / numSpheres

  const spherePositions = (new Array(numSpheres).fill()).map((_, i) => 
    [Math.cos(angle*i), Math.sin(angle*i), 0]
  )

  const group = useRef()

  // https://gracious-keller-98ef35.netlify.app/docs/recipes/animating-with-react-spring/

  useFrame((state, delta) => {
    group.current.rotateOnAxis(props.axis, props.angle)
  })

  return (
    <animated.group ref={group} >
      {spherePositions.map((v,_) =>
        <Sphere
          dark={props.dark}
          basePosition={v}
          key={v}
        />
      )}
    </animated.group>
  )
}