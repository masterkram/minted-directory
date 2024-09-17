// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxthq/studio",
    "@nuxtjs/color-mode",
    "@nuxtjs/seo",
    "@nuxt/scripts",
  ],
  // https://google-fonts.nuxtjs.org/
  googleFonts: {
    families: {
      "DM Sans": "200..900",
    },
  },
  colorMode: {
    classSuffix: "",
  },
  // https://content.nuxt.com/
  content: {
    documentDriven: {
      injectPage: false,
    },
    highlight: {
      theme: {
        dark: "github-dark",
        default: "github-light",
      },
      langs: ["js", "ts", "html", "py", "sh"],
    },
  },
  site: {
    name: "Nuxt Starters",
    url: "https://nuxtdirectory.netlify.app/",
    description: "Nuxt starter kits.",
    defaultLocale: "en",
  },
  ogImage: {
    runtimeChromium: false,
  },
});
