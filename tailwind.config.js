/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg-blue': 'rgb(2,0,36)',
        'dark-bg-violet': 'rgb(25,35,79)',
      },
      width: {
        'customLarge': '93%',
        'customSmall': '7%',
      },
      
    },    
  },
  plugins: [],
}

