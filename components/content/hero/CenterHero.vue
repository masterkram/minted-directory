<script setup lang="ts">
defineProps<{
  icon?: string;
}>();
</script>

<template>
  <div class="text-center pt-20 pb-10 gap-8">
    <h1 class="dashedcue text-5xl text-balance font-extrabold tracking-tight inline-flex gap-2">
      <Icon
        v-if="icon"
        :name="icon"
      />
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
</template>
