# Six Fifty Homepage Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the Six Fifty smoke shop homepage using a gritty/bold split-screen aesthetic with real photos for hero/categories and SVG art for product cards.

**Architecture:** Single-page HTML/CSS/JS site served by Python's http.server. No build step. Real Unsplash photos downloaded locally for hero and category cards. SVG line art retained for product grid.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox), vanilla JS, Google Fonts (Bebas Neue + Inter), Python http.server on port 6500.

---

### Task 1: Download & verify images

**Files:**
- Modify: `images/` directory

**Step 1: Kill existing server**
```bash
pkill -f "python3 -m http.server 6500"
```

**Step 2: Download hero photo — dark dramatic smoke/glass shot**
```bash
curl -sL "https://images.unsplash.com/photo-1603153612913-80f751e61f41?w=1400&q=90" -o images/hero-bg.jpg
wc -c images/hero-bg.jpg  # expect > 100000 bytes
```

**Step 3: Download bongs category photo**
```bash
curl -sL "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=900&q=85" -o images/bongs-category.jpg
wc -c images/bongs-category.jpg
```

**Step 4: Download pipes category photo**
```bash
curl -sL "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=900&q=85" -o images/pipes-category.jpg
wc -c images/pipes-category.jpg
```

**Step 5: Download grinders/accessories category photo**
```bash
curl -sL "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=85" -o images/grinders-category.jpg
wc -c images/grinders-category.jpg
```

**Step 6: Verify all images are real (> 50KB each)**
```bash
ls -lh images/
```
Expected: hero-bg.jpg > 150KB, category images > 50KB each.

---

### Task 2: Rewrite index.html

**Files:**
- Modify: `index.html`

Full section order:
1. `<header>` — sticky nav: brand left, links center, icons right
2. `.hero` — two-column split: text left, photo right
3. `.announce-bar` — free shipping / discount code strip
4. `.categories` — 3 photo cards with overlay text
5. `.products-section` — 4-col product grid (SVG art, JS-rendered)
6. `.trust-bar` — 4-column icon strip
7. `.brand-story` — two-column: 650 ring art left, copy right
8. `.newsletter-section` — full-width email signup
9. `<footer>` — 4 columns + legal

Key markup rules:
- Hero left: `<div class="hero-text">` with `<h1>`, `<p>`, two `<a>` buttons, stats row
- Hero right: `<div class="hero-photo">` with `<img src="images/hero-bg.jpg">`
- Each `.cat-card`: `<img>` fills card, `.cat-overlay` positioned absolute over bottom 60%
- Products grid `<div id="products-grid">` — populated by script.js
- Trust bar: 4 `.trust-item` divs each with inline SVG + `<h4>` + `<p>`
- Newsletter: `<form id="nl-form">` with email input + submit button

---

### Task 3: Rewrite style.css

**Files:**
- Modify: `style.css`

**Design tokens:**
```css
:root {
  --bg:       #0a0a0a;
  --surface:  #111111;
  --surface2: #181818;
  --border:   #222222;
  --gold:     #c8a84b;
  --gold-lt:  #e4c96a;
  --white:    #f2f2f2;
  --muted:    #777777;
  --red:      #e05252;   /* sale badge */
  --heading:  'Bebas Neue', sans-serif;
  --body:     'Inter', sans-serif;
  --radius:   4px;
}
```

**Section-by-section rules:**

*Nav:* fixed top, `backdrop-filter: blur(12px)`, height 68px, flex space-between.

*Hero:*
- `.hero` — `display:grid; grid-template-columns: 1fr 1fr; min-height: 100vh; padding-top: 68px`
- `.hero-text` — dark bg + CSS noise texture (`background-image: url("data:image/svg+xml,...")`), flex column, justify-content center, padding 80px 60px
- `h1.hero-headline` — Bebas Neue, `font-size: clamp(5rem, 9vw, 9rem)`, line-height 0.9, letter-spacing 0.02em
- `.hero-photo` — `position:relative; overflow:hidden`; `img` fills 100% height object-cover; pseudo `::after` gradient left-to-right `rgba(10,10,10,0.6) → transparent` to blend with text panel
- Thin gold vertical rule: `border-left: 1px solid var(--gold)` on `.hero-photo`

*Categories:*
- `.cat-grid` — `display:grid; grid-template-columns: repeat(3,1fr); gap: 2px; background: var(--border)`
- `.cat-card` — `position:relative; overflow:hidden; aspect-ratio: 3/4`
- `.cat-card img` — `width:100%; height:100%; object-fit:cover; transition: transform 0.6s ease; filter: brightness(0.65)`
- `.cat-card:hover img` — `transform: scale(1.06); filter: brightness(0.75)`
- `.cat-overlay` — `position:absolute; bottom:0; left:0; right:0; padding: 28px 24px; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)`
- Category name: Bebas Neue, 2rem, white. Description: 0.78rem, muted. CTA: gold border button.

*Products:* 4-col grid, `.p-card` dark surface, SVG art centered on `aspect-ratio:1` art panel, info below.

*Trust bar:* flex row, `border-top/bottom: 1px solid var(--border)`, each item flex with SVG icon gold-colored.

*Story:* 2-col grid, `.story-number` Bebas Neue 8rem outlined in gold.

*Newsletter:* `background: var(--surface)`, centered, max-width 600px, flex form row.

*Footer:* 4-col grid, `border-top: 2px solid var(--gold)`.

**Responsive breakpoints:**
- `< 1024px`: categories 1-col, products 2-col, hero stacks vertically
- `< 640px`: nav hamburger, footer 2-col

---

### Task 4: Update script.js

**Files:**
- Modify: `script.js`

Keep all existing SVG templates and PRODUCTS array unchanged.

Update/add:
- `renderProducts()` — unchanged
- `addToCart()` — unchanged
- Nav scroll hide/show — unchanged
- Newsletter submit — unchanged
- Remove any dead references to old HTML structure (search for `filterToCategory` calls on cat-cards — use `data-cat` attribute instead)
- Mobile hamburger toggle

---

### Task 5: Start server & verify

```bash
cd /Users/nelson/projects/sixfifty-smokeshop
python3 -m http.server 6500 &
sleep 1 && curl -s -o /dev/null -w "%{http_code}" http://localhost:6500
```
Expected: `200`

Open http://localhost:6500 and confirm:
- [ ] Hero shows split screen with real photo on right
- [ ] All 3 category cards show real photos with text overlay
- [ ] Product grid renders 12 SVG cards
- [ ] Trust bar, story, newsletter, footer all visible
- [ ] Mobile menu works at < 640px

---
