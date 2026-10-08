// Sars — nav toggle, header state, mobile quick-order bar, Facebook Page plugin loader
(function () {
  "use strict";

  // Mobile nav
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  // Header shadow + quick-order bar after the hero
  var header = document.querySelector("[data-header]");
  var quickbar = document.querySelector(".quickbar");
  var hero = document.querySelector(".hero");
  var onScroll = function () {
    var y = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", y > 8);
    if (quickbar && hero) quickbar.classList.toggle("is-visible", y > hero.offsetHeight * 0.7);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Facebook Page plugin — loads only when the section is near the viewport
  var fb = document.querySelector("[data-fb-page]");
  if (fb) {
    var loadFb = function () {
      var w = Math.max(180, Math.min(500, Math.round(fb.clientWidth || 340)));
      var src =
        "https://www.facebook.com/plugins/page.php?href=" +
        encodeURIComponent(fb.getAttribute("data-fb-page")) +
        "&tabs=timeline&width=" + w + "&height=560&small_header=false" +
        "&adapt_container_width=true&hide_cover=false&show_facepile=true";
      var iframe = document.createElement("iframe");
      iframe.src = src;
      iframe.title = "Sars on Facebook";
      iframe.loading = "lazy";
      iframe.setAttribute("allow", "encrypted-media; clipboard-write; web-share");
      iframe.addEventListener("load", function () {
        var fallback = fb.querySelector(".fb-fallback");
        if (fallback) fallback.remove();
      });
      fb.appendChild(iframe);
    };
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { io.disconnect(); loadFb(); }
      }, { rootMargin: "400px" });
      io.observe(fb);
    } else {
      loadFb();
    }
  }

  // Footer year
  var yr = document.querySelector("[data-year]");
  if (yr) yr.textContent = new Date().getFullYear();
})();
