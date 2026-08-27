<script setup lang="ts">
/**
 * Inline SVG icon catalogue.
 *
 * Usage: <AppIcon name="github" />
 *
 * To add an icon: add an entry to `paths` below. Each value is the inner markup
 * of a 24x24 viewBox SVG (stroke-based, inherits `currentColor`).
 */
const props = withDefaults(
  defineProps<{
    name: string
    /** Pixel size (width & height). */
    size?: number | string
  }>(),
  { size: 20 },
)

const paths: Record<string, string> = {
  github:
    '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  mail:
    '<rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m2 7 10 6 10-6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  external:
    '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  link:
    '<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  globe:
    '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9S14.5 18.3 12 21C9.5 18.3 8.2 15 8.2 12S9.5 5.7 12 3Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  book:
    '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14ZM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  rocket:
    '<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8a2 2 0 0 0-3 0ZM12 15l-3-3a12 12 0 0 1 7-9c3 0 5 2 5 5a12 12 0 0 1-9 7ZM9 12H4s.5-2.8 2-4 4-1 4-1M12 15v5s2.8-.5 4-2 1-4 1-4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  award:
    '<circle cx="12" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8.2 13.3 7 22l5-3 5 3-1.2-8.7" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  code:
    '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  'arrow-left':
    '<path d="M19 12H5M12 19l-7-7 7-7" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  'chevron-left':
    '<path d="m15 18-6-6 6-6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  'chevron-right':
    '<path d="m9 18 6-6-6-6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
}

const inner = computed(() => paths[props.name] ?? paths.link)
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    v-html="inner"
  />
</template>
