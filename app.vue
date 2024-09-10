<script setup lang="ts">
const colorMode = useColorMode();

const background = computed(() => colorMode.value === "dark" ? "bg-gray-800" : "bg-white");

const { layout } = useContent();
</script>

<template>

  <Body :class="background">
    <AppLayout>
      <NuxtLayout :name="layout as string || 'default'">
        <NuxtPage class="page-enter-active" />
      </NuxtLayout>
    </AppLayout>
  </Body>
</template>

<style>
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