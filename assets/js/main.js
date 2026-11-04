/* Shared interactions: mobile nav, scroll reveals, booking form (demo). */
(function(){
  "use strict";

  /* ---- mobile nav ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav){
    toggle.addEventListener("click", function(){
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    nav.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", function(){
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---- scroll reveals (rest state visible if JS fails: CSS handles .no-js) ---- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");
  if (!reduce && "IntersectionObserver" in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function(el){ io.observe(el); });
  } else {
    items.forEach(function(el){ el.classList.add("in"); });
  }

  /* ---- footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function(el){
    el.textContent = new Date().getFullYear();
  });

  /* ---- booking form (Konzept-Demo: validiert clientseitig, sendet nichts) ---- */
  var form = document.getElementById("booking-form");
  if (form){
    form.addEventListener("submit", function(ev){
      ev.preventDefault();
      var ok = true;
      ["bf-name","bf-email","bf-consent"].forEach(function(id){
        var field = document.getElementById(id);
        var wrap = field.closest(".field") || field.closest(".consent");
        var valid = field.type === "checkbox" ? field.checked
                  : field.value.trim().length > 1;
        if (id === "bf-email" && valid){
          valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
        }
        wrap.classList.toggle("invalid", !valid);
        if (!valid) ok = false;
      });
      if (!ok){
        var firstBad = form.querySelector(".invalid input, .invalid textarea");
        if (firstBad) firstBad.focus();
        return;
      }
      // Erfolgszustand (Demo): Zusammenfassung anzeigen, kein Versand.
      var name = document.getElementById("bf-name").value.trim().split(" ")[0];
      var done = document.getElementById("booking-ok");
      var hello = document.getElementById("booking-ok-name");
      if (hello) hello.textContent = name;
      form.style.display = "none";
      done.classList.add("show");
      done.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    });
    // Fehlerzustand beim Tippen zurücksetzen
    form.querySelectorAll("input, textarea").forEach(function(inp){
      inp.addEventListener("input", function(){
        var wrap = inp.closest(".field") || inp.closest(".consent");
        if (wrap) wrap.classList.remove("invalid");
      });
    });
  }
})();
