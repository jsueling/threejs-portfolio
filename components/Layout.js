import { useEffect, useState } from 'react'

import ThreeCanvas from './ThreeCanvas'
import NavBar from './NavBar'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import useDarkMode from '../hooks/useDarkMode'
import handleResize from '../utils/handleResize'
import handleScroll from '../utils/handleScroll'
import CloseIcon from './CloseIcon'

export default function ThreeLayout({ children }) {

  const [mobileMenu, setMobileMenu] = useState(false)
  const [explore, setExplore] = useState(false)
  const [scroll, setScroll] = useState(0)
  const [dark, setDark] = useDarkMode(false)

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Projects', href: '/projects' }
  ]

  useEffect(() => {
    window.addEventListener("resize", () => handleResize(setMobileMenu))
    window.addEventListener("scroll", () => handleScroll(setScroll))

    // cleanup effects
    return () => {
      window.removeEventListener('resize', () => handleResize(setMobileMenu))
      window.removeEventListener('scroll', () => handleScroll(setScroll))
    }
  }, [])

  return (
    <div className='selection:bg-slate-600 selection:text-white'>
      <div className='fixed h-full w-full'>
        <ThreeCanvas
          scroll={scroll}
          dark={dark}
          explore={explore}
        />
      </div>
      <div id='content' className='absolute pointer-events-none py-20 px-10 sm:px-32 lg:px-64 xl:px-96'>
        {!explore &&
          <NavBar
            menuItems={menuItems}
            mobileMenu={mobileMenu}
            setMobileMenu={setMobileMenu}
            dark={dark}
            setDark={setDark}
            setExplore={setExplore}
          />
        }
        {!mobileMenu && !explore &&
          <div className='col-span-full'>
            <main>
              {children}
            </main>
            <Footer />
          </div>
        }
        {mobileMenu &&
          <MobileMenu
            menuItems={menuItems}
            setMobileMenu={setMobileMenu}
            setExplore={setExplore}
          />
        }
        {explore &&
          <div
            onClick={() => setExplore(prev => !prev)}
            className='dark:text-white cursor-pointer pointer-events-auto'
          >
            <CloseIcon />
          </div>
        }
      </div>
    </div>
  )
}