export default function Planet({ homePosition }) {
  return (
    <mesh position={homePosition}>
      <sphereGeometry args={[10, 64, 32]} />
      <meshStandardMaterial color={'black'} />
    </mesh>
  )
}