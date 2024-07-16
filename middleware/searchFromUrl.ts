import { useState, defineNuxtRouteMiddleware } from "#imports";

export default defineNuxtRouteMiddleware((to, from) => {
  const search = useState("search");
  const tags = useState("tags");

  if (to.query.search) {
    search.value = to.query.search;
  }
  if (to.query.tags) {
    tags.value = to.query.tags;
  }
});
