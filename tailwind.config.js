const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.js"
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInBounce: {
          '0%': { opacity: '0', transform: 'translateY(20%)' },
          '70%': { opacity: '0.7', transform: 'translateY(-5%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(1%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      fontFamily: { // https://tailwindcss.com/docs/font-family#customizing-the-default-font
        'sans': ['Roboto',  ...defaultTheme.fontFamily.sans],
      },
      animation: { // duration | easing-function | delay | iteration-count | direction | fill-mode | play-state | name
        fadeInStay: '0.5s ease-in-out 0s 1 normal forwards running fadeInUp',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
