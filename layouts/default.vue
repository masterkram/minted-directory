<script setup lang="ts">
const config = useAppConfig();
const { data: sponsored } = await useAsyncData('sponsored', () => queryContent('/board').where({ sponsored: { $exists: true } }).only(['title', 'description', '_path']).findOne());
const { page } = useContent();
</script>

<template>
  <div class="relative">
    <div class="max-w-prose 2-xl:max-w-6xl px-5 py-10 mx-auto">
      <main
        class="max-w-none font-display prose dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 hover:prose-a:text-primary-400 prose-a:font-normal prose-a:no-underline prose-a:border-dashed prose-a:border-b hover:prose-a:border-solid hover:prose-a:border-primary-400">
        <slot />
      </main>
      <!-- <NuxtLink v-if="config.directory.showFeaturedOnAllPages && page && !page.sponsored" :to="sponsored?._path"
        class="absolute max-w-xs top-4 right-4 border bg-indigo-50 dark:bg-indigo-400/10 dark:border-indigo-400/30 border-indigo-200 rounded-lg p-4">
        <div class="flex justify-between items-center font-medium text-indigo-700 dark:text-indigo-300">
          <span class="underline">Sponsored</span>
          <Icon name="tabler:star" />
        </div>
        <p class="font-bold dark:text-white">{{ sponsored?.title }}</p>
        <p class="text-gray-700 dark:text-gray-300">{{ sponsored?.description }}</p>
      </NuxtLink> -->
    </div>
  </div>
</template>