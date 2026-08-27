<script setup lang="ts">
/**
 * A block of prose with an optional image floated to one side.
 *
 * Markdown usage:
 *
 *   ::article-paragraph{image="/projects/foo/diagram.svg" side="right" alt="..."}
 *   Your paragraph text here. **Markdown** works inside.
 *   ::
 *
 * Omit `image` for a plain text block. `side` is "left" or "right" (default left).
 */
withDefaults(
  defineProps<{
    image?: string
    alt?: string
    side?: 'left' | 'right'
  }>(),
  { side: 'left', alt: '' },
)
</script>

<template>
  <div
    class="my-8 flex flex-col gap-6"
    :class="[
      image && side === 'left' ? 'md:flex-row' : '',
      image && side === 'right' ? 'md:flex-row-reverse' : '',
    ]"
  >
    <div v-if="image" class="md:w-2/5 md:shrink-0">
      <img
        :src="image"
        :alt="alt"
        class="w-full rounded-xl border border-space-700"
        loading="lazy"
      />
    </div>
    <div class="prose-cosmic min-w-0 flex-1">
      <slot />
    </div>
  </div>
</template>
