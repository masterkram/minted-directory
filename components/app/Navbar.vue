<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';

const config = useAppConfig().header;

const route = useRoute();

const routesRef = computed(() => {
  if (!config.navbar?.links) {
    return [];
  }
  return config.navbar?.links.map(
    (e) => {
      e['active'] = route.path.split('/')[0].includes(e.to) || route.path === e.to;
      return e;
    },
  );
});
</script>

<template>
  <Disclosure
    v-slot="{ open }"
    as="nav"
    class="bg-white dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Icon
              v-if="!open"
              name="tabler:baseline-density-medium"
              class="block h-6 w-6"
              aria-hidden="true"
            />
            <Icon
              v-else
              name="tabler:x"
              class="block h-6 w-6"
              aria-hidden="true"
            />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <AppLogo />
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <template v-for="navItem in routesRef">
              <NuxtLink
                v-if="navItem.target !== '_blank'"
                :to="navItem.to"
                class="inline-flex gap-2 items-center border-b-2  px-1 pt-1 text-sm font-medium"
                :class="navItem.active ? 'border-primary-500 text-gray-900 dark:text-gray-50' : 'border-transparent hover:border-gray-300 dark:hover:border-gray-500 hover:text-gray-700 text-gray-500 dark:text-gray-200'"
              >
                {{ navItem.name }}
              </NuxtLink>
              <a
                v-else
                :href="navItem.to"
                target="_blank"
                class="inline-flex gap-2 items-center border-b-2  px-1 pt-1 text-sm font-medium border-transparent hover:border-gray-300 hover:text-gray-700 dark:hover:border-gray-500 text-gray-500 dark:text-gray-200"
              >
                {{ navItem.name }}
                <Icon
                  v-if="navItem.target === '_blank'"
                  name="tabler:external-link"
                />
              </a>
            </template>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div class="flex gap-2 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <AppHeaderColorSelector
              v-if="config?.navbar?.colorModeSelector"
              class="hidden md:flex"
            />
            <NuxtLink
              :to="config?.actionButton?.href"
              class="hidden md:block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {{ config?.actionButton?.text }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pb-4 pt-2">
        <DisclosureButton
          v-for="item in routesRef"
          as="a"
          :href="item.to"
          class="block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
          :class="item.active ? 'bg-primary-50 border-primary-500 text-primary-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'"
        >
          {{ item.name }}
          <Icon
            v-if="item.target === '_blank'"
            name="tabler:external-link"
          />
        </DisclosureButton>
      </div>

      <div class="border-t border-gray-200 pb-3 pt-4">
        <div class="flex items-center px-4">
          <NuxtLink
            :to="config?.actionButton?.href"
            class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {{ config?.actionButton?.text }}
          </NuxtLink>
          <AppHeaderColorSelector
            v-if="config?.navbar?.colorModeSelector"
            class="relative ml-auto"
          />
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
