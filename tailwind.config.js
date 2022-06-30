module.exports = {
  // darkMode: 'class',
  content: [
    './src/**/*.{html,js}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        // layout default dark colors
        dark: '#111827',
        'dark-light': '#182237',
        'dark-lighter': '#2a3849',

        // layout default light colors
        light: '#F3F3F3',
        'main-light': '#F3F3F3',
        'black-200': '#333333',

        'orange-primary': '#FA6615',

        'blue-primary': '#49A5FA',
        'blue-secondary': 'rgb(23 111 246)',
        'blue-tertiary': '#0B3C85',
        'blue-baby': '#39d0ff',

        'green-primary': '#0DC35E',
      },
      backgroundImage: {
        'textura-light': "url('/images/textura.svg')",
        'textura-dark': "url('/images/textura_dark.svg')",
        'espiral-light': "url('/images/espiral.svg')",
        'espiral-dark': "url('/images/espiral-dark.svg')",
        'confetes-light': "url('/images/confetes.svg')",
      },
      boxShadow: {
        missionActivated: '0 0 0 4px #3080ff',
      },
      width: {
        main: '831px',
      },
      animation: {
        overlayShow: 'overlayShow 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        dropdownMenuShow: 'dropdownMenuShow 200ms cubic-bezier(0.2, 0, 0.13, 1.5);',
        fadeIn: 'fadeIn 200ms cubic-bezier(0.2, 0, 0.13, 1.5);',
      },
      keyframes: {
        overlayShow: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        contentShow: {
          '0%': { opacity: '0', transform: 'translate(-50%, -48%) scale(.96)' },
          '100%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
        dropdownMenuShow: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
};
