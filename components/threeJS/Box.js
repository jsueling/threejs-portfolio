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

  // https://docs.pmnd.rs/react-three-fiber/tutorials/using-with-react-spring
  const { scale } = useSpring({
    scale: active ? 3 : 1,
    config: config.wobbly
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
      <meshPhongMaterial color={hovered ? 'hotpink' : 'orange'} />
    </animated.mesh>
  )
}