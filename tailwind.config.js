const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: [
        './src/**/*.{js,jsx,ts,tsx}', 
        './pages/**/*.{js,jsx,ts,tsx}',
        './public/index.html'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'sans': ['Inter', ...defaultTheme.fontFamily.sans],
            'serif': [...defaultTheme.fontFamily.serif],
            'mono': [...defaultTheme.fontFamily.mono]
        },
        extend: {
            colors: {
                primary: colors.pink,
                secondary: colors.gray
            },
          },
    },
    variants: {
    extend: {},
    },
    plugins: [
    ],
};