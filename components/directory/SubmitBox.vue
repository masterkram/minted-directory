<script setup lang="ts">
import { useCookie } from 'nuxt/app';

const config = useAppConfig().directory.grid;
const hidden: Ref<boolean> = useCookie('hide-submit-box');
</script>

<template>
  <div v-if="!hidden"
    class="relative block w-full space-y-2 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 p-12 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
    <Icon size="49" name="tabler:package" />
    <p>
      <NuxtLink to="/submit" class="font-bold dark:text-white underline">{{ config.submit.title }}</NuxtLink>
    </p>
    <p class="">{{ config.submit.description }}</p>
  </div>
</template>