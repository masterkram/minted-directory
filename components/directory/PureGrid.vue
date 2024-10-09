<script setup lang="ts">
import type ListingContent from '~/types/Listing';

defineProps({
  listView: { type: Boolean, default: false },
  showSubmit: { type: Boolean, default: false },
  submitFirst: {
    type: Boolean,
    default: false,
  },
  listings: {
    type: Array<ListingContent>,
    required: true
  }
});
</script>

<template>
  <div class="not-prose grid grid-cols-1 gap-4" :class="listView ? '' : 'lg:grid-cols-4 '">
    <DirectoryEmptyQueryIndicator v-if="listings?.length === 0" />
    <DirectorySubmitBox v-if="showSubmit && submitFirst" />
    <UiCard v-for="i in listings" :item="i" />
    <DirectorySubmitBox v-if="showSubmit && !submitFirst" />
  </div>
</template>