---
name: Haute Esthétique
colors:
  surface: '#fff8f6'
  surface-dim: '#e2d8d6'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf1ef'
  surface-container: '#f6ecea'
  surface-container-high: '#f0e6e4'
  surface-container-highest: '#eae0de'
  on-surface: '#1f1b1a'
  on-surface-variant: '#4d463c'
  inverse-surface: '#352f2e'
  inverse-on-surface: '#f9eeec'
  outline: '#7f766a'
  outline-variant: '#d1c5b8'
  surface-tint: '#725b38'
  primary: '#725b38'
  on-primary: '#ffffff'
  primary-container: '#c5a880'
  on-primary-container: '#513d1d'
  inverse-primary: '#e0c298'
  secondary: '#735949'
  on-secondary: '#ffffff'
  secondary-container: '#ffdbc7'
  on-secondary-container: '#795f4f'
  tertiary: '#625e5a'
  on-tertiary: '#ffffff'
  tertiary-container: '#b1aba7'
  on-tertiary-container: '#43403c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fedeb2'
  primary-fixed-dim: '#e0c298'
  on-primary-fixed: '#281800'
  on-primary-fixed-variant: '#584323'
  secondary-fixed: '#ffdbc7'
  secondary-fixed-dim: '#e2c0ac'
  on-secondary-fixed: '#29170b'
  on-secondary-fixed-variant: '#594233'
  tertiary-fixed: '#e8e1dc'
  tertiary-fixed-dim: '#ccc5c1'
  on-tertiary-fixed: '#1e1b18'
  on-tertiary-fixed-variant: '#4a4643'
  background: '#fff8f6'
  on-background: '#1f1b1a'
  surface-variant: '#eae0de'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 68px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 50px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: 0em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-mobile: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system embodies the ethos of a high-end, five-star private aesthetic clinic. It bridges classical European salon elegance with contemporary clinical precision, evoking feelings of serenity, discretion, bespoke care, and timeless luxury.

The visual direction centers on **Warm Editorial Minimalism** infused with subtle **Luminescent Glassmorphism**:
- Generous breathing room (macro-whitespace) prioritizing calm over density.
- Sensual tactile textures through soft neutral layering rather than aggressive digital graphics.
- High-contrast, editorial typography paired with gentle, welcoming geometric sans-serifs.
- Polished, restrained micro-interactions that communicate poise and refinement.

## Colors

The palette draws inspiration from champagne silk, warm nude alabaster, soft cashmere, and deep architectural graphite.

- **Primary (`#C5A880` - Champagne Gold):** Used for focal accents, luxury signifiers, primary CTAs, and active indicator treatments.
- **Secondary (`#8C705F` - Warm Taupe/Moka):** Applied to supportive branding, secondary interactive elements, and subheadings that require understated warmth.
- **Tertiary (`#F3ECE7` - Soft Rose Alabaster):** Applied across secondary background layers, card surfaces, and subtle tonal chips.
- **Neutral (`#2B2625` - Soft Graphite Umber):** Replaces harsh pure black for all structural typography, delicate borders, and high-emphasis icons, ensuring high contrast without visual fatigue.
- **Canvas Base (`#F9F6F0` - Silk Champagne White):** The primary ambient canvas, offering organic warmth absent in sterile stark white.
- **Muted Accent (`#DFD3C3` - Sand Linen):** Utilized for structural hairpins, dividers, and subtle inactive borders.

## Typography

The typography pairing contrasts the haute-couture editorial grace of **Playfair Display** with the clean, legible ergonomics of **Plus Jakarta Sans**.

- **Editorial Headlines:** Titles above 20px are set in Playfair Display. Display styles employ slight negative letter spacing to preserve an intimate, bespoke masthead character.
- **Labels & Micro-copy:** Uppercase transformations are reserved for `label-md` and `label-sm` with expanded tracking (`0.08em` to `0.1em`), evoking luxury fragrance and couture packaging.
- **Readability Rules:** Line heights remain generous (`1.5` to `1.65` for body text) to reinforce the unhurried, calm ambiance required by the luxury medical-aesthetic context.

## Layout & Spacing

The layout embraces expansive negative space, preventing information crowding and conveying clinical serenity.

- **Grid Architecture:** Desktop views deploy a 12-column fluid grid locked within a maximum content container of `1320px`, framed by `4rem` (`margin`) outer margins and `1.5rem` (`gutter`) column gaps.
- **Adaptive Breakpoints:**
  - **Desktop (≥ 1024px):** 12 columns, wide vertical section padding (`space-xl` multiplied for hero modules).
  - **Tablet (768px – 1023px):** 8 columns, `2rem` outer margins, `1.25rem` gutters.
  - **Mobile (< 768px):** 4 columns, `margin-mobile` (1.5rem / 24px) side margins, and stacked linear hierarchies to allow touch comfort.
- **Vertical Rhythm:** Sections are separated by intentional open breathing rooms (typically 80px to 120px on desktop) to let imagery and treatment descriptions command full attention.

## Elevation & Depth

Visual depth is achieved through layered warm surfaces, translucent glass planes, and featherweight ambient shadows that mimic diffused, indirect natural lighting.

- **Glassmorphism Layer (Surfaces in Transition):** Translucent navigation bars, floating booking summaries, and modal cards utilize background blur (`backdrop-filter: blur(16px)` to `blur(24px)`) over `rgba(249, 246, 240, 0.78)` silk fill, framed with a 1px border of `rgba(223, 211, 195, 0.45)`.
- **Level 1 (Treatment Cards & Overlays):** Ambient shadow using `0 8px 30px -4px rgba(43, 38, 37, 0.04)`.
- **Level 2 (Dropdowns, Floating Drawers, Popovers):** Ambient shadow using `0 16px 40px -6px rgba(43, 38, 37, 0.07)`, paired with a delicate border (`#DFD3C3`).
- **Level 3 (Modal Dialogs & Key Booking Consoles):** Deep ambient diffusion using `0 24px 60px -12px rgba(43, 38, 37, 0.12)`.
- **Proscription:** Never use harsh, dark, un-tinted black drop shadows or heavy solid borders.

## Shapes

The design uses balanced, soft geometry that feels organic and inviting while retaining architectural poise.

- Standard cards, interactive controls, inputs, and contextual containers implement `rounded-lg` (`1rem` / 16px) or `rounded-xl` (`1.5rem` / 24px) radii.
- Pill badges (`rounded-full`) are strictly reserved for status chips and specialty procedure markers.
- Circular radii (`50%`) are used exclusively for avatar portraits, doctor certifications, and iconic step indicators.

## Components

### Buttons & Interactive Triggers
- **Primary Button:** Solid champagne gold (`#C5A880`) background with graphite (`#2B2625`) or deep white typography, rounded-xl (`1.5rem`), generous padding (`16px 32px`), smooth hover transition shifting background to `#8C705F` with subtle scale (`scale(1.01)`).
- **Secondary / Ghost Button:** Transparent background with a 1px border in `#C5A880` or `#DFD3C3`, text in `#2B2625`. Hover fills with `#F3ECE7`.
- **Editorial Action Link:** Underlined typography with `1px` offset, featuring an animated expand-on-hover effect.

### Input Fields & Selectors
- Background filled with `#F3ECE7` at `60%` opacity or solid `#FFFFFF` on tinted sections.
- Border: 1px solid `#DFD3C3`, transitioning smoothly to `#C5A880` on `:focus` with a subtle outline glow (`rgba(197, 168, 128, 0.18)`).
- Radius: `rounded-lg` (12px to 16px). Text aligned with `body-md` in `#2B2625`, placeholders rendered in `#8C705F` at 60% opacity.

### Cards (Procedures & Editorial Showcase)
- Background in translucent champagne alabaster (`#F3ECE7` or frosted glass).
- Border: 1px delicate outline in `#DFD3C3`. Radius: `rounded-xl` (`24px`).
- Images within cards carry a `12px` inner radius or bleed seamlessly to the top edges with an ultra-subtle warm vignette overlay.
- Hover states include a gentle `-3px` Y-axis lift and depth elevation transition over `350ms ease-out`.

### Chips & Category Pills
- Minimalist indicators used for aesthetic specialties (e.g., "Harmonização Facial", "Laser & Rejuvenescimento").
- Filled with `#F3ECE7`, text in `#8C705F` with `label-sm` tracking, and `rounded-full` borders. Active states invert to `#8C705F` background with `#F9F6F0` text.

### Checkboxes & Radios
- Custom circular form controls with 1.5px border in `#DFD3C3`. Selected state introduces a centered `#C5A880` inner jewel dot.

### Specialized Clinic Components
- **Concierge Booking Drawer:** Glassmorphic slide-out surface displaying practitioner availability with warm calendar date pickers.
- **Before & After Visualizer:** Split-screen slider with a champagne-finished handle and rounded-xl frame.
- **Treatment Signature Accordion:** Minimalist accordion separated by `#DFD3C3` lines, featuring Playfair Display headers and smooth accordion reveals.