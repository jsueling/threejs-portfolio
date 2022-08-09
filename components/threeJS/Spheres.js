import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { animated } from '@react-spring/three'
import * as THREE from 'three'

import Sphere from './Sphere'

export default function Spheres({ dark, scroll }) {
  const numSpheres = 10
  const sphereAngle = (2 * Math.PI) / numSpheres
  const axis = new THREE.Vector3(0,1,1)
  const groupAngle = Math.PI * 0.0001
  const basePositionFactor = 10
  
  const spherePositions = (new Array(numSpheres).fill()).map((_, i) => 
    [basePositionFactor * Math.cos(sphereAngle*i), basePositionFactor * Math.sin(sphereAngle*i), 0]
  )

  const group = useRef()

  useFrame((state, delta) => {
    // https://medium.com/@zmommaerts/animate-a-camera-in-react-three-fiber-7398326dad5d

    // console.log(group.current.position);

    state.camera.lookAt(group.current.position)
    state.camera.position.lerp(new THREE.Vector3(-10, 0, 35 + (scroll*-70)), 0.1)
    state.camera.updateProjectionMatrix()

    group.current.rotateOnAxis(axis, groupAngle)
    group.current.rotation.x = scroll * (Math.PI)
  })

  return (
    <animated.group ref={group} >
      {spherePositions.map((v,i) =>
        <Sphere
          dark={dark}
          basePosition={v}
          key={v}
        />
      )}
    </animated.group>
  )
}