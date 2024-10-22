import { useAsyncData, type AsyncData } from "nuxt/app";
import type ListingContent from "~/types/Listing";

export function useDirectory(): AsyncData<
  ListingContent[] | null,
  Error | null
> {
  const intersection = useAppConfig()?.directory?.search?.tags?.intersection;

  const search: Ref<string> = useState("search");
  const tags: Ref<string[]> = useState("tags");

  const directoryData = useAsyncData(
    "board",
    () => {
      const query = queryContent("/dir");

      if (search.value) {
        query.where({
          $or: [
            { title: { $icontains: search.value } },
            { description: { $icontains: search.value } },
          ],
        });
      }

      if (tags.value && tags.value.length > 0) {
        query.where({
          tags: intersection
            ? { $contains: tags.value }
            : { $containsAny: tags.value },
        });
      }

      query.where({
        _extension: "md",
      });

      query.only(["featured", "card_image", "description", "title", "_path"]);

      return query.sort({ featured: 1 }).find() as Promise<ListingContent[]>;
    },
    { watch: [search, tags] }
  );

  watch(
    [search, tags],
    () => {
      directoryData.refresh();
    },
    { deep: true }
  );

  return directoryData;
}
