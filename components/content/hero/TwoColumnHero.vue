<script lang="ts" setup>
defineProps(['src']);
</script>

<template>
  <div class="py-24 sm:py-32 relative">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl sm:gap-y-24 grid lg:grid-cols-2 lg:items-center">
      <div>
        <h1 class="text-5xl dashedcue text-balance font-extrabold tracking-tight">
          <slot
            mdc-unwrap="h1"
          />
        </h1>
        <p
          v-if="$slots.description"
          class="leading-8"
        >
          <slot name="description" />
        </p>
      </div>
      <div class="w-full">
        <NuxtImg
          sizes="800px lg:1000px"
          :placeholder="[400, 300]"
          class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
          :src="src"
        />
      </div>
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
