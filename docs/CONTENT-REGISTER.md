# Content register — wat staat er en wat moet Panda bevestigen

Laatste update: 4 november 2026 (versobering: geen nummering, cijfers, werkwijze of waardenblokken meer).

## Op de site, te bevestigen door Panda

| Element | Op de site | Bron | Status |
|---|---|---|---|
| Naam | Panda Design Agency / "PANDA" | Facebook-paginanaam, LinkedIn-slug | VOORLOPIG |
| Kleuren | #000000, #FFFFFF, #00249C | Opdrachtgever | BEVESTIGD |
| Hero | "Werk dat blijft hangen." | Ontwerpvoorstel | VOORSTEL |
| Disciplines | Branding, Graphic design, Content, Advertising | Instagram-bio @pandadesign.sr (via zoekresultaat) | VOORLOPIG |
| Studio-tekst | "Klein genoeg om je te kennen…" + "Je praat direct met de mensen die het werk maken." | Ontwerpvoorstel | VOORSTEL |
| E-mail | pandasuriname@gmail.com | Facebook-pagina (via zoekresultaat) | TE BEVESTIGEN |
| Instagram | instagram.com/pandadesign.sr | Zoekresultaat | VOORLOPIG |
| Facebook | facebook.com/PandaGraphics.su | Share-link van opdrachtgever | BEVESTIGD |
| LinkedIn | linkedin.com/company/panda-design-agency-suriname | S1 | VOORLOPIG |

## Ontbreekt

| Onderdeel | Waar | Hoe vervangen |
|---|---|---|
| Logo | Header, favicon, footer | Vervang `.logo-word` door `<img>`/inline SVG |
| 5 projecten (naam, discipline, korte tekst) | `#werk` tegels + `.cases-store` | Per project: tekst in `<article id="case-x">`, beeld in de tegel (zie HTML-commentaar) |
| Projectbeelden | Tegels + case-dialoog | `<img>` in `.cover`, liefst ≥ 2000 px breed, WebP/AVIF |
| Social preview-beeld | `<head>` | `og:image` toevoegen zodra er een beeld is |

De penseelcovers in de tegels zijn decoratief en geen Panda-werk; ze verdwijnen zodra echte beelden binnen zijn.

Niet gebruikt: telefoonnummers uit directory (conflict), adres Grote Combeweg 15, testimonials van pandanv.com, naam van de CEO.
