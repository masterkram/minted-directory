<script setup lang="ts">
import { callWithNuxt } from '#app';

const config = useAppConfig();
const app = useNuxtApp();

const { page, layout } = useContent();

function getSEOTitle(): string {
  return page?.value?.title || config?.site?.name || "Missing Title";
}

function getSEODescription(): string {
  return page?.value?.description || config.site.description || "Missing Description"
}

callWithNuxt(app, useSeoMeta, [{ title: getSEOTitle(), description: getSEODescription() }]);

if (page.value) {
  defineOgImage({
    component: page.value.ogImageStyle || 'Custom',
    cover: page.value.cover || page.value.card_image,
    ...(page.value.ogImage || {}),
  });
}
</script>

<template>
  <div class="document-driven-page">
    <ContentRenderer v-if="page" :key="(page as any)._id" :value="page">
      <template #empty="{ value }">
        <DocumentEmpty :value="value" />
      </template>
    </ContentRenderer>
    <DocumentNotFound v-else />
  </div>
</template>