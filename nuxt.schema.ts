import { field, group } from '@nuxt/content/preview';

export default defineNuxtSchema({
  appConfig: {
    general: group({
      title: 'General',
      description: 'General configuration for the app.',
      fields: {
        title: field({
          type: 'string',
          title: 'Title',
          description: 'Title of the application.',
          default: 'New Directory',
        }),
        language: field({
          type: 'string',
          title: 'Language',
          description: 'Language Code For The directory.',
          default: 'en',
        }),
        logo: field({
          type: 'media',
          title: 'Logo',
          description: 'Logo of the application.',
          default: '/logo.png',
        }),
      },
    }),
    site: group({
      title: 'Site Settings',
      description: 'SEO and Site Metadata Settings',
      fields: {
        name: field({
          type: 'string',
          title: 'Title',
          description:
            'Title of the application. If empty general title will be used.',
        }),
        description: field({
          type: 'string',
          title: 'SEO Site Description',
          description:
            'Used for the description meta tag. If empty general description will be used.',
        }),
        url: field({
          type: 'string',
          title: 'URL',
          description:
            'Base url of your website, important for the correct function of the seo module.',
          default: 'https://example.com',
        }),
        favicon: group({
          title: '',
          fields: {
            emoji: field({
              type: 'string',
              title: 'emoji favicon',
              default: '🍃',
            }),
            image: field({
              type: 'file',
              tile: 'image favicon',
            }),
          },
        }),
      },
    }),
    directory: group({
      title: 'Directory',
      description: 'Directory configuration.',
      fields: {
        featured: group({
          fields: {
            showOnAllPages: field({
              type: 'boolean',
              title: 'Show Featured On All Pages',
              description: 'Show featured items on all pages.',
              default: true,
            }),
            showOnSide: field({
              type: 'boolean',
              title: 'Featured listing location',
              description:
                'Show recommended listing on side of the screen or bottom of the.',
              default: true,
            }),
            labelForCard: field({
              type: 'string',
              title: 'Featured Text',
              description: 'Text to display for featured items.',
              default: 'Featured ✨',
            }),
            icon: field({
              type: 'icon',
              title: 'Featured Icon',
              description: 'Icon for the banner of featured listings',
            }),
          },
        }),
        search: group({
          title: 'Search',
          description: 'Search settings for the directory.',
          fields: {
            placeholder: field({
              type: 'string',
              title: 'Placeholder',
              description:
                'Placeholder text for the search input. Use {0} to mark where to fill in the number of listings.',
              default: 'Search among {0} tools',
            }),
            icon: field({
              type: 'icon',
              title: 'Icon',
              description: 'Icon for the search input.',
              default: 'tabler:bow',
            }),
            tags: group({
              title: 'Tags',
              description: 'Tag settings for the search.',
              fields: {
                display: field({
                  type: 'string',
                  title: 'Display',
                  description: 'Display option for tags.',
                  default: 'show-all',
                  required: ['none', 'select', 'show-all'],
                }),
                intersection: field({
                  type: 'boolean',
                  title: 'Intersection',
                  description: 'Use intersection for tags.',
                  default: false,
                }),
              },
            }),
          },
        }),
        grid: group({
          title: 'Grid',
          description: 'Grid settings for the directory.',
          fields: {
            list: field({
              type: 'boolean',
              title: 'List',
              description: 'Display as list.',
              default: false,
            }),
            emptyState: group({
              title: 'Empty State',
              description: 'Settings for the empty state.',
              fields: {
                text: field({
                  type: 'string',
                  title: 'Text',
                  description: 'Text to display when no matches are found.',
                  default: 'No matches for this query.',
                }),
                type: field({
                  type: 'string',
                  title: 'Type',
                  description: 'Type of empty state.',
                  default: 'button',
                  required: ['button', 'simple', 'link'],
                }),
                icon: field({
                  type: 'icon',
                  title: 'Icon',
                  description: 'Icon for the empty state.',
                  default: 'tabler:ship',
                }),
              },
            }),
            card: group({
              title: 'Listing Card',
              description: 'Settings on how to display individual cards.',
              fields: {
                image: field({
                  type: 'boolean',
                  title: 'Image',
                  description: 'Images on cards',
                  default: false,
                }),
                type: field({
                  type: 'string',
                  title: 'Type',
                  description: 'Type of empty state.',
                  default: 'dashed',
                  required: ['dashed', 'shadow', 'outline', 'bullet'],
                }),
              },
            }),
            submit: group({
              title: 'Submit',
              description: 'Settings for the submit button.',
              fields: {
                show: field({
                  type: 'boolean',
                  title: 'Show',
                  description: 'Show the submit button.',
                  default: true,
                }),
                first: field({
                  type: 'boolean',
                  title: 'First',
                  description: 'Show first submit button.',
                  default: false,
                }),
                title: field({
                  type: 'string',
                  title: 'Title',
                  description: 'Title for the submit button.',
                  default: 'Submit a template',
                }),
                description: field({
                  type: 'string',
                  title: 'Description',
                  description: 'Description for the submit button.',
                  default:
                    'Submit a template to show off a good project to other people.',
                }),
                hideable: field({
                  type: 'boolean',
                  title: 'Hideable',
                  description: 'Allow hiding the submit button.',
                  default: true,
                }),
                icon: field({
                  type: 'icon',
                  title: 'Icon',
                  description:
                    'Icon shown in the submit suggestion in the grid.',
                  default: 'tabler:send',
                }),
              },
            }),
          },
        }),
        tags: field({
          type: 'array',
          title: 'Tags',
          description: 'Tags for the directory.',
          default: [
            { name: 'SAAS', color: 'blue' },
            { name: 'dashboard', color: 'green' },
            { name: 'landing-page' },
            { name: 'toolbox' },
            { name: 'agency' },
            { name: 'markdown-based' },
            { name: 'basics', color: 'indigo' },
          ],
        }),
        tagPages: group({
          fields: {
            title: field({
              type: 'string',
              default: 'All {0} products',
            }),
            description: field({
              type: 'string',
              default: 'All {0} products',
            }),
          },
        }),
      },
    }),
    header: group({
      title: 'Header',
      description: 'Header configuration.',
      fields: {
        banner: group({
          title: 'Banner',
          description: 'Banner settings for the header.',
          fields: {
            show: field({
              type: 'boolean',
              title: 'Show',
              description: 'Show the banner.',
              default: true,
            }),
            text: field({
              type: 'string',
              title: 'Text',
              description: 'Text to display in the banner.',
              default: 'Create your own directory website in minutes.',
            }),
            link: field({
              type: 'string',
              title: 'Link',
              description: 'Link for the banner.',
              default: 'https://github.com/masterkram/nuxt-directory',
            }),
            brandText: field({
              type: 'string',
              title: 'Brand Text',
              description: 'Brand text for the banner.',
              default: 'MintedDirectory',
            }),
          },
        }),
        navbar: group({
          title: 'Navbar',
          description: 'Navbar settings for the header.',
          fields: {
            colorModeSelector: field({
              type: 'boolean',
              title: 'Color Mode Selector',
              description: 'Show the color mode selector in the navbar.',
              default: true,
            }),
            links: field({
              type: 'array',
              title: 'Link Array',
              description: 'Links to show on the navbar.',
              default: [],
            }),
          },
        }),
        actionButton: group({
          title: 'Action Button',
          description: 'Action button settings for the header.',
          fields: {
            text: field({
              type: 'string',
              title: 'Text',
              description: 'Text for the action button.',
              default: 'Submit a listing',
            }),
            href: field({
              type: 'string',
              title: 'Href',
              description: 'Link for the action button.',
              default: '/submit',
            }),
          },
        }),
      },
    }),
    footer: group({
      title: 'Footer',
      description: 'Footer configuration.',
      fields: {
        description: field({
          type: 'string',
          title: 'Description',
          description: 'Description to display in the footer.',
          default: 'Find the the best Nuxt templates.',
        }),
        navigation: field({
          type: 'array',
          title: 'Links',
          description: 'Array of navigation object displayed in footer.',
          default: []
        }),
        socials: group({
          title: 'Socials',
          description: 'Social links for the footer.',
          fields: {
            github: group({
              fields: {
                link: field({
                  type: 'string',
                  title: 'Github Link',
                  description: 'Link to github profile',
                }),
                icon: field({
                  type: 'icon',
                  title: 'Github Icon',
                }),
              },
            }),
            x: group({
              fields: {
                link: field({
                  type: 'string',
                  title: 'X Link',
                  description: 'Link to X profile',
                }),
                icon: field({
                  type: 'icon',
                  title: 'X icon',
                }),
              },
            }),
            instagram: group({
              fields: {
                link: field({
                  type: 'string',
                  title: 'Instagram Link',
                  description: 'Link to Instagram Profile',
                }),
                icon: field({
                  type: 'icon',
                  title: 'Instagram Icon',
                }),
              },
            }),
            youtube: group({
              fields: {
                link: field({
                  type: 'string',
                  title: 'Youtube Link',
                  description: 'Link to Youtube Account',
                }),
                icon: field({
                  type: 'icon',
                  title: 'Youtube Icon',
                }),
              },
            }),
          },
        }),
      },
    }),
    ui: group({
      title: 'UI',
      description: 'UI Customization.',
      fields: {
        icons: group({
          title: 'Icons',
          description: 'Manage icons used in UI.',
          fields: {
            dark: field({
              type: 'icon',
              title: 'Dark mode',
              description: 'Icon of color mode button for dark mode.',
              default: 'tabler:moon',
            }),
            light: field({
              type: 'icon',
              title: 'Light mode',
              description: 'Icon of color mode button for light mode.',
              default: 'tabler:sun',
            }),
          },
        }),
      },
    }),
  },
});
