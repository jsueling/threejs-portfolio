import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <span>Navbar</span>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/projects'>
        <a>Projects</a>
      </Link>
    </>
  )
}