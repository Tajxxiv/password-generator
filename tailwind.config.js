/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
    },
    extend: {
      colors: {
        royalBlue: '#1F2937;',
        darkGreen: '#4ADF86;',
        mediumGrey: '#D5D4D8',
        lightGreen: '#10B981',
        mediumGreen: '#55F991',
        lightBlue: '#273549'
      },
    },
  },
  plugins: [],
}
