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
  modules: ["vuetify-nuxt-module"],
  vuetify: {
    moduleOptions: { prefixComposables: true },
    vuetifyOptions: "./config/vuetify.config.ts",
  },
});
