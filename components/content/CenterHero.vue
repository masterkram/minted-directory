<template>
  <div class="text-center pt-20 pb-10 gap-8">
    <h1>
      <ContentSlot :use="$slots.default" unwrap="h1" />
    </h1>
    <ContentSlot :use="$slots.description" />
  </div>
</template>