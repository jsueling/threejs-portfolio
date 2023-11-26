import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function Icosahedron({ dark, projectPosition }) {

  const icosahedron = useRef()

  useFrame((_, delta) => {
    icosahedron.current.rotation.z += delta * 0.1
  })

  return (
    <>
      <axesHelper position={projectPosition} args={[1000]} />
      <mesh ref={icosahedron} rotation-x={0.675  * Math.PI} position={projectPosition}>
        <icosahedronGeometry attach='geometry' args={[dark ? 50 : 20]} />
        <meshBasicMaterial attach='material' wireframe color={dark ? "#00D7FF" : "black"} />
      </mesh>
    </>
  )
}