const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./node_modules/next/**/*.js', './src/**/*.{js,jsx,ts,tsx}'],
  media: false,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xxl: '6rem',
        '2xl': '12rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
        '2xl': '1920px',
      },
    },
    extend: {
      colors: {
        'true-gray': colors.neutral,
        primary: {
          red: '#D32323',
          black: '#0E0303',
        },
        secondary: {
          'gray-100': '#FAFAFA',
          'gray-200': '#F8F8F8',
          'gray-300': '#F6F6F6',
          'gray-400': '#FAFAFA',
          'gray-500': '#EDEDED',
          'gray-600': '#DDDDDD',
          'gray-700': '#C4C4C4',
          'gray-800': '#9E9E9E',
          'gray-900': '#666666',
        },
        functional: {
          'green-100': '#CEEA24',
          'green-200': '#93EA24',
          'green-300': '#6EC500',
          peach: '#FFF1F1',
          red: '#F43939',
          orange: '#FF5C00',
          yellow: '#FFA800',
          'yellow-100': '#FFE500',
          'yellow-200': '#CEEA24',
          blue: '#1DA1F2',
        },
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },

      boxShadow: {
        primary: '0px 4px 20px rgba(0, 0, 0, 0.06)',
        secondary: '0px 1px 3px rgba(3, 0, 71, 0.09)',
      },
      zIndex: {
        negative: '-1',
      },
      fontSize: {
        display: '4rem',
        'heading-h1': '3rem',
        'heading-h2': '2rem',
        'heading-h3': '1.5rem',
        'heading-h4': '1.5rem',
        'heading-h5': '1.125rem',
        'heading-h6': '1.125rem',
        'lead-text': '1.5rem',
        'regular-text': '1.125rem',
        'base-text': '1rem',
      },
      lineHeight: {
        display: '4.4rem',
        'heading-h1': '3.3rem',
        'heading-h2': '2.4rem',
        'heading-h3': '1.8rem',
        'heading-h4': '1.95rem',
        'heading-h5': '1.4625rem',
        'heading-h6': '1.575rem',
        lead: '2.25rem',
        regular: '1.6875rem',
        base: '1.6rem',
        normal: '1.4rem',
        small: '1.2rem',
      },
      backgroundImage: {
        'brand-card-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
        overlay:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))',
      },
      backgroundColor: {
        'banner-primary-gradient': 'rgba(196, 196, 196, 0.15)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [


  ],

};
