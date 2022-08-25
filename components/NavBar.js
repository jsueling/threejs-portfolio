import Link from 'next/link'

import DarkMode from './DarkMode'
import NavButton from './NavButton'
import Hamburger from './Hamburger'
import { screenIs } from '../utils/screenIs'

export default function Navbar({ menuItems, mobileMenuOpen, setMobileMenu, dark, setDark }) {

  return (
    <div className='col-span-full'>
      <Hamburger mobileMenuOpen={mobileMenuOpen} setMobileMenu={setMobileMenu}/>
      <DarkMode dark={dark} setDark={setDark} />
      <div className='sm:hidden flex items-start mb-10'>
        <Hamburger mobileMenuOpen={mobileMenuOpen} setMobileMenu={setMobileMenu} />
        <DarkMode dark={dark} setDark={setDark} />
      </div>
      <div className='hidden sm:block mb-10'>
        <nav className='flex justify-between'>
          <Hamburger mobileMenuOpen={mobileMenuOpen} setMobileMenu={setMobileMenu} />
          {mobileMenuOpen && <DarkMode dark={dark} setDark={setDark} />}
          {!mobileMenuOpen &&
            <>
              {menuItems.map((item) =>
                  <div key={item.title} className='dark:text-white relative mx-10 first:mx-0'>
                    <NavButton>
                      <Link href={item.href}>
                        <a>{item.title}</a>
                      </Link>
                    </NavButton>
                  </div>
                )}
              <DarkMode dark={dark} setDark={setDark} />
            </>
          }

        </nav>
      </div>
    </div>
  )
}