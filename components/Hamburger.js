import MenuIcon from './MenuIcon'
import CloseIcon from './CloseIcon'

export default function Hamburger({ mobileMenuOpen, setMobileMenu }) {
  return (
    <button className='mr-2 md:mr-0 dark:text-white pointer-events-auto' onClick={() => setMobileMenu(!mobileMenuOpen)}>
      {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  )
}