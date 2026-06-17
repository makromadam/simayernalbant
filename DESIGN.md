---
name: Simay Ernalbant Portfolio
description: A cinematic, glow-driven portfolio site pitching web, app, and brand design work through video, light, and precision motion.
colors:
  primary: "#ff8a3d"
  primary-container: "#ff6a1a"
  secondary: "#ffb066"
  glow-orange: "#FF6A1A"
  glow-amber: "#E8590C"
  background: "#0a0704"
  surface-deep: "#070502"
  surface-container-lowest: "#0a0704"
  surface-container-low: "#141008"
  surface-container: "#181309"
  surface-container-high: "#241c0f"
  surface-variant: "#2e2820"
  surface-bright: "#3a342c"
  surface-glass: "rgba(24, 18, 11, 0.7)"
  outline: "#5a4f44"
  outline-variant: "#332b23"
  on-surface: "#f1ece4"
  on-surface-variant: "#cabba9"
typography:
  display:
    fontFamily: "'Sora', sans-serif"
    fontSize: "clamp(46px, 7.4vw, 96px)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Sora', sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Inter', sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  label:
    fontFamily: "'Geist Mono', monospace"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  sm: "0.5rem"
  lg: "0.75rem"
  xl: "1.5rem"
  full: "9999px"
spacing:
  base: "8px"
  gutter: "32px"
  margin-edge: "64px"
  section-gap-mobile: "80px"
  section-gap-desktop: "160px"
  container-max: "1440px"
components:
  button-primary:
    backgroundColor: "linear-gradient(135deg, {colors.primary}, {colors.primary-container})"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "12px 32px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "12px 32px"
  nav-cta:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "8px 20px"
  card-glass:
    backgroundColor: "{colors.surface-glass}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: "16px"
---

# Design System: Simay Ernalbant Portfolio

## 1. Overview

**Creative North Star: "The Director's Cut"**

This system reads like a colorist's final grade on a film: every glow, blend mode, and motion timing is a deliberate, exact choice, never an accident or a default left untouched. The portfolio's job is to convert a skeptical hiring lead into outreach within a few seconds of scrolling, so the page itself has to perform as evidence of craft — the same precision that compiles a brand identity or interface also compiles this site's `mix-blend-mode` video compositing, its orbit-diagram geometry, and its scroll-reveal timing. Drama comes from light and motion concentrated on a small number of focal elements (the cursor halo, the hero video, the orbit core), never from decoration spread evenly across the page.

The palette is deliberately monochromatic at the hue level: one combustion-orange family against a near-black carbon base, because restraint is the confidence signal this brand is built on. The system explicitly rejects the generic AI-portfolio toolkit — tiny uppercase eyebrows stacked on every section, gradient-filled headline text, glassmorphism used as a default rather than a deliberate accent, identical icon-card grids, and the "hero metric" template (oversized stat + label, repeated three times). Where this system uses a glass surface, a glow, or an uppercase label, it is because that specific element earns it, not because the template calls for it everywhere.

**Key Characteristics:**
- One accent hue (combustion orange), expressed at multiple intensities, never joined by a second hue.
- Near-black, warm-tinted carbon base — never a cool gray or pure `#000`.
- Glow stands in for shadow as the entire elevation language.
- Three typefaces, each locked to one role: display/headline structure, reading copy, or mono "chrome" (labels, numerals, nav).
- Motion is restrained and directional (fade + rise + blur-clear), not bouncy or playful.

## 2. Colors: The Combustion Palette

One hue family carries the entire system; everything else is a warm-black-to-bone-white neutral ramp. The palette reads as "ember under glass" — warm light against a dark, slightly sooty base.

### Primary
- **Combustion Orange** (`primary`, #ff8a3d): the applied accent — link color, icon tint, glow-text fill, underline color. Used sparingly, on text and small marks, never as a large fill.
- **Combustion Orange Deep** (`primary-container`, #ff6a1a): the saturated end of the primary gradient — button fills, brand dots, the orbit-core gradient's outer ring.

### Secondary
- **Flare Peach** (`secondary`, #ffb066): a single, deliberate use — the hot center of the orbit-core radial gradient. Not deployed elsewhere; it exists to make one focal element read as the brightest point on the page.

### Neutral
- **Carbon Black** (`background` / `surface-container-lowest`, #0a0704): the page background.
- **Carbon Black Deep** (`surface-deep`, #070502): footer and the deepest panels.
- **Ash Brown** ramp (`surface-container-low` #141008 → `surface-container` #181309 → `surface-container-high` #241c0f → `surface-variant` #2e2820 → `surface-bright` #3a342c): five steps of card and panel backgrounds, dark to lighter, used to stack surfaces without ever introducing a second hue.
- **Smoked Glass** (`surface-glass`, rgba(24,18,11,0.7)): the translucent base under every `glass-panel` — never opaque, always letting ambient glow bleed through from behind.
- **Soot** (`outline` #5a4f44 / `outline-variant` #332b23): hairline borders, used rarely — most "borders" in this system are actually low-opacity orange (see Elevation), not gray.
- **Bone White** (`on-surface`, #f1ece4): primary text and headline color.
- **Warm Parchment** (`on-surface-variant`, #cabba9): secondary text, eyebrow copy, nav-variant text.

### Named Rules
**The Single-Accent Rule.** Exactly one hue family (combustion orange) carries the system. If a UI element needs a second color to read correctly, the fix is a different orange intensity or a neutral, never a new hue.

**The Ambient-Glow Rule.** `glow-orange` (#FF6A1A) and `glow-amber` (#E8590C) are reserved for atmosphere, not interface: the two fixed `.ambient-glow` blobs (blurred 150px, 14% opacity) and the `.ember` particles. They never appear on a clickable element or a text color — that's `primary` / `primary-container`'s job. Keeping atmosphere and interaction on separate token pairs is what stops the glow from reading as noise.

## 3. Typography

**Display Font:** Sora (with sans-serif fallback)
**Body Font:** Inter (with sans-serif fallback)
**Label/Mono Font:** Geist Mono (with monospace fallback)

**Character:** Sora is heavy, uppercase, and tight-tracked — it carries the cinematic weight. Inter stays quiet and highly readable wherever someone is actually expected to read a sentence. Geist Mono signals "system chrome" — nav, numerals, buttons, eyebrows — the same way timecode and lens data sit in the corner of a film frame.

### Hierarchy
- **Display** (800, `clamp(46px, 7.4vw, 96px)`, 0.96 line-height, -0.02em, uppercase): the hero headline only (`.hero-title`). The one place the system goes maximally loud.
- **Headline** (700, 36px scaling to 48px at the `md` breakpoint — 60px for the climactic contact-section headline — 1.15 line-height, -0.01em, uppercase): every `section h2`.
- **Body** (400, 18px primary / 16px base, 1.6 line-height, -0.01em): reading copy. 16px (`body-md`) is the page's typographic floor, set once on `<body>`; 18px (`body-lg`) is used for the one substantial paragraph of prose (the About/Design-Technology-Experience copy).
- **Label** (500, 13px primary / 11px for the smallest chrome, 1.4 line-height, 0.12–0.16em tracking, uppercase): nav links, buttons, nav-cta, the language toggle, eyebrows, and section-index numerals (`02` / `03` / `04`).

### Named Rules
**The Three-Voice Rule.** Sora speaks only for display/headline structure, Inter only for reading copy, Geist Mono only for chrome. None of the three ever covers for another — if a piece of UI needs a label treatment, it gets Geist Mono and uppercase tracking, not a small Sora heading.

**Known inconsistency:** the Tailwind config also declares fixed-size `display-2xl` (72px), `display-xl` (56px), `headline-lg` (40px), and `headline-lg-mobile` (30px) font-size tokens, but none are actually applied via utility class anywhere in the markup — the real display size comes from the bespoke `.hero-title` clamp, and the real headline size comes from Tailwind's default `text-4xl`/`md:text-5xl`/`md:text-6xl` scale plus the global `section h2` rule. Treat the declared `display-*`/`headline-lg*` Tailwind tokens as dead configuration until something actually consumes them.

## 4. Elevation

This system has no Material-style shadow ramp (no shadow-1 through shadow-5). Depth is conveyed almost entirely through glow rather than shadow: a soft colored or white halo at the edge of a focal element reads as "raised" or "lit," not a dark drop shadow reading as "occluding." The one shadow vocabulary that is structural (`glass-panel`, `#topnav`) still pairs a large soft black blur with a faint orange glow, so even the "structural" case never reads as flat gray Material elevation.

### Shadow Vocabulary
- **Focal glow** (`0 0 10px <hex>`): brand dot, nav-link active underline — a tight halo confirming "this is alive/active."
- **Button glow** (`0 12px 30px rgba(255,106,26,.28)`, intensifying to `0 14px 38px rgba(255,106,26,.4)` on hover): the only elevation state that changes on interaction.
- **Structural float** (`inset 0 1px rgba(255,255,255,.05–.06)`, `0 15–30px 55–80px rgba(0,0,0,.35–.55)`, `0 0 24–30px rgba(255,106,26,.05–.08)`): glass-panel and the floating nav bar — a soft inset highlight plus a large ambient drop, plus a whisper of orange glow at the same radius.
- **Cursor halo** (`0 0 12px 5px rgba(255,122,41,.7)`, `0 0 35px rgba(255,122,41,.5)`): the custom cursor's signature double-ring glow.
- **Orbit-core glow** (`0 0 60px 20px rgba(255,106,26,.35)`): the single brightest point on the page, marking the orbit diagram's center.
- **Ember glow** (`0 0 8px 2px rgba(255,138,61,.7)`): the ambient floating particles.

### Named Rules
**The Glow-Not-Shadow Rule.** Depth comes from a colored or white glow at an element's edge, never a plain dark drop shadow. If a new component needs to feel "raised," reach for a glow token above before reaching for `box-shadow: 0 4px 8px rgba(0,0,0,.X)`.

## 5. Components

### Buttons
- **Shape:** fully rounded (`rounded.full`, 9999px) — every button and pill in the system is a capsule, never a rectangle with small corner radii.
- **Primary:** `linear-gradient(135deg, #ff8a3d, #ff6a1a)` fill, white text, uppercase Geist Mono label type, `12px 32px` padding (scaling to `16px 40px` for the single largest contact CTA). Press feedback is `scale(0.97)` on `:active` — identical across every interactive element in the system, which is itself a consistency signal worth preserving.
- **Hover / Focus:** the gradient fill doesn't change; only the glow shadow intensifies (`0 12px 30px` → `0 14px 38px`). No color shift, no underline — glow is the only hover language for filled buttons.
- **Outline (secondary):** transparent fill, `1px solid rgba(255,150,86,.3)` border, same capsule shape and label type; hover tints the fill to `rgba(255,138,61,.08)` and brightens the border to `rgba(255,150,86,.55)`. No glow added on outline hover — glow is reserved for the filled/primary variant so it stays the visually "loudest" action on any given screen.

### Chips (social pills)
- **Style:** translucent `bg-white/5` capsule, `1px solid border-white/10`, a Material Symbols icon plus an uppercase-free label (WhatsApp / LinkedIn / Behance) — these intentionally skip the Geist Mono / uppercase label treatment that buttons use, since they're identity marks (third-party brand names) rather than UI chrome.
- **State:** `bg-white/10` on hover; `scale(0.97)` on `:active`, matching every other interactive element.

### Cards / Containers
- **Corner Style:** `rounded.xl` (1.5rem) for glass panels and orbit cards.
- **Background:** Smoked Glass (`linear-gradient(145deg, rgba(28,20,11,.62), rgba(8,6,3,.42))`), never a flat opaque fill.
- **Shadow Strategy:** the Structural Float shadow from Elevation — inset highlight + ambient drop + faint orange glow.
- **Border:** `1px solid rgba(255,150,86,.14)` — barely-there, warm, never gray.
- **Internal Padding:** 16px (orbit cards) to `10px 16px` (stat cards, which are deliberately tighter since they sit inside a video frame corner).

### Navigation
- **Style:** a floating glass capsule (`#topnav`), inset 14px from the viewport edge, `18px` corner radius, gaining a darker/more opaque background once the page scrolls past the hero (`.nav-scrolled`).
- **Typography:** Geist Mono label type, uppercase, wide tracking — same as buttons.
- **States:** nav links get an animated underline (`width: 0 → 100%` on hover or `.nav-active`, with a matching glow on the line itself); the nav CTA is the outline-button treatment at a smaller size.
- **Mobile treatment:** the floating capsule collapses to a simpler bar below 900px; the menu itself is a full-width dropdown panel anchored under the nav, same Geist Mono uppercase link style, toggled via the `[hidden]` attribute rather than a height/opacity transition.

### Orbit Diagram (signature component)
The Education & Past section's defining visual: a glowing core (Flare Peach → Combustion Orange Deep radial gradient, `blur(2px)`, the Orbit-core glow shadow) at the center of two concentric rings, with five `card-glass` panels positioned around the circle by percentage coordinates and connected to the core by thin inline-SVG lines. It is the clearest expression of "technical precision as a craft signal" in the whole page — geometry, not decoration. Below 900px the rings, core, and connecting lines disappear entirely and the five cards become a plain stacked list; the diagram does not attempt to shrink itself responsively, it switches to a structurally different, equally legible representation.

## 6. Do's and Don'ts

### Do:
- **Do** keep every new accent color inside the Combustion Orange family (`primary` #ff8a3d / `primary-container` #ff6a1a) at a different lightness or opacity rather than introducing a new hue.
- **Do** use a glow (colored or white, per the Elevation shadow vocabulary) as the only depth cue for anything meant to feel "raised" or "alive."
- **Do** keep the three-typeface role split absolute: Sora for display/headline, Inter for reading copy, Geist Mono uppercase for all chrome (nav, labels, numerals, buttons).
- **Do** add a `prefers-reduced-motion: reduce` alternative for every opacity/transform/blur-based reveal and for the `.ember` particle animation. PRODUCT.md commits this project to WCAG 2.1 AA, which requires it, and `index.html` currently has zero `prefers-reduced-motion` handling anywhere — this is an open gap, not a style choice.
- **Do** treat the numbered section markers (`02` / `03` / `04`) as acceptable, per PRODUCT.md's Anti-references: they trace a real, ordered path through the portfolio (Expertise → Web → Education), not decorative scaffolding.

### Don't:
- **Don't** add a tiny uppercase eyebrow to every section by reflex — PRODUCT.md names this directly as a generic AI-template tell. Use one only where it does real wayfinding work (as the existing eyebrows already do).
- **Don't** fill headline text with a gradient (`background-clip: text`). The system's existing technique for a "hot" headline word — solid Bone White or Combustion Orange plus a `text-shadow` glow (`.text-glow-orange`, `.text-glow`) — is the correct, already-established way to add drama to type.
- **Don't** make glassmorphism (`backdrop-filter: blur`) the default surface treatment for every container. It's reserved for `glass-panel` contexts (cards floating over video/ambient glow); a plain `surface-container` flat fill is correct everywhere else.
- **Don't** build identical icon-card grids or repeat the "hero metric" template (oversized stat + label, ×3). PRODUCT.md calls both out by name as anti-references for this brand.
- **Don't** introduce a second shadow vocabulary (standard gray Material elevation steps). Every "raised" surface in this system goes through the Glow-Not-Shadow Rule instead.
- **Don't** wire up the dead `display-2xl` / `display-xl` / `headline-lg` / `headline-lg-mobile` Tailwind tokens without also auditing whether `.hero-title` and the `text-4xl`/`md:text-5xl` pattern should be replaced by them — right now both systems exist and only one is real; adding a third sizing source would make it worse, not better.
