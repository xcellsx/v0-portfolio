export const twinPagodasSpecMatrix = [
  {
    metric: "Project Identity",
    specification: "Twin Pagodas — 3D Cultural Tourism Microsite",
  },
  {
    metric: "Core Paradigm",
    specification: "Scroll-Driven WebGL Shrine for Architectural Heritage",
  },
  {
    metric: "Role & Execution",
    specification: "Creative Direction, 3D Modeling, Front-End Development",
  },
  {
    metric: "Core Stack",
    specification: "React Three Fiber, Three.js, Blender, Next.js, Framer Motion",
  },
  {
    metric: "Timeline",
    specification: "Self-Directed Build — 2026",
  },
] as const

export const twinPagodasLive = {
  url: "https://twin-pagoda-page.vercel.app/",
} as const

export const twinPagodasContext = {
  indexLabel: "[ 01 / The Reference Gap ]",
  headline: "A Dedicated Digital Shrine.",
  quote:
    "Singapore's Twin Pagodas deserved more than a static listing on a generic parks portal. I modeled the seven-tier structures from reference photography and built a scroll-controlled microsite where visitors can virtually tour the architecture — comparable to international cultural landmarks.",
} as const

export const twinPagodasEvolution = [
  {
    title: "[ Phase 01 // Reference Analysis ]",
    src: "/images/twin-pagodas/sg-web.png",
    width: 1200,
    height: 750,
    quote:
      "Analysis of the existing government portal showed a lack of visual engagement. I gathered architectural references to build my own source of truth before modeling.",
  },
  {
    title: "[ Phase 02 // Architectural Reconstruction ]",
    src: "/images/twin-pagodas/model.png",
    width: 1200,
    height: 750,
    quote:
      "Reconstructing the 7-tier geometry in Blender — spiral staircase, roof eaves, and silhouette accuracy before any web export.",
  },
  {
    title: "[ Phase 03 // WebGL Optimization ]",
    src: "/images/twin-pagodas/figma.png",
    width: 1200,
    height: 750,
    quote:
      "High-fidelity geometry baked into normal maps so the live site holds ~60fps on mobile browsers without sacrificing detail.",
  },
] as const

export const twinPagodasScreens = [
  {
    title: "[ Screen 01 // Immersive Hero ]",
    src: "/images/twin-pagodas/landing-page.png",
    width: 1400,
    height: 900,
    quote: "3D entry sequence — pagoda render as the first frame of the tourism narrative.",
  },
  {
    title: "[ Screen 02 // Interactive Model ]",
    src: "/images/twin-pagodas/interactive.png",
    width: 1400,
    height: 900,
    quote: "360° inspection controls on the live deployment — scroll and drag to explore structure.",
  },
  {
    title: "[ Screen 03 // Mobile Tourism ]",
    src: "/images/twin-pagodas/mobile.png",
    width: 800,
    height: 1400,
    quote: "Mobile-first layout — virtual tourism paced for thumb-scroll and portrait viewports.",
  },
] as const
