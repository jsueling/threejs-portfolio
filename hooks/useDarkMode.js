import { useEffect, useState } from "react"

const useDarkMode = () => {
  const [dark, setDark] = useState()
  useEffect(() => {
    const storedValue = JSON.parse(window.localStorage.getItem('darkMode'))
    setDark(
      typeof storedValue === Boolean
      ? storedValue
      : window.matchMedia('(prefers-color-scheme: dark)').matches // https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/matches
    )
  }, [])

  useEffect(() => {
    window.localStorage.setItem('darkMode', JSON.stringify(dark))
    dark ? window.document.body.classList.add('dark') : window.document.body.classList.remove('dark')
  }, [dark])

  return [dark, setDark]
}

export default useDarkMode