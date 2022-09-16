import { useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { EffectComposer, Pixelation } from '@react-three/postprocessing'
import { Stars } from '@react-three/drei'

import useDarkMode from '../hooks/useDarkMode'
import Boxes from './threeJS/Boxes'
import Spheres from './threeJS/Spheres'
import NavBar from './NavBar' // Home, Projects
import Footer from './Footer' // Contact
import MobileMenu from './MobileMenu'
import CameraControls from './threeJS/CameraControls'
import AsciiRenderer from './threeJS/AsciiRenderer'
import Rig from './threeJS/Rig'

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

  return (
    <div className='selection:bg-slate-600 selection:text-white'>
      <div className='fixed h-full w-full'>
        <Canvas camera={{ position: [0, 0, 35]}}>
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
          <CameraControls scroll={scroll} enabled={mobileMenuOpen} />
          {/* <AsciiRenderer invert /> */}
          {/* TODO light mode dark stars */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <EffectComposer>
            <Pixelation granularity={(1-Math.sin(scroll*Math.PI))* 15} />
          </EffectComposer>
          {/* <Rig /> */}
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