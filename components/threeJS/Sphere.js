import { useRef, useState, useEffect, useMemo } from 'react'
import { useSpring, animated, config } from '@react-spring/three'
import debounce from 'lodash.debounce'

export default function Sphere(props) {
  const mesh = useRef()
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)
  const [clicked, setClicked] = useState(false)
  
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

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

  const activeFactor = active ? 1.5 : 1
  const darkFactor = props.dark ? 1 : 2

  const newPosition = props.basePosition.map((v) => darkFactor * activeFactor * v)

  const { color, position, scale, opacity } = useSpring({
    position: newPosition,
    color: active ? 'blue' : 'red',
    scale: (active ? 2 : 1) * darkFactor,
    opacity: props.dark ? 1 : 0.4,
    config: config.molasses
  })

  // https://threejs.org/docs/?q=mesh#api/en/materials/Material.opacity
  // https://docs.pmnd.rs/react-three-fiber/tutorials/how-it-works

  return (
    <animated.mesh
      {...props}
      ref={mesh}
      position={position}
      onClick={(e) => setClicked(!clicked)}
      onPointerOver={handlePointerIn}
      onPointerOut={(e) => setHovered(false)}
      scale={scale}
    >
      <sphereGeometry args={[0.5, 32, 16]} />
      <animated.meshPhongMaterial
        color={color}
        opacity={opacity}
        transparent
      />
    </animated.mesh>
  )
}