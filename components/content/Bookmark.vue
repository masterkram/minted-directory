<script setup lang="ts">
const props = defineProps(['link']);

const result = await fetch(props.link);
</script>

<template>
  <div class="border rounded hover:bg-gray-400">
    <div>
      <p>Million Song Dataset</p>
      <p>Predict which songs a user will listen to</p>
    </div>

    {{ result.text() }}

    <div>
      <img src="" alt="">
      <span></span>
    </div>
  </div>
</template>