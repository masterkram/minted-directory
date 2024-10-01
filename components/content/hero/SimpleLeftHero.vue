<template>
  <div>
    <h1>
      <ContentSlot :use="$slots.default" unwrap="h1" />
    </h1>
    <p class="max-w-lg text-md">
      <ContentSlot :use="$slots.description" />
    </p>
  </div>
</template>