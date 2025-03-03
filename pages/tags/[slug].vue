<script setup lang="ts">
const route = useRoute();
const config = useAppConfig();

const title = computed(() => formatString(config.directory.tagPages?.title || 'All {0}', route.params.slug));
const description = computed(() => formatString(config.directory.tagPages?.description || 'All {0}', route.params.slug));

const { data } = await useAsyncData(`tag-${route.params.slug}`, () => queryCollection('directory').all());

const listings = computed(() => data.value ? data.value.filter(item => item.tags?.includes(String(route.params.slug))) : []);

// SEO setup
const app = useNuxtApp();

useSeoMeta({ title: title.value || 'Missing Title', description: description.value || 'Missing Description' });

defineOgImage({
  component: 'Custom',
  title: title.value,
  description: description.value,
});

definePageMeta({
  layout: 'wide',
});
</script>

<template>
  <div class="">
    <h1>{{ title }}</h1>
    <DirectoryPureGrid :listings="listings" />
  </div>
</template>
