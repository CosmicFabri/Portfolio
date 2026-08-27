---
title: Nebula Notes
description: A local-first, end-to-end encrypted note-taking app.
links:
  - label: GitHub repository
    href: https://github.com/CosmicFabri/nebula-notes
    icon: github
    borderColor: var(--color-nebula-violet)
  - label: Live demo
    href: https://example.com/nebula-notes
    icon: globe
    borderColor: var(--color-nebula-cyan)
---

::article-paragraph{image="/projects/placeholder-square.svg" side="left" alt="Nebula Notes editor"}
Nebula Notes is a note-taking app that keeps your data on your device. Notes are
encrypted before they ever leave the machine, and sync is optional — the app is
fully usable offline, forever.
::

## Local-first, not cloud-first

The data model is built on CRDTs, so two devices editing the same note offline
can merge their changes without a central server refereeing. Sync is just a
transport for encrypted blobs; the server never sees plaintext.

::article-paragraph
The desktop build uses Tauri, which keeps the bundle small and lets the same
codebase target Windows, macOS and Linux. The editor is a custom rich-text layer
over the CRDT document.
::

## Status

Actively used as my daily notes app. The sync server is self-hostable with a
single binary.
