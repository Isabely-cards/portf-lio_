/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
        smart :  '420px',
        sm: '640px',
        md: '854px',
        lg: '976px',
        xl: '1200px',
      },
    fontFamily: {
      londrinaOutline: ['Londrina Outline', 'cursive'],
      londrinaSolid: ['Londrina Solid', 'cursive'],
    },
    extend: {
      backgroundImage: {
        'background': "url('./public/img/banner-bg.png')",
      },
      colors: {
        primary: '#411e43',
        prominence: '#FFE24E',
        white: '#ffffff',
        black: '#000000'
  
      },
    },
  },
  plugins: [],
}