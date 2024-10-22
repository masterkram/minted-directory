import { updateSiteConfig, useAppConfig } from "#imports";

export default defineNuxtPlugin({
  enforce: "pre", // make it happen early
  setup() {
    const config = useAppConfig().site;
    updateSiteConfig({
      name: config.name ?? "",
      url: config.url ?? "",
      description: config.description ?? "",
      defaultLocale: "en",
    });

    if (config.favicon.emoji) {
      useHead({
        link: [
          {
            rel: "icon",
            href: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${config.favicon.emoji}</text></svg>`,
          },
        ],
      });
    } else if (config.favicon.image) {
      useHead({
        link: [
          {
            rel: "icon",
            href: config.favicon.image,
          },
        ],
      });
    }
  },
});
