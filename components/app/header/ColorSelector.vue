<script setup lang="ts">
const colorMode = useColorMode();

const config = useAppConfig().ui.icons;

function toggleColorMode() {
  if (colorMode.value === "dark") {
    colorMode.preference = "light";
  } else {
    colorMode.preference = "dark";
  }
}
</script>

<template>
  <button @click="toggleColorMode"
    class="flex justify-center items-center border rounded-full w-8 h-8 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-gray-500 transition-all">
    <Icon aria-label="toggle dark mode" v-if="colorMode.value === 'light'" :name="config?.dark ?? 'tabler:moon'" />
    <Icon aria-label="toggle light mode" v-else :name="config?.light ?? 'tabler:sun'" />
  </button>
</template>