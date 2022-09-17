import { useRef } from 'react'
import { useHelper } from '@react-three/drei'
import { PointLightHelper } from 'three'

// https://spectrum.chat/react-three-fiber/general/how-to-connect-pointlighthelper~32df8314-8bbb-4969-8054-2c5d37ea19b1
export default function Light() {
  const pointLight = useRef()
  useHelper(pointLight, PointLightHelper, 0.5, 'blue')

  return (
    <pointLight ref={pointLight} intensity={2} position={[10,10,10]} />
  )
}