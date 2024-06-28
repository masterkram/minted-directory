export default defineAppConfig({
  directory: {
    searchTag: "Search nuxt templates 🔎",
    showFeaturedOnAllPages: true,
    featuredText: "Featured ✨",
  },
  banner: {
    show: true,
    text: "Create your own directory website in minutes.",
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
