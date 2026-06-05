---
name: Crimson Steel
colors:
  surface: '#1b1111'
  surface-dim: '#1b1111'
  surface-bright: '#433637'
  surface-container-lowest: '#160b0c'
  surface-container-low: '#241919'
  surface-container: '#281d1d'
  surface-container-high: '#332728'
  surface-container-highest: '#3f3132'
  on-surface: '#f3ddde'
  on-surface-variant: '#debfc1'
  inverse-surface: '#f3ddde'
  inverse-on-surface: '#3a2d2e'
  outline: '#a58a8c'
  outline-variant: '#574143'
  surface-tint: '#ffb2b9'
  primary: '#ffb2b9'
  on-primary: '#67001e'
  primary-container: '#80142d'
  on-primary-container: '#ff8a98'
  inverse-primary: '#a83448'
  secondary: '#c3c6d0'
  on-secondary: '#2d3138'
  secondary-container: '#43474f'
  on-secondary-container: '#b2b5be'
  tertiary: '#c6c6c8'
  on-tertiary: '#2f3132'
  tertiary-container: '#3f4143'
  on-tertiary-container: '#acadaf'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdadc'
  primary-fixed-dim: '#ffb2b9'
  on-primary-fixed: '#40000f'
  on-primary-fixed-variant: '#881b32'
  secondary-fixed: '#dfe2ec'
  secondary-fixed-dim: '#c3c6d0'
  on-secondary-fixed: '#181c23'
  on-secondary-fixed-variant: '#43474f'
  tertiary-fixed: '#e2e2e4'
  tertiary-fixed-dim: '#c6c6c8'
  on-tertiary-fixed: '#1a1c1d'
  on-tertiary-fixed-variant: '#454749'
  background: '#1b1111'
  on-background: '#f3ddde'
  surface-variant: '#3f3132'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Sora
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Sora
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Sora
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Sora
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is built on a foundation of cinematic tension and industrial precision. It targets high-end performance sectors, technical startups, and lifestyle brands that prioritize a sense of power and exclusivity. The visual language is high-contrast and atmospheric, evoking a mood that is both aggressive and sophisticated.

The design style is **Corporate / Modern** with a lean towards **High-Contrast Bold**. It utilizes deep, saturated blacks and high-energy reds to create a commanding presence. Layouts are strictly structured to suggest reliability, while the bold use of color provides the necessary emotional "bite." The interface should feel like a premium command center—functional, dark, and highly focused.

## Colors

The palette is centered around a "Deadly Red" and "Charcoal Steel" dichotomy. The default mode is **Dark**, utilizing the charcoal tones to create depth without resorting to pure pitch black.

- **Primary (#80142D):** Used sparingly for critical calls to action, active states, and brand-heavy accents. It represents energy and intent.
- **Secondary (#171B22):** The core background and surface color. This dark charcoal provides a softer, more sophisticated base for the eye than pure black.
- **Tertiary/White (#F5F5F7):** A "softer" white used for primary typography and icons to reduce glare against the dark backgrounds.
- **Surface Strategy:** Tonal layers are achieved by slightly lightening the charcoal base for containers and cards, creating a natural hierarchy of information.

## Typography

This design system uses **Sora** exclusively to maintain a geometric, technical aesthetic. Sora’s distinctive structure excels in dark mode, where its high x-height ensures excellent legibility.

- **Headlines:** Use heavy weights (600-700) and tight letter-spacing to create impact.
- **Body:** Standardized at 16px for optimal readability. Use the "Tertiary" off-white for body text to maintain comfort.
- **Labels:** Always use uppercase or increased tracking for labels and metadata to distinguish them from body copy.
- **Scale:** On mobile, display sizes are aggressively reduced to ensure headlines do not wrap awkwardly while maintaining their bold character.

## Layout & Spacing

The design system employs a **Fluid Grid** model with high internal breathing room. The spacing rhythm is based on an 8px baseline.

- **Desktop:** 12-column grid with wide 64px margins to create a "letterboxed" cinematic feel. Gutters are fixed at 24px.
- **Tablet:** 8-column grid with 32px margins. 
- **Mobile:** 4-column grid with 16px margins.
- **Philosophy:** Large vertical gaps (48px+) between sections are encouraged to highlight the high-contrast transitions between dark containers. Elements should feel "anchored" to the grid but with enough whitespace to appear premium.

## Elevation & Depth

In this dark-mode-first system, depth is communicated through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

- **Tiers:** Backgrounds are `#0F1115`. Surfaces (Cards/Modals) are `#171B22` or `#1E2229`. This subtle shift creates "elevation" without breaking the flat aesthetic.
- **Outlines:** Use 1px borders of `#2A2F38` to define the edges of containers.
- **Interactions:** When an element is hovered, the elevation is signaled by a subtle glow using the primary red at extremely low opacity (5-10%) or by lightening the background hex.

## Shapes

The shape language is **Rounded**, balancing the aggressive color palette with approachable geometry.

- **Standard Elements:** Buttons and input fields use a 0.5rem (8px) radius.
- **Large Containers:** Cards and sections use 1rem (16px) or 1.5rem (24px) for a modern, "app-like" feel.
- **Consistency:** Avoid pill shapes for standard buttons to maintain the technical, structured look; reserve pill shapes only for status tags or "chips."

## Components

- **Buttons:** Primary buttons use `#80142D` with white text. Secondary buttons use a dark charcoal outline with white text. Tertiary buttons are text-only with a heavy weight.
- **Input Fields:** Use the `#171B22` background with a 1px border. On focus, the border transitions to the primary red.
- **Cards:** Cards should have no shadow; they rely on the tonal difference between `#0F1115` (background) and `#171B22` (surface) to define their boundaries.
- **Chips:** Small, high-contrast badges. Use primary red backgrounds for "New" or "Live" states, and dark grey for neutral metadata.
- **Lists:** Separated by thin, low-opacity lines (`#2A2F38`) to maintain a clean, scanned vertical rhythm.