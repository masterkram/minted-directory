<script setup lang="ts">
defineProps(['emoji']);
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center bg-gray-900" :style="{ padding: '30px 45px' }">
    <div class="pb-10 justify-center items-center flex flex-col text-9xl">
      {{ emoji ?? '😎' }}
    </div>
  </div>
</template>
