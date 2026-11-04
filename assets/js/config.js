/* ============================================================
   BRAND — die EINE austauschbare Konstante.
   Um diese Website für ein anderes Unternehmen zu verwenden,
   nur dieses Objekt anpassen — alle Seiten übernehmen die Werte
   automatisch über data-brand="..." Attribute.
   ============================================================ */
const BRAND = {
  name:     "Bel Hair",
  legal:    "Friseursalon Svetlana Geier",
  tagline:  "Friseursalon in Kassel · Spezialistin für Brautstyling",
  address:  "Hartwigstrasse 31",
  city:     "34125 Kassel",
  phone:    "+49 561 877821",
  phoneHref:"tel:+49561877821",
  pickup:   "10 km",
  // E-Mail wird erst bei Beauftragung eingetragen — bewusst kein Platzhalter erfunden:
  email:    ""
};

(function applyBrand(){
  document.querySelectorAll("[data-brand]").forEach(function(el){
    var key = el.getAttribute("data-brand");
    if (BRAND[key] !== undefined && BRAND[key] !== "") el.textContent = BRAND[key];
  });
  var mailto = document.querySelectorAll('[data-brand-mailto]');
  mailto.forEach(function(a){
    if (BRAND.email) a.href = "mailto:" + BRAND.email;
    else a.style.display = "none"; // keine erfundene Adresse anzeigen
  });
  document.title = document.title.replace("{{BRAND}}", BRAND.name);
})();
