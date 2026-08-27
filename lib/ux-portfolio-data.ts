/**
 * UI/UX portfolio index on the multidisciplinary site.
 * Points at Serenity + the independent celine.ux site cases conceptually;
 * WXP is intentionally omitted (interviewing company — no fabricated case).
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
    "A UI/UX track built for hiring-manager cold reads: problem, constraints, research insights that changed the design, fidelity decisions, and outcomes — not process theater.",
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
    id: "serenity",
    number: "01",
    title: "Serenity",
    subtitle: "AI task architecture for executive dysfunction — mobile-first",
    tags: ["UI / UX", "MOBILE", "RESEARCH"],
    researchFocus:
      "Cognitive-load research and neurodivergent user needs that stripped corporate UI patterns.",
    summary:
      "A generative task-chunking sanctuary with an explicit research → insight → interface chain.",
    href: "/work/serenity",
    status: "featured",
    coverHint: "Cognitive load → Interface",
  },
]
