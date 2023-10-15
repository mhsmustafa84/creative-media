/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#1B264F',
        secondary: '#353844',
        special: '#506BCA',
        listDisc: '#D2AD81',
      },
    },
  },
  plugins: [],
};
