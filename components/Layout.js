import { useEffect, useState, useMemo } from 'react'
import { Canvas } from "@react-three/fiber"
import { EffectComposer, Pixelation } from '@react-three/postprocessing'

import useDarkMode from '../hooks/useDarkMode'
import Boxes from './threeJS/Boxes'
import Spheres from './threeJS/Spheres'
import NavBar from './NavBar' // Home, Projects
import Footer from './Footer' // Contact
import MobileMenu from './MobileMenu'
import CameraControls from './threeJS/CameraControls'
import AsciiRenderer from './threeJS/AsciiRenderer'
import Rig from './threeJS/Rig'
import handleResize from '../utils/handleResize'
import handleScroll from '../utils/handleScroll'
import Light from './threeJS/Light'
import Stars from './threeJS/Stars'
import Cylinder from './threeJS/Cylinder'

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenu] = useState(false)
  const [scroll, setScroll] = useState(0)
  const [dark, setDark] = useDarkMode(false)

  const ringOffsets = useMemo(() => {
    const numRings = 10
    const angle = (2 * Math.PI) / numRings

    return(new Array(numRings).fill()).map((_,i) =>
      [0, 20*Math.cos(angle*i), 20*Math.sin(angle*i), i*angle]
    )
  }, [])

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
    { title: 'Projects', href: '/projects'}
  ]

  return (
    <div className='selection:bg-slate-600 selection:text-white'>
      <div className='fixed h-full w-full'>
        <Canvas>
          <color attach="background" args={[dark ? "black" : 'white' ]}/>
          <Light dark={dark} />
          <Boxes
            dark={dark}
            scroll={scroll}
          />
          {ringOffsets.map((v,i) =>
            <Spheres
              key={i}
              offsetPos={v}
              dark={dark}
              scroll={scroll}
            />
          )}
          <CameraControls scroll={scroll} enabled={mobileMenuOpen} />
          {/* <AsciiRenderer invert /> */}
          <Stars radius={100} depth={50} count={2000} factor={4} fade />
          {/* <EffectComposer>
            <Pixelation granularity={(1-Math.sin(scroll*Math.PI))* 15} />
          </EffectComposer> */}
          {/* <Rig /> */}
          <Cylinder />
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