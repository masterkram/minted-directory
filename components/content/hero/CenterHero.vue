<script setup>
defineProps(['icon']);
</script>

<template>
  <div class="text-center pt-20 pb-10 gap-8">
    <h1 class="dashedcue text-5xl text-balance font-extrabold tracking-tight inline-flex gap-2">
      <Icon v-if="icon" :name="icon" />
      <ContentSlot :use="$slots.default" unwrap="h1" />
    </h1>
    <p class="leading-8">
      <ContentSlot :use="$slots.description" />
    </p>
  </div>
</template>