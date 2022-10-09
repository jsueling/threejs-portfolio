import Ring from './Ring'
import { useMemo } from 'react'

export default function SphereRing({ dark, scroll }) {

  const ringOffsets = useMemo(() => {
    const distance = 20
    const numRings = 20
    const angle = (2 * Math.PI) / numRings
  
    return(new Array(numRings).fill()).map((_,i) =>
      [0, distance * Math.cos(angle*i), distance * Math.sin(angle*i), i*angle]
    )
  }, [])

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