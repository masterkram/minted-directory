import type { DirectoryCollectionItem } from '@nuxt/content';
import { useAsyncData, type AsyncData } from 'nuxt/app';

export function useFeatured(): AsyncData<DirectoryCollectionItem, Error | null> {
  return useAsyncData('featured-listing', () =>
    queryCollection('directory').where('featured', '=', 'true').first(),
  );
}
