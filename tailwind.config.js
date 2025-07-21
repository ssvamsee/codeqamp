/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3F88C5',    // Soft blue
        secondary: '#FDF6EC',  // Warm beige
      },
    },
  },
  plugins: [],
} 