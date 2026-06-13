# CELSTUDIOSX — Portfolio Documentation

> **Celine Goh Hui Ling** · Interaction Designer & Creative Technologist · Singapore  
> Studio: **CELSTUDIOSX** · Email: celstudiosx@gmail.com  
> GitHub: [xcellsx](https://github.com/xcellsx) · LinkedIn: [celineghl](https://www.linkedin.com/in/celineghl/) · Instagram: [@celstudiosx](https://www.instagram.com/celstudiosx)

---

## Overview

A Next.js portfolio site that presents design, development, and 3D work as a cohesive editorial system. The site treats each discipline as a **volume** in a personal archive — monospace labels, terracotta accents, and structured metadata ledgers unify the experience across pages.

**Live stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Three.js / React Three Fiber · Vercel Analytics

---

## Site Map

| Route | Page | Primary component |
|-------|------|-------------------|
| `/` | Home | `Landing`, `SelectedProjects`, `TechnicalSkills`, `ContactSection` |
| `/about` | About | `AboutPageContent` |
| `/resume` | Resume | `ResumePageContent` |
| `/contact` | Contact | Standalone form (Formspree) |
| `/work` | Legacy work index | Inline category grid |
| `/work/3d-design` | 3D Playground | `ThreeDDesignIndex` |
| `/work/graphic-design` | Poster A Day | `GraphicDesignGallery` |
| `/work/web-development` | Code Workbench | `WebDevIndex` |
| `/work/serenity` | Serenity case study | `SerenityCaseStudy` |
| `/work/the-keepsake` | Keepsake case study | `KeepsakeCaseStudy` |
| `/work/twin-pagodas` | Twin Pagodas case study | `TwinPagodasCaseStudy` |
| `/work/aether` | Aether branding study | Legacy inline page |
| `/work/cayra` | Cayra 3D study | Legacy inline page |
| `/work/spirit-sprite` | Spirit Sprite 3D study | Legacy inline page |
| `/work/quiet-cafe` | Quiet Café branding study | Legacy inline page |
| `/work/digital-shelf` | Digital Shelf web study | Legacy inline page |

---

## Home (`/`)

### Hero — Landing
- **Dither portrait** with session-aware typewriter intro: *"Hi, I'm Celine."*
- Studio identity and navigation into work sections

### Selected Projects (3 slots)
| # | Project | Tags | Link |
|---|---------|------|------|
| 01 | **Serenity** | UI/UX, AI Integration | `/work/serenity` |
| 02 | **Twin Pagoda** | Web Development, 3D | `/work/twin-pagodas` · [Live](https://twin-pagoda-page.vercel.app/) |
| 03 | **Poster A Day** | Graphic Design, 3D Design | `/work/graphic-design` |

### Technical Skills
Three tracks displayed as a directory ledger:
- **01 DESIGN** — Figma, Design Systems, User Research
- **02 DEVELOP** — JavaScript, React/Next.js, HTML5, CSS
- **03 VISUAL** — Blender, Spline, Affinity, Illustrator

Includes an animated **Wireframe Rose** canvas accent.

### Contact Section
Shared footer contact block with email, social links, and Formspree CTA.

---

## About (`/about`)

**Role:** Creative Technologist & Interaction Designer

**Bio themes:**
- Translation of abstract ideas into dimensional, interactive experiences
- Bridging design systems and production-ready code
- UI, dev, and 3D as one cohesive practice

**Sections:**
| Section | Content |
|---------|---------|
| Intro | Typewriter headline, bio paragraphs, quick links (PDF, LinkedIn, GitHub) |
| Coordinates | BASE: Singapore · STUDIO: CELSTUDIOSX · STATUS: Open to Collaborations |
| Fun Fact | Interactive **Cinnamoroll** Blender sculpt (`/models/cinna.glb`) — drag to inspect |
| Journey | Timeline: 2023 3D → 2024 Web/UI → 2025 3D + Web |
| Toolkit | Same three skill tracks as home |

---

## Resume (`/resume`)

**Download:** [`CV_Celine Goh Hui Ling_130626.pdf`](/CV_Celine%20Goh%20Hui%20Ling_130626.pdf) — highlighted terracotta outline button

### Summary
Interaction Designer and Creative Technologist bridging visual systems and programmatic execution. Specializes in UI/UX frameworks, 3D spatialization, and React/TypeScript front-end architecture.

### Experience
| Period | Role | Organisation |
|--------|------|--------------|
| Sep 2024 — Jan 2025 | Product Design Intern | GXS Bank · Digital Product Team |
| 2024 — Present | Independent Builder & Designer | CELSTUDIOS · Interactive Lab |

### Education
| Period | Credential | Institution |
|--------|------------|-------------|
| Graduating May 2026 | B.Sc. Design and Artificial Intelligence | SUTD |
| Apr 2019 — Mar 2022 | Dip. Chemical & Pharmaceutical Technology | NYP (Director's List) |

### Skills, Builds & Links
Structured as ledger sections: Toolkit matrix, featured repositories (Serenity, Twin Pagodas, Keepsake), and external links.

---

## Discipline Pages

All discipline index pages share **`PageIntroLedger`** — a lead sentence plus a metadata table (Volume / Archive / Stack).

### 3D Playground (`/work/3d-design`)

**Volume:** VOL_01 · **Archive:** 06 Assets · **Stack:** Blender · Fusion 360 · Cycles / Eevee

Interactive **Lab Directory Sandbox** — select an asset from the index to preview meshes, renders, and animation loops.

| ID | Asset | Tag | Media | Case study |
|----|-------|-----|-------|------------|
| 01 | Cinnamoroll | HIGH-FI | GLB model | `/about` |
| 02 | Cayra | PRODUCT | Video | `/work/cayra` |
| 03 | Spirit Sprite | ANIM | Video | `/work/spirit-sprite` |
| 04 | Twin Pagodas | ARCH | Video (1.1× scale) | `/work/twin-pagodas` |
| 05 | Glass Butterfly | CYCLES | WebM + MOV | `/work/graphic-design` |
| 06 | Wireframe Rose | MESH | WebM + MOV | `/` (home accent) |

### Code Workbench (`/work/web-development`)

**Volume:** VOL_01 · **Deploy:** 02 Deployed Repositories · **Stack:** React · Next.js · TypeScript · WebGL

**Repository Workbench** — split-pane layout with repo index and live preview.

| Repo | Status | Live URL | Case study |
|------|--------|----------|------------|
| REPO_01 · Twin Pagodas | Production | [twin-pagoda-page.vercel.app](https://twin-pagoda-page.vercel.app/) | `/work/twin-pagodas` |
| REPO_02 · The Keepsake | Production | [v0-the-keepsakes.vercel.app/jar](https://v0-the-keepsakes.vercel.app/jar) | `/work/the-keepsake` |

**Stack matrix:** Runtime, Styling, 3D Layer, Motion specifications.

### Poster A Day (`/work/graphic-design`)

**Series:** Alphabetical Order · **Archive:** 04 Frames (1× State Shift, 3× Motion Loop) · **Medium:** Vector / 3D Render Hybrid

| # | Letter | Title | Interaction |
|---|--------|-------|-------------|
| 01 // 26 | A | APPLE | Hover state shift (red → green) |
| 02 // 26 | B | BUTTERFLY | Motion loop on hover (WebM + MOV) |
| 03 // 26 | C | CHROME | Motion loop on hover |
| 04 // 26 | D | DISTORTION | Motion loop on hover |

---

## Case Studies

### Serenity (`/work/serenity`)
**Tags:** UI/UX · AI Integration  
**Live:** [serenity-delta-livid.vercel.app](https://serenity-delta-livid.vercel.app/)  
**Note:** Web prototype for visualisation — the product is designed as a native mobile build.

AI-driven mental wellness sanctuary for task anxiety and executive dysfunction. Editorial case study layout with spec matrix, 3-step user flow screens, and component deep-dives (calendar, sensory shell).

### Twin Pagodas (`/work/twin-pagodas`)
**Tags:** Web Development · 3D  
**Live:** [twin-pagoda-page.vercel.app](https://twin-pagoda-page.vercel.app/)

Cultural tourism app translating architectural 3D spaces into responsive front-end code. Covers spec matrix, build evolution, and live interface documentation.

### The Keepsake (`/work/the-keepsake`)
**Tags:** Web Development · WebGL  
**Live:** [v0-the-keepsakes.vercel.app/jar](https://v0-the-keepsakes.vercel.app/jar)

WebGL mason-jar memory experience with paper-folding animations and Supabase persistence. Spec matrix and blueprint sections.

### Legacy project pages
Standalone case study pages retained from earlier portfolio iterations:
- **Aether** — branding
- **Cayra** — Fusion 360 drone frame redesign
- **Spirit Sprite** — Blender character animation
- **Quiet Café** — branding
- **Digital Shelf** — web development (perfume collection)

Accessible via `/work` legacy index and cross-links between related projects.

---

## Design System

### Typography
| Role | Font | CSS variable |
|------|------|--------------|
| Display / Headlines | Playfair Display | `--font-playfair` |
| Body | DM Sans | `--font-dm-sans` |
| Labels / Meta | Space Mono | `--font-space-mono` |

### Colour
| Token | Usage |
|-------|-------|
| `terracotta` | Headlines, accents, bracket labels `[ ]`, primary CTAs |
| `offwhite` | Page background |
| `offblack` | Body text |

### Shared components
| Component | Purpose |
|-----------|---------|
| `SectionLabel` | Monospace bracket labels with terracotta `[` `]` and `//` dividers |
| `PageIntroLedger` | Unified discipline page intro (description + stats table) |
| `CaseStudyBackLink` | Terracotta back navigation on case study pages |
| `ContactSection` | Shared contact footer |
| `DitherPortrait` | Halftone portrait on home |
| `ModelViewer` | Three.js GLB viewer (dynamic import, no SSR) |
| `PosterLedgerFrame` | Poster gallery frame with hover state shift / video loop |
| `LabDirectorySandbox` | 3D lab asset browser with viewport preview |

### Global utilities (`app/globals.css`)
- `.home-link` — terracotta home navigation
- `.accent-list` — terracotta bullet markers
- `.accent-rule` — terracotta horizontal rules

### Motion
- Scroll reveal via `useScrollReveal` hook + `fadeInFromTopClass` / `fadeDelayStyle`
- Session-aware typewriter on home landing (`useTypewriter`)
- Theme-aware favicon swap (`ThemeFavicon`)

---

## Architecture

```
app/                    Next.js App Router pages
components/             React UI (pages, case studies, shared primitives)
lib/                    Content data + utilities (scroll-reveal, toolkit labels)
hooks/                  useScrollReveal, useTypewriter
public/                 Static assets, PDF, videos, models
```

### Data files (`lib/`)

| File | Contents |
|------|----------|
| `about-data.ts` | Bio, journey, fun fact, quick links, coordinates |
| `graphic-design-data.ts` | Poster A Day series + 4 alphabet posters |
| `three-d-design-data.ts` | 3D lab assets (6 entries) + volume meta |
| `web-dev-data.ts` | Repository workbench entries + stack specs |
| `selected-projects-data.ts` | Home page featured projects |
| `resume-data.ts` | Full resume content + PDF path |
| `serenity-case-study-data.ts` | Serenity spec matrix, screens, live URL |
| `twin-pagodas-case-study-data.ts` | Twin Pagodas case study content |
| `keepsake-case-study-data.ts` | Keepsake case study content |
| `technical-skills-data.ts` | Skill track definitions |
| `toolkit-labels.ts` | Tool icon label map |
| `scroll-reveal.ts` | Animation class helpers |

Content is **data-driven** — update copy, project lists, and asset paths in `lib/` without touching component logic.

---

## Key Assets

### Branding
- `public/celstudiosx-light.png` / `celstudiosx-dark.png` — theme-aware favicons
- `public/images/celine-dither.png` — home portrait

### 3D Models
- `public/models/cinna.glb` — Cinnamoroll sculpt (About + 3D Playground)

### Video renders
| Asset | Used by |
|-------|---------|
| `butta0001-0240.webm` / `.mov` | Glass Butterfly (3D + Graphic Design) |
| `rose-wire0001-0120.webm` / `.mov` | Wireframe Rose (3D Playground) |
| `images/twin-pagodas/sg.mp4` | Twin Pagodas preview |
| `images/spirit-sprite/spirit-sprite.mp4` | Spirit Sprite preview |
| `images/projects/poster-a-day/*.mp4` | Poster motion loops (Chrome, Distortion) |

### Resume
- `public/CV_Celine Goh Hui Ling_130626.pdf`

---

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

### Environment
- **Node:** compatible with Next.js 16
- **Package manager:** npm (`package-lock.json`)
- **Deployment:** Vercel (Analytics enabled)
- **Contact form:** Formspree endpoint in `/contact`

### Adding content

**New 3D asset:** Add entry to `labAssets` in `lib/three-d-design-data.ts`, place media in `public/`.

**New poster:** Add entry to `alphabeticalPosters` in `lib/graphic-design-data.ts`.

**New repo:** Add entry to `webDevRepositories` in `lib/web-dev-data.ts`.

**New case study:** Create data file in `lib/`, component in `components/`, page in `app/work/[slug]/page.tsx`. Reuse `case-study-primitives.tsx` for layout consistency.

---

## Repository

**GitHub:** [github.com/xcellsx/v0-portfolio](https://github.com/xcellsx/v0-portfolio)  
**Origin:** v0.app scaffold, extensively rebuilt into CELSTUDIOSX portfolio

---

*Last updated: June 2026*
