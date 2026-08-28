export interface UiUxWorkflowStep {
  index: string
  phase: string
  label: string
  description: string
}

export interface UiUxProject {
  id: string
  title: string
  subtitle: string
  problem: string
  outcome: string
  role: string
  stack: string[]
  timeline: string
  previewImage: string
  previewWidth: number
  previewHeight: number
  caseStudyHref: string
  liveUrl?: string
}

export const uiUxMeta = {
  volume: "VOL_01",
  quantity: "01 Featured Case Study",
  medium: "Figma · User Research · React Prototyping",
} as const

export const uiUxWorkflow: UiUxWorkflowStep[] = [
  {
    index: "01",
    phase: "Discover",
    label: "Problem Framing",
    description:
      "Map the user pain point, audit existing tools, and define what success looks like before touching pixels.",
  },
  {
    index: "02",
    phase: "Define",
    label: "System Architecture",
    description:
      "Story-map the core journey, structure information hierarchy, and lock the interaction model that carries the product.",
  },
  {
    index: "03",
    phase: "Design",
    label: "Interface Execution",
    description:
      "Build component systems in Figma, stress-test edge states, and translate flows into high-fidelity screens with design tokens.",
  },
  {
    index: "04",
    phase: "Deliver",
    label: "Prototype & Validate",
    description:
      "Ship interactive prototypes, test with real usage scenarios, and iterate until the interface reduces friction measurably.",
  },
]

export const uiUxProjects: UiUxProject[] = [
  {
    id: "serenity",
    title: "Serenity",
    subtitle: "Automated Task Architecture & Cognitive Sanctuary",
    problem:
      "Traditional productivity apps overwhelm neurodivergent users with notification noise, nested menus, and manual micro-input — triggering executive dysfunction instead of relieving it.",
    outcome:
      "A calm, AI-assisted task-chunking flow that turns chaotic brain dumps into single-action cards — reducing cognitive load and making daily planning feel approachable.",
    role: "Lead Product Designer & Front-End UI Engineer",
    stack: ["Figma Variables", "React", "Next.js", "Blender"],
    timeline: "4-Week Hyper-Sprint — June 2026",
    previewImage: "/images/projects/serenity/screen.png",
    previewWidth: 1239,
    previewHeight: 648,
    caseStudyHref: "/work/serenity",
    liveUrl: "https://serenity-delta-livid.vercel.app/",
  },
]
