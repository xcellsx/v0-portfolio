export interface SelectedProject {
  id: string
  number: string
  title: string
  toolkit: string[]
  tags: string[]
  description: string
  mockups: string[]
  mockupLayout?: "single" | "gallery"
  learnMoreHref: string
  liveUrl?: string
}

export const selectedProjects: SelectedProject[] = [
  {
    id: "serenity",
    number: "01",
    title: "Serenity",
    toolkit: ["figma", "ai agent"],
    tags: ["UI / UX", "AI INTEGRATION"],
    description:
      "A calm AI task helper for people who feel overwhelmed — brain-dump to chunked checklists, designed for mobile with a live web prototype.",
    mockups: ["/images/projects/serenity/screen.png"],
    learnMoreHref: "/work/serenity",
    liveUrl: "https://serenity-delta-livid.vercel.app/",
  },
  {
    id: "twin-pagoda",
    number: "02",
    title: "Twin Pagoda",
    toolkit: ["figma", "typescript", "blender"],
    tags: ["WEB DEVELOPMENT", "3D"],
    description:
      "Engineering a responsive cultural tourism application that translates structural 3D architectural spaces directly into clean front-end code.",
    mockups: ["/images/twin-pagodas/tp.png"],
    learnMoreHref: "/work/twin-pagodas",
    liveUrl: "https://twin-pagoda-page.vercel.app/",
  },
  {
    id: "poster-a-day",
    number: "03",
    title: "Poster A Day",
    toolkit: ["affinity", "blender"],
    tags: ["GRAPHIC DESIGN", "3D DESIGN"],
    description:
      "A visual laboratory documenting rapid experimentation across diverse graphic styles, tactile texture mapping, and experimental digital effects.",
    mockups: [
      "/images/projects/poster-a-day/chrome.png",
      "/images/projects/poster-a-day/butter.png",
      "/images/projects/poster-a-day/distort.png",
    ],
    mockupLayout: "gallery",
    learnMoreHref: "/work/graphic-design",
  },
]

export const PROJECT_SLOT_COUNT = 3
