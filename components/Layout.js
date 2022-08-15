import { useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'

import useDarkMode from '../hooks/useDarkMode'
import Boxes from './threeJS/Boxes'
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
    const elem = document.getElementById('content')
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

  /**
   * 1. By adding EffectComposer context is lost somehow
   * 2. When context is lost EffectComposer throws error
   * see https://github.com/pmndrs/react-three-fiber/discussions/1151
   * 
   * current EffectComposer from https://github.com/pmndrs/react-postprocessing
   */

  return (
    <div className='selection:bg-slate-600 selection:text-white'>
      <div className='fixed h-full w-full'>
        <Canvas camera={{ position: [-10, 0, 35]}}>
          <ambientLight intensity={0.5} />
          <color attach="background" args={[dark ? "black" : 'white' ]}/>
          <pointLight position={[10, 10, 10]} />
          <Boxes
            dark={dark}
            scroll={scroll}
          />
          <Spheres
            dark={dark}
            scroll={scroll}
          />
        <EffectComposer>
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
        </Canvas>
      </div>
      <div id='content' className='grid grid-cols-6 absolute pointer-events-none py-20 px-10 sm:px-32 lg:px-64 xl:px-96'>
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