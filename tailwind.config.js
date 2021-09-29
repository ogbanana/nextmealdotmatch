const { urlObjectKeys } = require('next/dist/next-server/lib/utils')

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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
