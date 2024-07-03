<script setup lang="ts">
const search: Ref<string> = useState("search");
const tags: Ref<string[]> = useState("tags");

const { data, refresh } = useAsyncData('board', () => {
  const query = queryContent('/board');

  if (search.value) {
    query.where({ $or: [{ title: { $icontains: search.value } }, { description: { $icontains: search.value } }] });
  }

  if (tags.value && tags.value.length > 0) {
    query.where({ 'tags': { $containsAny: tags.value } });
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
  <div class="not-prose grid grid-cols-1 lg:grid-cols-4 gap-4">
    <NuxtLink :to="i._path" v-for="i in data"
      class="border border-dashed border-stone-200 dark:border-stone-500 hover:border-primary-400 dark:hover:border-primary-300 rounded p-6 relative group">
      <span v-if="i.sponsored"
        class="absolute text-sm font-medium py-0.5 group-hover:border-primary-500 -top-3 border border-300 rounded-full bg-gray-100 px-3.5 text-gray-600">
        Featured ✨
      </span>
      <h3 class="m-0 text-lg font-semibold dark:text-stone-50">
        {{ i.title }}
      </h3>
      <p>
        {{ i.description }}
      </p>
      <div class="p-0 mt-2 flex gap-2">
        <Tag v-for="tag in i.tags" :tag="tag" />
      </div>
    </NuxtLink>
  </div>
</template>