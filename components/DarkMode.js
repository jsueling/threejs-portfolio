import Sun from './Sun'
import Moon from './Moon'
import { screenIs } from '../utils/screenIs'

export default function DarkMode({ mobileMenuOpen, dark, setDark }) {

  return (
    <>
      {mobileMenuOpen || !screenIs('md')
      ? 
      <div className='ml-2 flex animate-darkModeRight'>
        <SunMoon dark={dark} setDark={setDark} />
      </div>
      :
      <div className='ml-2 flex animate-darkModeLeft'>
        <SunMoon dark={dark} setDark={setDark} />
      </div>}
    </>
  )
}

function SunMoon({ dark, setDark }) {
  return (
    <button
      className='transition-all duration-[600ms] ease-in-out hover:rotate-[360deg] pointer-events-auto dark:text-white'
      onClick={() => setDark(!dark)}
    >
    {dark ? <Sun /> : <Moon />}
  </button>
  )
}