import { useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber"

import useDarkMode from '../hooks/useDarkMode'
import Box from './threeJS/Box'
import Spheres from './threeJS/Spheres'
import NavBar from './NavBar' // Home, Projects
import Footer from './Footer' // Contact
import MobileMenu from './MobileMenu'

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenu] = useState(false)
  const [scroll, setScroll] = useState(0)
  const [dark, setDark] = useDarkMode(false)

  // mobileMenu should close if screen is resized
  const handleResize = () => {
    if (window.innerWidth >= 640) setMobileMenu(false)
  }

  const handleScroll = () => {
    const elem = document.getElementById('mainContent')
    const DOMRect = elem.getBoundingClientRect()
    setScroll(-1*DOMRect.top / (DOMRect.height-window.innerHeight))
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll, { capture: true })

    // cleanup effects
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const menuItems = [
    { title: 'Home', href: '/'},
    { title: 'Projects', href: '/projects'}
  ]

  return (
    <div className='selection:bg-slate-600 selection:text-white'>
      <div id='main' className='fixed h-full w-full'>
        <Canvas camera={{ position: [0, 0, 35]}}>
          <ambientLight intensity={0.5} />
          <color attach="background" args={[dark ? "grey" : 'white' ]}/>
          <pointLight position={[10, 10, 10]} />
          <Box position={[-5, 0, 0]} scroll={scroll} dark={dark} />
          <Box position={[5, 0, 0]} scroll={scroll} dark={dark} />
          <Spheres
            dark={dark}
            scroll={scroll}
          />
        </Canvas>
      </div>
      <div id='mainContent' className='grid grid-cols-6 absolute pointer-events-none py-20 px-10 sm:px-32 lg:px-56'>
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
          : <>
              <main className='col-span-full'>
                {children}
              </main>
              <Footer />
            </>
        }
      </div>
    </div>
  )
}