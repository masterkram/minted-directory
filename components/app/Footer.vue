<script setup lang="ts">
const config = useAppConfig();
const navigation = [{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }];

const socials = computed(() => Object.values(config.footer?.socials).filter(i => i.icon.length > 0 && i.link.length > 0));
</script>

<template>
  <footer class="border-t dark:border-zinc-700">
    <div class="max-w-prose mx-auto py-6 flex justify-between">
      <div class="space-y-2">
        <AppLogo />
        <p class="text-gray-500">{{ config.footer.description }}</p>
        <div class="flex space-x-6">
          <NuxtLink v-for="item in socials" :to="item.link" class="text-gray-500 hover:text-gray-400">
            <Icon class="dark:text-gray-400 w-6 h-6" :name="item.icon" />
          </NuxtLink>
        </div>
      </div>
      <div>
        <p class="text-gray-500 font-medium">Quick Links:</p>
        <ul>
          <li v-for="link in navigation" class="text-gray-500 hover:underline decoration-primary-500">
            <NuxtLink :to="link.href">{{ link.name }}</NuxtLink>
            <Icon name="ph:arrow-up-right" />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>