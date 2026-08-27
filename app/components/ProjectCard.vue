<script setup lang="ts">
import type { Project } from '~/types'

const props = defineProps<{ project: Project }>()
</script>

<template>
  <NuxtLink
    :to="`/projects/${project.slug}`"
    class="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-space-900/50 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-nebula-cyan/40"
    :class="project.span === 2 ? 'sm:col-span-2' : ''"
  >
    <div
      class="overflow-hidden bg-space-800"
      :class="project.span === 2 ? 'aspect-[2.4/1]' : 'aspect-[16/10]'"
    >
      <img
        :src="project.image"
        :alt="`${project.title} preview`"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <div class="flex flex-1 flex-col p-6">
      <div class="mb-2 flex flex-wrap gap-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="rounded-full border border-white/10 bg-space-800/80 px-2.5 py-0.5 text-xs text-slate-400"
        >
          {{ tag }}
        </span>
      </div>
      <h3 class="text-xl font-semibold text-slate-100">{{ project.title }}</h3>
      <p class="mt-2 flex-1 text-slate-400">{{ project.summary }}</p>
      <span
        class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-nebula-cyan"
      >
        View project
        <AppIcon
          name="chevron-right"
          :size="16"
          class="transition-transform group-hover:translate-x-1"
        />
      </span>
    </div>
  </NuxtLink>
</template>
