# Design

Visual system captured directly from `index.html`'s shipped Tailwind config and inline styles. Hand-written rather than generated via `$impeccable document`, because `reference/document.md` is not yet present in this skill install — re-run `$impeccable document` once that file is available to verify this against a fresh scan.

## Color Palette

Dark, near-black base with a single orange/amber accent family. No secondary hue — drama comes from value/glow contrast, not multiple colors.

| Token | Hex / Value | Use |
|---|---|---|
| `background` | `#0a0704` | Page background |
| `surface-deep` | `#070502` | Deepest panels, footer |
| `surface-container-lowest` | `#0a0704` | — |
| `surface-container-low` | `#141008` | — |
| `surface-container` | `#181309` | Card backgrounds |
| `surface-container-high` | `#241c0f` | Raised surfaces |
| `surface-variant` | `#2e2820` | — |
| `surface-bright` | `#3a342c` | — |
| `surface-glass` | `rgba(24,18,11,0.7)` | Glass-panel base |
| `outline` | `#5a4f44` | Borders (rare) |
| `outline-variant` | `#332b23` | Subtle borders |
| `primary` | `#ff8a3d` | Links, icon accents, glow text |
| `primary-container` | `#ff6a1a` | Button gradient end, dots |
| `glow-orange` | `#FF6A1A` | Ambient glow blobs, embers |
| `glow-amber` | `#E8590C` | Ambient glow blobs |
| `secondary` | `#ffb066` | Orbit-core gradient |
| `tertiary` | `#ff9b4a` | — |
| `on-surface` | `#f1ece4` | Primary text |
| `on-surface-variant` | `#cabba9` | Secondary text, eyebrows |

Ambient glow blobs (`.glow-1`, `.glow-2`) use `filter: blur(150px)` at `opacity: 0.14` — large, soft, fixed-position color washes rather than gradients on content itself. `body` background also carries a radial gradient (`rgba(255,106,26,0.07)` at top, fading to transparent at 60%) for a faint cinematic vignette.

`::selection` is themed: `rgba(255,106,26,0.35)` background, white text.

## Typography

Three-family system, each scoped to a role — never mixed within one text style.

- **Sora** (700–800) — display/headline type and all `section h2` headings. Uppercase, tight letter-spacing (`-0.01em` to `-0.02em`).
- **Inter** (400–500) — body copy.
- **Geist Mono** (500) — labels, eyebrows, nav links, buttons, section index numerals. Always uppercase with wide letter-spacing (`0.12em`–`0.22em`).

| Token | Size | Line-height | Letter-spacing | Weight | Family |
|---|---|---|---|---|---|
| `display-2xl` | 72px | 1.02 | -0.02em | 700 | Sora |
| `display-xl` | 56px | 1.02 | -0.02em | 700 | Sora |
| `headline-lg` | 40px | 1.15 | -0.01em | 700 | Sora |
| `headline-lg-mobile` | 30px | 1.15 | -0.01em | 700 | Sora |
| `body-lg` | 18px | 1.6 | -0.01em | 400 | Inter |
| `body-md` | 16px | 1.6 | 0 | 400 | Inter |
| `label-md` | 13px | 1.4 | 0.12em | 500 | Geist Mono |
| `label-sm` | 11px | 1.4 | 0.16em | 500 | Geist Mono |

`.hero-title` is the one bespoke override: `font: 800 clamp(46px, 7.4vw, 96px)/.96 "Sora"`, uppercase, `-0.02em` — a fluid size rather than a fixed breakpoint swap.

Icons: Material Symbols Outlined (variable weight 100–700), used inline at `text-base` next to label text (e.g. nav CTA, social pills).

## Spacing & Layout

8px base unit, with named tokens for the larger structural gaps rather than raw multiples:

| Token | Value |
|---|---|
| `base` | 8px |
| `gutter` | 32px |
| `margin-edge` | 64px |
| `section-gap-mobile` | 80px |
| `section-gap-desktop` | 160px |
| `container-max` | 1440px |

Radii: `DEFAULT` 0.5rem, `lg` 0.75rem, `xl` 1.5rem (cards, glass panels), `full` 9999px (buttons, pills, nav).

Mobile breakpoint is consistently **900px** (not Tailwind's default `md`/768px) for cursor, orbit diagram, and nav-position adjustments — a deliberate choice tied to where the orbit diagram and custom cursor stop making sense, not a stock breakpoint.

## Components

- **`.glass-panel`** — the one shared "elevated surface" treatment: `linear-gradient(145deg, rgba(28,20,11,.62), rgba(8,6,3,.42))`, `1px` border `rgba(255,150,86,.14)`, `backdrop-filter: blur(20px)`, soft inset highlight + ambient drop shadow. Used for stat cards, orbit cards, and any floating content block.
- **`.btn-primary`** — gradient fill (`135deg, #ff8a3d → #ff6a1a`), pill radius, glow shadow that intensifies on hover (`0 12px 30px` → `0 14px 38px` of `rgba(255,106,26,*)`), `scale(0.97)` on `:active`.
- **`.btn-outline`** — `1px` `rgba(255,150,86,.3)` border, transparent fill, tints to `rgba(255,138,61,.08)` on hover.
- **`.nav-cta` / `.social-pill`** — same active-press scale treatment as buttons; social pills are a lighter `bg-white/5` pill with a Material Symbol + label (WhatsApp / LinkedIn / Behance).
- **`.nav-link`** — animated underline: `::after` width `0 → 100%` on hover/`.nav-active`, with a matching `box-shadow` glow on the line itself.
- **`#topnav`** — floating glass bar (`14px` inset, rounded `18px`), gains a darker, more opaque background once scrolled (`.nav-scrolled`).
- **`.section-index`** — Geist Mono numerals (`02`, `03`, `04`) marking Expertise → Web → Education; explicitly judged in PRODUCT.md as acceptable because they trace a real ordered path, not decorative scaffolding.
- **`.stat-card`** — absolutely-positioned glass panel overlaid on a video frame corner; hidden below the `sm` breakpoint (`hidden sm:block`) rather than reflowed, to avoid overlap on narrow screens.
- **`.orbit-wrap` / `.orbit-ring` / `.orbit-core` / `.orbit-card` / `.orbit-lines`** — the Education & Past orbital diagram: concentric rings, a glowing gradient core, five `glass-panel` cards positioned by percentage coordinates, connected by inline SVG lines. Collapses to a static stacked list below 900px (rings/lines/core hidden, cards become full-width and non-absolute).
- **`.video-frame` / `.video-glow`** — video assets use `mix-blend-mode: screen` so dark backgrounds in the source footage disappear against the page background, with a blurred radial-gradient glow (`rgba(255,106,26,.22)`) behind each frame to sell the "glowing 3D asset" effect.
- **`#cursor`** — custom circular cursor with a glow ring, hidden entirely below 900px (`display:none`) in favor of the native cursor.
- **`.ember`** — fixed-position particles animated via `transform`/`opacity` only (`emberFloat`, 9s linear infinite), spawned only when `window.innerWidth > 900`.
- **`.mobile-menu`** — full-width dropdown panel anchored under the nav, Geist Mono uppercase links, toggled via `[hidden]`.

## Motion

- Easing vocabulary: `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` (entrances, hovers), `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)`.
- Scroll-reveal (`.reveal-on-scroll`, `.animate-fade-up`): gated behind a `.js-on` class on `<html>`/`<body>`; revealed elements animate `opacity 0→1`, `translate3d(0,36px,0)→none`, `blur(6px)→0` over `.9s`.
- Interactive press feedback is uniform across all primary actions: `transform: scale(0.97)` on `:active` for buttons, nav CTA, and social pills.

**Known gap:** no `prefers-reduced-motion` media query exists anywhere in `index.html` today. PRODUCT.md commits this project to WCAG 2.1 AA, which requires a reduced-motion alternative for scroll-reveal, glow, and ember animations — this is unimplemented. Recommended fix: wrap the `.js-on` reveal-gating and `.ember`/`emberFloat` animation in `@media (prefers-reduced-motion: no-preference)`, so reduced-motion users see content at full opacity/position by default instead of relying on a transition that may never fire.
