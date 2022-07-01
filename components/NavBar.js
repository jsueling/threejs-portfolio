import Link from 'next/link'

import DarkMode from './DarkMode'
import NavButton from './NavButton'
import MenuIcon from './MenuIcon'
import CloseIcon from './CloseIcon'

export default function Navbar({ menuItems, mobileMenuOpen, setMobileMenu, dark, setDark }) {

  return (
    <div className='pointer-events-auto'>
      <div className='sm:hidden flex items-start mb-10'>
        <button className='mr-2' onClick={() => setMobileMenu(!mobileMenuOpen)}>
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <DarkMode
          dark={dark}
          setDark={setDark}
        />
      </div>
      <div className='hidden sm:flex justify-center mb-10'>
        <nav className='flex mx-auto justify-between'>
          {menuItems.map((item) =>
              <NavButton key={item.title}>
                <Link href={item.href}>
                  <a>{item.title}</a>
                </Link>
              </NavButton>
          )}
          <DarkMode
            dark={dark}
            setDark={setDark}
          />
        </nav>
      </div>
    </div>
  )
}