import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function Icosahedron({ dark, projectPosition }) {

  const icosahedron = useRef()
  const group = useRef()

  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.05
  })

  return (
    <group ref={group} position={projectPosition}>
      <mesh ref={icosahedron} rotation-x={0.675 * Math.PI}>
        <icosahedronGeometry attach='geometry' args={[dark ? 50 : 15]} />
        <meshBasicMaterial attach='material' wireframe color={dark ? "#00D7FF" : "black"} />
      </mesh>
    </group>
  )
}