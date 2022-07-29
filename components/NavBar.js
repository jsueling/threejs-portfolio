import Link from 'next/link'

import DarkMode from './DarkMode'
import NavButton from './NavButton'
import MenuIcon from './MenuIcon'
import CloseIcon from './CloseIcon'

export default function Navbar({ menuItems, mobileMenuOpen, setMobileMenu, dark, setDark }) {

  return (
    <div className='col-span-full'>
      <div className='sm:hidden flex items-start mb-10'>
        <button className='mr-2 dark:text-white pointer-events-auto' onClick={() => setMobileMenu(!mobileMenuOpen)}>
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <DarkMode
          dark={dark}
          setDark={setDark}
        />
      </div>
      <div className='hidden sm:block mb-10'>
        <nav className='flex'>
          {menuItems.map((item) =>
            <div key={item.title} className='pointer-events-auto relative mx-20 first:mx-0'>
              <NavButton>
                <Link href={item.href}>
                  <a>{item.title}</a>
                </Link>
              </NavButton>
            </div>
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