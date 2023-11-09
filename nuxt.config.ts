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
  imports: {
    presets: [
      {
        from: "@vueuse/router",
        imports: ["useRouteParams", "useRouteQuery"],
      },
    ],
  },
  modules: ["@vueuse/nuxt"],
});
