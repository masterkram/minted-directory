<script setup lang="ts">
const config = useAppConfig().directory.grid;

const search: Ref<string> = useState("search");
const tags: Ref<string[]> = useState("tags");

const { data } = await useDirectory();

const directoryListings = computed(() => {
  let filteredData = data.value;
  if (!filteredData) {
    return [];
  }

  if (search.value) {
    filteredData = filteredData?.filter(e =>
      (e.title?.toLowerCase() + e.description?.toLowerCase()).includes(search.value.toLowerCase())
    );
  }

  if (tags.value.length > 0) {
    filteredData = filteredData?.filter(e =>
      tags.value.every(tag => e.tags?.includes(tag))
    );
  }

  return filteredData;
});
</script>

<template>
  <DirectoryPureGrid :listings="directoryListings ?? []" :show-submit="config?.submit?.show"
    :submit-first="config?.submit?.first" />
</template>