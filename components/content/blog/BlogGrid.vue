<script setup lang="ts">
const { data } = await useAsyncData('blog', () => queryContent('/blog').where({ _path: { $ne: "/blog" }, _extension: "md" }).find());
</script>

<template>
  <div class="not-prose grid grid-cols-1 lg:grid-cols-4 gap-4">
    <UiCard v-for="i in data" :item="i" />
  </div>
</template>