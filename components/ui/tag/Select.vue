<script setup lang="ts">
const { selectedTags, availableTags, addTagWithEvent, removeTag } = useTags();
</script>

<template>
  <div class="flex m-0 gap-4 mt-4 py-2">
    <div v-for="myTag in selectedTags"
      class="relative group border-2 shadow-sm font-semibold text-blue-500 bg-blue-600/10 rounded-lg px-1.5 py-1 inline-flex items-center justify-center"
      :class="`border-blue-500`">
      <span @click="() => removeTag(myTag)"
        class="absolute text-gray-500 opacity-0 transition-all group-hover:opacity-100 hover:bg-gray-100 flex items-center justify-center -top-4 left-0 bg-white rounded-full h-6 w-6 border dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800">
        <Icon name="tabler:x" />
      </span>
      {{ myTag }}
    </div>
    <select :modelValue="null" @change="addTagWithEvent"
      class="border border-dashed border-gray-300 rounded-lg font-medium text-gray-500 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-400 focus:ring-primary-500 focus:ring-2 focus:border-none ring-offset-4">
      <option value="" disabled selected>
        Select a tag
      </option>
      <option v-for="tag in availableTags" :key="tag.name" :value="tag.name">{{ tag.name }}</option>
    </select>
  </div>
</template>