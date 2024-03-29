import Link from 'next/link'

import DarkMode from './DarkMode'
import NavButton from './NavButton'
import Hamburger from './heroicons/Hamburger'

export default function Navbar({ menuItems, mobileMenu, setMobileMenu, dark, setDark, setExplore }) {

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
              <div className='dark:text-white animate-navBar relative mr-12 lg:mr-16 xl:mr-24 cursor-pointer'>
                <a onClick={() => setExplore(true)} className='pointer-events-auto navButton'>
                  Explore
                </a>
              </div>
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