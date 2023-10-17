import { EffectComposer, Pixelation, Bloom, Noise, Vignette, DepthOfField, GodRays } from '@react-three/postprocessing'
import { BlendFunction } from "postprocessing";
import { Suspense } from 'react';
import { useControls } from 'leva'

// import AsciiRenderer from './AsciiRenderer'

// inspiration: https://docs.pmnd.rs/react-three-fiber/getting-started/examples
// Depth of Field https://codesandbox.io/s/bst0cy?file=/src/App.js
// Effect Composer https://docs.pmnd.rs/react-postprocessing/effect-composer
// fog

// God rays
// https://codesandbox.io/s/yggpw5?file=/src/App.js
// https://codesandbox.io/s/postprocessing-godrays-i8vkz?file=/src/index.js
// https://github.com/pmndrs/react-postprocessing/blob/2d7edcc2ef7cc2571a86f30ede2b9ee25b38987e/examples/src/demos/TakeControl/Effects.tsx

export default function Effects({ material, dark }) {

  const { exposure, decay, blur } = useControls('PostProcessing - GodRays', {
    exposure: {
      value: 0.34,
      min: 0,
      max: 1,
    },
    decay: {
      value: 0.9,
      min: 0,
      max: 1,
      step: 0.1,
    },
    blur: {
      value: false,
    },
  })

  return (
    <Suspense fallback={null}>
      {material && <EffectComposer
        autoClear={false}
      >
        {dark ?
        <Bloom
          intensity={dark ? 10 : 0}
          luminanceThreshold={0}
          luminanceSmoothing={0.0}
          mipmapBlur={true}
        />
        : 
        <>
          {material && <GodRays sun={material} exposure={exposure} decay={decay} blur={blur} />}
          {/* <Noise premultiply blendFunction={BlendFunction.REFLECT} /> */}
          {/* <Vignette eskil={true} offset={1} darkness={2} /> */}
          {/* <DepthOfField
              // focusTarget={[200,200,200]} // where to focus
              focalLength={60} // focal length
              focusDistance={100}
              bokehScale={4} // bokeh size
              blendFunction={BlendFunction.ADD}
            /> */}
          {/* <Pixelation granularity={10} /> */}
        </>
        }
        {/* <AsciiRenderer invert/> */}
      </EffectComposer>}
    </Suspense>
  )
}