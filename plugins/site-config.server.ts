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
  },
});
