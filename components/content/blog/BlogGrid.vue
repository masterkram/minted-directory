<script setup lang="ts">
const { data } = await useAsyncData('blog', () => queryCollection('blog').all());
</script>

<template>
  <div class="not-prose grid grid-cols-1 lg:grid-cols-4 gap-4">
    <UiCard
      v-for="i in data"
      :key="i.id"
      :full-path="true"
      :item="i"
    />
  </div>
</template>
