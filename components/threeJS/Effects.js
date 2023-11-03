import { EffectComposer, Pixelation, Bloom, Noise, Vignette, DepthOfField, GodRays } from '@react-three/postprocessing'
import { BlendFunction } from "postprocessing";
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

// import AsciiRenderer from './AsciiRenderer'

// inspiration: https://docs.pmnd.rs/react-three-fiber/getting-started/examples
// Depth of Field https://codesandbox.io/s/bst0cy?file=/src/App.js
// Effect Composer https://docs.pmnd.rs/react-postprocessing/effect-composer
// fog
// sparks https://codesandbox.io/s/sbf2i?file=/src/Effects.js

// God rays
// https://codesandbox.io/s/yggpw5?file=/src/App.js
// https://codesandbox.io/s/postprocessing-godrays-i8vkz?file=/src/index.js
// https://github.com/pmndrs/react-postprocessing/blob/2d7edcc2ef7cc2571a86f30ede2b9ee25b38987e/examples/src/demos/TakeControl/Effects.tsx

export default function Effects({ dark }) {
  const [intensity, setIntensity] = useState()

  useFrame((_, delta) => {
    setIntensity(Math.sin(Date.now()))
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
        {/* <Vignette eskil={true} offset={1} darkness={1} /> */}
        <DepthOfField
            // focusTarget={[200,200,200]} // where to focus
            focalLength={60} // focal length
            focusDistance={100}
            bokehScale={4} // bokeh size
            blendFunction={BlendFunction.ADD}
          />
        {/* <Pixelation granularity={10} /> */}
      </>
      }
      {/* <AsciiRenderer invert/> */}
    </EffectComposer>
  )
}