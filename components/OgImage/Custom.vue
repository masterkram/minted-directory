<script setup lang="ts">
const props = defineProps({
  path: String,
  title: String,
  description: String,
  cover: String,
  author: Object,
});

const twitter = props.author?.link?.replace('https://twitter.com/', '@');
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center text-white bg-gray-900"
    :style="{ padding: '30px 45px' }">
    <div class="px-5 py-3 rounded absolute bottom-10 bg-white right-10">
      <img src="/logo.svg" width="99" height="29" class="" />
    </div>
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
      <div v-if="author" class="flex items-center">
        <img :src="author.avatarUrl" width="80" height="80" class="rounded-full mr-5" />
        <div class="flex flex-col text-gray-300">
          <div class="text-3xl" :style="{ whiteSpace: 'pre' }">
            {{ author.name }}
          </div>
          <div class="text-gray-200">{{ twitter }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
