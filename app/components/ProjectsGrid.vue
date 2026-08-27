<script setup lang="ts">
import { projects } from '~/data/projects'
</script>

<template>
  <div class="grid gap-6 sm:grid-cols-2">
    <ProjectCard v-for="p in projects" :key="p.slug" :project="p" />
  </div>
</template>
