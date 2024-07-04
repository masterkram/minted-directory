// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: "../",
  devtools: { enabled: true },
  site: {
    name: "Nuxt Starters",
    url: "nuxtdirectory.netlify.app/",
    description: "Nuxt starter kits.",
    defaultLocale: "en",
  },
  ogImage: {
    runtimeChromium: false,
  },
});
