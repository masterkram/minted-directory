<script setup lang="ts">
import formatString from '../../util/formatString';
const router = useRouter();

const search: Ref<string> = useState("search");
const selectedTags: Ref<string[]> = useState("tags", () => []);

const searchConfig = useAppConfig().directory.search;
const searchTag = await getTag();

async function getTag() {
  if (searchConfig.showCount) {
    const { data: count } = await useAsyncData('content-count', () => queryContent('/board').count());
    return formatString(searchConfig.placeholder, count.value);
  }

  return searchConfig.placeholder;
}


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
    <div class="mt-2 flex rounded-md shadow-sm">
      <div class="relative flex flex-grow items-stretch focus-within:z-10">
        <div v-if="searchConfig.icon" class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Icon :name="searchConfig.icon" class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input v-model="search" ref="searchInput"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:active:ring-primary-400 dark:bg-gray-700 dark:ring-gray-600 dark:text-gray-200 dark:placeholder:text-gray-400"
          :class="searchConfig.icon ? 'pl-10' : ''" :placeholder="searchTag" />
        <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd
            class="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400 dark:border-gray-500 dark:text-gray-500">⌘K</kbd>
        </div>
      </div>
    </div>

    <div class="flex m-0 gap-4 mt-4 py-2">
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
        class="border border-dashed border-gray-300 rounded-lg font-medium text-gray-500 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-400 focus:ring-primary-500 focus:ring-2 focus:border-none ring-offset-4">
        <option value="" disabled selected>
          <span>
            Select a tag
          </span>
        </option>
        <option v-for="tag in availableTags" :key="tag.name" :value="tag.name">{{ tag.name }}</option>
      </select>
    </div>
  </div>
</template>