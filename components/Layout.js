import { useEffect, useState } from 'react'

import useDarkMode from '../hooks/useDarkMode'
import NavBar from './NavBar'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import handleResize from '../utils/handleResize'
import handleScroll from '../utils/handleScroll'
import ThreeCanvas from './ThreeCanvas'

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenu] = useState(false)
  const [scroll, setScroll] = useState(0)
  const [dark, setDark] = useDarkMode(false)

  useEffect(() => {
    window.addEventListener("resize", () => handleResize(setMobileMenu))
    window.addEventListener("scroll", () => handleScroll(setScroll))

    // cleanup effects
    return () => {
      window.removeEventListener('resize', () => handleResize(setMobileMenu))
      window.removeEventListener('scroll', () => handleScroll(setScroll))
    }
  }, [])

  const menuItems = [
    { title: 'Home', href: '/'},
    { title: 'About', href: '/about'},
    { title: 'Projects', href: '/projects'}
  ]

  return (
    <div className='selection:bg-slate-600 selection:text-white'>
      <div className='fixed h-full w-full'>
      <ThreeCanvas
        mobileMenuOpen={mobileMenuOpen}
        scroll={scroll}
        dark={dark}
      />
      </div>
      <div id='content' className='absolute pointer-events-none py-20 px-10 sm:px-32 lg:px-64 xl:px-96'>
        <NavBar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenu={setMobileMenu}
          menuItems={menuItems}
          dark={dark}
          setDark={setDark}
        />
        {mobileMenuOpen
          ? <MobileMenu
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenu={setMobileMenu}
              menuItems={menuItems}
            />
          : <div className='col-span-full'>
              <main>
                {children}
              </main>
              <Footer />
            </div>
        }
      </div>
    </div>
  )
}