<script setup lang="ts">
const config = useAppConfig();
const { page } = useContent();
const { data: featured } = await useFeatured();
</script>

<template>
  <div class="bg-gray-100 dark:bg-gray-900 grid grid-cols-10 gap-8 py-10">
    <div
      class="max-w-prose col-span-4 col-start-4 2-xl:max-w-6xl px-5 py-10 sm:px-8 sm:shadow bg-white dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-700 sm:rounded-lg">
      <DocumentProse>
        <slot />
      </DocumentProse>
    </div>
    <div v-if="config.directory.featured?.showOnAllPages"
      class="col-span-1 lg:col-span-4 2xl:col-span-3 order-last lg:mr-20 mx-5 lg:mx-0">
      <DirectoryFeaturedRecommendation v-if="config?.directory?.featured?.showOnAllPages && page && !page.featured"
        :to="featured?._path" />
    </div>
  </div>
</template>