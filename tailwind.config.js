/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primGreen': "#23BE0A",
      },
      fontFamily: {
        'PlayfairD': ["Playfair Display"],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

