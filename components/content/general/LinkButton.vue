<script setup lang="ts">
const props = defineProps(['href', 'icon', 'color']);
const usedColor: string = props.color ? props.color : 'primary';
</script>

<template>
  <a :href="href" target="_blank"
    class="not-prose inline-flex items-center gap-x-2 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    :class="usedColor">
    <Icon v-if="icon" :name="icon" class="-ml-0.5 h-5 w-5" aria-hidden="true" />
    <slot />
  </a>
</template>

<style scoped lang="postcss">
.blue {
  @apply bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600;
}

.primary {
  @apply bg-primary-600 hover:bg-primary-600 focus-visible:outline-primary-600;
}

.indigo {
  @apply bg-indigo-600 hover:bg-indigo-600 focus-visible:outline-indigo-600;
}
</style>