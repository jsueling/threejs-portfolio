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
  const [scroll, setScroll] = useState(0)
  const [dark, setDark] = useDarkMode()

  // mobileMenu should close if screen is resized
  const handleResize = () => {
    if (window.innerWidth >= 640) setMobileMenu(false)
  }

  const handleScroll = () => {
    // console.log(document.body.getBoundingClientRect());
    setScroll(document.body.getBoundingClientRect().top)
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
    <div className='grid grid-cols-12 selection:bg-slate-600 selection:text-white'>
      <div className='fixed h-full w-full'>
        <Canvas camera={{ position: [0, 0, 35] }}>
          <color attach="background" args={[dark ? "grey" : 'white' ]}/>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-5, 0, 0]} rotation={[ 0.005*scroll, 0.005*scroll, 0.005*scroll ]} dark={dark} />
          <Box position={[5, 0, 0]} rotation={[ 0.005*scroll, 0.005*scroll, 0.005*scroll ]} dark={dark} />
          <Spheres
            dark={dark}
            axis={new THREE.Vector3(0,1,1)}
            angle={Math.PI * 0.0005}
          />
        </Canvas>
      </div>
      <div className='pointer-events-none m-auto p-10'>
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