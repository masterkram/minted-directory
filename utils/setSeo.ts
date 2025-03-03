import type { BlogCollectionItem, DirectoryCollectionItem, PagesCollectionItem } from '@nuxt/content';

export default function setSeo(page: DirectoryCollectionItem | BlogCollectionItem | PagesCollectionItem) {
  const config = useAppConfig();

  useSeoMeta({
    title: page.title || config.general.title || 'Empty Title',
    description: page.description || config.general.title || 'Empty Description',
  });

  defineOgImage({
    component: page.og_image?.style || 'Custom',
    title: page.og_image?.title || page.title || config.general.title || 'Empty Title',
    description: page.og_image?.description || page.description || config.general.title || 'Empty Description',
    emoji: page.og_image?.emoji,
  });
}
