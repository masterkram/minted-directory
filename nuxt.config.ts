// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxthq/studio",
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
  ],
  // https://google-fonts.nuxtjs.org/
  googleFonts: {
    families: {
      "DM Sans": "200..900",
    },
  },
  // https://content.nuxt.com/
  content: {
    documentDriven: true,
  },
  studio: {
    enabled: true,
  },
});
