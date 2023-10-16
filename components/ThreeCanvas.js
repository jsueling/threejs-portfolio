import { Canvas } from "@react-three/fiber"
import { EffectComposer, Pixelation, Bloom } from '@react-three/postprocessing'

// inspiration: https://docs.pmnd.rs/react-three-fiber/getting-started/examples
// Depth of Field https://codesandbox.io/s/bst0cy?file=/src/App.js
// Effect Composer https://docs.pmnd.rs/react-postprocessing/effect-composer
// God ray https://codesandbox.io/s/yggpw5?file=/src/App.js:243-250

// import AsciiRenderer from './threeJS/AsciiRenderer'
import CameraControls from './threeJS/CameraControls'
import Light from './threeJS/Light'
import Stars from './threeJS/Stars'
import Planet from "./threeJS/Planet"

export default function ThreeCanvas({ dark, scroll, mobileMenuOpen }) {

  return (
    <Canvas>
      <color attach="background" args={[dark ? "black" : 'white' ]}/>
      <Light dark={dark} />
      <CameraControls
        scroll={scroll}
        enabled={mobileMenuOpen}
      />
        <Planet
          dark={dark}
        />
        <Stars
          frequency={100}
          dark={dark}
        />
      <EffectComposer
        autoClear={false}
      >
        <Bloom
            intensity={dark ? 10 : 0}
            luminanceThreshold={0}
            luminanceSmoothing={0.0}
            mipmapBlur={true}
          />
        {/* <Pixelation granularity={(1-Math.sin(scroll*Math.PI))* 15} /> */}
        {/* <AsciiRenderer invert/> */}
      </EffectComposer>
    </Canvas>
  )
}