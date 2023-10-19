import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// https://spectrum.chat/react-three-fiber/general/how-to-connect-pointlighthelper~32df8314-8bbb-4969-8054-2c5d37ea19b1
export default function Light() {
  const group = useRef()
  const orbitLight = useRef()

  useFrame((state, delta) => {
    group.current.rotation.x += 0.005
  })

  return (
    <>
      <ambientLight intensity={0.3}/>
      <group
        ref={group}
      >
        <spotLight
          ref={orbitLight}
          position={[0, 0, 20]}
          distance={20}
          angle={Math.PI * 0.25}
          intensity={30}
          penumbra={1}
        />
      </group>
    </>
  )
}