<script setup lang="ts">
const content = useAppConfig().directory.bannerText;

const href = computed(() => {
  const link = useAppConfig().directory.bannerLink;
  if (link) {
    return link;
  }

  return null;
});
</script>

<template>
  <a>
    <div class="bg-blue-500 h-6 text-white">
      <div class="text-center font-medium">
        {{ content }}
      </div>
    </div>
  </a>
</template>