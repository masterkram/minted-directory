<script setup lang="ts">
import { useAppConfig } from '#imports';
import { buildIcon, getIcon, loadIcon } from '@iconify/vue';

const { layout } = useContent();

const layoutName = computed(() => layout.value || 'default');

// Get the icon name from app config
const iconName = useAppConfig().general.favicon;

// Load the icon
await loadIcon("flat-color-icons:ok");
const iconData = getIcon("flat-color-icons:ok");

// Build the icon and get its SVG structure
const result = buildIcon(iconData);

// Load the icon data and generate the SVG
const iconSvg = computed(async () => {
  // Manually wrap the body inside an <svg> tag with necessary attributes
  const svgElement = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${result.viewBox.join(' ')}">
      ${result.body}
    </svg>`;

  // Convert the SVG to base64
  return `data:image/svg+xml;base64,${btoa(svgElement)}`;
});

// Set the favicon with the generated SVG
useHead({
  link: [{ rel: 'icon', type: 'image/svg+xml', href: await iconSvg.value }]
});
</script>

<template>

  <AppLayout>
    <NuxtLayout :name="layoutName">
      <NuxtPage class="page-enter-active" />
    </NuxtLayout>
  </AppLayout>
</template>

<style>
.dark body {
  @apply bg-gray-800;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(.5rem)
  }

  to {
    opacity: 1;
    transform: none
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translateY(.5rem)
  }
}

.page-enter-active {
  animation: fadeInUp .6s forwards
}

.page-leave-active {
  animation: fadeOutDown .6s backwards;
}
</style>