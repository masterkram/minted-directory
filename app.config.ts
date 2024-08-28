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
      tags: {
        // options: none,select,show-all,
        type: "select",
      },
    },
    grid: {
      list: true,
      emptyState: {
        text: "No matches for this query.",
        // options: button, simple, link
        type: "button",
        icon: "ph:boat-bold",
      },
      submit: {
        show: true,
        first: false,
        title: "Submit a template",
        description:
          "Submit a template to show off a good project to other people.",
        hideable: true,
      },
    },
    showFeaturedOnAllPages: true,
    featuredText: "Featured ✨",
    tags: [],
  },
  header: {
    banner: {
      show: true,
      text: "Create your own directory website in minutes.",
      link: "https://github.com/masterkram/nuxt-directory",
      brandText: "GoatedDirectory",
    },
    navbar: {
      colorModeSelector: true,
    },
    actionButton: {
      text: "Submit a starter",
      href: "/submit",
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
