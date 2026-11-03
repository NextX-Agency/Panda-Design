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
