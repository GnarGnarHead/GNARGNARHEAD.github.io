---
layout: blog_post
title: Auto Projects (No JS, No Manual Updates)
date: "2026-02-02"
tags:
  - github-pages
  - jekyll
  - no-js
description: How projects.html pulls my public repos automatically.
---

**AI-AUTHORED NOTE:** This post was drafted by an AI assistant at my request, then reviewed by me.

I wanted `projects.html` to always show my latest public repos **without** JavaScript and **without** manually editing a list.

Here’s the trick: GitHub Pages builds this site with Jekyll, and Jekyll exposes GitHub repo data at build time via `site.github.public_repositories`.

So `projects.html` is now a tiny Liquid loop that:

- fetches my public repos during the Pages build
- filters out forks
- sorts by most recently pushed
- renders them into the same old-school HTML “cards”

One catch: GitHub Pages only refreshes the list when **this** site repo rebuilds. Creating a new repo won’t automatically rebuild the site.

Fix: this repo has a scheduled GitHub Action (a tiny YAML workflow in `.github/workflows/` that GitHub runs on a timer) that pings the Pages build API, so the list stays fresh.
