import { useEffect, useState } from 'react'

import NavBar from './NavBar' // Home, Projects
import Footer from './Footer' // Contact
import MobileMenu from './MobileMenu'

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenu] = useState(false)

  // controlling mobileMenu state if page is resized https://stackoverflow.com/a/66828111
  const handleResize = () => {
    if (window.innerWidth >= 640) setMobileMenu(false)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  }, [])

  const menuItems = [
    { title: 'Home', href: '/'},
    { title: 'Projects', href: '/projects'}
  ]

  return (
    <div className='w-screen h-screen bg-slate-400 dark:bg-slate-900 overflow-auto selection:bg-slate-600 selection:text-white'>
      <div className='w-11/12 md:w-9/12 lg:w-7/12 m-auto p-10 bg-red-600 dark:bg-blue-600'>
        <NavBar mobileMenuOpen={mobileMenuOpen} setMobileMenu={setMobileMenu} menuItems={menuItems} />
        {mobileMenuOpen
          ? <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenu={setMobileMenu} menuItems={menuItems} />
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