// const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*{html,js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        norway: "url('https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
      backgroundColor: theme => ({
        // ...theme('colors'),
        'primary': '#35084a',
        'secondary': '#8000b3',
        'tertiary': '#9a2bcc',
      }),
      textColor: {
        'primary': '#35084a',
        'secondary': '#8000b3',
        'tertiary': '#9a2bcc',
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      ringColor: {
        'primary': '#35084a',
        'secondary': '#8000b3',
        'tertiary': '#9a2bcc',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
