import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function LowPolyEarth(props) {
  const gltf = useLoader(GLTFLoader, '/scene.gltf')
  return <primitive {...props} object={gltf.scene} scale={0.1}/>
}