import type { Accomplishment } from '~/types'

/**
 * Accomplishments carousel.
 *
 * To add one: drop an image in `public/accomplishments/` and append an object
 * below. To remove one: delete its object. Order here is the order shown.
 * The carousel wraps back to the first item after the last.
 */
export const accomplishments: Accomplishment[] = [
  {
    image: '/accomplishments/placeholder-1.svg',
    alt: 'Placeholder image for an accomplishment',
    description:
      'Spoke at a local dev meetup about building resilient CLI tools with Rust.',
    date: 'Mar 2026',
  },
  {
    image: '/accomplishments/placeholder-2.svg',
    alt: 'Placeholder image for an accomplishment',
    description:
      'Merged my first upstream contribution to an open-source project I use every day.',
    date: 'Jan 2026',
  },
  {
    image: '/accomplishments/placeholder-3.svg',
    alt: 'Placeholder image for an accomplishment',
    description:
      'Shipped a side project to production and crossed 1,000 monthly active users.',
    date: 'Nov 2025',
  },
]
