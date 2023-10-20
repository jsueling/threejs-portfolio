import { Canvas } from "@react-three/fiber"
import { EffectComposer, Pixelation, Bloom, Noise, Vignette, DepthOfField, GodRays } from '@react-three/postprocessing'
import { BlendFunction, Effect } from "postprocessing";
import { useState } from "react";

// inspiration: https://docs.pmnd.rs/react-three-fiber/getting-started/examples
// Depth of Field https://codesandbox.io/s/bst0cy?file=/src/App.js
// Effect Composer https://docs.pmnd.rs/react-postprocessing/effect-composer
// God ray https://codesandbox.io/s/yggpw5?file=/src/App.js:243-250
// fog

// import AsciiRenderer from './threeJS/AsciiRenderer'
import CameraControls from './threeJS/CameraControls'
import Light from './threeJS/Light'
import Stars from './threeJS/Stars'
import Planet from "./threeJS/Planet"
import Effects from "./threeJS/Effects";

export default function ThreeCanvas({ dark, scroll, mobileMenuOpen }) {
  const homePosition = [0, 0, -100]
  return (
    <Canvas>
      <color attach="background" args={[dark ? "black" : 'grey' ]}/>
      <Light
        homePosition={homePosition}
      />
      <CameraControls
        scroll={scroll}
        enabled={mobileMenuOpen}
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
      <Effects dark={dark} />
    </Canvas>
  )
}