export default defineAppConfig({
  general: {
    title: "Nuxtjs Starters",
    logo: "/logo.png",
    description: "Find the the best Nuxt templates.",
  },
  directory: {
    searchTag: "Search meditation apps ✨",
    showFeaturedOnAllPages: true,
    featuredText: "Featured ✨",
    tags: [],
  },
  banner: {
    show: true,
    text: "Create a directory site",
    link: "https://github.com/masterkram/nuxt-directory",
    brandText: "NuxtDirectory",
  },
  ui: {
    displayFont: "Crimson Pro",
    bodyFont: "Open Sans",
    primaryColor: "",
    secondaryColor: "",
    grayShade: "zinc",
  },
  socials: {
    twitter: "",
    github: "",
    mastodon: "",
  },
  nuxtIcon: {
    aliases: {
      "dark-mode": "ph:moon-bold",
      "light-mode": "ph:sun-bold",
    },
  },
});
