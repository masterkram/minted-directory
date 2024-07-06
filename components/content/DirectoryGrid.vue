<script setup lang="ts">
const config = useAppConfig().directory.grid;
const intersection = useAppConfig().directory.search.tags.intersection;

const search: Ref<string> = useState("search");
const tags: Ref<string[]> = useState("tags");

const { data, refresh } = useAsyncData('board', () => {
  const query = queryContent('/board');

  if (search.value) {
    query.where({ $or: [{ title: { $icontains: search.value } }, { description: { $icontains: search.value } }] });
  }

  if (tags.value && tags.value.length > 0) {
    query.where({ 'tags': intersection ? { $contains: tags.value } : { $containsAny: tags.value } });
  }

  return query.sort({ sponsored: 1 }).find();
}, { watch: [search, tags] });

watch(
  [search, tags],
  () => {
    refresh();
  },
  { deep: true }
);
</script>

<template>
  <div class="not-prose grid grid-cols-1 gap-4" :class="config.list ? '' : 'lg:grid-cols-4 '">
    <SubmitBox v-if="config.submit.show && config.submit.first" />
    <DirectoryItem v-for="i in data" :item="i" />
    <SubmitBox v-if="config.submit.show && !config.submit.first" />
    <EmptyQueryIndicator v-if="data?.length === 0" />
  </div>
</template>