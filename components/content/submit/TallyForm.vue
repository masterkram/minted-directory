<script setup lang="ts">
defineProps(['embed']);

const loading = ref(true);
const { onLoaded } = useScript({ src: "https://tally.so/widgets/embed.js", async: true });

function loadTally() {
  loading.value = false;
  Tally.loadEmbeds();
}

onLoaded((Tally: any) => {
  loadTally();
});

onMounted(() => {
  if (typeof Tally !== 'undefined') {
    loadTally();
  }
}
);
</script>

<template>
  <div>
    <div v-if="loading" class="flex gap-3 justify-center items-center">
      <span>Please wait we are loading the form</span>
      <Icon name="svg-spinners:90-ring-with-bg" />
    </div>
    <iframe :data-tally-src="embed" loading="lazy" width="100%" height="589" frameborder="0" marginheight="0"
      marginwidth="0" />
  </div>
</template>