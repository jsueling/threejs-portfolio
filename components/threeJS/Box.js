import { useRef, useState, useEffect, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSpring, animated, config } from '@react-spring/three'
import debounce from 'lodash.debounce'

export default function Box(props) {
  const mesh = useRef()
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  useFrame((state, delta) => (mesh.current.rotation.x += 0.005))

  const handlePointerIn = (e) => {
    setActive(true)
    setHovered(true)
    debounceSetInactive()
  }

  const debounceSetInactive = useMemo(
    () => debounce(() => {
      setActive(false)
    }, 5000)
  , []);

  const darkFactor = props.dark ? 1 : 2

  // https://docs.pmnd.rs/react-three-fiber/tutorials/using-with-react-spring
  const { scale, color, opacity } = useSpring({
    scale: (active ? 4 : 2) * darkFactor,
    color: active ? 'green' : hovered ? 'green' : 'yellow',
    opacity: props.dark ? 0.5 : 0.25,
    config: config.molasses
  })

  return (
    <animated.mesh
      {...props}
      ref={mesh}
      scale={scale}
      onClick={(e) => setClicked(!clicked)}
      onPointerOver={handlePointerIn}
      onPointerOut={(e) => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <animated.meshStandardMaterial
        color={color}
        opacity={opacity}
        transparent
      />
    </animated.mesh>
  )
}