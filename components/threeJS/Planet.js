import { MeshReflectorMaterial } from '@react-three/drei'

export default function Planet({ dark }) {
  return (
    <mesh>
      <sphereGeometry args={[10, 64, 32]} />
      {/* <meshStandardMaterial color={dark ? 'white' : 'black'} /> */}
      <MeshReflectorMaterial // reference https://github.com/pmndrs/drei#meshreflectormaterial + https://codesandbox.io/s/image-gallery-lx2h8?file=/src/App.js:1040-1055
        color={"black"}
        metalness={0.5}
        // blur={[300, 50]}
        // resolution={1024}
        // mixBlur={1}
        // mixStrength={100}
        // roughness={1}
        // depthScale={1.2}
        // minDepthThreshold={0.4}
        // maxDepthThreshold={1.4}
        // color="#202020"
        // metalness={0.8}
      />
    </mesh>
  )
}