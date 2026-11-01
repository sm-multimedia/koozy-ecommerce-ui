/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        licorice: '#182421',
        caf_noir: '#243b35',
        butterscotch: '#987957',
        butterscotch_light: '#876a4b',
        papaya_whip: '#f7f6f1',
        alabaster: '#eeede6',
        eerie_black: '#202522',
        jet: '#3a403c',
        amber_alpha: '#ffffff24',
        red: '#b65f50',
      },
      boxShadow: {
        shadowDark: '0 0 35px 0 #182421',
      },
      fontFamily: {
        primary: '"Cormorant Garamond", serif',
        secondary: '"Montserrat", sans-serif',
      },
      transitionTimingFunction: {
        inExpo: 'cubic-bezier(0.22, 0.37, 1, 1)',
      },
      keyframes: {
        fadeInDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },

        bouncing: {
          '0%, 100%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeInDown: 'fadeInDown 500ms ease-in-out 0s 1 running',

        bouncing: 'bouncing 12s linear infinite',
      },
      screens: {
        xs: "480px",
        sm: "635px",
        md: "1000px",
        lg: "1200px",
        xl: "1400px",
        xxl: "1600px",
      },
    },
  }
}