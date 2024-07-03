<script setup lang="ts">
const colorMode = useColorMode();

const config = useAppConfig();
const darkMode = config.nuxtIcon.aliases["dark-mode"];
const lightMode = config.nuxtIcon.aliases["light-mode"];

function toggleColorMode() {
  console.log("hi");
  if (colorMode.value === "dark") {
    colorMode.value = "light";
  } else {
    colorMode.value = "dark";

  }
}
</script>

<template>
  <div @click="toggleColorMode"
    class="flex justify-center items-center border rounded-full w-8 h-8 text-gray-500 dark:text-stone-400 hover:bg-gray-200 dark:hover:bg-stone-800 dark:border-stone-500 transition-all">
    <Icon v-if="colorMode.value === 'light'" :name="darkMode" />
    <Icon v-else :name="lightMode" />
  </div>
</template>