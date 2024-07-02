<script setup lang="ts">
const router = useRouter();

const search: Ref<string> = useState("search");
const selectedTags: Ref<string[]> = useState("tags", () => []);

const searchTag = useAppConfig().directory.searchTag;

watch(
  [search, selectedTags],
  () => {
    router.push({
      query: { search: search.value.trim(), tags: selectedTags.value },
    });
  },
);

const searchInput = useKeyFocus();

const tags = useAppConfig().directory.tags;

const availableTags = computed(() => {
  return tags.filter(e => !selectedTags.value.includes(e.name));
});

function removeTag(myTag: string) {
  const index = selectedTags.value.indexOf(myTag);
  selectedTags.value.splice(index, 1);
}

function addTag(event: any) {
  const select = event.target as HTMLSelectElement;
  const selectedValue = select.value;

  if (selectedTags.value && !selectedTags.value.includes(selectedValue)) {
    selectedTags.value.push(selectedValue);
    // Optionally clear the selection after adding
    select.value = '';
  }

}
</script>

<template>
  <div class="mb-10 not-prose">
    <div class="relative flex items-center">
      <input v-model="search" ref="searchInput"
        class="block w-full rounded-md border-0 py-2 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
        :placeholder="searchTag">
      <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
        <kbd
          class="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">⌘K</kbd>
      </div>
    </div>
    <div class="flex m-0 gap-4 mt-4">
      <div v-for="myTag in selectedTags"
        class="relative group border-2 shadow-sm font-semibold text-blue-500 bg-blue-600/10 rounded-lg px-1.5 py-1 inline-flex items-center justify-center"
        :class="`border-blue-500`">
        <span @click="() => removeTag(myTag)"
          class="absolute text-gray-500 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-gray-100 flex items-center justify-center -top-4 left-0 bg-white rounded-full h-6 w-6 border">
          <Icon name="ph:x-bold" />
        </span>
        {{ myTag }}
      </div>
      <select :modelValue="null" @change="addTag"
        class="border border-dashed border-gray-300 rounded-lg font-medium text-gray-500">
        <option value="" disabled selected>Select a tag
          <Icon name="ph:tag" />
        </option>
        <option v-for="tag in availableTags" :key="tag.name" :value="tag.name">{{ tag.name }}</option>
      </select>
    </div>
  </div>
</template>