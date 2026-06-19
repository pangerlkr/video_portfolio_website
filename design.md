# Design System & UI Specification

**Project:** Video Portfolio — Pangerkumzuk Longkumer  
**Version:** 1.0  
**Status:** Active  
**Last Updated:** June 2026

---

## 1. Design Philosophy

The portfolio is **cinematic and minimal** — it communicates seriousness and depth without clutter. Every visual decision serves a single purpose: let the work and the person speak, not the decoration.

**Core tone:** Dark, atmospheric, confident. Inspired by film title sequences and high-end creative portfolios.

**Key principles:**
- Generous whitespace over information density
- Motion as storytelling, not decoration
- Typography-first hierarchy
- Color used sparingly — contrast over palette variety

---

## 2. Color Palette

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#0a0a0a` | Page background |
| `--color-surface` | `#111111` | Card / section backgrounds |
| `--color-surface-2` | `#1a1a1a` | Elevated surfaces |
| `--color-border` | `rgba(255,255,255,0.08)` | Subtle dividers |
| `--color-text` | `#f0f0f0` | Primary body text |
| `--color-text-muted` | `#9a9a9a` | Secondary / metadata text |
| `--color-accent` | `#00e5ff` | CTAs, links, highlights (use sparingly) |
| `--color-accent-dim` | `rgba(0,229,255,0.12)` | Accent hover backgrounds |

**Philosophy:** The palette is near-monochromatic. The accent (`#00e5ff`, cyan) appears only on interactive elements — buttons, links, hover states — to maximize its impact. Overusing it diminishes its effect.

---

## 3. Typography

### Font Families

| Role | Font | Fallback |
|---|---|---|
| Display (headings) | `'Bebas Neue'` | `Impact, sans-serif` |
| Body | `'Inter'` | `'Helvetica Neue', sans-serif` |
| Monospace (code snippets) | `'JetBrains Mono'` | `'Courier New', monospace` |

### Type Scale

| Token | Size | Usage |
|---|---|---|
| `--text-hero` | `clamp(3rem, 8vw, 8rem)` | Hero name / splash headline |
| `--text-2xl` | `clamp(2rem, 4vw, 3.5rem)` | Section headings |
| `--text-xl` | `clamp(1.5rem, 2.5vw, 2.25rem)` | Subheadings |
| `--text-lg` | `clamp(1.125rem, 1.5vw, 1.5rem)` | Card titles |
| `--text-base` | `1rem (16px)` | Body text |
| `--text-sm` | `0.875rem (14px)` | Labels, captions, nav links |
| `--text-xs` | `0.75rem (12px)` | Metadata, badges |

### Rules

- Hero heading always uses **Bebas Neue**, uppercase, letter-spacing `0.05em`
- Section headings use **Bebas Neue** or **Inter Bold**
- Body copy uses **Inter Regular (400)** at 16px, `line-height: 1.7`
- Never set body text below 14px
- Max line width: `65ch` on prose blocks

---

## 4. Spacing System

All spacing is derived from a **4px base unit**.

```
--space-1:  4px
--space-2:  8px
--space-3:  12px
--space-4:  16px
--space-6:  24px
--space-8:  32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
--space-20: 80px
--space-24: 96px
```

Section padding: `clamp(64px, 8vw, 120px)` top and bottom.

---

## 5. Component Specifications

### 5.1 Navbar

- **Position:** Fixed top, full-width
- **Background:** Transparent by default → `rgba(0,0,0,0.85)` with `backdrop-filter: blur(12px)` on scroll
- **Links:** `--text-sm`, uppercase, letter-spacing `0.1em`, `--color-text-muted` default, `--color-accent` on hover
- **Mobile:** Collapses to a hamburger icon at `< 768px`; menu slides down with Framer Motion
- **Active state:** Underline in `--color-accent`

### 5.2 Hero Section

- **Layout:** Full viewport height (`100dvh`), centered content
- **Background:** `<video>` element, `object-fit: cover`, muted autoplay loop
- **Overlay:** `rgba(0,0,0,0.55)` gradient overlay for text legibility
- **Name:** `--text-hero`, Bebas Neue, white, slight text shadow
- **Subtitle:** `--text-xl`, Inter Light (300), `--color-text-muted`
- **CTA Button:** Outlined style (`border: 1px solid --color-accent`), hover fills with `--color-accent-dim`
- **Play/Pause:** Bottom-right corner icon button, 44×44px touch target

### 5.3 Preloader

- **Duration:** ~2 seconds before auto-dismissing
- **Style:** Full-screen dark background, centered animated logo or name
- **Exit:** Fade out with `opacity: 0`, then `display: none`
- **Accessibility:** `aria-hidden="true"` after dismissal; no focus trap

### 5.4 About Section

- **Layout:** Two columns on desktop (bio left, skills grid right); single column on mobile
- **Bio card:** ID-badge style card with profile image, name, title, location
- **Skills grid:** Icon + label, 3–4 columns, `--color-surface-2` background, `--color-border` border
- **Certifications:** Bulleted list with badge icons (OSCP, GCP, ISO 27001)

### 5.5 Services Cards

- **Layout:** 2×2 grid on desktop, stacked on mobile
- **Card style:** `--color-surface`, `--color-border` border, `--radius-lg` (12px) radius
- **Hover state:** Border changes to `--color-accent-dim`, subtle `box-shadow` lift
- **Animation:** AOS `fade-up` with `100ms` stagger between cards
- **Content:** Icon (Lucide/Heroicons), title (`--text-lg`), 2–3 sentence description

### 5.6 Contact Section

- **Form fields:** Name, Email, Message; `--color-surface-2` background inputs, `--color-border` border, `--color-accent` focus ring
- **Submit button:** Filled, `--color-accent` background, dark text, `border-radius: --radius-full`
- **Social links:** GitHub, LinkedIn icons with labels; line up horizontally on desktop
- **Validation:** Required fields show inline error below the input in `--color-error` (red)

### 5.7 Footer

- **Content:** `© {year} Pangerkumzuk Longkumer`, quick nav links, "Made with React + Vite"
- **Style:** `--color-surface` background, `--text-sm`, `--color-text-muted`
- **Border:** 1px top border in `--color-border`

---

## 6. Animation & Motion

| Interaction | Library | Spec |
|---|---|---|
| Section scroll reveals | AOS | `fade-up`, `duration: 700ms`, `easing: ease-out` |
| Page entry | Framer Motion | Preloader fade-out → main content fade-in |
| Navbar background | Vanilla JS + CSS | Transition on scroll, `180ms ease` |
| Mobile menu | Framer Motion | `height: 0 → auto` with `AnimatePresence` |
| Card hover | Tailwind transition | `transition-all duration-200` |
| Hero video | HTML5 autoplay | Muted, loop, `playsinline` |

**Motion rules:**
- No animation faster than `150ms` (feels janky)
- No animation slower than `800ms` on content reveals (feels sluggish)
- Always respect `prefers-reduced-motion` — wrap all AOS and Framer Motion with the reduced-motion check

---

## 7. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|---|---|---|
| Mobile | `< 640px` | Single column, stacked nav, large touch targets |
| Tablet | `640px – 1024px` | 2 columns where applicable, side-by-side about section |
| Desktop | `> 1024px` | Full grid layouts, sticky navbar, multi-column services |
| Wide | `> 1440px` | Max content width `1200px`, centered |

---

## 8. Accessibility Checklist

- [ ] All images have descriptive `alt` text; decorative images use `alt=""`
- [ ] Color contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text (WCAG AA)
- [ ] All interactive elements reachable via keyboard (Tab / Enter / Space / Escape)
- [ ] Focus rings visible on all focusable elements
- [ ] Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- [ ] One `<h1>` per page (Hero name), then logical `<h2>` → `<h3>` hierarchy
- [ ] Video has a visible play/pause control; autoplay is muted
- [ ] Form inputs have associated `<label>` elements
- [ ] `prefers-reduced-motion` disables all non-essential animations
- [ ] Touch targets ≥ 44×44px on all mobile interactive elements

---

## 9. Asset Guidelines

### Video
- Format: MP4 (H.264) with WebM fallback
- Resolution: 1920×1080 minimum
- Duration: 15–30 seconds loop recommended
- File size: Compress to < 10MB; consider a poster image fallback

### Images
- Format: WebP with JPEG fallback
- Profile image: Square crop, min 400×400px
- Provide `width` and `height` attributes on all `<img>` tags to prevent layout shift (CLS)

### Icons
- Source: [Lucide Icons](https://lucide.dev) or [Heroicons](https://heroicons.com)
- Style: Outline (stroke), 24×24px default
- Never use emoji as UI icons
