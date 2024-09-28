<script setup lang="ts">
const config = useAppConfig().directory.grid;

const { data } = useDirectory();
</script>

<template>
  <div class="not-prose grid grid-cols-1 gap-4" :class="config?.list ? '' : 'lg:grid-cols-4 '">
    <DirectoryEmptyQueryIndicator v-if="data?.length === 0" />
    <DirectorySubmitBox v-if="config?.submit?.show && config.submit.first" />
    <UiCard v-for="i in data" :item="i" />
    <DirectorySubmitBox v-if="config?.submit?.show && !config.submit.first" />
  </div>
</template>