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
- `projects.html` auto-lists public repos at build time using Jekyll’s GitHub metadata (`site.github.public_repositories`) — no JS, no manual list.
- The shared shrine sidebar navigation lives in `_includes/shrine_nav.html`; pass a `current` value from each table-layout page.
- `404.html` is the custom missing-page corridor.
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
- For table-layout shrine pages, use `_includes/shrine_nav.html` instead of copying the sidebar nav by hand.
- If you add a new major page, add it to `_includes/shrine_nav.html` and any polished-zone top navs that should link to it.

### Add a new page

- Create a new `something.html` in the repo root.
- Link to it from `index.html` and `_includes/shrine_nav.html` if it is a main zone.

### Add an album to `albums.html`

- Put the source cover in `photos/Albums/`.
- Create an optimized copy and keep the original until you confirm the result:
  - `magick photos/Albums/ORIGINAL.jpg -strip -interlace Plane -quality 84 photos/Albums/ORIGINAL-optimized.jpg`
- Use the optimized file in `albums.html`, not the original.
- Update the manual count text (`Starting stack: N albums and counting.`).
- Append one existing `<div class="albumCard">...</div>` pattern to the left `.albumColumn` for an odd overall position or the right `.albumColumn` for an even one. Embedded videos count as cards.
- For the new card:
  - set the Discogs URL on the `<a>`
  - set the album title in `aria-label` and `alt`
  - set the optimized image path in `src`
  - set the image `width` and `height` to the real file dimensions
- After confirming the optimized cover looks good, delete the original source file so `photos/Albums/` only contains the optimized versions.

### Add a blog post

- Copy `blogs/_template.md` → rename it (example: `blogs/2026-02-02-my-post.md`)
- Edit the YAML front matter fields (`title`, `date`, etc.)
- Push to GitHub and it will show up on `blogs/index.html`.

## Enabling / Checking GitHub Pages Settings

In the GitHub repo:

- Go to **Settings → Pages**
- Ensure the site is set to deploy from the correct branch (commonly `main`) and the repo root (or whatever you’ve chosen)
- GitHub will show the published URL when it’s configured

## Keeping the Projects List Fresh

GitHub Pages only refreshes `projects.html` when this site repo rebuilds. To keep the auto-generated repo list fresh even when you create/update other repos, this repo includes a scheduled workflow:

- `.github/workflows/refresh-pages.yml`

It calls the GitHub API to request a Pages rebuild on a timer (and can also be run manually via **Actions → Refresh GitHub Pages**).

## Notes

- Filenames with spaces are OK, but links should use URL encoding (e.g. spaces become `%20`) when referenced in HTML.
- Large binaries can bloat the repo; prefer web-optimized images (strip metadata, reasonable resolution, JPEG for photos unless transparency is needed).
