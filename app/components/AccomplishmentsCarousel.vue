<script setup lang="ts">
import { accomplishments } from '~/data/accomplishments'

/**
 * One-at-a-time carousel. Wraps around: advancing past the last item returns to
 * the first, and vice versa. Auto-advances every 7s unless the user prefers
 * reduced motion or is hovering/focusing the carousel.
 */
const items = accomplishments
const index = ref(0)
const direction = ref(1)

function go(step: number) {
  direction.value = step
  index.value = (index.value + step + items.length) % items.length
}

const paused = ref(false)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce || items.length < 2) return
  timer = setInterval(() => {
    if (!paused.value) go(1)
  }, 7000)
})
onBeforeUnmount(() => timer && clearInterval(timer))
</script>

<template>
  <div
    class="relative"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @focusin="paused = true"
    @focusout="paused = false"
  >
    <div
      class="overflow-hidden rounded-2xl border border-white/10 bg-space-900/50 backdrop-blur-sm"
    >
      <Transition :name="direction === 1 ? 'slide-next' : 'slide-prev'" mode="out-in">
        <div
          :key="index"
          class="grid gap-6 p-5 sm:grid-cols-[1.3fr_1fr] sm:items-center sm:p-8"
        >
          <div class="aspect-video overflow-hidden rounded-xl border border-white/10 bg-space-800">
            <img
              :src="items[index]!.image"
              :alt="items[index]!.alt"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p
              v-if="items[index]!.date"
              class="mb-2 text-xs font-medium tracking-widest text-nebula-cyan uppercase"
            >
              {{ items[index]!.date }}
            </p>
            <p class="text-lg leading-relaxed text-slate-200">
              {{ items[index]!.description }}
            </p>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Controls -->
    <div class="mt-5 flex items-center justify-between">
      <div class="flex gap-2">
        <button
          v-for="(_, i) in items"
          :key="i"
          type="button"
          class="h-2 rounded-full transition-all"
          :class="i === index ? 'w-6 bg-nebula-cyan' : 'w-2 bg-space-600 hover:bg-space-500'"
          :aria-label="`Go to accomplishment ${i + 1}`"
          :aria-current="i === index"
          @click="direction = i > index ? 1 : -1; index = i"
        />
      </div>
      <div class="flex gap-2">
        <button
          type="button"
          class="rounded-lg border border-white/10 bg-space-800/70 p-2 text-slate-300 transition-colors hover:border-nebula-cyan/50 hover:text-white"
          aria-label="Previous accomplishment"
          @click="go(-1)"
        >
          <AppIcon name="chevron-left" :size="18" />
        </button>
        <button
          type="button"
          class="rounded-lg border border-white/10 bg-space-800/70 p-2 text-slate-300 transition-colors hover:border-nebula-cyan/50 hover:text-white"
          aria-label="Next accomplishment"
          @click="go(1)"
        >
          <AppIcon name="chevron-right" :size="18" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.slide-next-enter-from {
  opacity: 0;
  transform: translateX(24px);
}
.slide-next-leave-to {
  opacity: 0;
  transform: translateX(-24px);
}
.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-24px);
}
.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(24px);
}
@media (prefers-reduced-motion: reduce) {
  .slide-next-enter-active,
  .slide-next-leave-active,
  .slide-prev-enter-active,
  .slide-prev-leave-active {
    transition: opacity 0.2s ease;
  }
  .slide-next-enter-from,
  .slide-next-leave-to,
  .slide-prev-enter-from,
  .slide-prev-leave-to {
    transform: none;
  }
}
</style>
