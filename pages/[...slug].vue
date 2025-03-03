<script setup lang="ts">
import setSeo from '~/util/setSEO';

const route = useRoute();
const { data: page } = await useCurrentPage(route);

setSeo(page.value);
</script>

<template>
  <AppRenderer :page="page" />
</template>
