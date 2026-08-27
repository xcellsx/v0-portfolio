/**
 * WXP × GovTech — Workplace Experience Product
 * Research-amplified case study. Replace placeholder metrics/quotes
 * when you dump final research artifacts and screens.
 */

export const wxpMeta = {
  title: "Workplace Experience Product",
  org: "WXP × GovTech",
  discipline: "UI // UX",
  tagline: "Making hybrid workplace systems feel human — starting with research, not floor plans.",
  backHref: "/work/ui-ux",
  backLabel: "UI/UX Index",
} as const

/** Cold-read strip — answers the three questions before scroll. */
export const wxpColdRead = {
  problem:
    "Public servants were bouncing between fragmented tools to book desks, find colleagues, and navigate campuses — wasting time before work even started.",
  constraint:
    "GovTech delivery constraints: accessibility, multi-agency identities, legacy booking data, and a mandate to ship without disrupting live workplace operations.",
  outcome:
    "A research-led product direction that collapsed booking + wayfinding into one journey, validated through journey mapping and fidelity testing with target users.",
} as const

export const wxpSpecMatrix = [
  {
    metric: "Project Identity",
    specification: "Workplace Experience Product — hybrid campus services for public-sector teams",
  },
  {
    metric: "Collaboration",
    specification: "WXP × GovTech (cross-functional product, research, and engineering)",
  },
  {
    metric: "Role & Execution",
    specification: "Product / UX design — research synthesis, journey definition, lo-fi → hi-fi UI",
  },
  {
    metric: "Core Stack",
    specification: "Figma, journey mapping, usability testing, design system tokens",
  },
  {
    metric: "Research Weight",
    specification: "Discovery interviews · affinity synthesis · journey maps · fidelity prototype tests",
  },
] as const

export const wxpProblem = {
  indexLabel: "[ 01 / The Ordinary World ]",
  headline: "The workplace was a maze of tabs.",
  quote:
    "Employees didn’t need another dashboard. They needed one trustworthy path from “I need a place to work today” to “I’m there, and I know who is nearby.” Fragmented booking, directory, and floor-plan tools turned a five-minute task into a context-switch tax — especially for hybrid staff returning to campus after remote weeks.",
} as const

/** Amplified research chapter — insights wired to decisions. */
export const wxpResearch = {
  sectionLabel: "[ Section 02 // User Research ]",
  headline: "Findings that changed the design — not a method checklist.",
  framing:
    "Research was the spine of this case. Every major UI call maps back to an insight. Methods appear only to explain why we trusted that insight.",
  questions: [
    "Where does workplace friction actually start — booking, finding people, or navigating space?",
    "What do hybrid employees need to trust before they commit to coming onsite?",
    "Which steps can we collapse without breaking accessibility or agency policy?",
  ],
  methods: [
    {
      method: "Contextual interviews",
      why: "Catch real language around “finding a desk” vs. admin assumptions about “resource utilization.”",
      n: "Staff across hybrid and onsite-heavy roles",
    },
    {
      method: "Affinity synthesis",
      why: "Cluster pain into decision-ready themes instead of a wall of quotes.",
      n: "Cross-session themes with product + engineering",
    },
    {
      method: "Journey mapping workshops",
      why: "Align stakeholders on one end-to-end path before pixels.",
      n: "Service owners + target users",
    },
    {
      method: "Fidelity prototype tests",
      why: "Prove whether lo-fi flows and hi-fi UI reduced time-to-book and wayfinding errors.",
      n: "Task-based sessions with think-aloud",
    },
  ],
  insights: [
    {
      id: "I-01",
      finding: "Booking anxiety isn’t about inventory — it’s about uncertainty.",
      evidence:
        "Users repeatedly asked “Will I actually get a spot near my team?” before caring about amenity filters.",
      decision:
        "Lead the product with team proximity + availability confidence, not a catalog of desk attributes.",
      artifact: "Insight card → homepage priority reorder",
    },
    {
      id: "I-02",
      finding: "Wayfinding fails after the booking confirmation.",
      evidence:
        "The drop-off happened between “booked” and “arrived” — floor plans lived in a different tool with different labels.",
      decision:
        "Treat confirmation as the start of navigation: same labels, same floor language, deep-link into map from the booking receipt.",
      artifact: "Journey break → confirmation redesign",
    },
    {
      id: "I-03",
      finding: "Power users and infrequent visitors need different density.",
      evidence:
        "Weekly campus visitors wanted one-tap rebook; monthly visitors needed orientation and glossary-free language.",
      decision:
        "Dual-mode entry: “Quick rebook” for returners, guided “Plan my day” for infrequent visitors — same backend, different first screens.",
      artifact: "Persona tension → IA split",
    },
  ],
  tension: {
    label: "[ The Ordeal ]",
    title: "Research contradicted the brief.",
    body: "The initial ask centered on richer desk filters and a denser admin console. Interviews showed employees abandoned flows when filters appeared before trust signals (team presence, live availability). We killed the filter-first IA and rebuilt around confidence → commit → navigate.",
  },
} as const

export const wxpJourney = {
  sectionLabel: "[ Section 03 // User Journey ]",
  headline: "One journey. Three failure points we closed.",
  framing:
    "Mapped from “decide to come in” through “settled at desk.” Research highlighted breaks at trust, handoff, and arrival.",
  stages: [
    {
      stage: "01 · Intent",
      actor: "Hybrid employee",
      action: "Decide whether campus is worth it today",
      pain: "No signal that teammates will be present",
      designMove: "Show team presence + live availability before booking controls",
    },
    {
      stage: "02 · Commit",
      actor: "Hybrid employee",
      action: "Book a desk / room with confidence",
      pain: "Filter overload; fear of wrong floor/zone labels",
      designMove: "Proximity-first recommendations; plain-language zones",
    },
    {
      stage: "03 · Handoff",
      actor: "System → employee",
      action: "Receive confirmation that doubles as a navigation start",
      pain: "Confirmation was a dead end; map lived elsewhere",
      designMove: "Unified labels + deep-link into wayfinding from receipt",
    },
    {
      stage: "04 · Arrive",
      actor: "Onsite employee",
      action: "Find the seat and settle",
      pain: "Mismatched signage language vs. app",
      designMove: "Same naming system in UI and campus wayfinding copy",
    },
  ],
} as const

/** Lo-fi → Hi-fi ladder — fidelity with reason. */
export const wxpFidelity = {
  sectionLabel: "[ Section 04 // Lo-Fi → Hi-Fi ]",
  headline: "Fidelity as a learning ladder.",
  framing:
    "Each fidelity level answered a different question. We didn’t decorate wireframes — we graduated only when the previous question was settled.",
  steps: [
    {
      fidelity: "Low-fi",
      question: "Does the confidence → commit → navigate sequence reduce cognitive load?",
      learning:
        "Paper and grayscale flows confirmed users completed booking faster when team presence preceded filters.",
      shown: "Task flows, critical screens, empty states",
    },
    {
      fidelity: "Mid-fi",
      question: "Do zone labels and confirmation handoffs survive real campus language?",
      learning:
        "Clickable prototypes exposed naming mismatches with facilities teams — we reconciled glossary before visual polish.",
      shown: "Interactive prototype, annotation pass with stakeholders",
    },
    {
      fidelity: "Hi-fi",
      question: "Does the UI communicate trust without looking like another admin console?",
      learning:
        "Visual system leaned calm and scannable: strong hierarchy, minimal chrome, accessibility contrast locked to GovTech standards.",
      shown: "UI kit, key screens, motion for booking success → navigate CTA",
    },
  ],
} as const

export const wxpDecisions = {
  sectionLabel: "[ Section 05 // Decisions & Trade-offs ]",
  headline: "What we chose — and what we refused.",
  items: [
    {
      chose: "Proximity + confidence before filters",
      refused: "Catalog-first desk browsing",
      why: "Research showed uncertainty, not amenity curiosity, blocked commitment.",
    },
    {
      chose: "Confirmation as navigation start",
      refused: "Separate map app as the “phase 2” dump",
      why: "Journey break after booking was the highest-severity failure in tests.",
    },
    {
      chose: "Dual entry modes (quick vs. guided)",
      refused: "One dense homepage for everyone",
      why: "Power users and infrequent visitors pulled density in opposite directions.",
    },
  ],
} as const

export const wxpOutcome = {
  sectionLabel: "[ Section 06 // Outcome & Reflection ]",
  headline: "What changed because research led.",
  results: [
    {
      label: "Journey clarity",
      detail:
        "Stakeholders aligned on a single employee journey — booking and wayfinding stopped being separate roadmaps.",
    },
    {
      label: "Prototype signal",
      detail:
        "Task-based tests favored the confidence-first flow over filter-first; time-to-successful-book improved in session scoring.",
    },
    {
      label: "Design system readiness",
      detail:
        "Hi-fi UI locked accessible patterns reusable across workplace modules (rooms, lockers, visitor flows).",
    },
  ],
  reflection: {
    title: "What I’d change next",
    body: "Instrument live post-booking navigation completion as a primary metric — not only booking conversion. The research proved the handoff mattered; production analytics should watch that seam continuously.",
  },
  nextDumpNote:
    "Ready for your artifacts: interview quotes, journey diagram, lo-fi boards, hi-fi screens, and final metrics. Drop them in and we’ll wire them into these slots.",
} as const
