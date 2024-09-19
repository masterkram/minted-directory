<script setup lang="ts">
import { useContent, useRequestEvent, useSeoMeta } from '#imports'

const { page } = useContent()

// Page not found, set correct status code on SSR
if (!(page as any).value && process.server) {
  const event = useRequestEvent()
  event.res.statusCode = 404
}

useSeoMeta({
  title: () => page.value?.title,
  description: () => page.value?.description,
});

defineOgImageComponent('NuxtSeo', {
  title: 'Hello OG Image 👋',
  description: 'Look what at me in dark mode',
  theme: '#ff0000',
  colorMode: 'dark',
});

definePageMeta({ middleware: ['search-from-url'] })
</script>

<template>
  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <article>
          <div class="flex justify-between">
            <h1>{{ doc.title }}</h1>
            <a href="" class="not-prose text-secondary-500 underline">photoai.com</a>
          </div>

          <ContentRenderer :value="doc" />
        </article>
      </template>
      <template #not-found>
        <DocumentNotFound />
      </template>
    </ContentDoc>
  </main>
</template>