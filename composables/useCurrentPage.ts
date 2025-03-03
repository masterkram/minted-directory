import type { DirectoryCollectionItem, PagesCollectionItem } from '@nuxt/content';
import { useAsyncData, type AsyncData } from 'nuxt/app';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

export function useCurrentPage(route: RouteLocationNormalizedLoaded<string | symbol>): AsyncData<DirectoryCollectionItem | PagesCollectionItem, Error | null> {
  const splitUrl = route.path.split('/');
  const lastSlug = splitUrl[splitUrl.length - 1];
  const key = `current-page-${lastSlug || 'root'}`;

  return useAsyncData(key, async () => {
    if (route.path.startsWith('/blog/')) {
      const blogPage = await queryCollection('blog').path(`/blog/${lastSlug}`).first();

      if (blogPage) {
        return blogPage;
      }
    }

    const extraPage = await queryCollection('pages').path(`/${lastSlug}`).first();

    if (extraPage) {
      return extraPage;
    }

    return await queryCollection('directory').path(`/dir/${lastSlug}`).first();
  });
}
