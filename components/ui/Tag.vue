<script setup lang="ts">
import type Tag from '~/types/Tag';
const config = useAppConfig().directory.tags as Tag[] | undefined;

const props = defineProps(['tag']);

const configTag = config?.find(element => element.name === props.tag);

const tagClass = computed(() => {
  return configTag?.color ? `${configTag.color}-tag` : 'gray-tag';
});
</script>

<template>
  <span :class="tagClass">
    {{ tag }}
  </span>
</template>


<style scoped lang="postcss">
.tag {
  @apply inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset;
}

.gray-tag {
  @apply tag bg-gray-50 text-gray-600 ring-gray-500/10 bg-gray-400/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20;
}

.green-tag {
  @apply tag bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20;
}

.blue-tag {
  @apply tag bg-blue-50 text-blue-700 ring-blue-600/20 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30;
}

.indigo-tag {
  @apply tag bg-blue-50 text-indigo-700 ring-indigo-600/20 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/30
}
</style>