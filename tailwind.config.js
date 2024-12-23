/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../public/bg.png')"
        
      },
    },
  },
  plugins: [],
};

