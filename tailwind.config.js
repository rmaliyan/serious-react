/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      
      keyframes: {
        slideInText: {
          '0%': { transform: 'translate(100%) scale(0.7)', opacity:'0' },           
          '100%': { transform: 'translate(0%) scale(1)', opacity: '1'  }
        },
        slideOutText: {
          '0%': { transform: 'translate(0%) scale(1)', opacity: '1' },
          '100%': { transform: 'translate(100%) scale(0.7)', opacity: '0' },
        },
        slideInContent: {
          '0%': { transform: 'translate(-100%) scale(0.7)', opacity: '0' },
          '80%': { transform: 'translate(0%) scale(0.7)', opacity: '0.7' },
          '100%': { transform: 'translate(0%) scale(1)', opacity: '1' }
        }
      },
      animation: {
        slideInText: 'slideInText 0.8s ease-in-out',
        slideOutText: 'slideOutText 0.8s ease-in-out',
        slideInContent: 'slideInContent 0.8s ease-in-out',
      }
      
    },    
  },
  plugins: [],
}

