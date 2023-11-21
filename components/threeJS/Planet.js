import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

import LowPolyEarth from "./LowPolyEarth"
// thank you to: "LowPoly Earth" (https://skfb.ly/6TAUn) by JasperTobias is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

export default function Planet({ homePosition }) {
  const planetRef = useRef()

  useFrame((state, delta) => {
    planetRef.current.rotation.x += delta * 0.1
  })

  return (
    <group position={homePosition} ref={planetRef}>
      <LowPolyEarth
        castshadow
        receiveshadow
      />
    </group>
  )
}