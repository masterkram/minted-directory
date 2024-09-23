import { useState, defineNuxtRouteMiddleware } from "#imports";

export default defineNuxtRouteMiddleware((to, from) => {
  const search = useState("search");
  const tags = useState("tags");
  console.log(tags.value);
  if (search.value || tags.value) {
    return;
  }
  if (to.query.search) {
    search.value = to.query.search;
  }
  if (to.query.tags) {
    if (typeof to.query.tags === "string") {
      tags.value = [to.query.tags];
    } else if (Array.isArray(to.query.tags)) {
      tags.value = to.query.tags;
    }
  }
});
