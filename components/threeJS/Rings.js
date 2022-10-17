import Ring from './Ring'
import { useMemo } from 'react'

export default function Rings({ dark }) {

  const ringPositions = useMemo(() => {
    const radius = 20
    const numRings = 10
    const angle = (2 * Math.PI) / numRings
  
    return(new Array(numRings).fill()).map((_,i) =>
      [0, radius * Math.cos(angle*i), radius * Math.sin(angle*i), i*angle]
    )
  }, [])

  return (
    <>
      {ringPositions.map((v,i) =>
        <Ring
          key={v}
          ringPosition={v}
          dark={dark}
        />
      )}
    </>
  )
}