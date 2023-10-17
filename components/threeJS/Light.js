import { forwardRef, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// https://spectrum.chat/react-three-fiber/general/how-to-connect-pointlighthelper~32df8314-8bbb-4969-8054-2c5d37ea19b1
const Light = forwardRef(({ dark }, forwardRef) => {
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
        <mesh ref={forwardRef} position={[0, 0, 20]}>
          <sphereGeometry args={[1, 36, 36]} />
          <meshBasicMaterial color={"red"} />
        </mesh>
      </group>
    </>
  )
})

Light.displayName = 'Light'
export default Light