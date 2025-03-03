<template>
  <div
    class="font-display grid min-h-screen grid-rows-[auto,auto,1fr,auto] bg-white dark:bg-gray-800 transition-colors"
  >
    <AppHeaderBanner />
    <AppNavbar />
    <div class="w-full h-full">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
