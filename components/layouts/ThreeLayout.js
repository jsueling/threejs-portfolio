import { useEffect, useState, createContext } from 'react'

import ThreeCanvas from '../ThreeCanvas'
import useDarkMode from '../../hooks/useDarkMode'
import handleResize from '../../utils/handleResize'
import handleScroll from '../../utils/handleScroll'

export const LayoutContext = createContext();

export default function ThreeLayout({ children }) {

  const [mobileMenu, setMobileMenu] = useState(false)
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

  return (
    <div className='selection:bg-slate-600 selection:text-white'>
      <div className='fixed h-full w-full'>
        <ThreeCanvas
          mobileMenu={mobileMenu}
          scroll={scroll}
          dark={dark}
        />
      </div>
      <LayoutContext.Provider value={{ mobileMenu, setMobileMenu, scroll, setScroll, dark, setDark }}>
        {children}
      </LayoutContext.Provider>
    </div>
  )
}