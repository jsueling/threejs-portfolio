import { useEffect, useState } from 'react'
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import * as THREE from 'three'

import useDarkMode from '../hooks/useDarkMode'
import Box from './Box'
import Spheres from './Spheres'
import NavBar from './NavBar' // Home, Projects
import Footer from './Footer' // Contact
import MobileMenu from './MobileMenu'

// https://codesandbox.io/s/orbitcontrols-react-three-fiber-9iotf?file=/src/index.js:93-101
const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);
      // controls.enabled = false
      return () => controls.dispose()
    },
    [camera, gl]
  );
  return null;
};

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenu] = useState(false)
  const [scroll, setScroll] = useState()
  const [dark, setDark] = useDarkMode()

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
          <CameraController />
          <color attach="background" args={[dark ? "grey" : 'white' ]}/>
          <pointLight position={[10, 10, 10]} />
          <Box position={[-5, 0, 0]} rotation={[ 0.005*scroll, 0.005*scroll, 0.005*scroll ]} dark={dark} />
          <Box position={[5, 0, 0]} rotation={[ 0.005*scroll, 0.005*scroll, 0.005*scroll ]} dark={dark} />
          <Spheres
            axis={new THREE.Vector3(0,1,1)}
            groupAngle={Math.PI * 0.0005}
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