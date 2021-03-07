const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'remaining': '90vh'
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/public/pexels-adrien-olichon-2387793.jpg')",
        'bar-glasses-hero': "url('/public/barhopper-hero-image.jpeg')",
        'bar-pattern': "url('/public/bar-pattern.png')",
        'bar-glasses': "url('/public/pexels-pixabay-33265.jpg')",
        'geode-gray': "url('/public/imageonline-co-grayscaledimage.jpg')",
        'colored-smoke': "url('/public/chuttersnap-0M5URHZ_f3k-unsplash.jpg')",
        'black-smoke': "url('/public/omar-ram-A4BP8yAx8ME-unsplash.jpg')",
        'gray-smoke': "url('/public/output-onlineimagetools.png')",
        'black-marble': "url('/public/david-tovar-_PDt8nNAC-Q-unsplash.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'party': "url('/public/kelsey-chance-tAH2cA_BL5g-unsplash.jpg')"
       }),
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}
