<script setup lang="ts">
const bannerConfig = useAppConfig().header.banner;

const href = computed(() => {
  const link = bannerConfig?.link;
  if (link) {
    return link;
  }

  return '#';
});

const showBanner = useState('showBanner', () => true);

function removeBanner() {
  showBanner.value = false;
}
</script>

<template>
  <div
    v-show="showBanner && bannerConfig?.show"
    class="flex items-center justify-center gap-x-6 bg-primary-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
  >
    <p class="text-sm leading-6 text-white">
      <a
        :href="href"
        target="_blank"
        class="inline-flex items-center gap-1"
      >
        <strong
          v-if="bannerConfig?.brandText"
          class="font-semibold hidden sm:block"
        >{{ bannerConfig.brandText
        }}</strong>
        <AppHeaderDot
          v-if="bannerConfig?.brandText"
          class="hidden sm:block"
        />
        {{ bannerConfig?.text }}
        <Icon
          class="hidden sm:block w-5 h-5"
          name="tabler:arrow-right"
        />
      </a>
    </p>
    <div class="hidden sm:flex flex-1 justify-end items-center">
      <button
        type="button"
        class="w-5 h-5"
        @click="removeBanner"
      >
        <span class="sr-only">Dismiss</span>
        <Icon
          name="tabler:x"
          class="h-5 w-5 text-white"
          aria-hidden="true"
        />
      </button>
    </div>
  </div>
</template>
