/ @type {import('tailwindcss').Config} */
export default {
   content: ["./src//*.{html,js}"],
   theme: {
     extend: {},
     screens: {

      'xs': '360px',   // Phones
      'md': '670px',   // ipad
      'lg': '640px',  // Desktops

  },
   },
   plugins: [],
 }