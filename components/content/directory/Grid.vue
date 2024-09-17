<script setup lang="ts">
const config = useAppConfig().directory.grid;
const intersection = useAppConfig().directory.search.tags.intersection;

const { data, refresh } = useDirectory();
</script>

<template>
  <div class="not-prose grid grid-cols-1 gap-4" :class="config.list ? '' : 'lg:grid-cols-4 '">
    <DirectoryEmptyQueryIndicator v-if="data?.length === 0" />
    <SubmitBox v-if="config.submit.show && config.submit.first" />
    <Card v-for="i in data" :item="i" />
    <SubmitBox v-if="config.submit.show && !config.submit.first" />
  </div>
</template>