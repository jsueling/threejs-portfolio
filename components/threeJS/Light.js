import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Light({ dark, homePosition }) {
  const group = useRef()
  const orbitLight = useRef()

  useFrame((_, delta) => {
    group.current.rotation.x += delta * 0.1
  })

  useEffect(() => { // runs after first render when all refs are set up
    orbitLight.current.target = group.current
  }, [])

  return (
    <>
      <ambientLight intensity={dark ? 0 : 1} />
      <group
        ref={group}
        position={homePosition}
      >
        <spotLight
          ref={orbitLight}
          position={dark ? [0, 0, 20] : [0, 0, 100]}
          distance={dark ? 20 : 200}
          angle={Math.PI * 0.25}
          // https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733 increase light intensity for the same effect
          intensity={dark ? 400 : 60000}
          penumbra={1.0}
        />
      </group>
    </>
  )
}