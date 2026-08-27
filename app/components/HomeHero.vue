<script setup lang="ts">
import { profile, socialLinks } from '~/data/profile'
</script>

<template>
  <div
    class="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-14"
  >
    <!-- Text -->
    <div>
      <p class="mb-3 text-sm font-medium tracking-[0.2em] text-nebula-cyan uppercase">
        {{ profile.role }}
      </p>
      <h1 class="text-4xl font-bold sm:text-5xl lg:text-6xl">
        Hi, I'm <span class="text-gradient">{{ profile.name }}</span>
      </h1>
      <p class="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
        {{ profile.intro }}
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        <LinkBlock
          v-for="l in socialLinks"
          :key="l.href"
          :label="l.label"
          :href="l.href"
          :icon="l.icon"
        />
      </div>
    </div>

    <!-- Photo / placeholder -->
    <div class="mx-auto w-full max-w-sm md:mx-0">
      <div
        class="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-space-800/60"
      >
        <img
          v-if="profile.photo"
          :src="profile.photo"
          :alt="profile.photoAlt"
          class="h-full w-full object-cover"
        />
        <div
          v-else
          class="flex h-full w-full flex-col items-center justify-center gap-3 text-slate-600"
        >
          <AppIcon name="rocket" :size="48" />
          <span class="text-xs tracking-wide uppercase">Photo placeholder</span>
        </div>
        <div
          class="pointer-events-none absolute inset-0 rounded-2xl"
          style="box-shadow: inset 0 0 60px -20px var(--color-nebula-violet)"
        />
      </div>
    </div>
  </div>
</template>
