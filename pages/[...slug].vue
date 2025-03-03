<script setup lang="ts">
const route = useRoute();
const { data: page } = await useCurrentPage(route);

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  });
}

setSeo(page.value);

definePageMeta({
  middleware: 'set-layout',
});
</script>

<template>
  <AppRenderer :page="page" />
</template>
