import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

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
      {dark
      ?
        <Bloom
          intensity={intensity}
          luminanceThreshold={0}
          luminanceSmoothing={0.0}
          mipmapBlur={true}
        />
      :
        <Vignette
          eskil={true}
          offset={1.5}
          darkness={0.5}
        />
      }
    </EffectComposer>
  )
}