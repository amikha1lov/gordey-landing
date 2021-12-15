module.exports = {
  mode: 'jit',
  content: [
    './**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        PTSans: "'PT Sans', sans-serif",
        Blogger: "'Blogger Sans', sans-serif",
        Script: "'Bad Script', cursive"

      },
      backgroundImage: {
        'hero': "url('/img/hero-bg.jpg')"
      }
    },
  },
  plugins: [],
}
