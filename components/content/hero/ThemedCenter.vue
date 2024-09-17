<template>
  <div class="text-center pt-20 pb-10 gap-8">
    <h1 class="dashedcue text-5xl font-extrabold tracking-tight">
      <ContentSlot :use="$slots.default" unwrap="h1" />
    </h1>
    <ContentSlot :use="$slots.description" />
  </div>
</template>