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
    id: "wxp",
    number: "01",
    title: "WXP × GovTech",
    toolkit: ["figma"],
    tags: ["UI / UX", "USER RESEARCH"],
    description:
      "Workplace Experience Product — research-led booking and wayfinding for hybrid public-sector teams. Insights wired to journey and lo-fi → hi-fi decisions.",
    mockups: ["/images/projects/wxp/cover.svg"],
    learnMoreHref: "/work/wxp",
  },
  {
    id: "serenity",
    number: "02",
    title: "Serenity",
    toolkit: ["figma", "ai agent"],
    tags: ["UI / UX", "AI INTEGRATION"],
    description:
      "An AI-driven mental wellness sanctuary engineered to alleviate task anxiety and executive dysfunction through structured, calming task-charting frameworks.",
    mockups: ["/images/projects/serenity/screen.png"],
    learnMoreHref: "/work/serenity",
  },
  {
    id: "twin-pagoda",
    number: "03",
    title: "Twin Pagoda",
    toolkit: ["figma", "typescript", "blender"],
    tags: ["WEB DEVELOPMENT", "3D"],
    description:
      "Engineering a responsive cultural tourism application that translates structural 3D architectural spaces directly into clean front-end code.",
    mockups: ["/images/twin-pagodas/tp.png"],
    learnMoreHref: "/work/twin-pagodas",
    liveUrl: "https://twin-pagoda-page.vercel.app/",
  },
]

export const PROJECT_SLOT_COUNT = 3
