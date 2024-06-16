<script setup lang="ts">
const search = useState("search");
const searchTag = useAppConfig().directory.searchTag;
</script>

<template>
  <input v-model="search" class="rounded-lg border border-zinc-200 bg-zinc-100 mb-10 w-full px-2.5 py-1"
    :placeholder="searchTag">
</template>