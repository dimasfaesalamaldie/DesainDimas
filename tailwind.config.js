/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors :{
        primary: '#84cc16',
        secondary:'#64748b',
        dark: '#0f172a',
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
