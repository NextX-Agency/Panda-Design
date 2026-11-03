# Panda — controle vóór de bouw

Datum: 3 november 2026. Basis: `Panda_Design_Audit.pdf` (S1–S9, A1–A9) en de bouwbrief.
Aangeleverde bestanden in deze sessie: alleen de audit-PDF. `IMG_8797.jpeg` (S9), logo, posts en casebeelden zijn **niet** in deze sessie of repository aanwezig.

Statussen: BEVESTIGD · VOORLOPIG · ONTBREEKT · NIET VAN TOEPASSING.

| # | Onderdeel | Status | Bewijs / bestand | Ontbrekende actie | Nodig voor |
|---|---|---|---|---|---|
| 1 | Identiteit: naam | VOORLOPIG | S1 LinkedIn "Panda Agency", URL-slug "panda-design-agency-suriname" (openbare zelfbeschrijving) | Panda bevestigt definitieve schrijfwijze | Definitieve bouw |
| 1 | Identiteit: profielen | VOORLOPIG | S1 LinkedIn; S2 Facebook-pagina-ID via directory (secundair) | Panda bevestigt welke profielen officieel zijn | Publicatie |
| 1 | Identiteit: domein | ONTBREEKT | S3 pandanv.com is alleen kandidaat; relatie onbevestigd | Domein bevestigen of vercel.app-URL accepteren | Publicatie |
| 2 | Logo + varianten | ONTBREEKT | Geen SVG/PNG ontvangen (audit p.9) | SVG of hoge-resolutie PNG aanleveren | Definitieve bouw |
| 2 | Kleurfamilie | BEVESTIGD (opdrachtgever, 3 nov): zwart #000000, wit #FFFFFF, Deep Royal Blue #00249C |
| 2 | (oud) Kleurfamilie | VERVALLEN | S9 aangeleverd chatbericht: donkerblauw, zwart, wit (bericht, geen merkbestand; bestand zelf niet in deze sessie) | Officiële kleurcodes uit huisstijl | Definitieve bouw |
| 2 | Exacte hexcodes | BEVESTIGD door opdrachtgever | `#173B8F` / `#111111` zijn ontwerptinten, niet gemeten | Huisstijl of origineel bestand | Definitieve bouw |
| 3 | Contentstijl eigen posts (4–6) | ONTBREEKT | A1 niet beoordeeld; A2–A9 gaven 404. Geen beelden bekeken → geen stijlanalyse | 4–6 eigen Panda-posts aanleveren (los van klantwerk) | Definitieve bouw |
| 4 | Brush strokes | VOORLOPIG | Gewenste richting (klokreferentie S9). Aansluiting op logo niet toetsbaar zonder logo. Geen bewijs van Kung Fu Panda-oorsprong | Logo vergelijken; vormen eventueel bijstellen | Definitieve bouw |
| 5 | Portfolio: 3 cases | ONTBREEKT | Geen cases, originelen, rol, credits of toestemming | Per case: naam, beelden (1 hoofd + 2 details), rol, credits, toestemming | Definitieve bouw |
| 6 | Diensten (3 groepen) | VOORLOPIG | S1 noemt merkstrategie, social, content, foto, video, websites, maatwerksoftware | Panda bevestigt labels en concrete deliverables | Definitieve bouw |
| 7 | Copy | VOORLOPIG | Alle koppen/teksten zijn voorstellen; geen reviews of cijfers gebruikt | Panda keurt copy goed | Publicatie |
| 8 | Contact | ONTBREEKT | Conflict S2: +597 7568915 vs +597 8720691; beide onbevestigd. Geen e-mail | Eén bevestigd zakelijk kanaal (WhatsApp-nummer of mail) | Definitieve bouw |
| 8 | Adres | VOORLOPIG | S2 directory: Grote Combeweg 15 (secundair, niet gebruikt) | Bevestigen of weglaten | Publicatie |
| 9 | Media / rechten | ONTBREEKT | Geen gecontroleerd beeld- of videopakket | Originelen + toestemming; video optioneel | Definitieve bouw |
| 9 | Studiofoto | ONTBREEKT | — | Echte foto, of typografische sectie houden (nu gebouwd) | Optioneel |
| 10 | Repository / stack | BEVESTIGD | Repo `NextX-Agency/Panda-Design` was leeg; gekozen: statische HTML/CSS/JS in `site/`, geen build | — | Concept |
| 10 | Hosting | VOORLOPIG | Vercel-team CodecoNV, geen bestaand Panda-project gevonden | Bevestigen dat dit team de juiste eigenaar is | Publicatie |
| 10 | Contentonderhoud | VOORLOPIG | Content staat direct in `site/index.html` | Akkoord dat wijzigingen via de repo lopen | Publicatie |
| 11 | Compositie | VOORLOPIG | Schets audit p.7 gevolgd; conceptpreview gebouwd en in browser getest (zie `VERIFICATIE.md`) | Review door Panda | Definitieve bouw |
| 12 | Consistentie | BEVESTIGD | Geen violet/lime-tokens, geen filmassets, geen naamgenoot-bronnen in de code | — | Concept |

## Oordelen

- **Klaar voor conceptpreview: JA.** Richting en opbouw zijn helder; ontbrekende assets zijn zichtbare layoutplaatsen.
- **Klaar voor definitieve bouw: NEE.** Logo, kleurcodes, drie cases met rechten en een bevestigd contactkanaal ontbreken.
- **Klaar voor publicatie: NEE.** Placeholders staan nog op de pagina; geen bevestigd domein of contact. Productie-deploy niet uitgevoerd.

## Essentiële inputs van Panda

1. Logo (SVG of PNG ≥ 2000 px) en, indien aanwezig, huisstijl met kleurcodes.
2. Drie cases: naam klant/project, discipline, korte opdracht, Panda's exacte rol, credits, 1 hoofdbeeld + 2 details, toestemming om te publiceren.
3. Eén bevestigd contactkanaal (zakelijk WhatsApp-nummer of e-mail).
4. Akkoord of correcties op: naam "Panda", de drie dienstgroepen, de werkwijze en de voorgestelde teksten.

Optioneel: studiofoto, reel/clips met poster, officiële sociale profielen, domein.

## Update 3 nov — redesign

Op feedback (te veel boilerplate) is de pagina herontworpen: posterachtige hero met grote droge penseelstreek, minimale tekst, geen statuslabels op de pagina. Werkwijze-sectie en casedialogen zijn verwijderd tot er echte cases zijn. Nieuwe leads: Facebook "Panda Design Agency" (facebook.com/PandaGraphics.su) en website pandadesign.sr. Beide konden vanuit deze sessie niet worden opgehaald (netwerkbeleid).
