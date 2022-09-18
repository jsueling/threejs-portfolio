import { useRef } from 'react'
import { useHelper } from '@react-three/drei'
import { PointLightHelper, HemisphereLightHelper } from 'three'

// https://spectrum.chat/react-three-fiber/general/how-to-connect-pointlighthelper~32df8314-8bbb-4969-8054-2c5d37ea19b1
export default function Light({ dark }) {
  const pointLight = useRef()
  const hemiLight = useRef()
  useHelper(pointLight, PointLightHelper, 0.5, 'blue')
  useHelper(hemiLight, HemisphereLightHelper, 0.5, 'red')

  return (
    <>
      <hemisphereLight ref={hemiLight} color={'blue'} groundColor={'purple'} intensity={1} />
      <pointLight ref={pointLight} intensity={dark ? 10 : 0.4} position={[1,1,1]} />
    </>
  )
}