const isDev = process.env.NODE_ENV === 'development'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  ssr: false,
  telemetry: false,
  typescript: {
    shim: false,
    typeCheck: false,
    tsConfig: { compilerOptions: { moduleResolution: 'bundler' } },
  },
  router: { options: { hashMode: true } },
  sourcemap: { client: false },
  modules: [
    '@nuxtjs/i18n',
    ['@unocss/nuxt', { configFile: './config/uno.config.ts' }],
    'vuetify-nuxt-module',
  ],
  i18n: {
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    locales: [
      {
    code: 'en',
    iso: 'en-US',
    file: 'en.json',
    name: 'English (English)',
  },
  {
    code: 'nl',
    iso: 'nl-NL',
    file: 'nl.json',
    name: 'Nederlands (Dutch)',
  },
    ],
    types: 'composition',
    detectBrowserLanguage: false,
    vueI18n: './config/i18n.config.ts',
    compilation: {
      strictMessage: false,
      escapeHtml: true,
    },
  },
  vuetify: {
    moduleOptions: { prefixComposables: true },
    vuetifyOptions: './config/vuetify.config.ts',
  },
})
