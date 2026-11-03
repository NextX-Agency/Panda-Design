# Verificatieverslag — 3 november 2026

## Getest (lokaal, Chromium/Playwright, commit van deze branch)

| Check | Resultaat |
|---|---|
| 360 / 390 / 768 / 1440 px: geen horizontale scroll | Geslaagd (scrollWidth = viewport) |
| Consolefouten en mislukte requests | Geen |
| Mobiel menu: openen, Escape, sluiten na link, aria-expanded | Geslaagd |
| Ankerlink landt onder sticky header | Geslaagd (79 px van top) |
| Case-dialoog: toetsenbord openen, focus erin, Escape, focus terug | Geslaagd |
| Deelbare staat: `#case-03` opent dialoog direct | Geslaagd |
| Skiplink als eerste Tab, zichtbare focusrand | Geslaagd |
| Geen lege of kapotte links | Geslaagd |
| Reduced motion: geen reveal-animatie, alle inhoud zichtbaar | Geslaagd |
| Zonder JavaScript: navigatie en casegegevens zichtbaar | Geslaagd |
| axe-core 4.10 | 0 overtredingen (na fix: conceptbalk als `aside`) |
| Visuele controle screenshots desktop/mobiel | Uitgevoerd; penseelfilter twee keer bijgesteld |

## Niet getest

- Vercel preview en productie: **niet gedeployed**. De Vercel-connector (account `codeconv.app@gmail.com`, team CodecoNV) mag geen project aanmaken (403), en het enige bestaande project `code-co-nv` hoort niet bij Panda.
- Safari / Firefox en echte mobiele toestellen.
- Performance-metingen (geen echte media aanwezig).
- Contactroute: er is nog geen bevestigd kanaal, dus niets om te testen.

## Deployment — 3 november 2026 (redesign, commit 055a7ed)

- Vercel-project `panda-design` (account agencynextx), root directory `site`, geen framework/build.
- Eerste deployment van een nieuw project: Vercel zette deze als **production** op `https://panda-design-eta.vercel.app`. Geen eerdere site overschreven.
- Live gecontroleerd via de Vercel-connector: HTML, CSS, JS en favicon geven 200 over HTTPS (HSTS), inhoud gelijk aan de lokaal geteste versie, `X-Robots-Tag: noindex, nofollow` actief.
- Niet gedaan: de live URL in een browser renderen (sandbox blokkeert vercel.app). Browsertests zijn lokaal op dezelfde bestanden uitgevoerd.
- Nog bewust: noindex aan, geen canonical, geen logo of portfoliobeelden.
