<script setup lang="ts">
const config = useAppConfig();
const navigation = [{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }];
</script>

<template>
  <footer class="border-t dark:border-zinc-700">
    <div class="max-w-prose mx-auto py-6 flex justify-between">
      <div class="space-y-2">
        <AppLogo />
        <p class="text-gray-500">{{ config.footer.description }}</p>
        <div>
          <NuxtLink>
            <!-- <Icon :name="" /> -->
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