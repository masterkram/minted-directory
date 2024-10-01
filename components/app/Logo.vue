<script setup>
const config = useAppConfig();
</script>

<template>
  <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
    <NuxtImg v-if="config?.general?.logo" sizes="32px" :src="config.general.logo" class="h-8"
      :alt="`${config?.general.title} Logo`" />
    <Icon v-else-if="config?.general?.iconLogo" class="w-7 h-7 text-gray-600 dark:text-white"
      :name="config?.general?.iconLogo" />
    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{ config.general.title
      }}</span>
  </NuxtLink>
</template>