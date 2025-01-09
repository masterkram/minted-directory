import { useAsyncData, type AsyncData } from "nuxt/app";
import type ListingContent from "~/types/Listing";

export function useDirectory() {
  const directoryData = useAsyncData("board", () => {
    const query = queryContent("/dir");

    query.where({
      _extension: "md",
    });

    query.only(["featured", "card_image", "description", "title", "_path", "tags"]);

    return query.sort({ featured: 1 }).find() as Promise<ListingContent[]>;
  });

  return directoryData;
}
