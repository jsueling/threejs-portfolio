import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useHelper } from '@react-three/drei'
import { SpotLightHelper } from 'three'

// https://spectrum.chat/react-three-fiber/general/how-to-connect-pointlighthelper~32df8314-8bbb-4969-8054-2c5d37ea19b1
export default function Light({ dark, homePosition }) {
  const group = useRef()
  const orbitLight = useRef()
  // useHelper(orbitLight, SpotLightHelper, 'cyan')
  // useHelper(orbitLight, SpotLightHelper, 'cyan')

  useFrame((state, delta) => {
    group.current.rotation.x += 0.005
  })

  return (
    <>
      <ambientLight intensity={0.3} />
      <group
        ref={group}
        position={homePosition}
      >
        <spotLight
          ref={orbitLight}
          position={[0, 0, 20]}
          distance={20}
          angle={Math.PI * 0.25}
          intensity={dark ? 30 : 50}
          penumbra={1}
          target={group.current}
        />
      </group>
    </>
  )
}