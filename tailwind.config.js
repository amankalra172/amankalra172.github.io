/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        stackit: {
          primary: '#004E5A', // Sherpa Blue
          secondary: '#96D700', // Bright Green (often used by STACKIT/Schwarz group as accent) - *Assumption based on common Schwarz IT branding, or I can stick to just primary and neutral*
          // Let's stick to the requested Primary and maybe a light variant
          50: '#E6F2F4',
          100: '#C1DEE3',
          200: '#97C9D1',
          300: '#6DB4BF',
          400: '#439FAD',
          500: '#004E5A', // Base
          600: '#003E48',
          700: '#002F36',
          800: '#001F24',
          900: '#001012',
        }
      }
    },
  },
  plugins: [],
}
