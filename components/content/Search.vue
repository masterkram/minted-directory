<script setup lang="ts">
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';

const search = useState("search");
const searchTag = useAppConfig().directory.searchTag;
const searchInput = ref();

const keyListener = function (e: KeyboardEvent) {
  if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    searchInput.value.focus();
  }
}

onMounted(() => {
  document.body.addEventListener('keydown', keyListener);
});

onBeforeUnmount(() => {
  document.body.removeEventListener('keydown', keyListener)
});

const tags = useAppConfig().directory.tags;

const selectedTag = ref(tags[0]);
const query = ref('')
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
      <div class="">
        <Listbox v-model="selectedTag" class="z-10">
          <div class="relative mt-1">
            <ListboxButton
              class="relative w-full border cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span class="block truncate">{{ selectedTag.name }}</span>
              <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <Icon name="ph:tag" class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </ListboxButton>

            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
              leave-to-class="opacity-0">
              <ListboxOptions
                class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                <ListboxOption v-slot="{ active, selected }" v-for="tag in tags" :key="tag.name" :value="tag"
                  as="template">
                  <li :class="[
          active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
          'relative cursor-default select-none py-2 pl-10 pr-4',
        ]">
                    <span :class="[
          selected ? 'font-medium' : 'font-normal',
          'block truncate',
        ]">{{ tag.name }}</span>
                    <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                      <Icon name="ph:check" class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
    </div>
  </div>
</template>