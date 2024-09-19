<script setup lang="ts">
const config = useAppConfig();
const { page } = useContent();
</script>

<template>
  <div class="relative bg-gray-100">
    <div
      class="max-w-prose 2-xl:max-w-6xl px-5 py-10 my-10 mx-auto bg-white sm:px-8 sm:shadow-sm dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 sm:rounded-lg">
      <main
        class="max-w-none font-display prose dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 hover:prose-a:text-primary-400 prose-a:font-normal prose-a:no-underline prose-a:border-dashed prose-a:border-b hover:prose-a:border-solid hover:prose-a:border-primary-400">
        <slot />
      </main>
      <FeaturedRecommendation v-if="config.directory.featured.showOnAllPages && page && !page.sponsored"
        :to="sponsored?._path" />
    </div>
  </div>
</template>