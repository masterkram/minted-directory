<script setup lang="ts">
const config = useAppConfig().directory.grid;
</script>

<template>
  <div class="col-span-4">
    <p v-if="config?.emptyState?.type === 'simple'">
      {{ config.emptyState.text }}
    </p>
    <NuxtLink
      v-if="config?.emptyState?.type === 'link'"
      to="/submit"
    >{{ config.emptyState.text }}</NuxtLink>
    <div
      v-if="config?.emptyState?.type === 'button'"
      class="border border-dashed border-gray-200 dark:border-gray-500 flex flex-col items-center justify-center gap-3 rounded px-2 py-12"
    >
      <Icon
        size="50"
        :name="config.emptyState.icon ?? 'tabler:mood-empty'"
      />
      <p>
        {{ config.emptyState.text }}
      </p>
      <NuxtLink
        class="rounded"
        to="/submit"
      >
        <UiButton>
          Be the first to add it
        </UiButton>
      </NuxtLink>
    </div>
  </div>
</template>
