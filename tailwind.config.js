module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  colors: {
    'blue': '#1fb6ff',
    'purple': '#7e5bef',
    'pink': '#ff49db',
    'orange': '#ff7849',
    'green': '#13ce66',
    'yellow': '#ffc82c',
    'gray-dark': '#273444',
    'gray': '#8492a6',
    'gray-light': '#d3dce6',
  },
  screens:{
    sm:'480px',
    md:'768px',
    lg:'976px',
    xl:'1440px',
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  plugins: [],
}
