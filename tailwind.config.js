/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/images/landingPage.jpg')",
      },
      fontFamily: {
    
        headings: ['Work Sans', 'sans-serif'],
    
      },

    },
  },
  plugins: [],
}

