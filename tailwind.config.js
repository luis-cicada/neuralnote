/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#40798C',
          800: '#1F363D',
        },
        green: {
          300: '#CFE0C3',
          600: '#9EC1A3',
        },
      },
    },
  },
  plugins: [],
}
