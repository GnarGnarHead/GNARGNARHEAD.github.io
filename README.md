# GNARGNARHEAD.github.io (GitHub Pages)

## Live Site

https://gnargnarhead.github.io/

## What GitHub Pages Is

GitHub Pages is GitHub’s free static hosting for websites built from a repository. You push files to a repo, and GitHub serves them as a website.

“Static” means the site is mostly HTML/CSS/images (and optional client-side JS). There’s no server code to run.

## How This Repo Works

- This repo is the source for the site at `https://gnargnarhead.github.io/`.
- Most pages are plain HTML files in the repo root (`index.html`, `projects.html`, etc.).
- The blog uses Markdown files in `blogs/` with YAML front matter and layouts in `_layouts/` (GitHub Pages builds these with Jekyll).
- Images live in `photos/`.

## Basic Workflow (Edit → Push → View)

1. Edit files locally (HTML/CSS/Markdown/images).
2. Commit and push to GitHub.
3. Wait a moment for GitHub Pages to rebuild.
4. Refresh the live site:
   - https://gnargnarhead.github.io/

## Adding / Editing Content

### Update a page

- Edit an existing `.html` file (for example `index.html`).
- Keep navigation links consistent across pages.

### Add a new page

- Create a new `something.html` in the repo root.
- Link to it from `index.html` (and anywhere else you want it in the nav).

### Add a blog post

- Copy `blogs/_template.md` → rename it (example: `blogs/2026-02-02-my-post.md`)
- Edit the YAML front matter fields (`title`, `date`, etc.)
- Push to GitHub and it will show up on `blogs/index.html`.

## Enabling / Checking GitHub Pages Settings

In the GitHub repo:

- Go to **Settings → Pages**
- Ensure the site is set to deploy from the correct branch (commonly `main`) and the repo root (or whatever you’ve chosen)
- GitHub will show the published URL when it’s configured

## Notes

- Filenames with spaces are OK, but links should use URL encoding (e.g. spaces become `%20`) when referenced in HTML.
- Large binaries can bloat the repo; prefer web-optimized images (strip metadata, reasonable resolution, JPEG for photos unless transparency is needed).

