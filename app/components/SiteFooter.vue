<script setup lang="ts">
import { profile, socialLinks } from '~/data/profile'
</script>

<template>
  <footer class="border-t border-white/5 py-10">
    <div
      class="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-sm text-slate-500 sm:flex-row sm:justify-between"
    >
      <p>© {{ new Date().getFullYear() }} {{ profile.name }}</p>
      <div class="flex gap-5">
        <a
          v-for="l in socialLinks"
          :key="l.href"
          :href="l.href"
          :target="/^https?:/.test(l.href) ? '_blank' : undefined"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 transition-colors hover:text-slate-200"
        >
          <AppIcon :name="l.icon" :size="16" />
          {{ l.label }}
        </a>
      </div>
    </div>
  </footer>
</template>
