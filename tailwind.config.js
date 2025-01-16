/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Primary font
        serif: ['Playfair Display', 'serif'], // Serif font for headings
        secondary: ['Roboto', 'sans-serif'], // Secondary font
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        tiempos: ['Tiempos Fine', 'serif'],
        mono: ['Roboto Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      colors:{
        title: '#334eac',
        h3Subpoints: '#ddd',
      }
    }
  },
  plugins: [],
};
