export default defineAppConfig({
  general: {
    title: "Nuxtjs Starters",
    logo: "/logo.png",
    description: "Find the the best Nuxt templates.",
  },
  directory: {
    search: {
      placeholder: "Search among {0} nuxt templates",
      showCount: true,
      icon: "tabler:bow",
    },
    showFeaturedOnAllPages: true,
    featuredText: "Featured ✨",
    tags: [
      { name: "SAAS", color: "blue" },
      { name: "dashboard", color: "green" },
      { name: "landing-page" },
      { name: "toolbox" },
      { name: "agency" },
      { name: "markdown-based" },
      { name: "basics", color: "indigo" },
    ],
  },
  header: {
    banner: {
      show: true,
      text: "Create your own directory website in minutes.",
      link: "https://github.com/masterkram/nuxt-directory",
      brandText: "NuxtDirectory",
    },
    navbar: {
      colorModeSelector: true,
    },
    actionButton: {
      text: "Submit a starter",
      href: "",
    },
  },
  footer: {},
  socials: {
    twitter: "",
    github: "",
    mastodon: "",
  },
  ui: {
    icons: {
      dark: "ph:moon-bold",
      light: "ph:sun-bold",
    },
  },
});
