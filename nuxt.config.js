export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hola SVG Icons',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { name: 'title', content: "Hola SVG Icons" },
      { name: 'description', content: "Free Open SVG Icons" },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:type', content: "website" },
      { property: 'og:url', content: "https://icons.holasvg.com" },
      { property: 'og:title', content: "Hola SVG Icons" },
      { property: 'og:description', content: "Free Open SVG Icons" },
      { property: 'og:image', content: "https://icons.holasvg.com/holasvg-icons.gif" },
      { property: 'twitter:card', content: "summary_large_image" },
      { property: 'twitter:url', content: "https://icons.holasvg.com" },
      { property: 'twitter:title', content: "Hola SVG Icons" },
      { property: 'twitter:description', content: "Free Open SVG Icons" },
      { property: 'twitter:image', content: "https://icons.holasvg.com/holasvg-icons.gif" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        'data-ad-client': 'ca-pub-6891714364460101',
        async: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/google-fonts', {   
      families: {
        'Montserrat': [400, 500, 900],
      },   
    }],
    ['@nuxtjs/google-analytics', {
      id: 'UA-174225123-1',
    /*  debug: {
        enabled: true,
        sendHitTask: true
      }, */
      autoTracking: {
        pageviewTemplate: route => {
            return {
                page: route.path,
                title: window.document.title,
                location: window.location.href,
            };
        }
      }      
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
