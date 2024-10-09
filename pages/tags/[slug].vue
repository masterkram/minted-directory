<script setup lang="ts">
import type ListingContent from '~/types/Listing';
import formatString from '~/util/formatString';

const route = useRoute();
const config = useAppConfig();

const title = computed(() => formatString(config.directory.tagPages?.title || "All {0}", route.params.slug));

const { data } = await useAsyncData(`tag-${route.params.slug}`, () => queryContent("/dir").where({ $and: [{ _extension: "md" }, { tags: { $contains: route.params.slug } }] }).find());
</script>

<template>
  <div class="">
    <h1>{{ title }}</h1>
    <DirectoryPureGrid :listings="data as unknown as ListingContent[]" />
  </div>
</template>