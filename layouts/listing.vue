<script setup lang="ts">
import type ListingContent from '~/types/Listing';

const config = useAppConfig();
const { page } = useContent();

const showFeaturedListings: ComputedRef<boolean> = computed(() => {
  const showOnAllPages = config?.directory?.featured?.showOnAllPages ?? false;
  const isFeatured = (page as unknown as ListingContent)?.featured ?? false;

  return showOnAllPages && !!page && !isFeatured;
});

const { data: featured } = await useFeatured();
</script>

<template>
  <div class="relative">
    <div class="max-w-prose 2-xl:max-w-6xl px-5 py-10 mx-auto">
      <DocumentProse>
        <slot />
      </DocumentProse>
      <div class="absolute top-0 right-20">
        <DirectoryFeaturedRecommendation v-if="config?.directory?.featured?.showOnAllPages && page && !page.featured"
          :to="featured?._path" />
      </div>
    </div>
  </div>
</template>