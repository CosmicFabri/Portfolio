---
title: Stellar CLI
description: A fast, ergonomic command-line tool for scaffolding and managing microservices.
links:
  - label: GitHub repository
    href: https://github.com/CosmicFabri/stellar-cli
    icon: github
    borderColor: var(--color-nebula-violet)
  - label: Documentation
    href: https://example.com/stellar-cli/docs
    icon: book
    borderColor: var(--color-nebula-cyan)
---

::article-paragraph{image="/projects/placeholder-square.svg" side="right" alt="Terminal running Stellar CLI"}
Stellar CLI began as a pile of shell scripts I copied between projects. Every new
service meant re-creating the same folder structure, CI config and Docker setup
by hand. Stellar CLI turns that into a single command, with sane defaults and a
plugin system for the parts every team does differently.
::

## Why build it

Scaffolding tools tend to be either too rigid or too magical. I wanted something
that generates code you can actually read, keeps configuration explicit, and
gets out of the way once the project is running.

::article-paragraph
The core is written in Rust for a near-instant startup time — important for a
tool you invoke dozens of times a day. Templates are plain files with a small
templating syntax, so contributing a new one doesn't require learning the
internals.
::

## What I learned

- Designing a CLI is mostly designing error messages.
- A good `--dry-run` mode is worth the extra effort every time.
- Keeping the generated output boring makes the tool trustworthy.
