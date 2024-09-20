<script setup lang="ts">

const { page, layout } = useContent()

// Page not found, set correct status code on SSR
if (!(page as any).value && process.server) {
  const event = useRequestEvent()
  event.res.statusCode = 404
}

// useSeoMeta({
//   title: () => page.value?.title,
//   description: () => page.value?.description,
// });

if (page.value) {
  defineOgImage({
    component: 'Custom',
    title: page.value.title,
    description: page.value.description,
    layout: page.value.layout,
    cover: page.value.cover,
    author: page.value.author,
    date: page.value.date,
    ...(page.value.ogImage || {}),
  });
}
definePageMeta({ middleware: ['search-from-url'] })
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