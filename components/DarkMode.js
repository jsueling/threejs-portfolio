import { useState } from 'react'

import Sun from './Sun'
import Moon from './Moon'

export default function DarkMode() {
  const [dark, setDark] = useState('false')

  return (
    <div className='transition-all duration-[600ms] ease-in-out hover:rotate-[360deg]' onClick={() => setDark(!dark)}>
      {dark ? <Sun /> : <Moon />}
    </div>
  )
}