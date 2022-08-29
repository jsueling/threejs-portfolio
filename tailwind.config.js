const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.js",
    "./hooks/**/*.js"
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
        },
        fadeOutDown: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(1%)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', marginLeft: 0 },
          '100%': { opacity: '1' }
        }
      },
      fontFamily: { // https://tailwindcss.com/docs/font-family#customizing-the-default-font
        'sans': ['Roboto',  ...defaultTheme.fontFamily.sans],
      },
      animation: { // duration | easing-function | delay | iteration-count | direction | fill-mode | play-state | name
        fadeInUp: '0.5s ease-in-out 0s 1 normal forwards running fadeInUp',
        fadeOutDown: '0.5s ease-in-out 0s 1 normal forwards running fadeOutDown',
        fadeInLeft: '1s ease-in-out 0s 1 normal forwards running fadeInLeft'
      },
      // https://coolors.co/fcf7ff-c4cad0-878c8f-a4969b-4e414a
      // https://coolors.co/ffffff-c4cad0-878c8f-6d5f64-43383f
      colors: {
        'magnolia': '#FCF7FF',
        'silver-sand': '#C4CAD0',
        'battleship-gray': '#878C8F',
        'heliotrope-gray': '#A4969B',
        'dark-liver': '#655560',
        'black-coffee': '#43383F',
        'old-lavender': '#6D5F64',
      }
    },
    ...defaultTheme
  },
  darkMode: 'class',
  plugins: [],
}
