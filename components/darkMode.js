import { useState } from 'react'

import Sun from './sun'
import Moon from './moon'

export default function DarkMode() {
  const [dark, setDark] = useState('false')

  return (
    <div onClick={() => setDark(!dark)}>
      {dark ? <Sun /> : <Moon />}
    </div>
  )
}