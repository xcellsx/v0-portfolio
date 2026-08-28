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
  previewImage?: string
  previewWidth?: number
  previewHeight?: number
  previewKicker?: string
  badge?: string
  caseStudyHref: string
  liveUrl?: string
  figmaUrl?: string
}

export const uiUxMeta = {
  volume: "VOL_01",
  quantity: "05 Case Studies",
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
    stack: ["Figma", "User Research", "React", "Claude + Cursor"],
    timeline: "4-Week Hyper-Sprint — June 2026",
    previewImage: "/images/projects/serenity/screen.png",
    previewWidth: 1239,
    previewHeight: 648,
    caseStudyHref: "/work/serenity",
    liveUrl: "https://serenity-delta-livid.vercel.app/",
    figmaUrl:
      "https://www.figma.com/design/jkBbEhpXIHpD2w1T6OAxbW/Serenity.--Copy-?node-id=2-8",
  },
  {
    id: "ninkatec",
    title: "Ninkatec",
    subtitle: "Onboarding Consolidation for a Manual Care Operation",
    problem:
      "Intake still ran on disconnected manual forms — patient, nurse, and organisation details never sat in one place, so onboarding was slow and easy to drop.",
    outcome:
      "A consult-led web onboarding flow plus a database for those records, preference-tested with the operators, then handed over. Live shipment after handover is unknown.",
    role: "Designer",
    stack: ["Client Consult", "Internal Interviews", "Preference Test", "Figma"],
    timeline: "4-Month Engagement",
    previewKicker: "NDA // Process only",
    badge: "NDA",
    caseStudyHref: "/work/ninkatec",
  },
  {
    id: "gxs-bank",
    title: "GXS Bank",
    subtitle: "Money Lock Fit & Invest UI Preference",
    problem:
      "Money Lock sat off the home screen, so a new workflow had to still feel like the rest of the app. Invest needed a read on a new UI before locking a direction.",
    outcome:
      "Full UserTesting protocol for Money Lock, two Invest directions (and logo variants) for preference review. Results landed after the internship ended.",
    role: "Product Design Intern",
    stack: ["UserTesting", "Preference Test", "UX Writing", "Design System"],
    timeline: "16 Weeks — Sep 2024 to Jan 2025",
    previewKicker: "Internship // Artifacts withheld",
    badge: "Internship",
    caseStudyHref: "/work/gxs-bank",
  },
  {
    id: "amazon",
    title: "Amazon",
    subtitle: "Uniform Add-to-Cart Across Variants",
    problem:
      "Variants of the same Amazon.sg item used different add-to-cart UIs. Stock indicators were missing or mixed, and key info sat below the fold.",
    outcome:
      "One buy box with swatches, a stock line, and a compact qty / cart / buy-now row. Interview: stay closer to web checkout; a low-stock indicator is enough.",
    role: "Speculative Consumer UX",
    stack: ["Wireframes", "Figma", "Interview Critique"],
    timeline: "1-Week Sprint",
    previewKicker: "Speculative // Interview exercise",
    badge: "Speculative",
    caseStudyHref: "/work/amazon",
    figmaUrl: "https://www.figma.com/design/ZWRkEGMMCHEK5pqT8pRxvn/UI-UX?node-id=20-2",
    previewImage: "/images/projects/amazon/after.png",
    previewWidth: 1600,
    previewHeight: 900,
  },
  {
    id: "shopee",
    title: "Shopee",
    subtitle: "Price Honesty and Choice Overload on the Path to Pay",
    problem:
      "Two stacked frictions: too many near-identical choices on the PDP, then prices that change meaning from PDP to cart to checkout.",
    outcome:
      "Research board with SG/MY/TH evidence and an annotated walkthrough. Interface pass for price honesty — checkout stays for paying, not for swapping variants.",
    role: "Speculative UI / UX",
    stack: ["Heuristic Walkthrough", "Reviews", "Figma"],
    timeline: "1-Week Sprint",
    previewKicker: "Speculative // Interview exercise",
    badge: "Speculative",
    caseStudyHref: "/work/shopee",
  },
]
