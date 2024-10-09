import { useAsyncData, type AsyncData } from "nuxt/app";
import type ListingContent from "~/types/Listing";

export function useFeatured(): AsyncData<ListingContent, Error | null> {
  return useAsyncData("featured-listing", () =>
    queryContent("/dir").where({ _extension: "md", featured: true }).findOne()
  );
}
