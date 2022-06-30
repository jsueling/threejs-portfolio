import { useRef } from 'react'

import { useSpring, animated, config } from '@react-spring/three'

export default function Sphere(props) {
  const mesh = useRef()
  const expandedPosition = props.basePosition.map((v) => 10*v)

  const { position } = useSpring({
    position: props.dark ? props.basePosition : expandedPosition,
    config: config.molasses
  })

  return (
    <animated.mesh
      {...props}
      position={position}
      ref={mesh}
      >
      <sphereGeometry args={[0.5, 32, 16]}/>
      <meshPhongMaterial color={'red'} />
    </animated.mesh>
  )
}