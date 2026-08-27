// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/content'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  // Universal rendering (default) — SSR on, hydrated on the client.
  ssr: true,

  content: {
    build: {
      markdown: {
        toc: { depth: 2 },
      },
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'CosmicFabri — Software Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'CosmicFabri — software engineer. Projects, accomplishments and a way to get in touch.',
        },
        { name: 'theme-color', content: '#050510' },
        { property: 'og:title', content: 'CosmicFabri — Software Engineer' },
        {
          property: 'og:description',
          content:
            'Software engineer. Projects, accomplishments and a way to get in touch.',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap',
        },
      ],
    },
  },
})
