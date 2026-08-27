<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="mb-10">
    <div class="flex items-center gap-3">
      <span class="h-px w-8 bg-gradient-to-r from-transparent to-nebula-cyan" />
      <h2 class="text-sm font-semibold tracking-[0.2em] text-nebula-cyan uppercase">
        {{ title }}
      </h2>
    </div>
    <p v-if="subtitle" class="mt-3 max-w-2xl text-lg text-slate-400">
      {{ subtitle }}
    </p>
  </div>
</template>
