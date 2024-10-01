<script setup lang="ts">
const config = useAppConfig();
const { page } = useContent();
const featured = null;
</script>

<template>
  <div class="relative">
    <div class="max-w-prose 2-xl:max-w-6xl px-5 py-10 mx-auto">
      <DocumentProse>
        <slot />
      </DocumentProse>
      <DirectoryFeaturedRecommendation
        v-if="config.directory?.featured?.showOnAllPages && page && !page.featured && featured" :to="featured?._path" />
    </div>
  </div>
</template>