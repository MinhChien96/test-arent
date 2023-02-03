/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: '#FFFFFF'
        },
        dark: {
          500: '#414141',
          600: '#2E2E2E'
        },
        primary: {
          300: '#FFCC21',
          400: '#FF963C',
          500: '#EA6C00'
        },
        secondary: {
          300: '#8FE9D0'
        },
        gray: {
          400: '#777777'
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        noto: ['Noto Sans JP', 'sans-serif']
      },
      backgroundImage: {
        'primary-300/400': 'linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)'
      }
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          padding: '0 0.5rem',
          '@screen md': {
            maxWidth: '960px',
            padding: '0rem'
          },
          '@screen xl': {
            maxWidth: '960px'
          }
        }
      });
    },
    require('@tailwindcss/line-clamp')
  ]
};
