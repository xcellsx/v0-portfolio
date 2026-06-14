export const spiritSpriteSpecMatrix = [
  {
    metric: "Project Identity",
    specification: "Spirit Sprite — Avatar-inspired Tree of Life Scene",
  },
  {
    metric: "Core Paradigm",
    specification: "Character Animation & Environmental Storytelling in Blender",
  },
  {
    metric: "Role & Execution",
    specification: "3D Modeling, Character Animation, Materials, Compositing",
  },
  {
    metric: "Core Stack",
    specification: "Blender, Cycles, Compositor Pipeline",
  },
  {
    metric: "Timeline",
    specification: "Self-Directed Build — 2025",
  },
] as const

export const spiritSpriteHeroVideo = "/images/spirit-sprite/spirit-sprite.mp4"

export const spiritSpriteContext = {
  indexLabel: "[ 01 / The Spiritual Journey ]",
  headline: "A spirit sprite dances around the Tree of Life.",
  quote:
    "Inspired by the mystical world of Avatar, this project brings to life a spirit sprite gracefully moving around the Tree of Life. The scene captures the ethereal beauty of nature's connection with spiritual entities, showcasing fluid animation and atmospheric lighting.",
  goal: "To create an immersive 3D scene that combines organic character movement with environmental storytelling. The spirit sprite's dance around the ancient tree represents the harmony between nature and spirit, rendered with cinematic quality using Blender's advanced material and compositing workflows.",
} as const

export const spiritSpriteMethodology = [
  {
    title: "Concept & Reference",
    description: "Studying Avatar's visual language and tree of life symbolism",
  },
  {
    title: "Modeling & Topology",
    description: "Creating the tree structure and spirit sprite character geometry",
  },
  {
    title: "Materials & Texturing",
    description: "Developing organic materials and ethereal sprite shaders",
  },
  {
    title: "Animation & Rendering",
    description: "Animating the sprite's movement and final compositing",
  },
] as const

export type SpiritSpriteEvolutionPhase = {
  phase: string
  description: string
  status: "COMPLETE" | "IN PROGRESS" | "DEPLOYED" | "REJECTED"
  video?: string
  image?: string
}

export const spiritSpriteEvolution: SpiritSpriteEvolutionPhase[] = [
  {
    phase: "The Atronika",
    video: "/images/spirit-sprite/spirit-sprite-v1.mp4",
    description:
      "Creating the Atronika (spirit sprite) and bringing it to life through animation. This phase focused on modeling the ethereal entity and crafting its graceful, organic movement patterns.",
    status: "COMPLETE",
  },
  {
    phase: "The Scene",
    image: "/images/spirit-sprite/scene.png",
    description:
      "Building the environment for the sprite to inhabit. Creating the Tree of Life and its surrounding ecosystem, establishing the atmospheric lighting and environmental details that would serve as the sprite's home.",
    status: "COMPLETE",
  },
  {
    phase: "The Convergence",
    video: "/images/spirit-sprite/initial-render.mp4",
    description:
      "Uniting the Atrokirina with its environment. Combining both elements to create the final harmonious scene where the spirit sprite moves around the Tree of Life, achieving the complete narrative vision.",
    status: "COMPLETE",
  },
]

export type SpiritSpriteManualSlide = {
  title: string
  caption: string
  image?: string
  video?: string
}

export const spiritSpriteManual: SpiritSpriteManualSlide[] = [
  {
    image: "/images/spirit-sprite/spirit-sprite-v2.png",
    title: "Final Render",
    caption:
      "The completed scene showcasing the spirit sprite's graceful movement around the Tree of Life, rendered with full compositor effects.",
  },
  {
    image: "/images/spirit-sprite/spirit-detail.png",
    title: "Sprite Detail",
    caption:
      "Close-up view of the spirit sprite, highlighting the ethereal material properties and organic movement.",
  },
  {
    image: "/images/spirit-sprite/tree.png",
    title: "Tree of Life",
    caption:
      "Detailed view of the Tree of Life, showcasing the intricate bark textures and environmental lighting.",
  },
  {
    video: "/images/spirit-sprite/spirit-sprite.mp4",
    title: "Full Scene Animation",
    caption:
      "Complete animation sequence showing the spirit sprite's journey around the tree, demonstrating the full narrative arc.",
  },
]

export const spiritSpriteOtherProjects = [
  {
    title: "Cayra",
    category: "3d model",
    year: "2025",
    href: "/work/cayra",
    image: "/images/cayra/final.png",
  },
  {
    title: "The Twin Pagodas",
    category: "web development",
    year: "2026",
    href: "/work/twin-pagodas",
    image: "/images/twin-pagodas/tp.png",
  },
] as const
