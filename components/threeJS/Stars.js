import { Stars as DreiStars } from '@react-three/drei'

export default function Stars(props) {
  // TODO light mode dark stars
  // https://github.com/pmndrs/drei#stars
  return (
    <DreiStars {...props} />
  )
}