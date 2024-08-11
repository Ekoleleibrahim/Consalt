/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['index.html'],
  theme: {
    extend: {
      colors:{
        fond: '#f1f1f1'
      },
      backgroundImage:{
        'monFond': "url('../images/fond.jpg')"
      },
    },
  },
  plugins:[]
}

