import Link from 'next/link'

import DarkMode from './DarkMode'
import NavButton from './NavButton'

export default function Navbar() {
  return (
    <div className='flex justify-center'>
      <div className='w-1/3 flex justify-between'>
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
    </div>
  )
}