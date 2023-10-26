import { useContext } from 'react'

import NavBar from '../NavBar'
import Footer from '../Footer'
import MobileMenu from '../MobileMenu'
import { LayoutContext } from './ThreeLayout'

export default function NavNestedLayout({ children }) {
  const layout = useContext(LayoutContext)

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Projects', href: '/projects' },
    { title: 'Explore', href: '/explore' }
  ]

  return (
    <div id='content' className='absolute pointer-events-none py-20 px-10 sm:px-32 lg:px-64 xl:px-96'>
      <NavBar
        mobileMenu={layout.mobileMenu}
        setMobileMenu={layout.setMobileMenu}
        dark={layout.dark}
        setDark={layout.setDark}
        menuItems={menuItems}
      />
      {layout.mobileMenu
        ? <MobileMenu
            mobileMenu={layout.mobileMenu}
            setMobileMenu={layout.setMobileMenu}
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
  )
}