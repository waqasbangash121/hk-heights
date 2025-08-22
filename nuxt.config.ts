// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'HK Heights - Luxury Hill Station Apartments',
      meta: [
        { name: 'description', content: 'Luxury hill station apartments with breathtaking views. Book your stay at HK Heights.' }
      ],
      link: [
        // Google Fonts
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Dancing+Script:wght@700&display=swap' },
        // Font Awesome
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
      ],
      script: [
        // (Optional) external scripts
        // { src: 'https://example.com/some-library.js', defer: true }
      ]
    }
  },

  css: [
    '~/assets/styles/main.css' // <- put your custom styles here
  ]
})
