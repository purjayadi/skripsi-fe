/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/css")
module.exports = {
    content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter_600SemiBold'],
            },
            borderColor: [
                'responsive',
                'dark',
                'group-hover',
                'focus-within',
                'hover',
                'focus',
                'secondary',
            ],
            borderRadius: ['responsive', 'hover'],
            borderStyle: ['responsive', 'hover'],
            borderWidth: ['responsive', 'hover'],
            colors: {
                primary: '#F2A900',
                secondary: '#FF2828',
                success: '#23A321',
                lightGray: '#E0E0E0',
                basic: '#4F4F4F',
                'red-primary': '#D83F32',
            },
        },
    },
    plugins: [nativewind],
};
