import type { LayoutKey } from '../.nuxt/types/layouts';

export default defineNuxtRouteMiddleware(async (to, _) => {
  const { data: page } = await useCurrentPage(to);
  setPageLayout(page?.value?.layout as LayoutKey || 'default');
});
