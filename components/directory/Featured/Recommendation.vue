<script setup lang="ts">
const { data: featured } = await useAsyncData('featured', () => queryContent('/dir').where({ featured: { $exists: true } }).only(['title', 'description', '_path']).findOne());
const config = useAppConfig();
const featuredExists = computed(() => featured.value);
</script>

<template>
  <NuxtLink v-if="featuredExists"
    class="block border mt-8 bg-indigo-50 dark:bg-indigo-400/10 dark:border-indigo-400/30 border-indigo-200 rounded-lg p-4"
    :class="config?.directory?.featured?.showOnSide ? '2xl:absolute 2xl:max-w-xs 2xl:top-4 2xl:right-4' : 'my-8'">
    <div class="flex justify-between items-center font-medium text-indigo-700 dark:text-indigo-300">
      <span class="underline">Sponsored</span>
      <Icon :name="config?.directory?.featured?.icon ?? 'tabler:star'" />
    </div>
    <p class="font-bold dark:text-white">{{ featured?.title }}</p>
    <p class="text-gray-700 dark:text-gray-300">{{ featured?.description }}</p>
  </NuxtLink>
</template>