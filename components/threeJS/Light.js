import { useRef } from 'react'
import { useHelper } from '@react-three/drei'
import { PointLightHelper, HemisphereLightHelper, Vector3 } from 'three'
import { useFrame } from '@react-three/fiber'

// https://spectrum.chat/react-three-fiber/general/how-to-connect-pointlighthelper~32df8314-8bbb-4969-8054-2c5d37ea19b1
export default function Light({ dark }) {
  const pointLight = useRef()
  const hemiLight = useRef()
  const orbitLight = useRef()
  const group = useRef()
  useHelper(pointLight, PointLightHelper, 0.5, 'blue')
  useHelper(hemiLight, HemisphereLightHelper, 0.5, 'red')
  useHelper(orbitLight, PointLightHelper, 0.5, 'pink')

  useFrame((state, delta) => {
    group.current.rotation.x += 0.01
  })

  return (
    <>
      <hemisphereLight ref={hemiLight} color={'blue'} groundColor={'purple'} intensity={1} />
      <group ref={group}>
        <pointLight ref={orbitLight} position={[0,0,35]} intensity={1} />
      </group>
    </>
  )
}