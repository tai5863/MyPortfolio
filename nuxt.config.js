export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Taichi Uchida',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Taichi Uchida' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://ta1uchida.com' },
      { hid: 'og:title', property: 'og:title', content: "Taichi Uchida's Portfolio" },
      { hid: 'og:description', property: 'og:description', content: 'Visual Artist / Programmer. Affiliation : University of Tsukuba, Media Arts, Science and Technology. Keywords : Creative Coding / Visual Production / Computer Graphics / Web Engineering / Machine Learning.' },
      { hid: 'og:image', property: 'og:image', content: '/img/MyProfile.img' },
      { name: 'twitter:card', content: 'summary' },　//twitterの画像サイズ
      { name: 'twitter:site', content: '@_t_ai__' },
      { name: 'twitter:creator', content: '@_t_ai__' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ '@/assets/css/style.css' ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/persistedstate.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  mode: 'spa',

  target: 'static'
}
