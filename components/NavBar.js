import Link from 'next/link'

import DarkMode from './DarkMode'
import NavButton from './NavButton'
import Hamburger from './Hamburger'

export default function Navbar({ menuItems, mobileMenu, setMobileMenu, dark, setDark }) {

  return (
    <div className='mb-10 flex flex-start col-span-full'>
      <Hamburger
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
      <div className='hidden md:block'>
        <nav className='flex flex-start'>
          {!mobileMenu &&
            <>
              {menuItems.map((item) =>
                <div
                  key={item.title}
                  className='dark:text-white relative animate-navBar first:ml-16 first:lg:ml-28 first:xl:ml-32 mr-16 lg:mr-28 xl:mr-32 last:mr-14 last:lg:mr-[104px] last:xl:mr-[120px]'
                >
                  <NavButton>
                    <Link href={item.href}>
                      <a>{item.title}</a>
                    </Link>
                  </NavButton>
                </div>
                )}
            </>
          }
        </nav>
      </div>
      <DarkMode
        mobileMenu={mobileMenu}
        dark={dark}
        setDark={setDark}
      />
    </div>
  )
}