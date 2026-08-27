<script setup lang="ts">
/**
 * A bordered link "chip" with an icon and a label.
 *
 * Used for social links, contact methods and the links under a project article.
 * `borderColor` accepts any CSS color (defaults to the cyan accent) and drives
 * both the border and the hover glow.
 */
const props = withDefaults(
  defineProps<{
    label: string
    href: string
    icon?: string
    borderColor?: string
    /** Larger padding + text; used for the Contact section. */
    size?: 'sm' | 'md'
  }>(),
  { icon: 'link', borderColor: 'var(--color-nebula-cyan)', size: 'sm' },
)

const external = computed(() => /^https?:\/\//.test(props.href))
</script>

<template>
  <a
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="link-block group inline-flex items-center gap-2.5 rounded-xl border bg-space-900/60 font-medium text-slate-200 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-space-800/80"
    :class="size === 'md' ? 'px-5 py-4 text-base' : 'px-4 py-2.5 text-sm'"
    :style="{ borderColor: 'color-mix(in srgb, ' + borderColor + ' 55%, transparent)' }"
  >
    <span
      class="text-[color:var(--bc)] transition-colors"
      :style="{ '--bc': borderColor }"
    >
      <AppIcon :name="icon" :size="size === 'md' ? 22 : 18" />
    </span>
    <span>{{ label }}</span>
    <AppIcon
      v-if="external"
      name="external"
      :size="14"
      class="ml-0.5 text-slate-500 transition-colors group-hover:text-slate-300"
    />
  </a>
</template>

<style scoped>
.link-block:hover {
  box-shadow: 0 0 0 1px
      color-mix(in srgb, v-bind('props.borderColor') 40%, transparent),
    0 8px 30px -12px color-mix(in srgb, v-bind('props.borderColor') 60%, transparent);
}
</style>
