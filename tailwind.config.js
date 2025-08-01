/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F6D7A',
        accent1: '#A8DADC',
        accent2: '#F4E3D7',
        dark: '#2C3E50',
        highlight: '#FF6B6B',
        neutral: '#F0F2F5',
      },
    },
  },
  plugins: [],
}
