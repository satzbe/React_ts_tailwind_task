/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['.index.html', './src/**/*.{js,ts,tsx,jsx}'],
  theme: {
    extend: {},
    colors: {
      mainColor: '#1597E4',
      borderClr: '#E6E6E6',
      errorClr: '#D86161',
      plh: '#7A7A7A',
      darkFont: '#212121',
      lightFont: '#FAFAFA',
      backgroundClr: '#F5F5F5',
      default: 'white',
    },
  },
  plugins: [],
};
