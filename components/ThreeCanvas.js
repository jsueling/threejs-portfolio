import { Canvas, useFrame } from "@react-three/fiber"
import { easing } from 'maath'

import Camera from "./threeJS/Camera"

// monitors https://codesandbox.io/s/bst0cy?file=/src/App.js
// image gallery https://codesandbox.io/s/lx2h8?file=/src/App.js

// inspiration: https://docs.pmnd.rs/react-three-fiber/getting-started/examples
// Depth of Field https://codesandbox.io/s/bst0cy?file=/src/App.js
// Effect Composer https://docs.pmnd.rs/react-postprocessing/effect-composer
// God ray https://codesandbox.io/s/yggpw5?file=/src/App.js:243-250
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
      easing.dampC(state.scene.background, dark ? 'black' : 'white', 0.4, delta)
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