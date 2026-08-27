export type ProjectStatus = "featured" | "shipped"

export interface CaseStudy {
  id: string
  slug: string
  number: string
  title: string
  org: string
  context: string
  tags: string[]
  summary: string
  researchFocus: string
  problem: string
  constraint: string
  outcome: string
  role: string
  timeline: string
  methods: { method: string; why: string }[]
  insights: { finding: string; decision: string }[]
  journey: { stage: string; detail: string }[]
  fidelity: { step: string; detail: string }[]
  reflection: string
}

export const site = {
  brand: "celine.ux",
  name: "Celine",
  title: "celine.ux — UI/UX Portfolio",
  email: "celstudiosx@gmail.com",
  linkedin: "https://www.linkedin.com/in/celineghl/",
  resumeHref: "/CV_Celine%20Goh%20Hui%20Ling_130626.pdf",
  resumeDownload: "CV_Celine Goh Hui Ling_130626.pdf",
  tagline: "UI/UX design, research first.",
  lede:
    "An editorial portfolio of interface work — problem framing, validation, journeys, and wireframes before polish. Built with a mobile-first lens.",
  process: [
    {
      step: "01",
      title: "Problem",
      body: "Start with the friction, not the frames. Define who hurts and why it matters.",
    },
    {
      step: "02",
      title: "Research / validation",
      body: "Client consults, interviews, and evidence that the pain is real — not just personal preference.",
    },
    {
      step: "03",
      title: "Persona + journey",
      body: "Map the path end-to-end so design decisions attach to moments, not vibes.",
    },
    {
      step: "04",
      title: "Wireframes + standards",
      body: "Low-fi structures benchmarked against industry patterns before visual polish.",
    },
    {
      step: "05",
      title: "Test + learn",
      body: "Preference tests, A/B, questionnaires — then consolidate findings into the next cut.",
    },
  ],
} as const

/**
 * Order tuned for a mobile-focused interview read:
 * Serenity (mobile product) → Shopee (mobile challenge) → Ninkatec → GXS → Amazon
 */
export const caseStudies: CaseStudy[] = [
  {
    id: "serenity",
    slug: "serenity",
    number: "01",
    title: "Serenity",
    org: "Personal · mobile product",
    context: "AI task architecture for executive dysfunction — designed as a native mobile experience",
    tags: ["Mobile", "UI / UX", "AI", "Research"],
    summary:
      "A mobile-first sanctuary that turns chaotic brain-dumps into calm, chunked checklists — research on cognitive load drove every interface cut.",
    researchFocus:
      "Cognitive-load research → strip corporate chrome → brain-dump → ambient parse → crystalline checklist.",
    problem:
      "Neurodivergent users abandoned productivity apps because organizing created more executive dysfunction than the tasks themselves.",
    constraint:
      "Ship a calm mobile-first experience without recreating dashboard patterns users already rejected.",
    outcome:
      "A three-step mobile loop — unconstrained input, ambient processing, singular micro-actions — with chrome stripped to protect energy.",
    role: "Lead end-to-end product designer & UI engineer",
    timeline: "4-week sprint",
    methods: [
      {
        method: "Cognitive-load / pattern teardown",
        why: "Name which UI patterns (alerts, taxonomy-first forms) tax working memory.",
      },
      {
        method: "Story mapping",
        why: "Map the emotional arc from chaotic thought to one doable next step.",
      },
      {
        method: "Prototype walkthroughs",
        why: "Test whether an ambient wait felt calmer than instant checklist dumps.",
      },
    ],
    insights: [
      {
        finding: "Capture fails when the UI demands categories first.",
        decision: "Single unconstrained brain-dump field — structure comes after parsing.",
      },
      {
        finding: "Instant results still felt like pressure.",
        decision: "Intentional processing moment so the system visibly does the hard part.",
      },
      {
        finding: "Corporate chrome restarts the stress loop.",
        decision: "Remove persistent nav chrome; keep layout rigid and predictable.",
      },
    ],
    journey: [
      { stage: "Overwhelm", detail: "User holds a messy pile of thoughts with nowhere safe to put them." },
      { stage: "Dump", detail: "One field — no tags, no projects, no formatting tax." },
      { stage: "Offload", detail: "Ambient processing signals the system is chunking the work." },
      { stage: "Act", detail: "One micro-action at a time — checklist without alert theater." },
    ],
    fidelity: [
      { step: "Research → principles", detail: "Non-negotiables: no red dots, no first-open taxonomy." },
      { step: "Mobile flow wires", detail: "Three-step loop prototyped for thumb reach and calm pacing." },
      { step: "Hi-fi UI", detail: "Frosted checklist cards, shape markers over color alerts." },
      { step: "Live prototype", detail: "Web build for visualization; product framed as native mobile." },
    ],
    reflection:
      "Mobile UX here wasn’t smaller desktop — it was fewer decisions per screen. Research gave permission to delete.",
  },
  {
    id: "shopee",
    slug: "shopee",
    number: "02",
    title: "Shopee design test",
    org: "Design challenge · mobile",
    context: "Timed problem-first case on a mobile commerce experience",
    tags: ["Mobile", "Design test", "Prioritization"],
    summary:
      "Problem-first approach under time pressure — with feedback that I’d tried to fix too many issues at once. That lesson now shapes how I scope every case.",
    researchFocus:
      "Rapid issue inventory → mentor critique → depth on one mobile friction instead of shallow fixes across many.",
    problem:
      "The challenge surfaced multiple legitimate mobile UX issues. Treating all of them as equal diluted the case.",
    constraint:
      "Design-test timebox: limited research depth; judgment mattered more than volume of proposed screens.",
    outcome:
      "A durable practice change — pick the highest-leverage mobile problem, go deep, and park the rest as an explicit backlog.",
    role: "Candidate · end-to-end design test",
    timeline: "Challenge window",
    methods: [
      { method: "Rapid problem framing", why: "Show thinking under time pressure on a mobile flow." },
      { method: "Issue inventory", why: "List friction points before proposing UI." },
      { method: "Prioritization (post-feedback)", why: "Pick one issue and defend why it comes first." },
      { method: "Deep-flow redesign", why: "Spend the wireframe budget where impact is highest." },
    ],
    insights: [
      {
        finding: "Mentor feedback: fixing too many issues at once diluted the case.",
        decision: "Force a single primary problem statement; park the rest as backlog.",
      },
      {
        finding: "Breadth reads as energy; depth reads as judgment.",
        decision: "Cases lead with one ordeal, one decision chain, one outcome.",
      },
    ],
    journey: [
      { stage: "Scan", detail: "Inventory issues in the mobile prompt experience." },
      { stage: "Overreach", detail: "Earlier instinct: address everything visible." },
      { stage: "Feedback", detail: "Mentorship flags depth vs. breadth." },
      { stage: "Reframe", detail: "One problem, deep solution, explicit deferrals." },
    ],
    fidelity: [
      { step: "Issue map", detail: "All frictions listed honestly." },
      { step: "Priority cut", detail: "One primary mobile problem selected." },
      { step: "Deep wireframes", detail: "Full attention on the chosen flow." },
      { step: "Backlog note", detail: "Deferred issues documented — not ignored." },
    ],
    reflection:
      "Good mobile UX isn’t covering every wound — it’s choosing the one that matters most and healing it well.",
  },
  {
    id: "ninkatec",
    slug: "ninkatec",
    number: "03",
    title: "Ninkatec onboarding",
    org: "School · client project",
    context: "0→1 onboarding web experience consolidating a mostly manual workflow",
    tags: ["0→1", "Client consult", "Persona", "Preference test"],
    summary:
      "Designed an onboarding web experience that replaced scattered manual forms — grounded in client consults, internal interviews, and a primary persona (Jane).",
    researchFocus:
      "Client problem-sourcing consult → internal pain-point interviews → Jane persona → preference testing on direction.",
    problem:
      "Onboarding lived in manual workflows — fragmented forms and handoffs made it hard to consolidate patient, nurse, and operational information in one place.",
    constraint:
      "Four-month school engagement with a real client: digitize without breaking trust, and stay NDA-safe in how process is shared publicly.",
    outcome:
      "Handed over an onboarding web flow backed by a structured database for staff, patients, and nurses. Live production status after handover is unknown.",
    role: "Designer",
    timeline: "4 months",
    methods: [
      {
        method: "Client consult (problem sourcing)",
        why: "Align on the real onboarding pain before proposing screens.",
      },
      {
        method: "Internal interviews",
        why: "Hear pain points across roles inside the company — not only the briefing slide.",
      },
      {
        method: "Persona — Jane (primary user)",
        why: "Keep the flow honest to the main platform user rather than designing for everyone equally.",
      },
      {
        method: "Preference testing",
        why: "Check which directions felt more suitable to stakeholders before locking UI.",
      },
    ],
    insights: [
      {
        finding: "The core job wasn’t “a prettier website” — it was consolidating manual onboarding into one path.",
        decision: "Treat every screen as a replacement for a manual form or handoff, not a marketing page.",
      },
      {
        finding: "Different internal roles felt different pains; Jane kept the primary path from fracturing.",
        decision: "Design the main onboarding spine for Jane; capture other roles as data/relationships in the system model.",
      },
      {
        finding: "Preference tests surfaced suitability early — before over-investing in one visual direction.",
        decision: "Use preference rounds to choose direction, then deepen wireframes on the winner.",
      },
    ],
    journey: [
      {
        stage: "Manual today",
        detail: "Onboarding information scattered across forms and handoffs.",
      },
      {
        stage: "Consult + listen",
        detail: "Client problem-sourcing and internal interviews map where friction actually sits.",
      },
      {
        stage: "Digitize spine",
        detail: "Manual forms become a guided onboarding web flow with stored records.",
      },
      {
        stage: "Handover",
        detail: "Team receives the experience and data model; post-handover ship status unclear.",
      },
    ],
    fidelity: [
      {
        step: "Problem framing",
        detail: "Consult notes + interview themes → consolidate-onboarding brief.",
      },
      {
        step: "Persona + journey",
        detail: "Jane as primary user; path from intake to stored record.",
      },
      {
        step: "Wireframes → web UI",
        detail: "Form replacement flows for onboarding steps.",
      },
      {
        step: "Data model",
        detail: "Database structure for operational users, patients, and nurses.",
      },
    ],
    reflection:
      "Artifacts stay private under NDA — the public story is the process: consult, interview, persona, digitize the manual spine, preference-test direction, handover. That’s the transferable craft.",
  },
  {
    id: "gxs",
    slug: "gxs",
    number: "04",
    title: "GXS Bank",
    org: "Product Design Intern",
    context: "Existing digital banking product · team collaboration",
    tags: ["Internship", "Mobile banking", "A/B", "Preference tests"],
    summary:
      "Joined an existing product, flagged gaps against real user workflows in shared Figma, helped run A/B and preference tests, wrote questionnaires, and consolidated findings.",
    researchFocus:
      "Workflow gap critique → collaborative Figma feedback → A/B & preference testing → questionnaire synthesis.",
    problem:
      "Live product flows didn’t always match how users actually completed banking tasks — gaps that show up in workflows, not isolated screens.",
    constraint:
      "Internship inside an existing system: tokens, shared Figma, cross-functional prioritization.",
    outcome:
      "Documented workflow gaps in shared Figma, supported A/B and preference tests on new screens, consolidated questionnaire findings for prioritization.",
    role: "Product Design Intern — critique, testing support, research synthesis, UX microcopy",
    timeline: "Sep 2024 — Jan 2025",
    methods: [
      { method: "Workflow gap analysis", why: "Compare designed flows to real task paths." },
      { method: "Collaborative Figma critique", why: "Make feedback visible to the squad." },
      { method: "A/B & preference tests", why: "Let users choose and behave — not just comment." },
      { method: "Questionnaire design + synthesis", why: "Structured signal → themes the team can act on." },
    ],
    insights: [
      {
        finding: "Gaps lived between screens — handoffs and microcopy — more than in isolated UI blocks.",
        decision: "Annotate end-to-end workflows in Figma so the team debates the same seams.",
      },
      {
        finding: "Preference tests paired with A/B framed trade-offs more clearly for stakeholders.",
        decision: "Support both methods and write questionnaires that produce comparable findings.",
      },
    ],
    journey: [
      { stage: "Observe", detail: "Map real workflows against current product paths." },
      { stage: "Annotate", detail: "Log gaps in shared Figma." },
      { stage: "Test", detail: "A/B and preference tests when candidate screens are ready." },
      { stage: "Synthesize", detail: "Consolidate findings into priorities." },
    ],
    fidelity: [
      { step: "Existing UI audit", detail: "Critique live flows against workflow reality." },
      { step: "Shared Figma notes", detail: "Team-readable annotations." },
      { step: "Test materials", detail: "Questionnaires and preference setups." },
      { step: "Insight readout", detail: "Findings that feed prioritization." },
    ],
    reflection:
      "Internship UX is less “own the file” and more “make the truth visible.” Shared critique and clean synthesis moved the product more than solo polish.",
  },
  {
    id: "amazon",
    slug: "amazon",
    number: "05",
    title: "Amazon redesign",
    org: "Personal project",
    context: "Flow redesign around a validated friction point",
    tags: ["Research", "Competitive audit", "Flow redesign"],
    summary:
      "Spotted a real friction point, validated it wasn’t just personal taste, benchmarked competitors, then redesigned the flow.",
    researchFocus:
      "Personal friction → research validation → competitor benchmarks → redesigned flow.",
    problem:
      "A high-frequency shopping moment created avoidable friction — easy to dismiss as preference until research showed others hit the same wall.",
    constraint:
      "No internal data access; validation via secondary research, competitive teardown, and structured critique.",
    outcome:
      "A redesigned flow targeting the validated friction with clearer decision support, informed by competitor patterns.",
    role: "Solo UX research + interaction design",
    timeline: "Self-directed study",
    methods: [
      { method: "Friction journaling", why: "Capture the exact failure moment in real use." },
      { method: "Secondary research", why: "Check whether the pain was shared." },
      { method: "Competitive benchmarking", why: "See how peers handle the same decision moment." },
      { method: "Flow redesign + wireframes", why: "Propose a tighter path once validated." },
    ],
    insights: [
      {
        finding: "The friction was decision support at commit — not aesthetics.",
        decision: "Redesign around comparison and confidence, not a visual skin.",
      },
      {
        finding: "Competitors used progressive disclosure instead of denser pages.",
        decision: "Borrow structure patterns, not visual clones.",
      },
    ],
    journey: [
      { stage: "Intent", detail: "User arrives with a goal and incomplete certainty." },
      { stage: "Friction", detail: "UI buries the signal needed to commit." },
      { stage: "Validation", detail: "Research confirms others stall here." },
      { stage: "Redesign", detail: "New flow surfaces the missing signal earlier." },
    ],
    fidelity: [
      { step: "Problem brief", detail: "Named the friction with evidence." },
      { step: "Benchmark boards", detail: "Competitor patterns for the decision moment." },
      { step: "Wireframes", detail: "Alternate flows stress-tested against the brief." },
      { step: "Hi-fi proposal", detail: "Polished redesign of the new decision path." },
    ],
    reflection:
      "Personal projects only count when research proves the pain — validation turns a rant into a design argument.",
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}
