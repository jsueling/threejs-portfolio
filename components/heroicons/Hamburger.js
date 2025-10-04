import MenuIcon from './MenuIcon'
import CloseIcon from './CloseIcon'

export default function Hamburger({ mobileMenu, setMobileMenu }) {
  return (
    <button
      className='dark:text-white pointer-events-auto'
      onClick={() => setMobileMenu(prev => !prev)}
      aria-label={mobileMenu ? 'Close Menu' : 'Open Menu'}
    >
      {mobileMenu ? <CloseIcon /> : <MenuIcon />}
    </button>
  )
}