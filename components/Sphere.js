import { useRef, useState } from 'react'

import { useSpring, animated, config } from '@react-spring/three'

export default function Sphere(props) {
  const mesh = useRef()
  const [active, setActive] = useState(false)
  const [hovered, setHovered] = useState(false)

  const activeFactor = active ? 5 : 0

  const expandedPosition = props.basePosition.map((v) => (activeFactor + 10) * v)

  const { position } = useSpring({
    position: props.dark ? props.basePosition : expandedPosition,
    config: config.molasses
  })

  return (
    <animated.mesh
      {...props}
      ref={mesh}
      position={position}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHovered(true)}
      onPointerOut={(e) => setHovered(false)}
    >
      <sphereGeometry args={[0.5, 32, 16]}/>
      <meshPhongMaterial color={hovered ? 'blue' : 'red'} />
    </animated.mesh>
  )
}