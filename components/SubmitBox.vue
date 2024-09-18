<script setup lang="ts">
import { useCookie } from 'nuxt/app';
import Button from './Button.vue';

const config = useAppConfig().directory.grid;
const hidden: Ref<boolean> = useCookie('hide-submit-box');
</script>

<template>
  <div v-if="!hidden"
    class="border bg-secondary-50 dark:bg-secondary-400/20 border-secondary-200 dark:border-secondary-400 hover:border-solid rounded p-6 relative group transition-all">
    <p class="font-bold dark:text-white">{{ config.submit.title }}</p>
    <p>{{ config.submit.description }}</p>
    <div class="flex flex-wrap gap-2 mt-3">
      <NuxtLink to="/submit">
        <Button icon="ph:rocket">Submit</Button>
      </NuxtLink>
      <Button @click="() => hidden = true" color="secondary">Hide this</Button>
    </div>
  </div>
</template>