<script setup lang="ts">
const search: Ref<string> = useState("search");
const { data, refresh } = useAsyncData('board', () => {
  const query = queryContent('/board');

  // Conditionally add the 'where' clause if the search input is not empty
  if (search.value.trim()) {
    query.where({
      $or: [
        { title: { $containsAny: search.value.split(' ') } },
        { description: { $containsAny: search.value.split(' ') } },
      ]
    });
  }

  return query.sort({ sponsored: 1 }).find();
}, { watch: [search] });

watch(search, () => {
  refresh();
});
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <NuxtLink :to="i._path" v-for="i in data" class="border rounded p-6 relative group">
      <span v-if="i.sponsor"
        class="absolute text-sm font-medium py-0.5 group-hover:border-primary-500 -top-3 border border-300 rounded-full bg-gray-100 px-3.5 text-gray-600">
        Featured ✨
      </span>
      <h3 class="m-0">
        {{ i.title }}
      </h3>
      <p>
        {{ i.description }}
      </p>
      <div class="p-0 m-0 flex gap-2">
        <span v-for="tag in i.tags"
          class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
          :class="`bg-${tag.color}-50`">{{
      tag }}</span>
      </div>
    </NuxtLink>
  </div>
</template>