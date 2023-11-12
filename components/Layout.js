import { useEffect, useState } from 'react'

import ThreeCanvas from './ThreeCanvas'
import NavBar from './NavBar'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import useDarkMode from '../hooks/useDarkMode'
import handleResize from '../utils/handleResize'
import handleScroll from '../utils/handleScroll'
import CloseIcon from './CloseIcon'
import DarkMode from './DarkMode'
import { animateMap } from '../utils/animateMap'

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

  const exploreCommands = [
    "Hold left click to rotate",
    "Hold right click to drag",
    "Scroll to zoom",
  ]

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
          <>
            <div className='flex'>
              <div
                onClick={() => setExplore(prev => !prev)}
                className='dark:text-white cursor-pointer pointer-events-auto'
              >
                <CloseIcon />
              </div>
              <DarkMode
                mobileMenu={true} // when true causes darkmode to animate in from the right
                dark={dark}
                setDark={setDark}
              />
            </div>
            <div className='dark:text-white pointer-events-none mt-[10vh] sm:mt-0 h-[60vh] flex flex-col sm:justify-center'>
              {exploreCommands.map((str, i) =>
                <div 
                  className={`${animateMap.staggerUp[i]} mb-2.5 opacity-0 dark:text-white`}
                  key={str}
                >
                  {str}
                </div>
                )}
              <div className='hidden sm:block w-full h-[10vh]'></div>
            </div>
          </>
        }
      </div>
    </div>
  )
}