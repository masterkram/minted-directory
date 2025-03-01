<script lang="ts" setup>
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
  <div>
    <ContentRenderer
      v-if="page"
      :key="(page as any)._id"
      :value="page"
    >
      <template #empty="{ data: value }">
        <DocumentEmpty :value="value" />
      </template>
    </ContentRenderer>
    <DocumentNotFound v-else />
  </div>
</template>
