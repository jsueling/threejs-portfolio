import { useRef, useState, useEffect } from 'react'
import { useSpring, animated, config } from '@react-spring/three'
import debounce from 'lodash.debounce'

export default function Sphere(props) {
  const mesh = useRef()
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)
  
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  const handleHoverOut = debounce((e) => {
    // TODO
  })

  const activeFactor = active ? 1.5 : 1
  const darkFactor = props.dark ? 1 : 2

  const newPosition = props.basePosition.map((v) => darkFactor * activeFactor * v)

  const { color, position, scale, opacity } = useSpring({
    position: newPosition,
    color: active ? 'blue' : hovered ? 'blue' : 'red',
    scale: active ? 2 : hovered ? 2 : 1,
    opacity: props.dark ? 1.0 : 0.3,
    config: config.molasses
  })

  // https://threejs.org/docs/?q=mesh#api/en/materials/Material.opacity
  // https://docs.pmnd.rs/react-three-fiber/tutorials/how-it-works

  return (
    <animated.mesh
      {...props}
      ref={mesh}
      position={position}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHovered(true)}
      onPointerOut={(e) => setHovered(false)}
      scale={scale}
    >
      <sphereGeometry args={[0.5, 32, 16]} />
      <animated.meshStandardMaterial
        color={color}
        opacity={opacity}
        transparent
      />
    </animated.mesh>
  )
}