import { useAsyncData } from "nuxt/app";

export function useFeatured() {
  return useAsyncData("featured-listing", () =>
    queryContent("/dir").where({ _extension: "md", featured: true }).findOne()
  );
}
