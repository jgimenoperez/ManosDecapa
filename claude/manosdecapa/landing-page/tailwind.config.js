/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B4513',      // Wood brown
        secondary: '#D2691E',    // Chocolate
        accent: '#F4A460',       // Warm orange
        background: '#FFF8DC',   // Cream
        text: '#2C1810',         // Dark brown
      },
      fontFamily: {
        heading: "'Poppins', 'Montserrat', sans-serif",
        body: "'Open Sans', 'Roboto', sans-serif"
      },
      fontSize: {
        'h1': '3rem',
        'h2': '2rem',
        'h3': '1.5rem',
        'body': '1rem',
        'small': '0.875rem'
      },
      screens: {
        'sm': '320px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px'
      }
    }
  },
  plugins: []
}
