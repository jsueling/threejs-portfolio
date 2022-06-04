import { useLayoutEffect, useEffect, useState } from "react"

const useDarkMode = () => {
  const [dark, setDark] = useState()

  // on mount, check first in localStorage, else use prefers-color-scheme
  useLayoutEffect(() => {
    const storedValue = JSON.parse(window.localStorage.getItem('darkMode'))
    setDark( // enqueues changes to the component state https://reactjs.org/docs/react-component.html#setstate
      typeof storedValue === 'boolean'
      ? storedValue
      : window.matchMedia('(prefers-color-scheme: dark)').matches // https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/matches
    )
  }, [])

  // when dark state changes (from the button onClick or from on mount useEffect => update localStorage + change body classList 
  useEffect(() => {
    if (dark !== undefined) {
      window.localStorage.setItem('darkMode', JSON.stringify(dark))
      dark ? window.document.body.classList.add('dark') : window.document.body.classList.remove('dark')
    }
  }, [dark])

  return [dark, setDark]
}

export default useDarkMode