<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const background = computed(() => colorMode.preference === "dark" ? "bg-gray-800" : "bg-white");
useHead({ bodyAttrs: { class: background } });

defineOgImageComponent('NuxtSeo', {
  title: 'Hello OG Image 👋',
  description: 'Look what at me in dark mode',
  theme: '#ff0000',
  colorMode: 'dark',
})


useSeoMeta({
  title: 'Nuxt Starters',
  ogTitle: 'Nuxt Starters',
  description: 'Go. ',
  ogDescription: 'This .',
  twitterCard: 'summary_large_image',
  twitterTitle: 'go',
  twitterDescription: 'lets',
});


</script>