<template>
  <div class="not-prose mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 lg:px-8">
    <p class="text-base font-semibold leading-8 text-primary-600 dark:text-primary-300">404</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Page not found</h1>
    <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-200">Sorry, we couldn’t find the page you’re looking
      for.</p>
    <div class="mt-10">
      <NuxtLink to="/">
        <UiButton>Back to home</UiButton>
      </NuxtLink>
    </div>
  </div>
</template>