<script setup>
const item = computed(() => ({
  title: "My Awesome Product",
  description: "This product is a great way to do things.",
  featured: true,
}));
</script>


<template>
  <DirectoryItem class="block w-96 h-42 my-8" :item="item" />
</template>