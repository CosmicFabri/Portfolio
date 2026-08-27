<script setup lang="ts">
/**
 * Subtle animated star field rendered on a fixed, full-viewport canvas that
 * sits behind all content. Honours `prefers-reduced-motion`: when set, the
 * stars are drawn once and left static.
 */
const canvas = ref<HTMLCanvasElement | null>(null)
let raf = 0
let cleanup: (() => void) | undefined

onMounted(() => {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return

  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  let width = 0
  let height = 0
  let stars: {
    x: number
    y: number
    r: number
    base: number
    twinkle: number
    speed: number
  }[] = []

  const DENSITY = 1 / 4200 // stars per px²

  function seed() {
    const count = Math.min(120, Math.floor(width * height * DENSITY))
    stars = Array.from({ length: count }, () => {
      const r = Math.random() * 1.5 + 0.4
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r,
        base: Math.random() * 0.5 + 0.4,
        twinkle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.015 + 0.004,
      }
    })
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    width = window.innerWidth
    height = window.innerHeight
    el!.width = width * dpr
    el!.height = height * dpr
    el!.style.width = `${width}px`
    el!.style.height = `${height}px`
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    seed()
    if (reduceMotion) draw(0)
  }

  function draw(t: number) {
    ctx!.clearRect(0, 0, width, height)
    for (const s of stars) {
      const alpha = reduceMotion
        ? s.base
        : s.base + Math.sin(t * s.speed + s.twinkle) * 0.25
      ctx!.globalAlpha = Math.max(0.05, Math.min(1, alpha))
      ctx!.beginPath()
      ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx!.fillStyle = s.r > 1.2 ? '#cdd6ff' : '#ffffff'
      ctx!.fill()
    }
    ctx!.globalAlpha = 1
  }

  function loop(t: number) {
    draw(t)
    raf = requestAnimationFrame(loop)
  }

  resize()
  window.addEventListener('resize', resize)
  if (!reduceMotion) raf = requestAnimationFrame(loop)

  cleanup = () => {
    cancelAnimationFrame(raf)
    window.removeEventListener('resize', resize)
  }
})

onBeforeUnmount(() => cleanup?.())
</script>

<template>
  <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <!-- Base gradient -->
    <div class="absolute inset-0 bg-space-950" />
    <!-- Nebula glows -->
    <div
      class="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full opacity-30 blur-3xl"
      style="background: radial-gradient(circle, var(--color-nebula-violet), transparent 70%)"
    />
    <div
      class="absolute top-1/3 -right-52 h-[40rem] w-[40rem] rounded-full opacity-20 blur-3xl"
      style="background: radial-gradient(circle, var(--color-nebula-cyan), transparent 70%)"
    />
    <div
      class="absolute -bottom-56 left-1/4 h-[34rem] w-[34rem] rounded-full opacity-15 blur-3xl"
      style="background: radial-gradient(circle, var(--color-nebula-pink), transparent 70%)"
    />
    <!-- Stars -->
    <canvas ref="canvas" class="absolute inset-0" />
    <!-- Vignette to keep text legible -->
    <div
      class="absolute inset-0"
      style="background: radial-gradient(ellipse at 50% 0%, transparent 40%, rgba(5,5,16,0.55) 100%)"
    />
  </div>
</template>
