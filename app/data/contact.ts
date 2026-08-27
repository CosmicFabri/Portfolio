import type { ContactMethod } from '~/types'

/**
 * Contact blocks.
 *
 * To add a method (e.g. LinkedIn, Bluesky): append an object below and pick an
 * icon name from app/components/AppIcon.vue.
 */
export const contactMethods: ContactMethod[] = [
  {
    label: 'Email',
    value: 'cosmicfabri@gmail.com',
    href: 'mailto:cosmicfabri@gmail.com',
    icon: 'mail',
    borderColor: 'var(--color-nebula-cyan)',
  },
]
