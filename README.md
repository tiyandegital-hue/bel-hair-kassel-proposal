# Bel Hair — Friseursalon Svetlana Geier (Kassel) · Proposal-Site

Konzept-Entwurf von Tiyan Digital (Lead-Hunt, High-Ticket-Lane, Pillar: Websites/CRO).
Status: statische Demo — **kein GitHub-Push, kein Deploy** (Anweisung des Parent-Agents).

## Dateien
- `index.html` — Hero + Braut-Spezialität, Leistungen, Mobil-Vorteile, Ablauf-Teaser, Proof (bluedhaka.com), Final-CTA
- `brautstyling.html` — Beispiel-Pakete, 3-Schritte-Ablauf, Abholservice (10 km), Galerie-Teaser
- `preise.html` — Beispielpreisliste (deutlich als Beispiel markiert)
- `galerie.html` — Platzhalter-Galerie (CSS/SVG, als „Beispielbild" beschriftet)
- `kontakt.html` — Adresse/Telefon + Terminanfrage-Formular (clientseitige Validierung, Demo-Bestätigung, keine Übertragung)
- `impressum.html`, `datenschutz.html` — kurze DSGVO-Seiten, offene Angaben als Platzhalter markiert
- `assets/css/style.css`, `assets/js/main.js`, `assets/js/config.js`

## Die EINE austauschbare Konstante
`assets/js/config.js` → Objekt `BRAND` (name, legal, tagline, address, city, phone, phoneHref, pickup, email).
Alle Seiten injizieren die Werte über `data-brand="…"`-Attribute. E-Mail ist bewusst leer gelassen
(keine Adresse erfunden); Elemente mit `data-brand-mailto` werden dann ausgeblendet.

## Design-Entscheide (Master-Skill §1–18)
- **Psychologie-Brief:** Besucherin = Braut (emotional, entscheidet am Smartphone). Schmerz: Angst vor
  enttäuschendem Look am wichtigsten Tag. Aktion: Terminanfrage. Vertrauenslücke: alte Website ohne
  Buchung, keine Bilder. Emotion: Ruhe + Vorfreude.
- **Stimmung (3 Wörter):** romantisch, editorial, elegant.
- **Signatur-Idee „Der Schleier":** handgezeichnete goldene Linien (SVG stroke-draw, 3.2s, expo-out),
  die sich hinter der übergroßen kursiven Serif-Headline aufbauen — Haarsträhnen als Markenzeichen.
  Pro Seite eine Signatur (brautstyling: goldener Faden in der Timeline; galerie: Editorial-Collage;
  kontakt: große Telefonnummer als Hero-Element).
- **Tokens:** Ivory `#faf7f1` / Warm-Schwarz `#221a13` / Bronze `#a4763e` (deko) + `#7c5626` (text-sicher) /
  Display: Cormorant Garamond, Body: Jost. Keine Verläufe, keine Blobs, ein Akzent.
- **Nischen-Referenzen (Recherche 2026-11-04):** The Lane Salon (editorial, neutral, booking-first),
  Suite Caroline (Blush-Töne, nahtlose Online-Buchung), All Dolled Up (Bridal-Boutique, Weißraum, FAQ
  als Reibungs-Reduzierer). Übernommen: Editorial-Typografie, buchungsorientierte CTAs, klare
  Preislisten, echte-Fotos-statt-Stock-Prinzip (hier als Platzhalter ehrlich beschriftet).

## Ehrlichkeits-Checks
- Keine erfundenen Statistiken, Testimonials, Bewertungen oder Ergebnisse.
- Alle Preise/Pakete als „Beispielpreise / Beispielpakete" markiert + Hinweisbanner.
- Galerie: alle Grafiken als „Beispielbild" beschriftet, Hinweis dass echte Fotos nötig sind.
- Einziger Proof: reales Projekt bluedhaka.com (externer Link).
- Formular: sendet nichts, zeigt Demo-Bestätigung, Datenschutz-Hinweis im Formular.
- Konzept-Banner auf jeder Seite: „Konzept-Entwurf von Tiyan Digital … noch keine echte Website".
- Keine E-Mail-Adresse erfunden (Impressum: Platzhalter-Flag).

## QA (statisch, kein Live-Browser verfügbar)
- `node --check` auf beide JS-Dateien: bestanden.
- Link-Audit: alle internen hrefs existieren (7 HTML-Seiten, CSS, 2 JS).
- Overflow: kein fixer Breitenwert > Viewport; Breakpoints 960px/640px; `overflow-x: clip` als Netz.
- Kontrast: Text-Bronze `#7c5626` auf Ivory ≈ 5.9:1; Buttons warm-schwarz auf Ivory.
- Formular: Labels (nicht placeholder-only), autocomplete, sichtbarer Fokus, Fehlermeldungen pro Feld.
- Offene Punkte: kein echter Screenshot-Test (1280/390) möglich — Design folgt strikt dem responsiven
  System; Fonts laden von Google Fonts (in Datenschutz offengelegt).
