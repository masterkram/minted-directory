import { field, group } from "@nuxthq/studio/theme";

export default defineNuxtSchema({
  appConfig: {
    general: group({
      title: "General",
      description: "General configuration for the app.",
      fields: {
        title: field({
          type: "string",
          title: "Title",
          description: "Title of the application.",
          default: "New Directory",
        }),
        logo: field({
          type: "media",
          title: "Logo",
          description: "Logo of the application.",
          default: "/logo.png",
        }),
      },
    }),
    directory: group({
      title: "Directory",
      description: "Directory configuration.",
      fields: {
        search: group({
          title: "Search",
          description: "Search settings for the directory.",
          fields: {
            placeholder: field({
              type: "string",
              title: "Placeholder",
              description:
                "Placeholder text for the search input. Use {0} to mark where to fill in the number of listings.",
              default: "Search among {0} tools",
            }),
            showCount: field({
              type: "boolean",
              title: "Show Count",
              description: "Show the number of search results.",
              default: true,
            }),
            icon: field({
              type: "icon",
              title: "Icon",
              description: "Icon for the search input.",
              default: "tabler:bow",
            }),
            tags: group({
              title: "Tags",
              description: "Tag settings for the search.",
              fields: {
                display: field({
                  type: "string",
                  title: "Display",
                  description: "Display option for tags.",
                  default: "show-all",
                  required: ["none", "select", "show-all"],
                }),
                intersection: field({
                  type: "boolean",
                  title: "Intersection",
                  description: "Use intersection for tags.",
                  default: false,
                }),
              },
            }),
          },
        }),
        grid: group({
          title: "Grid",
          description: "Grid settings for the directory.",
          fields: {
            list: field({
              type: "boolean",
              title: "List",
              description: "Display as list.",
              default: false,
            }),
            emptyState: group({
              title: "Empty State",
              description: "Settings for the empty state.",
              fields: {
                text: field({
                  type: "string",
                  title: "Text",
                  description: "Text to display when no matches are found.",
                  default: "No matches for this query.",
                }),
                type: field({
                  type: "string",
                  title: "Type",
                  description: "Type of empty state.",
                  default: "button",
                  required: ["button", "simple", "link"],
                }),
                icon: field({
                  type: "icon",
                  title: "Icon",
                  description: "Icon for the empty state.",
                  default: "ph:boat-bold",
                }),
              },
            }),
            card: group({
              title: "Listing Card",
              description: "Settings on how to display individual cards.",
              fields: {
                image: field({
                  type: "boolean",
                  title: "Image",
                  description: "Images on cards",
                  default: false,
                }),
                border: field({
                  type: "string",
                  title: "Type",
                  description: "Type of empty state.",
                  default: "dashed",
                  required: ["dashed", "shadow", "outline"],
                }),
              },
            }),
            submit: group({
              title: "Submit",
              description: "Settings for the submit button.",
              fields: {
                show: field({
                  type: "boolean",
                  title: "Show",
                  description: "Show the submit button.",
                  default: true,
                }),
                first: field({
                  type: "boolean",
                  title: "First",
                  description: "Show first submit button.",
                  default: false,
                }),
                title: field({
                  type: "string",
                  title: "Title",
                  description: "Title for the submit button.",
                  default: "Submit a template",
                }),
                description: field({
                  type: "string",
                  title: "Description",
                  description: "Description for the submit button.",
                  default:
                    "Submit a template to show off a good project to other people.",
                }),
                hideable: field({
                  type: "boolean",
                  title: "Hideable",
                  description: "Allow hiding the submit button.",
                  default: true,
                }),
              },
            }),
          },
        }),
        showFeaturedOnAllPages: field({
          type: "boolean",
          title: "Show Featured On All Pages",
          description: "Show featured items on all pages.",
          default: true,
        }),
        featuredText: field({
          type: "string",
          title: "Featured Text",
          description: "Text to display for featured items.",
          default: "Featured ✨",
        }),
        tags: field({
          type: "array",
          title: "Tags",
          description: "Tags for the directory.",
          default: [
            { name: "SAAS", color: "blue" },
            { name: "dashboard", color: "green" },
            { name: "landing-page" },
            { name: "toolbox" },
            { name: "agency" },
            { name: "markdown-based" },
            { name: "basics", color: "indigo" },
          ],
        }),
      },
    }),
    header: group({
      title: "Header",
      description: "Header configuration.",
      fields: {
        banner: group({
          title: "Banner",
          description: "Banner settings for the header.",
          fields: {
            show: field({
              type: "boolean",
              title: "Show",
              description: "Show the banner.",
              default: true,
            }),
            text: field({
              type: "string",
              title: "Text",
              description: "Text to display in the banner.",
              default: "Create your own directory website in minutes.",
            }),
            link: field({
              type: "string",
              title: "Link",
              description: "Link for the banner.",
              default: "https://github.com/masterkram/nuxt-directory",
            }),
            brandText: field({
              type: "string",
              title: "Brand Text",
              description: "Brand text for the banner.",
              default: "MintedDirectory",
            }),
          },
        }),
        navbar: group({
          title: "Navbar",
          description: "Navbar settings for the header.",
          fields: {
            colorModeSelector: field({
              type: "boolean",
              title: "Color Mode Selector",
              description: "Show the color mode selector in the navbar.",
              default: true,
            }),
          },
        }),
        actionButton: group({
          title: "Action Button",
          description: "Action button settings for the header.",
          fields: {
            text: field({
              type: "string",
              title: "Text",
              description: "Text for the action button.",
              default: "Submit a starter",
            }),
            href: field({
              type: "string",
              title: "Href",
              description: "Link for the action button.",
              default: "/submit",
            }),
          },
        }),
      },
    }),
    footer: group({
      title: "Footer",
      description: "Footer configuration.",
      fields: {
        description: field({
          type: "string",
          title: "Description",
          description: "Description to display in the footer.",
          default: "Find the the best Nuxt templates.",
        }),
        socials: group({
          title: "Socials",
          description: "Social links for the footer.",
          fields: {
            github: group({
              fields: {
                link: field({
                  type: "string",
                  title: "Github Link",
                  description: "Link to github profile",
                }),
                icon: field({
                  type: "icon",
                  title: "Github Icon",
                }),
              },
            }),
            x: group({
              fields: {
                link: field({
                  type: "string",
                  title: "X Link",
                  description: "Link to X profile",
                }),
                icon: field({
                  type: "icon",
                  title: "X icon",
                }),
              },
            }),
            instagram: group({
              fields: {
                link: field({
                  type: "string",
                  title: "Instagram Link",
                  description: "Link to Instagram Profile",
                }),
                icon: field({
                  type: "icon",
                  title: "Instagram Icon",
                }),
              },
            }),
            youtube: group({
              fields: {
                link: field({
                  type: "string",
                  title: "Youtube Link",
                  description: "Link to Youtube Account",
                }),
                icon: field({
                  type: "icon",
                  title: "Youtube Icon",
                }),
              },
            }),
          },
        }),
      },
    }),
    ui: group({
      title: "UI",
      description: "UI Customization.",
      fields: {
        icons: group({
          title: "Icons",
          description: "Manage icons used in UI.",
          fields: {
            dark: field({
              type: "icon",
              title: "Dark mode",
              description: "Icon of color mode button for dark mode.",
              default: "ph:moon-bold",
            }),
            light: field({
              type: "icon",
              title: "Light mode",
              description: "Icon of color mode button for light mode.",
              default: "ph:sun-bold",
            }),
          },
        }),
      },
    }),
  },
});
