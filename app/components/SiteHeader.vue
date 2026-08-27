<script setup lang="ts">
import { profile } from '~/data/profile'

const links = [
  { label: 'Home', to: '/#home' },
  { label: 'Accomplishments', to: '/#accomplishments' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Contact', to: '/#contact' },
]
</script>

<template>
  <header
    class="sticky top-0 z-30 border-b border-white/5 bg-space-950/70 backdrop-blur-md"
  >
    <div
      class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
    >
      <NuxtLink
        to="/#home"
        class="font-display text-lg font-semibold text-slate-100"
      >
        <span class="text-gradient">{{ profile.name }}</span>
      </NuxtLink>
      <nav class="hidden gap-7 text-sm text-slate-400 sm:flex">
        <NuxtLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="transition-colors hover:text-slate-100"
        >
          {{ l.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
