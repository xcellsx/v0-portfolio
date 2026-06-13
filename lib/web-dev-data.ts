export interface WebDevRepository {
  id: string
  repoId: string
  title: string
  stack: string[]
  status: string
  deployNote: string
  bullets: string[]
  liveUrl?: string
  liveNote?: string
  caseStudyHref: string
  sourceUrl?: string
  previewImage: string
  previewWidth?: number
  previewHeight?: number
}

export const webDevMeta = {
  series: "Engineering Sandbox",
  code: "WD",
  volume: "VOL_01",
  quantity: "02 Deployed Repositories",
  medium: "React · Next.js · TypeScript · WebGL Integration",
} as const

export const webDevRepositories: WebDevRepository[] = [
  {
    id: "twin-pagodas",
    repoId: "REPO_01 // TWIN_PAGODAS",
    title: "Twin Pagodas",
    stack: ["React Three Fiber", "Three.js", "Blender", "Next.js"],
    status: "Production",
    deployNote: "Live on Vercel // 60fps mobile target",
    bullets: [
      "Optimized a heavy architectural asset pipeline by baking lighting maps onto low-poly glTF assets in Blender, preserving ~60fps on standard mobile viewports.",
      "Engineered scroll-synced camera rigging in React Three Fiber so narrative pacing controls 3D inspection without jank on resize.",
      "Reduced draw-call overhead via instanced geometry and compressed texture atlases for the seven-tier pagoda mesh.",
    ],
    liveUrl: "https://twin-pagoda-page.vercel.app/",
    caseStudyHref: "/work/twin-pagodas",
    previewImage: "/images/twin-pagodas/landing-page.png",
    previewWidth: 1400,
    previewHeight: 900,
  },
  {
    id: "keepsake",
    repoId: "REPO_02 // THE_KEEPSAKES",
    title: "The Keepsake",
    stack: ["React Three Fiber", "Three.js", "Supabase", "Tailwind"],
    status: "Production",
    deployNote: "Live on Vercel // WebGL interaction layer",
    bullets: [
      "Engineered responsive 3D WebGL coordinate matrices allowing smooth vector translations during user-triggered paper-folding animations.",
      "Built a custom mason-jar Three.js asset with gesture-driven star placement and Supabase-backed memory persistence.",
      "Structured component state to isolate canvas render loops from UI chrome, keeping interaction latency low on mid-tier devices.",
    ],
    liveUrl: "https://v0-the-keepsakes.vercel.app/jar",
    caseStudyHref: "/work/the-keepsake",
    previewImage: "/images/keepsake/main-image.png",
    previewWidth: 1200,
    previewHeight: 800,
  },
]

export const webDevStack = [
  { metric: "RUNTIME", specification: "React 19, Next.js App Router, TypeScript" },
  { metric: "STYLING", specification: "Tailwind CSS v4, CSS variables, clamp()-based spacing" },
  { metric: "3D LAYER", specification: "React Three Fiber, drei, GLTF / WebGL optimization" },
  { metric: "MOTION", specification: "Scroll reveals, hover state shifts, session-aware intro typing" },
] as const
