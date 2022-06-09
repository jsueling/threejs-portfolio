import Link from 'next/link'

import DarkMode from './DarkMode'
import NavButton from './NavButton'
import MenuIcon from './MenuIcon'
import CloseIcon from './CloseIcon'

export default function Navbar({ menuItems, mobileMenuOpen, setMobileMenu }) {

  return (
    <>
      <div className='sm:hidden flex items-start'>
        <button onClick={() => setMobileMenu(!mobileMenuOpen)}>
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <DarkMode />
      </div>
      <div className='hidden sm:flex justify-center'>
        <nav className='flex mx-auto justify-between'>
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