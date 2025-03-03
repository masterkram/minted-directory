<template>
  <div>
    <h1 class="text-balance">
      <slot
        mdc-unwrap="h1"
      />
    </h1>
    <p
      v-if="$slots.description"
      class="max-w-lg text-md leading-8"
    >
      <slot name="description" />
    </p>
  </div>
</template>
