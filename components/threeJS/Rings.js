import Ring from './Ring'
import { useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

export default function SphereRing({ dark, scroll }) {

  const originalOffsets = useMemo(() => {
    const radius = 20
    const numRings = 20
    const angle = (2 * Math.PI) / numRings
  
    return(new Array(numRings).fill()).map((_,i) =>
      [0, radius * Math.cos(angle*i), radius * Math.sin(angle*i), i*angle]
    )
  }, [])

  const ringOffsets = [...originalOffsets]
  console.log("ringOffsets", ringOffsets);

  useFrame((state) => {
    const a = originalOffsets[1]
    const b = originalOffsets[2]
    const c = state.camera.position.y
    const d = state.camera.position.z
    // console.log("abcd",a,b,c,d);
    const cameraDist = (a-c) ** 2 + (b-d) ** 2
    // console.log(cameraDist);
  })

  // useFrame to get cameraPos, calculate pythag dist between camera and each ring then pass to Ring

  return (
    <>
      {ringOffsets.map((v,i) =>
        <Ring
          key={v}
          offsetPos={v}
          dark={dark}
          scroll={scroll}
        />
      )}
    </>
  )
}