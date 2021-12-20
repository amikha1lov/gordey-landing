module.exports = {
  mode: 'jit',
  content: [
    './**/*.html',
  ],
  theme: {
    screens: {
      'tablet': {'max': '1024px'},
      'mobile': {'max': '475px'},
      'mobile-mini': {'max': '320px'},
    },
    extend: {
      fontFamily: {
        PTSans: "'PT Sans', sans-serif",
        Blogger: "'Blogger Sans', sans-serif",
        Script: "'Bad Script', cursive"

      },
      backgroundImage: {
        'hero': "url('../img/hero-bg.jpg')",
        'hero-tablet': "url('../img/hero-bg-tablet.jpg')",
        'hero-mobile': "url('../img/hero-bg-mobile.png')",
        'middle': "url('../img/ng-bg.png')",
        'card': "url('../img/card-bg.png')",
        'facts': "url('../img/facts-bg.png')",
        'santa_block': "url('../img/santa_block.png')",
        'card-mobile': "url('../img/card-bg-mobile.png')",
        'menu': "url('../img/menu-bg.jpg')",
        'card_kids_mobile': "url('../img/card_kids_mobile.jpg')",
      }
    },
  },
  plugins: [],
}
