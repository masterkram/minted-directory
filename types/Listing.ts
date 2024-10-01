import type { ParsedContent } from "@nuxt/content";

export default interface ListingContent extends ParsedContent {
  featured: boolean;
}
