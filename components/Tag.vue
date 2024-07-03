<script setup>
defineProps(['tag']);
</script>

<template>
  <span
    class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
    {{ tag }}
  </span>
</template>