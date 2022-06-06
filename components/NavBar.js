import Link from 'next/link'
import { useState } from 'react'

import DarkMode from './DarkMode'
import NavButton from './NavButton'
import Menu from './Menu'

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false)

  const menuItems = [
    { title: 'Home', href: '/'},
    { title: 'Projects', href: '/projects'}
  ]

  return (
    <>
      <div className='sm:hidden mobile-menu-button'>
        Mobile NavBar
        <button onClick={() => setMobileMenu(!mobileMenu)}>
          <Menu />
        </button>
      </div>
      <div className='hidden sm:flex justify-center'>
        <nav className='w-1/3 flex justify-between'>
          {menuItems.map((item) =>
              <NavButton key={item.title}>
                <Link href={item.href}>
                  <a>{item.title}</a>
                </Link>
              </NavButton>
          )}
          <DarkMode />
        </nav>
      </div>
    </>
  )
}