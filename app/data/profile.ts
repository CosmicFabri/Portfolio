import type { SocialLink } from '~/types'

/**
 * Home section content. Edit freely.
 */
export const profile = {
  name: 'CosmicFabri',
  role: 'Software Engineer',
  /** Shown under the name on the Home section. Keep it to a short paragraph. */
  intro:
    'I build software that stays out of the way — clean interfaces, reliable systems, and tools that feel obvious to use. I care about the craft: readable code, thoughtful architecture, and shipping things that hold up in the real world. Somewhere between the terminal and the stars, I keep exploring.',
  /** Photo placeholder lives on the right of the Home section. Drop a file in
   *  /public and point `photo` at it (e.g. '/me.jpg') to replace the placeholder. */
  photo: '' as string,
  photoAlt: 'Portrait of CosmicFabri',
}

/** Links rendered right below the intro paragraph. */
export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/CosmicFabri', icon: 'github' },
  { label: 'Email', href: 'mailto:cosmicfabri@gmail.com', icon: 'mail' },
]
