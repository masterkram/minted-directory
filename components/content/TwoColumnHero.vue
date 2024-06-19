<script setup lang="ts">
const props = defineProps(['imgSrc']);
</script>

<template>
  <div class="flex items-start pt-20 pb-20 gap-10">
    <div>
      <h1>
        <ContentSlot :use="$slots.default" unwrap="h1" />
      </h1>
      <ContentSlot :use="$slots.description" />
    </div>
    <div>
      <img class="w-full max-h-64 m-0" :src="imgSrc" />
    </div>
  </div>
</template>

<style scoped lang="postcss">
h1 span {
  @apply underline underline-offset-4 decoration-primary-600 decoration-dashed;
}
</style>