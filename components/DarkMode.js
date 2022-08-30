import Sun from './Sun'
import Moon from './Moon'
import { screenIs } from '../utils/screenIs'

export default function DarkMode({ mobileMenuOpen, dark, setDark }) {

  // mobileMenuOpen or (screen md and above) ? show component with fadeInLeft : fadeInRight

  return (
    // <>
    // {screenIs('md') && <></>}
    <button
      className='ml-2 transition-all duration-[600ms] ease-in-out hover:rotate-[360deg] pointer-events-auto dark:text-white'
      onClick={() => setDark(!dark)}
    >
      {dark ? <Sun /> : <Moon />}
    </button>
    // </>
  )
}