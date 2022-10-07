import {  ArcballControls, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Arcball({ scroll, enabled }) {
  
  // camera perspective flipping when rotating threejs

  // camera.lookAt() implementation:
  // https://github.com/mrdoob/three.js/blob/master/src/core/Object3D.js#L260

  // https://discourse.threejs.org/t/solved-lookat-flips-cam-rotation-180-degrees-how-do-i-remove-this/2066
  // https://stackoverflow.com/questions/17696587/three-js-camera-rotation-issue

  // Quaternions:
  // https://eater.net/quaternions
  
  // example use:
  // https://github.com/simondevyoutube/ThreeJS_Tutorial_LoadingModels/blob/04d5161a45c422ee14a94b6d05de0dcbfb7af1ea/main.js#L233
  // https://stackoverflow.com/questions/6280586/how-does-this-quaternion-rotation-code-work

  // gimbal lock:
  // https://www.youtube.com/watch?v=zc8b2Jo7mno

  // when using xyz pos to describe camera pos looking at a single point, it gets gimbal locked crossing an axis (y in this case).
  // when aligned with this axis the camera pos describes 2 different camera views

  const controls = useRef()
  const origin = new THREE.Vector3(0,0,0)
  useFrame((state,delta) => {
    if (!enabled) {
      // angle from origin to camera for vector position
      const angle = scroll * Math.PI * 2
      // angle from camera to origin for quaternion orientation
      const theta = Math.PI-angle

      const distance = 20

      state.camera.quaternion.slerp(new THREE.Quaternion(Math.cos(-theta/2),0,0,Math.sin(-theta/2)), 0.5)
      state.camera.position.lerp(new THREE.Vector3(0, distance *Math.sin(angle), distance *Math.cos(angle)), 0.5)
      state.camera.updateProjectionMatrix()
    }
  })

  // TODO, when enabling or disabling ArcballControls, smoothly transition/lerp orientation and position
  // TODO maintain orientation/position between having ArcaBallControls enabled and disabled i.e. single source of truth
  // TODO 1. orbit camera around the y axis while idle or 2. orbit light source
  return (
    <>
      <ArcballControls ref={controls} dampingFactor={1} enabled={enabled}/>
      {/* <OrbitControls ref={controls} /> */}
      <axesHelper />
    </>
  )
}
