import type { DirectoryCollectionItem, PagesCollectionItem } from '@nuxt/content';
import { useAsyncData, type AsyncData } from 'nuxt/app';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

export function useCurrentPage(route: RouteLocationNormalizedLoaded<string | symbol>): AsyncData<DirectoryCollectionItem | PagesCollectionItem, Error | null> {
  console.log(route);
  const splitUrl = route.path.split('/');
  const lastSlug = splitUrl[splitUrl.length - 1];
  const key = `current-page-${lastSlug || 'root'}`;
  console.log(key);

  return useAsyncData(key, async () => {
    console.log(lastSlug);
    const extraPage = await queryCollection('pages').path(`/${lastSlug}`).first();

    if (extraPage) {
      return extraPage;
    }

    return await queryCollection('directory').path(`/dir/${lastSlug}`).first();
  });
}
