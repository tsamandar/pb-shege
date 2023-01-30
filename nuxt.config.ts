export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  app: {
    rootTag: 'body'
  },
  css: [
    '@/assets/styles/main.css'
  ],
  modules: ['nuxt-swiper']
})
