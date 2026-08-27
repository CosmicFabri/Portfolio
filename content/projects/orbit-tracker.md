---
title: Orbit Tracker
description: A dashboard that visualizes satellite passes in real time.
links:
  - label: GitHub repository
    href: https://github.com/CosmicFabri/orbit-tracker
    icon: github
    borderColor: var(--color-nebula-violet)
---

::article-paragraph{image="/projects/placeholder-square.svg" side="right" alt="Orbit Tracker globe view"}
Orbit Tracker plots satellites on an interactive globe and tells you when the
next visible pass is from your location. It started as a way to catch ISS
flyovers without missing them.
::

## How it works

Two-line element sets are pulled from public catalogs and propagated in the
browser with an SGP4 implementation. The globe is rendered with WebGL, and passes
are computed for the user's coordinates entirely client-side.

::article-image{src="/projects/placeholder-wide.svg" caption="The pass timeline for a given ground station."}
::

## What's next

Push notifications for upcoming passes, and a lightweight mode for low-power
devices.
