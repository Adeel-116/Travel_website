/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#8DD3BB',
        lightGreen: '#CDEAE1',
        darkGreen: '#112211',
        lightWhite: '#F5F5F5',
        navColor: '#0C0C0C',
      },
    },
  },
  plugins: [],
}

