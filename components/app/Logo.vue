<script setup>
const config = useAppConfig();
</script>

<template>
  <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
    <img :src="config.general.logo" class="h-8" :alt="`${config.general.title} Logo`">
    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{ config.general.title
      }}</span>
  </NuxtLink>
</template>