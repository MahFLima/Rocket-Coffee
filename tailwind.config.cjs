/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily:{
        sans:['Manrope', 'sans-serif']
      },
      color:{
        gray:{
          900:'#29292E',
          500:'#A8A8B3'
        },
        purple:{
          500:'#8257E5'
        }
      }
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
  ],
}
