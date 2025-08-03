/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#282d76',    // Updated blue color
        secondary: '#FDF6EC',  // Warm beige
        brand: {
          orange: '#f95c2b',   // Orange for "Qamp" part
        }
      },
    },
  },
  plugins: [],
} 