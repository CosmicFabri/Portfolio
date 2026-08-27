import { defineContentConfig, defineCollection, z } from '@nuxt/content'

/**
 * Content collections.
 *
 * `projects` holds one Markdown article per project, in `content/projects/`.
 * The file name (without extension) is the project's slug and must match the
 * `slug` field of the matching entry in `app/data/projects.ts`.
 */
export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        // Rendered as LinkBlock components underneath every article.
        links: z
          .array(
            z.object({
              label: z.string(),
              href: z.string(),
              // Icon name — see app/components/AppIcon.vue for the catalogue.
              icon: z.string().default('link'),
              // Any CSS color; falls back to the cyan accent.
              borderColor: z.string().optional(),
            }),
          )
          .optional(),
      }),
    }),
  },
})
