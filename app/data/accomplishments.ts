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
    image: '/accomplishments/accomplishment-3-smiley-vision-first-version.jpg',
    alt: 'First release of Smiley Vision, jul. 2026',
    description:
      'Deployed the first version of Smiley Vision, ready for real clients to use.',
    date: 'Jul 2026',
  },
  {
    image: '/accomplishments/accomplishment-2-odontolabs-test.jpg',
    alt: 'First release of OdontoLabs for internal testing, apr. 2026',
    description:
      'Deployed the test version of OdontoLabs for the College of Dentistry to use internally.',
    date: 'Apr 2026',
  },
  {
    image: '/accomplishments/accomplishment-1-hackmty.jpg',
    alt: 'Won HackMTY 2026 in the GateGroup Smart Intelligence track, oct. 2025',
    description:
      'Won the Smart Intelligence hackathon track with GateGroup, HackMTY 2025.',
    date: 'Oct 2025',
  },
]
