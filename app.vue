<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const background = computed(() => colorMode.value === "dark" ? "bg-stone-800" : "bg-white");
useHead({ bodyAttrs: { class: background.value } });
</script>