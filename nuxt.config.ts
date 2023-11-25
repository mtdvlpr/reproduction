// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  ssr: false,
  telemetry: false,
  typescript: {
    shim: false,
    typeCheck: false,
    tsConfig: { compilerOptions: { moduleResolution: "bundler" } },
  },
  //modules: ["vuetify-nuxt-module", "@vite-pwa/nuxt"], this order works
  modules: ["@vite-pwa/nuxt", "vuetify-nuxt-module"], // this order gives an error for Vuetify options
  vuetify: {
    moduleOptions: { prefixComposables: true },
    vuetifyOptions: "./config/vuetify.config.ts",
  },
  pwa: {
    manifest: {},
  },
});
