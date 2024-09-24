<script setup>
defineProps(['title', 'description']);
</script>

<template>
  <div class="bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-md shadow-sm w-full p-8 flex flex-col">
    <span class="text-indigo-100 text-sm font-medium">Sponsor</span>
    <span class="text-white text-2xl font-semibold">
      {{ title }}
    </span>
    <span class="text-white">{{ description }}</span>
  </div>
</template>