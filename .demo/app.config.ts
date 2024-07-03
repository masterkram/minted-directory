export default defineAppConfig({
  general: {
    title: "Nuxtjs Starters",
    logo: "/logo.png",
    description: "Find the the best Nuxt templates.",
  },
  navbar: {
    colorModeSelector: true,
  },
  directory: {
    searchTag: "Search nuxt templates 🔎",
    showFeaturedOnAllPages: true,
    featuredText: "Featured ✨",
    tags: [
      { name: "SAAS", color: "blue" },
      { name: "dashboard" },
      { name: "landing-page" },
      { name: "toolbox" },
      { name: "agency" },
      { name: "markdown-based" },
    ],
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
