/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#333333',
        'steel-blue': '#4682B4',
        'light-gray': '#F8F8F8',
        'slate-gray': '#708090',
        'soft-beige': '#EAE8E1',
        'safety-yellow': '#FFD700',
        'construction-orange': '#FFA500',
        'emerald-green': '#2E8B57',
        'almost-black': '#1E1E1E',
        'warm-gray': '#787878',
      },
      fontFamily:{
        poppins: ['Poppins', 'Arial', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        work : ['Work Sans', 'sans-serif'],
        fredoka : ['Fredoka', 'cursive'],
        nunito : ['Nunito', 'sans-serif'],
        montserrat : ['Montserrat', 'sans-serif'],
        open : ['Open Sans', 'sans-serif'],
        lora : ['Lora', 'serif'],
        karla : ['Karla', 'sans-serif'],
        bebas : ['Bebas Neue', 'sans-serif'],
        raleway : ['Raleway', 'sans-serif'],
        mulish : ['Mulish', 'sans-serif'],
        source : ['Source Sans Pro', 'sans-serif'],
      },
      animation: {
        swing: "swing 1.2s linear infinite",
        swing2: "swing2 1.2s linear infinite",
      },
      keyframes: {
        swing: {
          "0%": {
            transform: "rotate(0deg)",
            "animation-timing-function": "ease-out",
          },
          "25%": {
            transform: "rotate(70deg)",
            "animation-timing-function": "ease-in",
          },
          "50%": {
            transform: "rotate(0deg)",
            "animation-timing-function": "linear",
          },
        },
        swing2: {
          "0%": {
            transform: "rotate(0deg)",
            "animation-timing-function": "linear",
          },
          "50%": {
            transform: "rotate(0deg)",
            "animation-timing-function": "ease-out",
          },
          "75%": {
            transform: "rotate(-70deg)",
            "animation-timing-function": "ease-in",
          },
        },
      },
    },
  },
  plugins: [],
}

