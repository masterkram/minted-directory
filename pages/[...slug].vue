<script setup lang="ts">
import { callWithNuxt } from '#app';

const config = useAppConfig();
const app = useNuxtApp();
const route = useRoute();
const { data: page } = await useCurrentPage(route);

function getSEOTitle(): string {
  return page?.value?.title || config?.site?.name || 'Missing Title';
}

function getSEODescription(): string {
  return page?.value?.description || config.site.description || 'Missing Description';
}

callWithNuxt(app, useSeoMeta, [{ title: getSEOTitle(), description: getSEODescription() }]);
</script>

<template>
  <AppRenderer :page="page" />
</template>
