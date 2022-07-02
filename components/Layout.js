import { useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import * as THREE from 'three'

import useDarkMode from '../hooks/useDarkMode'
import Box from './Box'
import Spheres from './Spheres'
import NavBar from './NavBar' // Home, Projects
import Footer from './Footer' // Contact
import MobileMenu from './MobileMenu'

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenu] = useState(false)
  const [axis, setAxis] = useState(new THREE.Vector3(0,1,1))
  const [dark, setDark] = useDarkMode()

  // controlling mobileMenu state if page is resized https://stackoverflow.com/a/66828111
  const handleResize = () => {
    if (window.innerWidth >= 640) setMobileMenu(false)
  }
  const handleScroll = () => {
    setAxis((prev) => ({...prev, x: Math.sin(prev.x)}))
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
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
    <div className='relative w-screen h-screen overflow-auto selection:bg-slate-600 selection:text-white'>
      <div className='w-full h-full absolute'>
        <Canvas camera={{ position: [0, 0, 35] }}>
          <color attach="background" args={[dark ? "grey" : 'white' ]}/>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-5, 0, 0]} dark={dark} />
          <Box position={[5, 0, 0]} dark={dark} />
          <Spheres
            dark={dark}
            axis={axis}
            angle={Math.PI * 0.0005}
          />
        </Canvas>
      </div>
      <div className='absolute pointer-events-none mb-10 mt-10 w-11/12 md:w-10/12 lg:w-7/12 m-auto p-10'>
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
              <main>
                {children}
              </main>
              <Footer />
            </>
        }
      </div>
    </div>
  )
}