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
    slug: 'stellar-cli',
    title: 'Stellar CLI',
    summary:
      'A fast, ergonomic command-line tool for scaffolding and managing microservices.',
    image: '/projects/placeholder-wide.svg',
    tags: ['Rust', 'CLI', 'Developer Tools'],
    span: 2,
  },
  {
    slug: 'nebula-notes',
    title: 'Nebula Notes',
    summary: 'A local-first, end-to-end encrypted note-taking app.',
    image: '/projects/placeholder-square.svg',
    tags: ['TypeScript', 'Tauri', 'CRDT'],
    span: 1,
  },
  {
    slug: 'orbit-tracker',
    title: 'Orbit Tracker',
    summary: 'A dashboard that visualizes satellite passes in real time.',
    image: '/projects/placeholder-square.svg',
    tags: ['Vue', 'WebGL', 'APIs'],
    span: 1,
  },
]
