
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSpring, animated, config } from '@react-spring/three'

export default function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // https://docs.pmnd.rs/react-three-fiber/tutorials/using-with-react-spring
  const { scale } = useSpring({
    scale: active ? 3 : 1,
    config: config.wobbly
  })
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <animated.mesh
      {...props}
      ref={mesh}
      scale={scale}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={hovered ? 'hotpink' : 'orange'} />
    </animated.mesh>
  )
}