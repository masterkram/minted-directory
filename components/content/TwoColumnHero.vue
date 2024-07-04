<script setup lang="ts">
const props = defineProps(['imgSrc']);
</script>

<template>
  <div class="flex flex-col justify-center items-center lg:items-start md:flex-row pt-20 pb-20 gap-10">
    <div>
      <h1 class="text-5xl dashedcue text-balance font-extrabold tracking-tight">
        <ContentSlot :use="$slots.default" unwrap="h1" />
      </h1>
      <ContentSlot :use="$slots.description" />
    </div>
    <div>
      <img class="m-0 max-w-sm xl:max-w-md rounded-2xl" :src="imgSrc" />
    </div>
  </div>
</template>

<style lang="postcss">
.highlight span {
  @apply bg-gray-800 text-white px-1 -rotate-6;
}

.dashedcue span {
  @apply underline underline-offset-4 decoration-primary-600 decoration-dashed;
}
</style>