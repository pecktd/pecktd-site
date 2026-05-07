# pecktd-site

Static portfolio site for Attaporn "Peck" Kanjanasahas — Rigger / Character TD.

Vanilla HTML, CSS, and JS. No build step. Deploys directly to GitHub Pages.

## Local preview

```sh
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy on GitHub Pages

1. Create a new GitHub repository (e.g. `pecktd-site` or `<username>.github.io`).
2. Push this folder to the `main` branch:
   ```sh
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
3. In GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main`, folder `/ (root)`**. Save.
4. After ~1 minute the site will be live at:
   - `https://<username>.github.io/<repo>/` (project page), or
   - `https://<username>.github.io/` (if the repo is named `<username>.github.io`).

The empty `.nojekyll` file ensures GitHub Pages serves the files as-is, without Jekyll processing.

## Editing

Each page is a self-contained HTML file. To change:

- **Site colors / type:** `assets/css/style.css` — all themed via CSS custom properties at the top (`--bg`, `--fg`, `--accent`, etc.).
- **Nav links:** the `<nav class="nav">` block appears in every HTML file. Update them all when adding/removing top-level pages.
- **Add a new R&D article:** copy `rd/spherical-eye-scaling.html` (a short one) as a starting template, fill in the new content, then add a new card to `rd/index.html` and link it from `index.html` if you want it featured.
- **Featured reel on the home page:** edit the YouTube embed in `index.html` (search for "rigging-reel-2025" / `dnVikdgTMmE`).

## Structure

```
.
├── index.html              # Home — hero + featured reel + cards
├── showreels/              # 6 reel pages + index
├── rd/                     # 12 R&D articles + index
├── old-works/              # 4 archive pages + index
├── resume.html             # Print-friendly
├── contact.html            # Email reveal on click
├── 404.html
├── assets/
│   ├── css/style.css       # Single stylesheet
│   └── js/main.js          # Mobile nav toggle, email reveal
├── .nojekyll               # GitHub Pages: skip Jekyll
├── robots.txt
├── sitemap.xml
└── .gitignore              # Excludes _scrape/ working dir
```

## Notes

- YouTube and Vimeo embeds load lazily via the iframe `loading="lazy"` attribute — the page is fast on first paint.
- The email on `contact.html` is hidden behind a click reveal, so plain-text scrapers can't grab it from the HTML.
- The `_scrape/` folder (gitignored) holds the raw text I extracted from the old Google Site during the port — keep it as a reference or delete it.
