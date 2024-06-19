<script setup lang="ts">
const search = useState("search");
const searchTag = useAppConfig().directory.searchTag;
const searchInput = ref();

const keyListener = function (e: KeyboardEvent) {
  if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    console.log(searchInput);
    searchInput.value.focus();
  }
}

onMounted(() => {
  document.body.addEventListener('keydown', keyListener);
});

onBeforeUnmount(() => {
  document.body.removeEventListener('keydown', keyListener)
});

</script>

<template>
  <div class="relative flex items-center mb-10">
    <input v-model="search" ref="searchInput"
      class="block w-full rounded-md border-0 py-2 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
      :placeholder="searchTag">
    <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
      <kbd
        class="inline-flex items-center rounded not-prose border border-gray-200 px-1 font-sans text-xs text-gray-400">⌘K</kbd>
    </div>
  </div>

</template>