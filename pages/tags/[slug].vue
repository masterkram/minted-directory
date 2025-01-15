<script setup lang="ts">
import type ListingContent from '~/types/Listing';
import formatString from '~/util/formatString';

const route = useRoute();
const config = useAppConfig();

const title = computed(() => formatString(config.directory.tagPages?.title || "All {0}", route.params.slug));
const description = computed(() => formatString(config.directory.tagPages?.description || "All {0}", route.params.slug));

const { data } = await useAsyncData(`tag-${route.params.slug}`, () => queryContent("/dir").where({ $and: [{ _extension: "md" }, { tags: { $icontains: route.params.slug as string } }] }).find());

// SEO setup
const app = useNuxtApp();

useSeoMeta({ title: title.value || "Missing Title", description: description.value || "Missing Description" });

defineOgImage({
  component: 'Custom',
  title: title.value,
  description: description.value
});

definePageMeta({
  documentDriven: false
});
</script>

<template>
  <div class="">
    <h1>{{ title }}</h1>
    <DirectoryPureGrid :listings="data as unknown as ListingContent[]" />
  </div>
</template>
