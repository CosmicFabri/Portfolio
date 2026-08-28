import type { Project } from '~/types'

/**
 * Projects grid.
 *
 * To add a project:
 *   1. Append an object below. `slug` must match a Markdown file in
 *      `content/projects/<slug>.md`.
 *   2. Create that Markdown file (copy an existing one as a template).
 *   3. Drop a card image in `public/projects/`.
 *
 * `span` controls the grid: `2` makes the card fill the full row, `1` makes it
 * share a row with the next `span: 1` card. Keep the spans adding up to a tidy
 * layout (e.g. one 2-wide followed by pairs of 1-wide).
 *
 * To remove a project: delete its object here and its Markdown file.
 */
export const projects: Project[] = [
  {
    slug: 'smiley-vision',
    title: 'Smiley Vision',
    summary:
      'A B2B e-commerce web application for the Smiley Vision company.',
    image: '/projects/projects-1-smiley-vision-cover.png',
    tags: ['Web App', 'REST API', 'SaaS'],
    span: 2,
  },
  {
    slug: 'odontolabs',
    title: 'OdontoLabs',
    summary: 'A management system for school operations and dentistry-related treatments.',
    image: '/projects/projects-2-odontolabs-preview.png',
    tags: ['VueJS', 'State Management', 'SPA'],
    span: 1,
  },
  {
    slug: 'requiem',
    title: 'Requiem',
    summary: 'A survival FPS game inspired by The Divine Comedy.',
    image: '/projects/projects-3-requiem-preview.png',
    tags: ['Godot', 'GDScript', 'FPS Game'],
    span: 1,
  },
]
