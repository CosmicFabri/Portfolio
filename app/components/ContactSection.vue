<script setup lang="ts">
import { contactMethods } from '~/data/contact'
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <LinkBlock
      v-for="m in contactMethods"
      :key="m.href"
      :label="m.value"
      :href="m.href"
      :icon="m.icon"
      :border-color="m.borderColor"
      size="md"
    />
  </div>
</template>
