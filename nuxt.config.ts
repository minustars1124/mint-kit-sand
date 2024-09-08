// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{
        rel: 'icon',
        href: '/favicon.ico'
      }]
    }
  },
  css: [
    '/assets/css/reset.css',
    '/assets/css/style.css'
  ],
  devtools: { enabled: true }
})
