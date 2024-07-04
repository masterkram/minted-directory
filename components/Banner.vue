<script setup lang="ts">
const bannerConfig = useAppConfig().header.banner;

const href = computed(() => {
  const link = bannerConfig.link;
  if (link) {
    return link;
  }

  return "#";
});

const showBanner = useState('showBanner', () => true);

function removeBanner() {
  showBanner.value = false;
}
</script>

<template>
  <div v-show="showBanner && bannerConfig.show"
    class="flex items-center gap-x-6 bg-primary-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
    <p class="text-sm leading-6 text-white">
      <a :href="href">
        <strong v-if="bannerConfig.brandText" class="font-semibold">{{ bannerConfig.brandText }}</strong>
        <svg v-if="bannerConfig.brandText" viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current"
          aria-hidden="true">
          <circle cx="1" cy="1" r="1" />
        </svg>
        {{ bannerConfig.text }}
        &nbsp;<span aria-hidden="true">&rarr;</span>
      </a>
    </p>
    <div class="flex flex-1 justify-end">
      <button @click="removeBanner" type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
        <span class="sr-only">Dismiss</span>
        <Icon name="ph:x" class="h-5 w-5 text-white" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>