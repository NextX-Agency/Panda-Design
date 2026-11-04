# Prompt: fill the Panda website with real content and ship to main

Copy everything below the line into a new Claude Code session on the repo `NextX-Agency/Panda-Design`.
Best results: run it where Claude can use a browser that is logged in to Panda's Facebook/Instagram
(Claude desktop app with the built-in browser or Claude in Chrome), or attach the logo and project images to the message.

---

You are finishing the website for **Panda Design Agency**, a design studio in Paramaribo, Suriname. The site is complete in design and code. Your job is to replace every placeholder with real Panda content, then ship it to `main` and production.

## 1. Start

- Repo: `NextX-Agency/Panda-Design`. Check out branch `claude/panda-design-suriname-site-2msit6`. It is the only branch and holds the finished site.
- Read `README.md`, `docs/CONTENT-REGISTER.md` and every HTML comment in `site/index.html` first.
- The site is static HTML/CSS/JS in `site/` (no build). Do not change the design system: fonts (Syne, Instrument Serif italic, Space Grotesk), colours (#000000, #FFFFFF, #00249C), layout, brush strokes. Only replace content.

## 2. Sources (only these: this is the right company)

1. Files attached to this message (highest priority).
2. Instagram: https://www.instagram.com/pandadesign.sr/
3. Facebook: https://www.facebook.com/PandaGraphics.su/ (same page as https://www.facebook.com/share/1EAZu42rjQ/)
4. LinkedIn: https://www.linkedin.com/company/panda-design-agency-suriname

Rules:
- Facebook and Instagram require login. Use a browser session where the user is already logged in, or ask the user for screenshots/exports. Do not fake user agents, use crawler identities or bypass bot checks or login walls.
- Do not use anything from other "Panda" companies (other countries, pandanv.com, Panda Rolluiken, etc.).
- Do not invent clients, project names, results, numbers, reviews, team members or quotes. If something is not in the sources, leave it out.

## 3. What to collect

| Item | Where it goes |
|---|---|
| Logo (best available: SVG > large PNG > profile picture) | Header `.logo`, footer `.foot-mark`, `favicon.svg`, social preview |
| 5 strongest projects of Panda's own work: image(s), client/project name, discipline, one or two sentences on what Panda made | The 5 tiles in `#werk` and the 5 `<article class="case">` blocks |
| Confirmed contact: email (currently pandasuriname@gmail.com, verify), WhatsApp/phone if published by Panda | `#contact` |
| Social links (verify each opens Panda's own profile) | `#contact` `.socials` |

Choose projects that look best large and cover the disciplines (branding, graphic design, content, advertising). Prefer original image files over screenshots. Skip reposts of other people's work.

## 4. How to place it

- Save images in `site/assets/img/` with clear names (`project-slug-1.jpg`). Export WebP (and keep a JPG fallback if needed), max 2400 px wide, compressed. Set `width`, `height`, `alt` (describe the image) and `loading="lazy"` (except the first tile).
- Tiles: in each `.cover`, replace the `<svg class="cover-art">…</svg>` with `<img class="cover-art" …>`. Remove the `cover-black/blue/white` class if the image fills the tile. Keep the tile aspect ratios unless an image clearly needs another crop.
- Tile caption `.tile-cap`: project or client name, then discipline in the same line if it fits (e.g. `Merknaam, branding`).
- Case articles: `.case-title` = project/client name, `.case-disc` = discipline, `.case-lead` = 1–2 factual sentences in Dutch. Add extra images below the lead as `<img>` elements if available.
- If fewer than 5 real projects are available, delete the extra tiles and articles. Never leave a placeholder.
- Logo: replace the text `PANDA` in `.logo` with the logo image or inline SVG (keep `aria-label`). Use the logo for the favicon. If the logo is a wordmark, it may also replace the giant footer `PANDA`; otherwise keep the text there.
- Copy: Dutch, short, concrete, no agency buzzwords. Keep the hero ("Werk dat blijft hangen."), the statement and the studio line unless Panda's own wording is better.

## 5. Remove every placeholder

Search and clear all of these (the result must be zero hits):
- `Projectnaam`, `Twee of drie zinnen`, `Penseelcovers`, `vervang`, `placeholder`, `—` used as empty value
- The decorative `<svg class="cover-art">` covers (all replaced by real images)

Then switch on indexing:
- Remove `<meta name="robots" content="noindex, nofollow">` from `site/index.html`.
- Remove the `X-Robots-Tag` header block from `site/vercel.json` (keep the other headers).
- Add `<link rel="canonical" href="https://panda-design-eta.vercel.app/">` (or the real domain if Panda has one), plus `og:image` with a 1200×630 image made from the best project or the logo.

Update `docs/CONTENT-REGISTER.md`: every row confirmed, with its source URL or file.

## 6. Check before shipping

Serve `site/` locally and test in Chromium (Playwright is installed) at 360, 390, 768 and 1440 px:
- no horizontal scroll, no console errors, no failed requests or 404 images
- menu, anchor links, project view (open, arrows, Escape, deep link like `#case-a`), copy email
- keyboard focus visible, `prefers-reduced-motion` shows all content, axe-core has no violations
- every image loads, is sharp and is cropped well in its tile
Fix what fails.

## 7. Ship

1. Commit on the working branch with a clear message.
2. Create `main` from it and push: `git push -u origin HEAD:main`. Then set `main` as the default branch on GitHub if you can.
3. Deploy to production on Vercel: team `agencynextx-dotcoms-projects`, project `panda-design` (id `prj_t5JNPvgi6rfepEOu4Zah5nSw1miO`), root directory `site`, no framework. Use the commit on `main`, target `production`.
4. Open https://panda-design-eta.vercel.app/ in a browser and repeat the checks from step 6 on the live site, plus: HTTPS, favicon, social preview tags, canonical, and that `noindex` is gone.
5. Report: production URL, commit SHA, which projects were added (with sources), what was tested, anything still missing.
