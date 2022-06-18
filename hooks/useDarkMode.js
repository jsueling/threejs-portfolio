import { useEffect, useState } from "react"

import useLayoutEffect from '../hooks/useLayoutEffect'

// fix warning: useLayoutEffect does nothing on the server https://stackoverflow.com/a/66580539

const useDarkMode = () => {
  const [dark, setDark] = useState()

  // after first render, check first in localStorage, else use prefers-color-scheme
  useLayoutEffect(() => {
    const storedValue = JSON.parse(window.localStorage.getItem('darkMode'))
    setDark(
      typeof storedValue === 'boolean'
      ? storedValue
      : window.matchMedia('(prefers-color-scheme: dark)').matches // https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/matches
    )
  }, [])

  // when dark state changes (from the button onClick or from first render useEffect => update localStorage + change body classList 
  useEffect(() => {
    if (dark !== undefined) {
      window.localStorage.setItem('darkMode', JSON.stringify(dark))
      dark ? window.document.body.classList.add('dark') : window.document.body.classList.remove('dark')
    }
  }, [dark])

  return [dark, setDark]
}

export default useDarkMode