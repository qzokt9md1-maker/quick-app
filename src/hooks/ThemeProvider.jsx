import { useEffect, useCallback } from 'react'
import useLocalStorage from './useLocalStorage.js'
import ThemeContext from './ThemeContext.jsx'

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [setTheme])

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
