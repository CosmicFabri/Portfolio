<script setup lang="ts">
import { projects } from '~/data/projects'

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const { data: doc } = await useAsyncData(`project:${slug.value}`, () =>
  queryCollection('projects').path(`/projects/${slug.value}`).first(),
)

if (!doc.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found',
    fatal: true,
  })
}

const meta = computed(() => projects.find((p) => p.slug === slug.value))

useHead(() => ({
  title: doc.value ? `${doc.value.title} — CosmicFabri` : 'Project',
  meta: [{ name: 'description', content: doc.value?.description ?? '' }],
}))
</script>

<template>
  <article v-if="doc" class="mx-auto max-w-3xl px-6 py-16 sm:py-24">
    <NuxtLink
      to="/#projects"
      class="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-nebula-cyan"
    >
      <AppIcon name="arrow-left" :size="16" />
      Back to projects
    </NuxtLink>

    <header class="mt-8 border-b border-white/10 pb-8">
      <div v-if="meta?.tags?.length" class="mb-4 flex flex-wrap gap-2">
        <span
          v-for="tag in meta.tags"
          :key="tag"
          class="rounded-full border border-white/10 bg-space-800/80 px-2.5 py-0.5 text-xs text-slate-400"
        >
          {{ tag }}
        </span>
      </div>
      <h1 class="text-4xl font-bold sm:text-5xl">{{ doc.title }}</h1>
      <p class="mt-4 text-lg text-slate-400">{{ doc.description }}</p>
    </header>

    <div class="mt-10">
      <ContentRenderer :value="doc" class="prose-cosmic" />
    </div>

    <footer
      v-if="doc.links?.length"
      class="mt-14 border-t border-white/10 pt-8"
    >
      <h2 class="mb-4 text-sm font-semibold tracking-[0.2em] text-nebula-cyan uppercase">
        Links
      </h2>
      <div class="flex flex-wrap gap-3">
        <LinkBlock
          v-for="link in doc.links"
          :key="link.href"
          :label="link.label"
          :href="link.href"
          :icon="link.icon"
          :border-color="link.borderColor || 'var(--color-nebula-cyan)'"
        />
      </div>
    </footer>
  </article>
</template>
