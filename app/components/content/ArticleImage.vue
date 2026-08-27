<script setup lang="ts">
/**
 * A full-width figure with an optional caption.
 *
 * Markdown usage:
 *   ::article-image{src="/projects/foo/hero.png" alt="..." caption="A caption"}
 *   ::
 */
defineProps<{
  src: string
  alt?: string
  caption?: string
}>()
</script>

<template>
  <figure class="my-10">
    <img
      :src="src"
      :alt="alt ?? caption ?? ''"
      class="w-full rounded-xl border border-space-700"
      loading="lazy"
    />
    <figcaption
      v-if="caption"
      class="mt-3 text-center text-sm text-slate-500"
    >
      {{ caption }}
    </figcaption>
  </figure>
</template>
