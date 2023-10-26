import { Canvas } from "@react-three/fiber"

// inspiration: https://docs.pmnd.rs/react-three-fiber/getting-started/examples
// Depth of Field https://codesandbox.io/s/bst0cy?file=/src/App.js
// Effect Composer https://docs.pmnd.rs/react-postprocessing/effect-composer
// God ray https://codesandbox.io/s/yggpw5?file=/src/App.js:243-250
// fog

import ArcballCamera from './threeJS/ArcballCamera'
import Light from './threeJS/Light'
import Stars from './threeJS/Stars'
import Planet from "./threeJS/Planet"
import Effects from "./threeJS/Effects";

export default function ThreeCanvas({ dark, scroll, mobileMenu }) {
  const homePosition = [0, 0, -100]
  return (
    <Canvas>
      <color attach="background" args={[dark ? "black" : 'grey' ]} />
      <Light
        homePosition={homePosition}
      />
      <ArcballCamera
        scroll={scroll}
        enabled={mobileMenu}
      />
      <Planet
        dark={dark}
        homePosition={homePosition}
      />
      <Stars
        frequency={100}
        dark={dark}
        homePosition={homePosition}
      />
      <mesh position={[0, 0, 100]}>
        <sphereGeometry attach='geometry' args={[10, 64, 32]} />
        <meshBasicMaterial attach='material' color='red' />
      </mesh>
      <Effects dark={dark} />
    </Canvas>
  )
}