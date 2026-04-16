/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937',
        accent: '#dc2626',
      },
    },
  },
  plugins: [],
}
