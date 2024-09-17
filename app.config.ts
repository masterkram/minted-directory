export default defineAppConfig({
  general: {
    title: "Minted Directory",
    logo: "/logo.png",
  },
  directory: {
    search: {
      placeholder: "Search among {0} tools",
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
        text: "Seems that this entry is missing from the archives.",
        // options: button, simple, link
        type: "button",
        icon: "ph:exclamation-mark",
      },
      card: {
        image: true,
        // options: dashed, shadow, outline
        border: "shadow",
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
    featured: {
      showOnAllPages: true,
      showOnSide: true,
      icon: "tabler:star",
      labelForCard: "Featured ✨",
    },
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
      brandText: "MintedDirectory",
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
    description: "Best directory for my niche.",
    socials: {
      github: {
        link: "test",
        icon: "ph:github-logo",
      },
      facebook: {
        link: "test",
        icon: "ph:facebook-logo",
      },
      instagram: {
        link: "test",
        icon: "ph:instagram-logo",
      },
      x: {
        link: "test",
        icon: "ph:twitter-logo",
      },
      youtube: {
        link: "test",
        icon: "ph:youtube-logo",
      },
    },
  },
  ui: {
    icons: {
      dark: "ph:moon-bold",
      light: "ph:sun-bold",
    },
  },
});
