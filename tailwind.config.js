const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'homepage-full': 'url("/images/homepage-bg-full.jpeg")',
        'cuttingboard-image': 'url("/images/cuttingboard-image.jpg")',
        'kitchen-image': 'url("/images/kitchen-image.jpg")',
      },
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.rose,
        blueGray: colors.blueGray,
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.30)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
