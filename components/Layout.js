import { useEffect, useState } from 'react'

import ThreeCanvas from './ThreeCanvas'
import NavBar from './NavBar'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import useDarkMode from '../hooks/useDarkMode'
import handleResize from '../utils/handleResize'
import handleScroll from '../utils/handleScroll'
import Explore from './Explore'

export default function Layout({ children }) {

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

  useEffect(() => {
    const canvasDom = document.querySelector('canvas')
    explore ? canvasDom.classList.add('cursor-grab') : canvasDom.classList.remove('cursor-grab')
  }, [explore])

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
          <>
            <main>
              {children}
            </main>
            <Footer />
          </>
        }
        {mobileMenu &&
          <MobileMenu
            menuItems={menuItems}
            setMobileMenu={setMobileMenu}
            setExplore={setExplore}
          />
        }
        {explore &&
          <Explore
            setExplore={setExplore}
            dark={dark}
            setDark={setDark}
          />
        }
      </div>
    </div>
  )
}