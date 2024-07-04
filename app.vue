<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const background = computed(() => colorMode.preference === "dark" ? "bg-gray-800" : "bg-white");
useHead({ bodyAttrs: { class: background } });


useSeoMeta({
  title: 'Alpha Symbol',
  ogTitle: 'Alpha Symbol',
  description: 'This website is dedicated to information about the greek letter alpha. We allow copy pasting the symbol easily and instructions for Mac OS, Windows and Linux.',
  ogDescription: 'This website is dedicated to information about the greek letter alpha. We allow copy pasting the symbol easily and instructions for Mac OS, Windows and Linux.',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Copy Alpha Symbol',
  twitterDescription: 'Website dedicated to copying the greek letter alpha.',
});


</script>