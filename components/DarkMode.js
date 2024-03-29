import { useEffect } from 'react'

import Sun from './heroicons/Sun'
import Moon from './heroicons/Moon'
import { screenIs } from '../utils/screenIs'

export default function DarkMode({ mobileMenu, dark, setDark }) {

  useEffect(() => {
    const target = document.querySelector('.sunMoon')
    if (mobileMenu || !screenIs('md')) {
      target.classList.add('animate-darkModeRight')
      target.classList.remove('animate-darkModeLeft')
    } else {
      target.classList.add('animate-darkModeLeft')
      target.classList.remove('animate-darkModeRight')
    }
  })

  return (
    <div className='sunMoon ml-2 flex'>
      <button
        className='pointer-events-auto transition-all duration-[600ms] ease-in-out hover:rotate-[360deg] dark:text-white'
        onClick={() => setDark(prev => !prev)}
      >
        {dark ? <Sun /> : <Moon />}
      </button>
    </div>
  )
}