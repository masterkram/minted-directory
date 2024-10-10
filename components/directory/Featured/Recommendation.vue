<script setup lang="ts">
import type { AsyncData } from '#app';
import type ListingContent from '~/types/Listing';

const { data: featured } = await useAsyncData('featured', () => queryContent('/dir').where({ featured: { $exists: true } }).only(['title', 'description', '_path', 'card_image']).findOne()) as AsyncData<ListingContent, Error | null>;
const config = useAppConfig();
const featuredExists = computed(() => featured.value);
</script>

<template>
  <div v-if="featuredExists"
    class="flex flex-row flex-wrap border bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border-gray-200 rounded-lg p-6 gap-3">
    <div class="flex flex-col justify-between">
      <div class="space-y-2 max-w-40">
        <p class="font-bold text-2xl dark:text-white tracking-tight">{{ featured?.title }}</p>
        <p class="text-gray-700 italic dark:text-gray-300">{{ featured?.description }}</p>
      </div>
      <NuxtLink class="mt-3" :to="featured._path">
        <UiButton icon="tabler:click">Learn More</UiButton>
      </NuxtLink>
    </div>
    <NuxtImg v-if="featured?.card_image" class="rounded-lg h-40" :src="featured?.card_image" />
  </div>
</template>