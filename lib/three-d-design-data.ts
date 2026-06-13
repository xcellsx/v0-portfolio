export type LabMediaType = "image" | "video" | "model"

export interface LabAsset {
  id: string
  filename: string
  tag: string
  title: string
  narrative: string
  caption: string
  href?: string
  image?: string
  video?: string
  videoFallback?: string
  modelPath?: string
  mediaType: LabMediaType
  viewportScale?: number
  status?: "live" | "archive" | "coming-soon"
  metadata: {
    fileSize: string
    renderer: string
    polys?: string
    shader?: string
    format: string
  }
}

export const threeDMeta = {
  volume: "VOL_01",
  quantity: "06 Assets",
  medium: "Blender · Fusion 360 · Cycles / Eevee",
} as const

const CAYRA_HERO_VIDEO =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_UvuPpMgGQ9TqHj42l5kehJk2QmGr/fBRjhH_ADBBsBKky_4CkLU/public/images/cayra/final.mp4"

export const labAssets: LabAsset[] = [
  {
    id: "cinnamoroll",
    filename: "01_cinnamoroll.blend",
    tag: "HIGH-FI",
    title: "Cinnamoroll",
    narrative:
      "Character sculpt with subsurface-weighted materials and cloud backdrop — volumetric form study exported for real-time web inspection.",
    caption: "Full Blender sculpt, material pass, idle spin.",
    href: "/about",
    modelPath: "/models/cinna.glb",
    mediaType: "model",
    status: "live",
    metadata: {
      fileSize: "18.4 MB",
      renderer: "Cycles",
      polys: "42,600",
      shader: "Principled BSDF + Subsurface",
      format: ".blend / .glb",
    },
  },
  {
    id: "cayra",
    filename: "02_cayra_toolless_frame.f3d",
    tag: "PRODUCT",
    title: "Cayra",
    narrative:
      "Re-engineering a BetaFPV airframe into a toolless, friction-lock modular system — iterating through weight and flight failures until lift-off held.",
    caption: "Fusion 360 chassis redesign — rapid arm swap without micro-fasteners.",
    href: "/work/cayra",
    image: "/images/cayra/final.png",
    video: CAYRA_HERO_VIDEO,
    mediaType: "video",
    status: "live",
    metadata: {
      fileSize: "6.8 MB",
      renderer: "Fusion 360",
      polys: "—",
      shader: "N/A — Mechanical CAD",
      format: ".f3d / .mp4",
    },
  },
  {
    id: "spirit-sprite",
    filename: "03_spirit_sprite.blend",
    tag: "ANIM",
    title: "Spirit Sprite",
    narrative:
      "Avatar-inspired spirit entity orbiting the Tree of Life — organic character animation, ethereal shaders, and compositor-driven atmosphere.",
    caption: "Full scene animation — sprite movement, tree environment, cinematic lighting pass.",
    href: "/work/spirit-sprite",
    image: "/images/spirit-sprite/spirit-sprite-v2.png",
    video: "/images/spirit-sprite/spirit-sprite.mp4",
    mediaType: "video",
    status: "live",
    metadata: {
      fileSize: "12.2 MB",
      renderer: "Cycles + Compositor",
      polys: "68,400",
      shader: "Emission · Volume · SSS",
      format: ".blend / .mp4",
    },
  },
  {
    id: "twin-pagodas",
    filename: "04_twin_pagodas.fbx",
    tag: "ARCH",
    title: "Twin Pagodas",
    narrative:
      "Seven-tier pagoda reconstruction from reference photography — high-fidelity geometry baked to normal maps for WebGL delivery on the tourism microsite.",
    caption: "Architectural reconstruction — pagoda render pass, not the web UI.",
    href: "/work/twin-pagodas",
    image: "/images/twin-pagodas/model.png",
    video: "/images/twin-pagodas/sg.mp4",
    mediaType: "video",
    viewportScale: 1.1,
    status: "live",
    metadata: {
      fileSize: "24.8 MB",
      renderer: "Eevee → WebGL",
      polys: "186,000 → 12,400",
      shader: "Baked Normals + PBR",
      format: ".fbx / .glb / .mp4",
    },
  },
  {
    id: "glass-butterfly",
    filename: "05_glass_butterfly.webm",
    tag: "CYCLES",
    title: "Glass Butterfly",
    narrative:
      "Refractive glass wings with motion loop export — organic geometry framed by rigid typographic anchors from the Poster A Day series.",
    caption: "Alphabetical Order B — cycles render pass.",
    href: "/work/graphic-design",
    image: "/images/projects/poster-a-day/butter.png",
    video: "/butta0001-0240.webm",
    videoFallback: "/butta0001-0240.mov",
    mediaType: "video",
    status: "live",
    metadata: {
      fileSize: "4.2 MB",
      renderer: "Cycles",
      polys: "28,400",
      shader: "Glass · Refraction · IOR 1.45",
      format: ".webm / .mov / .blend",
    },
  },
  {
    id: "wireframe-rose",
    filename: "06_wireframe_rose.webm",
    tag: "MESH",
    title: "Wireframe Rose",
    narrative:
      "Hand-drawn edge study exported as a motion loop — procedural topology before material synthesis or lighting pass.",
    caption: "Technical blueprint — engineering before polish.",
    href: "/",
    image: "/images/rose-wire.png",
    video: "/images/projects/rose-wire0001-0120.webm",
    videoFallback: "/images/projects/rose-wire0001-0120.mov",
    mediaType: "video",
    status: "live",
    metadata: {
      fileSize: "—",
      renderer: "Custom Canvas",
      polys: "12,840 edges",
      shader: "N/A — Wireframe Only",
      format: ".webm / .mov / .png",
    },
  },
]
