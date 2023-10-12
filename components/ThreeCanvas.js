import { Canvas } from "@react-three/fiber"
import { EffectComposer, Pixelation } from '@react-three/postprocessing'

// inspiration: https://docs.pmnd.rs/react-three-fiber/getting-started/examples
// bloom Sun https://codesandbox.io/s/whnhyr

import Boxes from './threeJS/Boxes'
import Rings from './threeJS/Rings'
import CameraControls from './threeJS/CameraControls'
import AsciiRenderer from './threeJS/AsciiRenderer'
import Light from './threeJS/Light'
import Stars from './threeJS/Stars'
import Cylinder from './threeJS/Cylinder'

export default function ThreeCanvas({ dark, scroll, mobileMenuOpen }) {

  return (
    <Canvas>
      <color attach="background" args={[dark ? "black" : 'white' ]}/>
      <Light dark={dark} />
      <Boxes
        dark={dark}
        scroll={scroll}
      />
      <Rings
        dark={dark}
        scroll={scroll}
      />
      <CameraControls scroll={scroll} enabled={mobileMenuOpen} />
      {/* <AsciiRenderer invert /> */}
      <Stars
        frequency={500}
        dark={dark}
      />
      {/* <EffectComposer>
        <Pixelation granularity={(1-Math.sin(scroll*Math.PI))* 15} />
      </EffectComposer> */}
      <Cylinder />
    </Canvas>
  )
}