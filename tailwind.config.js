/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "azul-b2bit-300": "#02274f",
        "azul-b2bit-200": "#114C8B",
        "amarelo-b2bit": "#FDCF00",
        "profile-bg": "#F1F5F9"

        
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
    },
    screens: {
      //break points
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}