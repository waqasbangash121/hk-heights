// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Production configuration
  nitro: {
    preset: 'netlify',
    experimental: {
      wasm: true
    },
    // Fix Prisma build issues
    rollupConfig: {
      external: ['@prisma/client']
    },
    // Node.js compatibility
    node: true,
    compatibilityDate: '2024-11-18'
  },

  // Runtime config for environment variables
  runtimeConfig: {
    // Private keys (only available on server-side)
    databaseUrl: process.env.DATABASE_URL,
    // Public keys (exposed to client-side)
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://hkheights.netlify.app'
    }
  },

  // SEO and Meta Configuration
  app: {
    head: {
      title: 'HK Heights - Premium Hill Station Apartments | Book Your Mountain Getaway',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Experience luxury at HK Heights - Premium hill station apartments with breathtaking mountain views. Book your perfect mountain getaway with modern amenities, fine dining, and adventure activities.' },
        { name: 'keywords', content: 'hill station apartments, mountain resort, luxury accommodation, hill station booking, mountain view apartments, Pakistan tourism, weekend getaway, nature retreat' },
        { name: 'author', content: 'HK Heights' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'HK Heights - Premium Hill Station Apartments' },
        { property: 'og:description', content: 'Experience luxury at HK Heights with breathtaking mountain views and premium amenities.' },
        { property: 'og:image', content: '/og-image.jpg' },
        { property: 'og:url', content: 'https://hkheights.com' },
        { property: 'og:site_name', content: 'HK Heights' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'HK Heights - Premium Hill Station Apartments' },
        { name: 'twitter:description', content: 'Experience luxury at HK Heights with breathtaking mountain views and premium amenities.' },
        { name: 'twitter:image', content: '/og-image.jpg' },
        
        // Additional SEO
        { name: 'theme-color', content: '#2c5530' },
        { name: 'msapplication-TileColor', content: '#2c5530' },
        { name: 'format-detection', content: 'telephone=yes' }
      ],
      link: [
        // Favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        
        // Google Fonts - Optimized for performance
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&display=swap' },
        
        // Font Awesome
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
      ],
      script: [
        // Structured Data for SEO
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            "name": "HK Heights",
            "description": "Premium hill station apartments with breathtaking mountain views",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Hill Station Area",
              "addressCountry": "Pakistan"
            },
            "telephone": "+92-333-9345500",
            "url": "https://hkheights.com",
            "priceRange": "$$",
            "amenityFeature": [
              { "@type": "LocationFeatureSpecification", "name": "Mountain Views" },
              { "@type": "LocationFeatureSpecification", "name": "WiFi" },
              { "@type": "LocationFeatureSpecification", "name": "Fine Dining" },
              { "@type": "LocationFeatureSpecification", "name": "Spa Services" },
              { "@type": "LocationFeatureSpecification", "name": "Adventure Activities" }
            ]
          })
        }
      ]
    }
  },

  css: [
    '~/assets/styles/main.css'
  ],

  // Performance optimizations
  experimental: {
    payloadExtraction: false
  },

  // Production build optimizations
  build: {
    transpile: ['@prisma/client']
  },

  // Vite configuration for Prisma
  vite: {
    define: {
      global: 'globalThis'
    },
    optimizeDeps: {
      exclude: ['@prisma/client']
    },
    // Node.js compatibility for newer versions
    esbuild: {
      target: 'node18'
    }
  },

  // SEO module (you can install @nuxtjs/seo later)
  modules: [
    // '@nuxtjs/seo' // Uncomment when installed
  ]
})
