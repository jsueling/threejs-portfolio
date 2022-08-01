import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSpring, animated, config } from '@react-spring/three'

export default function Box(props) {
  const mesh = useRef()
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))

  const darkFactor = props.dark ? 1 : 2

  // https://docs.pmnd.rs/react-three-fiber/tutorials/using-with-react-spring
  const { scale, color } = useSpring({
    scale: (active ? 4 : 2) * darkFactor,
    color: active ? 'hotpink' : hovered ? 'hotpink' : 'orange',
    config: config.molasses
  })

  return (
    <animated.mesh
      {...props}
      ref={mesh}
      scale={scale}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHovered(true)}
      onPointerOut={(e) => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <animated.meshStandardMaterial
        color={color}
      />
    </animated.mesh>
  )
}