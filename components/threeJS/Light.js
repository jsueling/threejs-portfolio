import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// https://spectrum.chat/react-three-fiber/general/how-to-connect-pointlighthelper~32df8314-8bbb-4969-8054-2c5d37ea19b1
export default function Light({ dark }) {
  const group = useRef()
  const orbitLight = useRef()
  // useHelper(orbitLight, PointLightHelper, 0.5, 'pink')

  useFrame((state, delta) => {
    group.current.rotation.x += 0.005
  })

  return (
    <>
      <ambientLight intensity={0.3}/>
      <group ref={group}>
        <pointLight
          castShadow={true}
          ref={orbitLight}
          position={[0,0,20]}
          intensity={dark ? 10 : 20}
        />
      </group>
    </>
  )
}