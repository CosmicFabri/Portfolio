<script setup lang="ts">
import { profile } from '~/data/profile'

useHead({
  title: `${profile.name} — ${profile.role}`,
})
</script>

<template>
  <div class="mx-auto max-w-5xl px-6">
    <section id="home" class="scroll-mt-24 py-20 sm:py-28">
      <HomeHero />
    </section>

    <section id="accomplishments" class="scroll-mt-24 py-16 sm:py-24">
      <SectionHeading
        title="Accomplishments"
        subtitle="A few recent milestones worth sharing."
      />
      <AccomplishmentsCarousel />
    </section>

    <section id="projects" class="scroll-mt-24 py-16 sm:py-24">
      <SectionHeading
        title="Projects"
        subtitle="Things I've designed, built and shipped."
      />
      <ProjectsGrid />
    </section>

    <section id="contact" class="scroll-mt-24 py-16 sm:py-28">
      <SectionHeading
        title="Contact"
        subtitle="The best way to reach me."
      />
      <ContactSection />
    </section>
  </div>
</template>
