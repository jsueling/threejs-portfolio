import { useRef } from 'react'
import { useHelper } from '@react-three/drei'
import { PointLightHelper, HemisphereLightHelper, Vector3 } from 'three'
import { useFrame } from '@react-three/fiber'

// https://spectrum.chat/react-three-fiber/general/how-to-connect-pointlighthelper~32df8314-8bbb-4969-8054-2c5d37ea19b1
export default function Light({ dark }) {
  const pointLight = useRef()
  const hemiLight = useRef()
  const orbitLight = useRef()
  useHelper(pointLight, PointLightHelper, 0.5, 'blue')
  useHelper(hemiLight, HemisphereLightHelper, 0.5, 'red')
  useHelper(orbitLight, PointLightHelper, 0.5, 'pink')

  const angle = 0

  const axis = new Vector3(0,0,1)
  useFrame((state, delta) => {
    angle += 0.001
    angle %= 2 * Math.PI
    orbitLight.current.position = new Vector3(0,35*Math.sin(angle),35*Math.cos(angle))
  })

  return (
    <>
      <pointLight ref={orbitLight} position={[0,0,35]} intensity={4} />
      <hemisphereLight ref={hemiLight} color={'blue'} groundColor={'purple'} intensity={1} />
      <pointLight ref={pointLight} intensity={dark ? 10 : 0.4} position={[1,1,1]} />
    </>
  )
}