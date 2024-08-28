export default defineAppConfig({
  general: {
    title: "Nuxtjs Starters",
    logo: "/logo.png",
  },
  directory: {
    search: {
      placeholder: "Search among {0} nuxt templates",
      showCount: true,
      icon: "tabler:bow",
      tags: {
        // options: none,select,show-all,
        display: "select",
        intersection: false,
      },
    },
    grid: {
      list: false,
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
  footer: {
    description: "Find the the best Nuxt templates.",
    socials: {
      twitter: "",
      github: "",
      mastodon: "",
    },
  },
  ui: {
    icons: {
      dark: "ph:moon-bold",
      light: "ph:sun-bold",
    },
  },
});
