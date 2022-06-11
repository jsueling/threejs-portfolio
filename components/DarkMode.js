import useDarkMode from '../hooks/useDarkMode'
import Sun from './Sun'
import Moon from './Moon'

export default function DarkMode() {
  const [dark, setDark] = useDarkMode()

  return (
    <button className='transition-all duration-[600ms] ease-in-out hover:rotate-[360deg]' onClick={() => setDark(!dark)}>
      {dark ? <Sun /> : <Moon />}
    </button>
  )
}