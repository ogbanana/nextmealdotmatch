const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

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
        'results-image': 'url("/images/results-image.jpg")',
        'recipe-image': 'url("/images/recipe-image.jpg")',
        'basil-image': 'url("/images/basil-image.jpg")',
      },
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.rose,
        blueGray: colors.blueGray,
        warmGray: colors.warmGray,
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.30)',
      },
      screens: {
        recipeList: '1400px',
        ...defaultTheme.screens,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
