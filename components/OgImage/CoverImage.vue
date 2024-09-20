<script setup lang="ts">
const props = defineProps({
  path: String,
  title: String,
  description: String,
  cover: String,
  author: Object,
});
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center text-white bg-gray-900"
    :style="{ padding: '30px 45px' }">
    <div class="pb-10 justify-center items-center flex flex-col">
      <img v-if="cover" :src="cover" width="432" height="243" :style="{ borderRadius: '8px', overflow: 'hidden' }" />
      <h1 :style="{
      fontSize: '65px',
      lineHeight: '85px',
      margin: '20px 0 0 0',
      padding: '0',
    }">
        {{ title }}
      </h1>
      <p :style="{ fontSize: '29px', lineHeight: '45px' }" class="mx-10 mt-5 text-gray-400">
        {{ description }}
      </p>
    </div>
  </div>
</template>