<script setup lang="ts">
const config = useAppConfig().header;
const navData = [{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "Advertise", href: "/advertise" }];

const navigation = computed(() => {
  return navData.filter((item) => config.navbar.links.includes(item.name));
})
</script>

<template>
  <nav class="bg-white dark:bg-gray-700 w-full z-20 start-0 border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="flex items-center gap-x-12">
        <AppLogo />
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-700 md:dark:bg-gray-700 dark:border-gray-700">
            <li v-for="nav in navigation">
              <NuxtLink :href="nav.href"
                class="font-medium block py-2 px-3 text-white bg-primary-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-gray-300"
                aria-current="page">{{ nav.name }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex gap-2 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <AppHeaderColorSelector class="hidden md:flex" v-if="config?.navbar?.colorModeSelector" />
        <NuxtLink :to="config?.actionButton?.href"
          class="hidden md:block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          {{ config?.actionButton?.text }}</NuxtLink>
        <button data-collapse-toggle="navbar-sticky" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>

    </div>
  </nav>

</template>