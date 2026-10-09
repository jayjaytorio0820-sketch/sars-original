# Sars — Landing Page

Professional Landing Page (Premium) — static HTML + CSS + JS, Vercel-ready. Walang build step.

**Scope:** Hero · About · Products/Menu · Contact (Messenger + Call) · Mobile-responsive · Free sub-domain + hosting
**Add-on:** Facebook Page integration (Page Plugin, lazy-loaded)

## Structure
```
index.html              — buong page
assets/css/style.css    — design tokens + styles (brand colors at fonts sa :root)
assets/js/main.js       — mobile nav, header state, quick-order bar, FB Page loader
assets/images/logo/     — wordmark, combination logo, favicon/mascot icons
assets/images/hero/     — bilao cutout (hero)
assets/images/menu/     — circle photos (everyday packs) + Sars' Dip cups
assets/images/snap/     — Sars'Snap story photos
assets/images/pattern-pastry.png — pastry line-art band (Menu + Sars'Snap background)
assets/images/services/ — product photos
assets/images/gallery/  — printed menus (linked mula sa Menu section)
assets/images/og-image.jpg — social share preview
content/content.md      — lahat ng copy at presyo (source of truth)
```

## Local preview
```
npx serve .        # o: python3 -m http.server 8000
```

## Deploy (Vercel)
Import ang repo sa Vercel → Framework Preset: **Other** → walang build command, output directory: `.`

## Placeholders (hanapin ang `PLACEHOLDER` sa index.html at `.tbd` class)
- Email address
- Delivery areas (kung meron) — sa ngayon: "Ask us about delivery"
- Sars'Snap photos (assets/images/snap/) — upscaled mula sa mockup screenshot; mas maganda pa rin kung original
- Sars'Snap "Read more" links — FB Page muna; palitan ng link ng mismong post/story
- Kapag may custom domain na: palitan ang `sars-original.vercel.app` sa og:url, og:image, canonical at JSON-LD
