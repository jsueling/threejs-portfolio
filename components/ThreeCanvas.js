import { Canvas, useFrame } from "@react-three/fiber"
import { easing } from 'maath'

import Camera from "./threeJS/Camera"

// inspiration: https://docs.pmnd.rs/react-three-fiber/getting-started/examples
// monitors https://codesandbox.io/s/bst0cy?file=/src/App.js
// image gallery https://codesandbox.io/s/lx2h8?file=/src/App.js
// sparks https://codesandbox.io/s/sbf2i?file=/src/Effects.js + https://github.com/spite/THREE.MeshLine#declarative-use
// fog

import Light from './threeJS/Light'
import Stars from './threeJS/Stars'
import Planet from "./threeJS/Planet"
import Effects from "./threeJS/Effects";
import Icosahedron from "./threeJS/Icosahedron"

export default function ThreeCanvas({ dark, scroll, explore }) {
  const homePosition = [0, 0, -100]
  const projectPosition = [0, 0, 100]

  function BgColourOscillate() { // https://github.com/pmndrs/maath/tree/main#easing
    useFrame((state, delta) => {
      easing.dampC(state.scene.background, dark ? 'black' : 'white', 0.2, delta)
    })
  }

  return (
    <Canvas>
      <color attach="background" args={['white']} />
      <BgColourOscillate />
      {/* {!dark && <fog attach="fog" args={["white", 300, 500]} />} */}
      <Light
        homePosition={homePosition}
        dark={dark}
      />
      <Camera
        scroll={scroll}
        enabled={explore}
        homePosition={homePosition}
        projectPosition={projectPosition}
      />
      <Planet
        homePosition={homePosition}
      />
      <Stars
        frequency={100}
        dark={dark}
        homePosition={homePosition}
      />
      <Icosahedron
        dark={dark}
        projectPosition={projectPosition}
      />
      <Effects
        dark={dark}
      />
    </Canvas>
  )
}