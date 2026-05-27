---
name: Serene Balance
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#45474b'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#76777b'
  outline-variant: '#c6c6cb'
  surface-tint: '#5c5e64'
  primary: '#25272c'
  on-primary: '#ffffff'
  primary-container: '#3b3d42'
  on-primary-container: '#a7a8ad'
  inverse-primary: '#c5c6cc'
  secondary: '#5c5f5a'
  on-secondary: '#ffffff'
  secondary-container: '#dee0da'
  on-secondary-container: '#60635e'
  tertiary: '#232923'
  on-tertiary: '#ffffff'
  tertiary-container: '#393f39'
  on-tertiary-container: '#a4aaa2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e8'
  primary-fixed-dim: '#c5c6cc'
  on-primary-fixed: '#191c20'
  on-primary-fixed-variant: '#45474c'
  secondary-fixed: '#e1e3dc'
  secondary-fixed-dim: '#c5c7c1'
  on-secondary-fixed: '#191c18'
  on-secondary-fixed-variant: '#444843'
  tertiary-fixed: '#dee4db'
  tertiary-fixed-dim: '#c2c8bf'
  on-tertiary-fixed: '#171d18'
  on-tertiary-fixed-variant: '#424842'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Noto Serif
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-padding: 120px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
  gutter: 24px
  container-max: 1280px
---

## Brand & Style

The brand identity is built upon the concept of "The Space Between"—the restorative pause necessary for mental clarity. It targets a discerning audience seeking professional expertise delivered through a lens of empathy and sophistication. The visual narrative is rooted in **Minimalism** with a focus on editorial-grade composition.

The emotional response is one of immediate decompression. By utilizing expansive white space and a deliberate lack of visual clutter, the UI mirrors the desired state of a calm mind. Subtle transitions and a restrained color palette convey a high-end, boutique therapeutic experience that is both authoritative and approachable.

## Colors

The color strategy moves away from the starkness of pure grayscale by introducing organic, muted pastels. 

- **Primary (#3B3D42):** A deep, warm charcoal used for critical text and grounding elements, providing better legibility and a softer feel than pure black.
- **Secondary (#E8EAE3):** A soft, sage-tinted beige used for large background sections to reduce eye strain and provide a "paper-like" tactile quality.
- **Tertiary (#D1D7CE):** A muted green-grey used for subtle accents, hover states, and decorative borders.
- **Neutral (#FFFFFF):** Pure white serves as the primary canvas, driving the "airy" feel and ensuring maximum accessibility.

The palette adheres to WCAG 2.1 AA standards, ensuring that text contrast remains high even within a minimalist framework.

## Typography

The typographic system creates a tension between the intellectual authority of **Noto Serif** and the modern, balanced functionalism of **Manrope**.

- **Headlines:** Set in Noto Serif to evoke a sense of tradition and academic excellence. Large scale headings should utilize tighter letter spacing to maintain a cohesive, "editorial" look.
- **Body Text:** Set in Manrope with generous line height (1.6) to ensure effortless readability for long-form therapeutic content.
- **Labels:** Small caps and increased tracking are used for metadata, navigation, and sub-headers to provide clear hierarchy without needing heavy font weights.

## Layout & Spacing

The design system employs a **Fixed Grid** model with a 12-column structure centered on a 1280px container. 

The philosophy here is "Density through Void." Instead of filling the screen, we use extreme vertical padding (120px+) between sections to allow content to breathe. Layouts should be asymmetrical where possible—for example, a headline spanning 6 columns with the body text offset to the right 2 columns—to create a dynamic, premium feel reminiscent of high-end print magazines. 

Rhythm is maintained through a strictly enforced 8px baseline grid, ensuring that even in "sparse" layouts, there is a hidden mathematical harmony.

## Elevation & Depth

This design system eschews traditional shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

Depth is achieved through the layering of the Neutral (#FFFFFF) and Secondary (#E8EAE3) colors. A card or a modal does not "float" with a shadow; it sits on a background of a different tone or is defined by a hairline 1px border in the Tertiary color (#D1D7CE) at 50% opacity. 

This "flat-layered" approach maintains the minimalist aesthetic while providing enough visual affordance to distinguish between different functional areas.

## Shapes

The shape language is primarily **Soft (0.25rem)**. This provides a subtle "humanizing" touch to the clean lines without appearing too casual or "bubbly."

- **Interactive Elements:** Buttons and input fields use the base 4px (0.25rem) radius.
- **Imagery:** Photography should be contained in sharp containers or containers with the same 4px radius to maintain a professional, architectural feel.
- **Decorative Elements:** Use thin, 1px horizontal lines to separate content sections, echoing the "clean lines" requirement.

## Components

### Buttons
Primary buttons are solid #3B3D42 with White text, using generous horizontal padding (32px). Secondary buttons are outlined with 1px Tertiary color. Transitions should be slow (300ms) and use a "fade-in" effect rather than a "pop."

### Input Fields
Fields should be "ghost style"—only a bottom border of 1px in #A1A2A4. Upon focus, the border transitions to #3B3D42. Labels should remain above the field in the `label-sm` style.

### Cards
Cards are defined by background color changes (#E8EAE3 against a White page) rather than boxes. Use the `stack-md` spacing for internal padding.

### Chips
Used for therapy specializations (e.g., "Anxiety," "CBT"). These should be pill-shaped with a #D1D7CE background and Primary text, utilizing the `label-sm` typography.

### Navigation
The header should be transparent and sticky, transitioning to a solid White background only upon scroll. Navigation links should be in Manrope, using a subtle underline animation on hover.

### Testimonial Blocks
Feature Noto Serif in italic for the quote text, centered with significant whitespace on either side to emphasize the emotional weight of the words.