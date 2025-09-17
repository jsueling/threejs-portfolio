import '@testing-library/jest-dom'

// Mock window.matchMedia for Jest (JSDOM)
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = function () {
    return {
      matches: false,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }
  }
}