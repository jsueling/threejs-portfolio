import { useEffect, useState } from "react"

const useDarkMode = () => {
const [dark, setDark] = useState(() => {
    // SSR Safety Check
    if (typeof window === 'undefined') return false;

    try {
      // LocalStorage Check: Prioritize user preference
      const item = window.localStorage.getItem('darkMode');
      if (item) {
        return JSON.parse(item);
      }

      // System Preference Check (Safe for Jest/Old Browsers)
      if (window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    } catch (error) {
      console.warn('Unable to access localStorage or matchMedia', error);
    }

    // Default Fallback
    return false; 
  });

  useEffect(() => {

    window.localStorage.setItem('darkMode', JSON.stringify(dark));
    if (dark) {
      window.document.body.classList.add('dark');
    } else {
      window.document.body.classList.remove('dark');
    }
  }, [dark]);

  return [dark, setDark]
}

export default useDarkMode