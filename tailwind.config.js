/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#00E054',
        'brand-orange': '#FF8000',
        'brand-blue': '#40BCF4',
        'dark-bg': '#14181C',
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        tiempos: ['"TiemposHeadlineWeb"', 'Georgia', 'serif', '"ColorEmoji"', '"Apple Color Emoji"', '"Segoe UI Emoji"'],
      }
    },
  },
  plugins: [],
}
