/* ============================================================
   BRAND — die EINE austauschbare Konstante.
   Um diese Website für ein anderes Unternehmen zu verwenden,
   nur dieses Objekt anpassen — alle Seiten übernehmen die Werte
   automatisch über data-brand="..." Attribute.
   Alle Angaben verifiziert (Stand: 2026-11-04).
   ============================================================ */
const BRAND = {
  name:     "Bel Hair",
  legal:    "Friseursalon Svetlana Geier",
  tagline:  "Friseursalon in Kassel · Spezialistin für Brautstyling",
  address:  "Hartwigstraße 31",
  city:     "34125 Kassel",
  phone:    "+49 561 877821",
  phoneHref:"tel:+49561877821",
  email:    "svetlana.geier@yahoo.de"
};

(function applyBrand(){
  document.querySelectorAll("[data-brand]").forEach(function(el){
    var key = el.getAttribute("data-brand");
    if (BRAND[key] !== undefined && BRAND[key] !== "") el.textContent = BRAND[key];
  });
  document.querySelectorAll("[data-brand-mailto]").forEach(function(a){
    a.href = "mailto:" + BRAND.email;
  });
  document.title = document.title.replace("{{BRAND}}", BRAND.name);
})();
