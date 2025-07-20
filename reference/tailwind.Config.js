// tailwind.config.js
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Segoe UI"', 'sans-serif'],
        },
        colors: {
          beige: '#f2e4d8',
          blush: '#fff5ed',
        },
      },
    },
  };
  