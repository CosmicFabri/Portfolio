<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()
</script>

<template>
  <div class="relative min-h-screen">
    <StarField />
    <div class="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6 text-center">
      <p class="font-display text-7xl font-bold text-gradient">
        {{ error.statusCode || 500 }}
      </p>
      <h1 class="mt-4 text-2xl font-semibold text-slate-100">
        {{ error.statusMessage || 'Something went wrong' }}
      </h1>
      <p class="mt-3 text-slate-400">
        The page you're looking for drifted off into deep space.
      </p>
      <NuxtLink
        to="/"
        class="mt-8 inline-flex items-center gap-2 rounded-xl border border-nebula-cyan/50 bg-space-900/60 px-5 py-3 text-sm font-medium text-slate-100 transition-colors hover:bg-space-800"
      >
        <AppIcon name="arrow-left" :size="16" />
        Back home
      </NuxtLink>
    </div>
  </div>
</template>
