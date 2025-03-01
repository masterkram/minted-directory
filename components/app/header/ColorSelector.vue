<script setup lang="ts">
const colorMode = useColorMode();

const config = useAppConfig().ui.icons;

function toggleColorMode() {
  if (colorMode.value === 'dark') {
    colorMode.preference = 'light';
  }
  else {
    colorMode.preference = 'dark';
  }
}
</script>

<template>
  <button
    class="flex justify-center items-center border rounded-full w-8 h-8 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-gray-500 transition-all"
    @click="toggleColorMode"
  >
    <Icon
      v-if="colorMode.value === 'light'"
      aria-label="toggle dark mode"
      :name="config?.dark ?? 'tabler:moon'"
    />
    <Icon
      v-else
      aria-label="toggle light mode"
      :name="config?.light ?? 'tabler:sun'"
    />
  </button>
</template>
