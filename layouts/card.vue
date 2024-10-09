<script setup lang="ts">
const config = useAppConfig();
const { page } = useContent();
const { data: featured } = await useFeatured();
</script>

<template>
  <div class="relative bg-gray-100 dark:bg-gray-900">
    <div
      class="max-w-prose 2-xl:max-w-6xl px-5 py-10 my-8 mx-auto sm:px-8 sm:shadow bg-white dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-700 sm:rounded-lg">
      <DocumentProse>
        <slot />
      </DocumentProse>
      <DirectoryFeaturedRecommendation v-if="config?.directory?.featured?.showOnAllPages && page && !page.featured"
        :to="featured?._path" />
    </div>
  </div>
</template>