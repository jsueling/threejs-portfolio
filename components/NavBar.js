import Link from 'next/link'

import DarkMode from './darkMode'
import NavButton from './NavButton'

export default function Navbar() {
  return (
    <>
      <div className='text-center'>Navbar</div>
      <div className='flex justify-center'>
        <NavButton>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </NavButton>
        <NavButton>
          <Link href='/projects'>
            <a>Projects</a>
          </Link>
        </NavButton>
        <DarkMode />
      </div>
    </>
  )
}