<script setup lang="ts">
const cardConfig = useAppConfig().directory?.grid?.card;

defineProps(['item']);
</script>

<template>

  <NuxtLink :to="item._path" v-if="cardConfig?.type !== 'bullet'"
    class="border col-span-1 border-gray-200 dark:border-gray-500 hover:border-primary-400 hover:border-solid dark:hover:border-primary-300 rounded relative group transition-all"
    :class="cardConfig?.type === 'shadow' ? 'shadow-sm' : cardConfig?.type === 'dashed' ? 'border-dashed' : ''">
    <DirectoryFeaturedTag class="ml-6" v-if="item.featured" />
    <NuxtImg v-if="item.card_image" sizes="400px" :alt="`${item.title} banner`"
      class="w-full h-48 rounded-t object-cover" :src="item.card_image ?? '/logo.png'" />
    <div v-else
      class="w-full h-48 flex justify-center items-center rounded-t font-bold text-2xl bg-gray-200 dark:bg-gray-600">
      {{ item.title }}
    </div>
    <div class="p-6">
      <h3 class="m-0 text-lg font-semibold dark:text-gray-50">
        {{ item.title }}
      </h3>
      <p class="line-clamp-4 mt-2">
        {{ item.description }}
      </p>
      <div class="p-0 mt-2 flex gap-2">
        <UiTag v-for="tag in item.tags" :tag="tag" />
      </div>
    </div>
  </NuxtLink>
  <NuxtLink v-else :to="item._path">
    <div class="inline-flex gap-2 items-center">
      <img class="h-5 w-5" :src="item.cover ?? '/logo.png'" />
      <span class="font-semibold dark:text-gray-50">{{ item.title }}</span> -
      <span class="text-gray-600 dark:text-gray-300">{{ item.description }}</span>
    </div>
  </NuxtLink>

</template>