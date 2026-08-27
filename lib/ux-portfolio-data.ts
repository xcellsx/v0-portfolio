/**
 * UI/UX portfolio index — research-first case studies.
 * Add projects to `uxProjects`; the hub and selected-work picker read from this list.
 */

export interface UxProjectCard {
  id: string
  number: string
  title: string
  subtitle: string
  org?: string
  tags: string[]
  researchFocus: string
  summary: string
  href: string
  status: "featured" | "ready"
  coverHint?: string
}

export const uxPortfolioIntro = {
  label: "UI // UX Practice",
  headline: "Research before pixels.",
  lede:
    "A UI/UX track built for hiring-manager cold reads: problem, constraints, research insights that changed the design, fidelity decisions, and measurable outcomes — not process theater.",
  principles: [
    {
      title: "Insights over methods",
      body: "Methods appear only when they explain a decision. Affinity maps and personas stay out unless they moved the design.",
    },
    {
      title: "Tension early",
      body: "Each case leads with the conflict — conflicting needs, a failed assumption, or a hard constraint — within the first scroll.",
    },
    {
      title: "Fidelity with reason",
      body: "Low-fi to high-fi is shown as a ladder of learning, not a gallery of prettier screens.",
    },
  ],
} as const

export const uxProjects: UxProjectCard[] = [
  {
    id: "wxp",
    number: "01",
    title: "Workplace Experience Product",
    subtitle: "Public-sector workplace tooling for hybrid teams",
    org: "WXP × GovTech",
    tags: ["USER RESEARCH", "SERVICE DESIGN", "PRODUCT UI"],
    researchFocus:
      "Discovery interviews, journey mapping, and fidelity testing that reframed the booking + wayfinding problem.",
    summary:
      "End-to-end UX for a workplace experience platform — amplified research narrative with user journey, lo-fi → hi-fi, and decision trade-offs.",
    href: "/work/wxp",
    status: "featured",
    coverHint: "Research → Journey → Fidelity",
  },
  {
    id: "serenity",
    number: "02",
    title: "Serenity",
    subtitle: "AI task architecture for executive dysfunction",
    tags: ["UI / UX", "AI INTEGRATION", "RESEARCH"],
    researchFocus:
      "Cognitive-load research and neurodivergent user needs that stripped corporate UI patterns.",
    summary:
      "A generative task-chunking sanctuary with an explicit research → insight → interface chain.",
    href: "/work/serenity",
    status: "ready",
    coverHint: "Cognitive load → Interface",
  },
]
