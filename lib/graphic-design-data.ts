export interface AlphabetPoster {
  id: string
  index: string
  letter: string
  title: string
  caption: string
  image: string
  hoverImage?: string
  video?: string
  videoFallback?: string
  alt: string
  width: number
  height: number
}

export const alphabeticalOrderMeta = {
  series: "Alphabetical Order",
  code: "AO",
  quantity: "04 Frames (1× State Shift, 3× Motion Loop)",
  medium: "Vector / 3D Render Hybrid",
} as const

export const alphabeticalPosters: AlphabetPoster[] = [
  {
    id: "apple",
    index: "01 // 26",
    letter: "A",
    title: "APPLE",
    caption:
      "A binary chromatic study — idle state holds warm red tension; hover resolves the form into calm green equilibrium. Image-only interaction, no motion file required.",
    image: "/images/projects/poster-a-day/r-apple2.png",
    hoverImage: "/images/projects/poster-a-day/g2-apple2.png",
    alt: "Alphabetical Order poster A — Apple, red state",
    width: 1080,
    height: 1350,
  },
  {
    id: "butterfly",
    index: "02 // 26",
    letter: "B",
    title: "BUTTERFLY",
    caption:
      "Organic wing geometry meets rigid typographic framing. Hover energizes the loop — texture and motion collapse into a single editorial artifact.",
    image: "/images/projects/poster-a-day/butter.png",
    video: "/images/projects/poster-a-day/butter.mp4",
    alt: "Alphabetical Order poster B — Butterfly",
    width: 1080,
    height: 1350,
  },
  {
    id: "chrome",
    index: "03 // 26",
    letter: "C",
    title: "CHROME",
    caption:
      "Liquid metal thorns suspended in negative space. Ambient lighting stripped back so specular highlights and vector silhouette carry the full composition.",
    image: "/images/projects/poster-a-day/chrome.png",
    video: "/images/projects/poster-a-day/chrome.mp4",
    alt: "Alphabetical Order poster C — Chrome",
    width: 1080,
    height: 1350,
  },
  {
    id: "distortion",
    index: "04 // 26",
    letter: "D",
    title: "DISTORTION",
    caption:
      "Signal fracture as design language — warped geometry and typographic anchors hold tension between chaos and readable structure.",
    image: "/images/projects/poster-a-day/distort.png",
    video: "/images/projects/poster-a-day/distort.mp4",
    alt: "Alphabetical Order poster D — Distortion",
    width: 1080,
    height: 1350,
  },
]
