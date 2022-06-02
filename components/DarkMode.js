import { useState } from 'react'
// import useDarkMode from '../hooks/useDarkMode'

import Sun from './Sun'
import Moon from './Moon'

export default function DarkMode() {
  const [dark, setDark] = useState('false')
  // const

  const changeDarkMode = () => {
    setDark(!dark)
  }

  return (
    <button className='transition-all duration-[600ms] ease-in-out hover:rotate-[360deg]' onClick={changeDarkMode}>
      {dark ? <Sun /> : <Moon />}
    </button>
  )
}