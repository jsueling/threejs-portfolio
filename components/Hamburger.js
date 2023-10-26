import MenuIcon from './MenuIcon'
import CloseIcon from './CloseIcon'

export default function Hamburger({ mobileMenu, setMobileMenu }) {
  return (
    <button className='dark:text-white pointer-events-auto' onClick={() => setMobileMenu(prev => !prev)}>
      {mobileMenu ? <CloseIcon /> : <MenuIcon />}
    </button>
  )
}