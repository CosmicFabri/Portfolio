/** Shared content types for the portfolio. */

export interface SocialLink {
  label: string
  href: string
  /** Icon name — see app/components/AppIcon.vue for the catalogue. */
  icon: string
}

export interface Accomplishment {
  /** Path to an image in /public (e.g. '/accomplishments/talk.jpg'). */
  image: string
  /** Alt text for the image. */
  alt: string
  /** Short caption shown next to the image. */
  description: string
  /** Optional date label, e.g. 'Mar 2026'. */
  date?: string
}

export interface Project {
  /** Must match the Markdown file name in content/projects/. */
  slug: string
  title: string
  /** One-line summary shown on the grid card. */
  summary: string
  /** Card image in /public (e.g. '/projects/stellar-cli.jpg'). */
  image: string
  /** Small tags shown on the card. */
  tags: string[]
  /** How many columns the card spans on the grid (1 or 2). */
  span: 1 | 2
}

export interface ContactMethod {
  label: string
  /** The visible value, e.g. an email address. */
  value: string
  /** Full href, e.g. 'mailto:you@example.com'. */
  href: string
  /** Icon name — see app/components/AppIcon.vue for the catalogue. */
  icon: string
  /** Any CSS color for the block's border/glow. */
  borderColor: string
}

export interface LinkBlockData {
  label: string
  href: string
  icon: string
  borderColor?: string
}
