<script setup lang="ts">
const config = useAppConfig().directory.grid;

const { data: directoryListings } = useDirectory();
</script>

<template>
  <DirectoryPureGrid :listings="directoryListings ?? []" :show-submit="config?.submit?.show"
    :submit-first="config?.submit?.first" />
</template>