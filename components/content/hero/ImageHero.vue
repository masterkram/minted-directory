<script setup>
defineProps(['imgSrc', 'icon']);
</script>

<template>
  <div class="relative p-14 mb-14 not-prose">
    <img :src="src" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover rounded-xl" />
    <div class="absolute inset-0 h-full w-full rounded-xl bg-black/50 -z-10">

    </div>
    <div class="mx-auto max-w-2xl py-16 sm:py-32 lg:py-32">
      <div v-if="icon" class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div
          class="relative flex rounded-full p-1 text-sm leading-6 text-white ring-1 ring-white/10 hover:ring-white/20">
          <Icon class="h-8 w-8 text-white" :name="icon" />
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
          <ContentSlot unwrap="h1" />
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          <ContentSlot name="description" />
        </p>
      </div>
    </div>
  </div>
</template>