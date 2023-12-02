import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// thank you to: "LowPoly Earth" (https://skfb.ly/6TAUn) by JasperTobias is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
export default function LowPolyEarth(props) {
  const gltf = useLoader(GLTFLoader, '/threejs-portfolio/scene.gltf')
  return <primitive {...props} object={gltf.scene} scale={0.1}/>
}