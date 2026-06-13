export const aboutMeta = {
  role: "Creative Technologist & Interaction Designer",
  tagline:
    "Designing immersive digital interfaces while understanding the technical architecture behind them.",
} as const

export const aboutBio = [
  "For me, creativity has always been about translation — taking abstract ideas and giving them weight, texture, and dimension. Static images tell half the story; I want people to interact, orbit, and explore.",
  "I bridge the gap between design systems and production-ready code — editorial UI, architectural 3D, and front-end builds that feel tactile instead of transactional. UI, dev, and 3D aren't separate lanes; they're one cohesive practice.",
] as const

export const beyondTheScreen =
  "When I'm not tweaking CSS variables or mapping user flows, you'll find me experimenting with 3D interactions, building side projects, or sculpting characters in Blender."

export const aboutQuickLinks = [
  {
    label: "Download Resume",
    href: "/CV_Celine%20Goh%20Hui%20Ling_130626.pdf",
    download: "CV_Celine Goh Hui Ling_130626.pdf",
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/celineghl/",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/xcellsx",
    external: true,
  },
] as const

export const aboutCoordinates = [
  { label: "BASE", value: "Singapore" },
  { label: "STUDIO", value: "CELSTUDIOSX" },
  { label: "STATUS", value: "Open to Collaborations" },
] as const

export const funFact = {
  index: "04",
  title: "I modeled Cinnamoroll in Blender.",
  description:
    "Not every portfolio needs a mascot — but mine does. A full character sculpt, material pass, and idle spin. Drag to inspect; yes, the ears have topology.",
  modelPath: "/models/cinna.glb",
} as const

export const journeyEntries = [
  {
    year: "2025",
    phase: "3D Model + Web",
    detail: "React, Three.js, Blender — shipping immersive case studies and this portfolio rebuild.",
  },
  {
    year: "2024",
    phase: "Web & UI/UX",
    detail: "Interface systems, component architecture, and product thinking across web apps.",
  },
  {
    year: "2023",
    phase: "3D Model",
    detail: "Blender & Fusion foundations — geometry, materials, and render pipelines.",
  },
] as const
