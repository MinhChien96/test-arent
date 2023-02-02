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
      }
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          '@screen xl': {
            maxWidth: '960px'
          }
        }
      });
    }
  ]
};
