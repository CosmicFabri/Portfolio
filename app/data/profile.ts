import type { SocialLink } from '~/types'

/**
 * Home section content. Edit freely.
 */
export const profile = {
  name: 'CosmicFabri',
  role: 'Software Engineer',
  /** Shown under the name on the Home section. Keep it to a short paragraph. */
  intro:
    'I build software that stands out — clean interfaces, reliable systems, and tools that are intuitive to use. I care about the craft: readable code, thoughtful architecture, and shipping things that hold up in the real world. Follow me on my engineering journey!',
  photo: '/profile/portfolio-photo.jpg',
  photoAlt: 'Portrait of CosmicFabri',
}

/** Links rendered right below the intro paragraph. */
export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/CosmicFabri', icon: 'github' },
  { label: 'Email', href: 'mailto:cosmicfabri@gmail.com', icon: 'mail' },
]
