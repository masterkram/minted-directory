---
tags:
  - markdown-based
sponsored: 1
---

# SeaRaider Directory

The template used to make this nuxt template website.

## SeaRaider Directory Benefits:

- fully editable with markdown.
- built with SEO as a priority
    - server rendered
    - great lighthouse scores
    - automatic sitemap, robots.txt
- out of the box support for sponsored content, which can be boosted on the site.
- Social Media previews with automatically generated OG images based on the written content.
- pre built search with tags / categories.
- fully editable, with preview in real time using [nuxt studio]()
  - this makes it possible for anyone on your team to edit your listings. marketing, sales etc…
- no database creation, migration, deployments needed, data lives in markdown files.
- configurable with 100+ settings.
- style can be easily adapted with tailwind 🎨
- automatically managed rss feed
- free of cost open source project.


![nuxt directory website starter](/directory_screenshot.png)

## Stack

| Use | Name |
|:--- |:---- |
| JS Framework | Nuxt 3 |
| Styling | tailwindcss |


## Getting Started

There are two ways to get started with SeaRaider directory.
As a non technical person and as a developer, follow whichever guide most suits you.

### Non technical start

### Developer Start

Create a new nuxt project locally, here I have chosen the name `mydirectory` for the project.
Select the initialization options as needed.

```sh
npx nuxi@latest mydirectory
```

Edit the automatically generated `nuxt.config.ts` file, by adding the extends key with the following url `TODO` as show below.

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: "TODO",
  devtools: { enabled: true },
});
```

You are now ready to begin.