import { EffectComposer, Pixelation, Bloom, Noise, Vignette, DepthOfField, GodRays } from '@react-three/postprocessing'
import { BlendFunction } from "postprocessing";
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

// import AsciiRenderer from './AsciiRenderer'

// Depth of Field https://codesandbox.io/s/bst0cy?file=/src/App.js
// Effect Composer https://docs.pmnd.rs/react-postprocessing/effect-composer

// God rays
// https://codesandbox.io/s/yggpw5?file=/src/App.js:243-250
// https://codesandbox.io/s/yggpw5?file=/src/App.js
// https://codesandbox.io/s/postprocessing-godrays-i8vkz?file=/src/index.js
// https://github.com/pmndrs/react-postprocessing/blob/2d7edcc2ef7cc2571a86f30ede2b9ee25b38987e/examples/src/demos/TakeControl/Effects.tsx

export default function Effects({ dark }) {
  const [intensity, setIntensity] = useState()

  const intensitySpeed = 0.00015

  useFrame((_, delta) => {
    // Math.sin(Date.now() * Math.PI ) becomes 0 every millisecond following sin wave, bouncing between -1 and 1
    setIntensity(Math.sin(Date.now() * intensitySpeed * Math.PI) * 10 + 10)
  })

  return (
    <EffectComposer
      autoClear={false}
    >
      {dark ?
      <Bloom
        intensity={intensity}
        luminanceThreshold={0}
        luminanceSmoothing={0.0}
        mipmapBlur={true}
      />
      : 
      <>
        {/* {material && <GodRays sun={material} exposure={0.34} decay={0.8} blur />} */}
        {/* <Noise premultiply blendFunction={BlendFunction.REFLECT} /> */}
        <Vignette
          eskil={true}
          offset={1.5}
          darkness={0.5}
        />
        <DepthOfField
          bokehScale={5} // bokeh size
        />
      </>
      }
      {/* <Pixelation granularity={5} /> */}
      {/* <AsciiRenderer invert/> */}
    </EffectComposer>
  )
}