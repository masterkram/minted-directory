<script setup lang="ts">
import { useCookie } from 'nuxt/app';
import Button from './Button.vue';

const config = useAppConfig().directory.grid;
const hidden: Ref<boolean> = useCookie('hide-submit-box');
</script>

<template>
  <div v-if="!hidden"
    class="border bg-secondary-50 border-secondary-200 dark:border-gray-500 hover:border-solid rounded p-6 relative group transition-all">
    <p class="font-bold">{{ config.submit.title }}</p>
    <p>{{ config.submit.description }}</p>
    <div class="flex gap-2 mt-3">
      <Button icon="ph:rocket">Submit</Button>
      <Button @click="() => hidden = true" color="secondary">Hide this</Button>
    </div>
  </div>
</template>