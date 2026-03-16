/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#FFD700", // Golden Yellow
        primary: "#000000", // Black
        secondary: "#4B2E2E", // Dark Brown
        card: "#2F2F2F", // Dark Gray
        borderLight: "#D3D3D3", // Light Gray
        textLight: "#F8F8F8" // Off-White
      }
    },
  },
  plugins: [],
}