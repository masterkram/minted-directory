<script setup lang="ts">
const props = defineProps(['item']);
</script>

<template>
  <NuxtLink :to="item._path"
    class="border border-dashed border-gray-200 dark:border-gray-500 hover:border-primary-400 hover:border-solid dark:hover:border-primary-300 rounded p-6 relative group transition-all">
    <DirectoryFeaturedTag v-if="item.featured" />
    <h2 class="m-0 text-lg font-semibold dark:text-gray-50">
      {{ item.title }}
    </h2>
    <p>
      {{ item.description }}
    </p>
    <div class="p-0 mt-2 flex flex-wrap gap-2">
      <UiTag v-for="tag in item.tags" :tag="tag" />
    </div>
  </NuxtLink>
</template>
