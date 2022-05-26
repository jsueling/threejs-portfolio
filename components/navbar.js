import Link from 'next/link'

import DarkMode from './darkMode'

export default function Navbar() {
  return (
    <>
      <div className='text-center'>Navbar</div>
      <div className='flex justify-evenly'>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/projects'>
          <a>Projects</a>
        </Link>
        <DarkMode />
      </div>
    </>
  )
}