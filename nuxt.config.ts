// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  // --------------------------------------------------
  // DEVELOPMENT
  // --------------------------------------------------
  devtools: {
    enabled: true
  },

  // --------------------------------------------------
  // SERVER-SIDE RENDERING
  // --------------------------------------------------
  // Keep SSR enabled for SEO and search-engine crawlers.
  ssr: true,

  // --------------------------------------------------
  // MODULES
  // --------------------------------------------------
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',

    // Generates /sitemap.xml
    '@nuxtjs/sitemap'
  ],

  // --------------------------------------------------
  // AUTO IMPORTS
  // --------------------------------------------------
  imports: {
    dirs: [
      'composables',
      'composables/**',
      'stores'
    ]
  },

  // --------------------------------------------------
  // COMPONENTS
  // --------------------------------------------------
  components: true,

  // --------------------------------------------------
  // SOURCE DIRECTORY
  // --------------------------------------------------
  srcDir: 'src',

  // --------------------------------------------------
  // GLOBAL CSS
  // --------------------------------------------------
  css: [
    '~/assets/css/main.css',
    'swiper/css',
    'swiper/css/pagination'
  ],

  // --------------------------------------------------
  // APP HEAD
  // --------------------------------------------------
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },

      link: [
        // Favicon
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon1.png'
        },

        // Apple / iOS icon
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png'
        },

        // Bootstrap Icons
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css'
        }
      ],

      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },

        {
          name: 'theme-color',
          content: '#2E7D32'
        },

        // Tell search engines they may index the site
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    }
  },

  // --------------------------------------------------
  // SITEMAP
  // --------------------------------------------------
  site: {
    url: 'https://www.chrismektechnology.com'
  },

  // --------------------------------------------------
  // POSTCSS / TAILWIND
  // --------------------------------------------------
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  // --------------------------------------------------
  // NITRO / PRERENDER
  // --------------------------------------------------
  nitro: {
    prerender: {
      routes: [
        '/plantations/okitipupa-palm-estate'
      ]
    }
  },

  // --------------------------------------------------
  // RUNTIME CONFIG
  // --------------------------------------------------
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,

      appName: 'Agro Wealth'
    }
  }
})
