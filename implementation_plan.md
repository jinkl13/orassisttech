# Orassist Redesign with Stitch MCP Integration

This redesign delivers a premium, static HTML/CSS/JS landing page for Orassist.tech, utilizing the Crimson Steel design system and typewriter animation specs. As the initial phase of this update, we are installing and configuring the Stitch MCP skills suite locally to enable AI-assisted design-to-code iteration.

## User Review Required

> [!IMPORTANT]
> **Design system color discrepancy.** The [DESIGN.md](file:///e:/orassist/website%20may%2026/orassist2/assets/DESIGN.md) YAML frontmatter defines a Material Design 3–style token set with warm undertones (`#1b1111` surfaces, rose-tinged outlines). But the prose section below it describes a colder palette (`#0F1115` background, `#171B22` surfaces, `#2A2F38` borders). These two palettes **conflict**. The previous implementation mixed them arbitrarily. This plan uses the **YAML tokens as the source of truth** since they are the structured, machine-readable spec. The prose descriptions are treated as design intent guidance only.

> [!NOTE]
> **Node.js is available.** Unlike the previous workflow environment, Node.js and npm are available in this environment (v22.18.0 and npm 11.5.2), which enables us to run `npx skills` commands to install the Stitch skills.

> [!IMPORTANT]
> **Product pricing is estimated.** ASSIST 1.0 is listed at ₹12,000 and SUPPORT 1.0 at ₹8,500. These are placeholder values. Please confirm or correct before publishing.

## Open Questions

1. **Product images:** We only have `logo.png` and `Button.png` in `assets/`. Do you have actual product photography for ASSIST 1.0 and SUPPORT 1.0? Without them, I'll use the logo as a placeholder inside styled product cards.
2. **Testimonials:** The current site has a "TESTIMONIALS" header with zero content. Should I include a testimonials section with placeholder quotes, or omit it entirely until real quotes are available?
3. **WhatsApp link format:** The current site uses `https://wa.me/+9170124%2023110` (with encoded space). The correct format should be `https://wa.me/917012423110`. I'll use the corrected version.
4. **Order flow destination:** Should "Order Now" / "Buy Now" buttons link to the existing Wix product pages (e.g., `https://www.orassist.tech/product-page/assist-1-0`) or to the contact form on this page?

## Proposed Changes

### Stitch MCP & Agent Skills

#### [NEW] [skills-lock.json](file:///e:/orassist/website%20may%2026/orassist2/skills-lock.json)
Contains locked version and metadata for the 14 Stitch skills.

#### [NEW] [.agents/skills/](file:///e:/orassist/website%20may%2026/orassist2/.agents/skills/)
Directory containing the 14 installed Stitch skills locally, including:
- `design-md`
- `enhance-prompt`
- `react-components`
- `remotion`
- `shadcn-ui`
- `stitch-code-to-design`
- `stitch-extract-design-md`
- `stitch-extract-static-html`
- `stitch-generate-design`
- `stitch-loop`
- `stitch-manage-design-system`
- `stitch-react-native`
- `stitch-upload-to-stitch`
- `taste-design`

---

### Core Website Files

#### [MODIFY] [index.css](file:///e:/orassist/website%20may%2026/orassist2/index.css)
CSS custom properties mapped 1:1 from the DESIGN.md YAML tokens.

#### [MODIFY] [index.html](file:///e:/orassist/website%20may%2026/orassist2/index.html)
Main landing page containing the semantic HTML structure, SEO tags, hero sections, ROI calculator, and Wix developer drawer.

#### [MODIFY] [index.js](file:///e:/orassist/website%20may%2026/orassist2/index.js)
JavaScript interactive logic (navigation, typewriter, ROI calculator, scroll reveal, and contact form handling).

## Verification Plan

### Automated Tests
- Verification of Node.js capabilities and successful execution of the `npx skills` installation commands.

### Manual Verification
- Confirm that all 14 local Stitch skills folders are correctly populated under `.agents/skills/` and registered in `skills-lock.json`.
- (Future step) Perform browser testing of `index.html` locally to verify visuals, color schema, responsiveness, typewriter animation, and calculator formulas once development resumes.
