/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    // backgroundSize: {
    //   'auto': 'auto',
    //   'cover': '90%',
    //   'contain': 'contain',
    //   '50%': '50%',
    //   '16': '4rem'
    // },
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

