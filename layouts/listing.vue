<script setup lang="ts">
const config = useAppConfig();
const { page } = useContent();
const { data: featured } = await useFeatured();
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-10 lg:gap-8 py-10">
    <div class="max-w-prose px-5 lg:col-start-3 lg:px-0 2xl:col-start-4 col-span-4">
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