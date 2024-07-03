<script setup lang="ts">
const { data } = await useAsyncData('blog', () => queryContent('/blog').where({ _path: { $ne: "/blog" } }).find());
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
    <NuxtLink :to="i._path" v-for="i in data" class="border rounded p-6 relative group">
      <span v-if="i.sponsor"
        class="absolute text-sm font-medium py-0.5 group-hover:border-primary-500 -top-3 border border-300 rounded-full bg-gray-100 px-3.5 text-gray-600">
        Featured ✨
      </span>
      <h3 class="m-0">
        {{ i.title }}
      </h3>
      <p>
        {{ i.description }}
      </p>
      <div class="p-0 m-0 flex gap-2">
        <span v-for="tag in i.tags"
          class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
          :class="`bg-${tag.color}-50`">{{
      tag }}</span>
        <Tag v-for="tag in i.tags" :tag="tag" />
      </div>
    </NuxtLink>
  </div>
</template>