import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
    }),
    directory: defineCollection({
      type: 'page',
      source: 'dir/**/*.md',
      schema:  z.object({
        card_image: z.string().optional(),
        cover: z.string().optional(),
        featured: z.boolean().optional(),
        tags: z.array(z.string()).optional(),
        og_image: z.object({
          style: z.enum(['Custom', 'Emoji', 'Simple', 'CoverImage']),
          emoji: z.string().emoji().optional(),
        }).optional(),
      }),
    }),
  }
})