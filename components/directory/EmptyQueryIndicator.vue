<script setup lang="ts">
const config = useAppConfig().directory.grid;
</script>

<template>
  <div class="col-span-4">
    <p v-if="config.emptyState.type === 'simple'">{{ config.emptyState.text }}</p>
    <NuxtLink to="/submit" v-if="config.emptyState.type === 'link'">{{ config.emptyState.text }}</NuxtLink>
    <NuxtLink class="inline-flex items-center gap-1 bg-primary-400/10 rounded px-2 py-1 text-primary-500" to="/submit"
      v-if="config.emptyState.type === 'button'">
      <Icon :name="config.emptyState.icon" />
      <span>{{
      config.emptyState.text }}</span>
    </NuxtLink>
  </div>
</template>