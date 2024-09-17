<script setup lang="ts">
const config = useAppConfig();
const navigation = [{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }];

const socials = computed(() => Object.values(config.footer?.socials).filter(i => i.icon.length > 0 && i.link.length > 0));
</script>

<template>
  <footer class="border-t dark:border-zinc-700">
    <div class="max-w-prose mx-auto py-6 flex justify-between">
      <div class="">
        <div class="space-y-2">
          <AppLogo />
          <p class="text-gray-500">{{ config.footer.description }}</p>
        </div>
        <div class="flex space-x-6 mt-5">
          <NuxtLink v-for="item in socials" :to="item.link" class="text-gray-400 hover:text-gray-500 transition-all">
            <Icon class="dark:text-gray-400 w-6 h-6" :name="item.icon" />
          </NuxtLink>
        </div>
      </div>
      <div>
        <p class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Directory Links:</p>
        <ul class="space-y-1 mt-3">
          <li v-for="link in navigation"
            class="text-gray-500 transition-all underline decoration-gray-300 dark:decoration-gray-500 dark:hover:decoration-primary-600 hover:underline hover:decoration-primary-500">
            <NuxtLink :to="link.href">{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>