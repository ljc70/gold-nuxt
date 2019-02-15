const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/flexible.js', type: 'text/javascript', charset: 'utf-8'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#007fff' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/css/reset.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/iview' },
    { src: '@/plugins/filter' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: [
      require('postcss-px2rem')({
        remUnit: 75
      })
    ],
    extend(config, ctx) {
      
    }
  }
}
