<script setup lang="ts">
defineProps(['page']);
</script>

<template>
  <div>
    <ContentRenderer
      v-if="page"
      :key="(page as any)._id"
      :value="page"
    >
      <template #empty="{ data: value }">
        <DocumentEmpty :value="value" />
      </template>
    </ContentRenderer>
    <DocumentNotFound v-else />
  </div>
</template>
