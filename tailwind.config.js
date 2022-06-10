const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(10%)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-in-out'
      },
      fontFamily: {
        'sans': ['Roboto',  ...defaultTheme.fontFamily.sans], // https://tailwindcss.com/docs/font-family#customizing-the-default-font
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
