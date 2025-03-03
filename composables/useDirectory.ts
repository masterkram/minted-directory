import type { DirectoryCollectionItem } from '@nuxt/content';
import { useAsyncData } from 'nuxt/app';

export function useDirectory() {
  const directoryData = useAsyncData('board', () => {
    const query = queryCollection('directory');

    query.select('featured', 'card_image', 'description', 'title', 'path', 'tags');

    return query.order('featured', 'DESC').all() as Promise<DirectoryCollectionItem[]>;
  });

  return directoryData;
}
