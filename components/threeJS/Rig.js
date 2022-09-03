import { useThree, useFrame } from "@react-three/fiber"
import * as THREE from 'three'

// https://threejs.org/docs/?q=useThree#api/en/math/Vector3
// https://gracious-keller-98ef35.netlify.app/docs/api/hooks/useThree/

// credits to: https://codesandbox.io/s/mount-transitions-1sccp?file=/src/App.js:2787-2984
export default function Rig() {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1, camera.position.z), 0.02))
}