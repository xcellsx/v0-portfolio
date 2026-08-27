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
    "An editorial portfolio of interface work — problem framing, validation, journeys, and wireframes before polish.",
  process: [
    {
      step: "01",
      title: "Problem",
      body: "Start with the friction, not the frames. Define who hurts and why it matters.",
    },
    {
      step: "02",
      title: "Research / validation",
      body: "Interviews, competitive benchmarks, and evidence that the pain is real — not just personal preference.",
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

export const caseStudies: CaseStudy[] = [
  {
    id: "ninkatec",
    slug: "ninkatec",
    number: "01",
    title: "Ninkatec onboarding",
    org: "School project · 0 → 1",
    context: "Healthcare onboarding website built from scratch",
    tags: ["0→1", "Persona", "Journey", "Wireframes"],
    summary:
      "Identified user pain points for a healthcare onboarding experience, built persona and journey maps, then wireframed and designed against industry standards.",
    researchFocus:
      "Pain-point discovery → persona + journey → wireframes benchmarked to healthcare UX norms.",
    problem:
      "New patients and caregivers hit unclear onboarding paths — what to do first, what information mattered, and how care access actually worked.",
    constraint:
      "School timeline with a 0-to-1 brief: no legacy product, limited stakeholder access, and a need to look credible against real healthcare digital standards.",
    outcome:
      "A structured onboarding narrative grounded in a validated persona and journey map, with wireframes and UI aligned to industry patterns for clarity and trust.",
    role: "End-to-end UX / UI (research through visual design)",
    timeline: "Academic sprint",
    methods: [
      { method: "Pain-point interviews & desk research", why: "Surface where onboarding actually failed before inventing screens." },
      { method: "Persona synthesis", why: "Keep the product honest to one primary user job, not a generic visitor." },
      { method: "User journey mapping", why: "Locate drop-offs between awareness, signup, and first care action." },
      { method: "Industry benchmarking", why: "Pressure-test wireframes against healthcare onboarding norms for trust and accessibility." },
    ],
    insights: [
      {
        finding: "Users needed orientation before forms — “what happens next” beat feature lists.",
        decision: "Lead with a guided onboarding path and plain-language expectations before account creation.",
      },
      {
        finding: "Trust cues mattered as much as task completion in healthcare contexts.",
        decision: "Benchmark information hierarchy and reassurance patterns against industry standards before hi-fi.",
      },
    ],
    journey: [
      { stage: "Discover", detail: "Understand care offering and eligibility without medical jargon overload." },
      { stage: "Orient", detail: "See the path: what to prepare, who it’s for, how long onboarding takes." },
      { stage: "Commit", detail: "Complete signup with confidence that the next clinical step is clear." },
      { stage: "Begin care", detail: "Land in a first action that feels like progress, not another admin wall." },
    ],
    fidelity: [
      { step: "Research synthesis", detail: "Pain points clustered into persona goals and journey breaks." },
      { step: "Wireframes", detail: "Low-fi flows for orient → commit before visual styling." },
      { step: "Standards pass", detail: "Compared structure to industry onboarding patterns for healthcare trust." },
      { step: "Hi-fi UI", detail: "Final screens with calm hierarchy and accessible form patterns." },
    ],
    reflection:
      "0-to-1 work taught me to earn every screen with evidence — persona and journey weren’t deliverables; they were the filter for what got designed.",
  },
  {
    id: "amazon",
    slug: "amazon",
    number: "02",
    title: "Amazon redesign",
    org: "Personal project",
    context: "Flow redesign around a validated friction point",
    tags: ["Research", "Competitive audit", "Flow redesign"],
    summary:
      "Spotted a real friction point in the shopping experience, validated it wasn’t just personal taste through research, benchmarked competitors, then redesigned the flow.",
    researchFocus:
      "Personal friction → research validation → competitor benchmarks → redesigned flow.",
    problem:
      "A high-frequency shopping moment created avoidable friction — easy to dismiss as preference until research showed others hit the same wall.",
    constraint:
      "No internal Amazon data access; validation had to come from secondary research, competitive teardown, and structured critique.",
    outcome:
      "A redesigned flow that targets the validated friction with clearer decision support, informed by competitor patterns that already solved adjacent problems.",
    role: "Solo UX research + interaction design",
    timeline: "Self-directed study",
    methods: [
      { method: "Friction journaling", why: "Capture the exact moment the flow failed in real use." },
      { method: "Secondary research / forums & reviews", why: "Check whether the pain was shared, not anecdotal." },
      { method: "Competitive benchmarking", why: "Learn how peer products handle the same decision moment." },
      { method: "Flow redesign + wireframes", why: "Propose a tighter path once the problem was validated." },
    ],
    insights: [
      {
        finding: "The friction wasn’t aesthetics — it was decision support at a critical commit step.",
        decision: "Redesign around comparison and confidence, not a visual skin of the existing page.",
      },
      {
        finding: "Competitors solved adjacent moments with progressive disclosure instead of denser pages.",
        decision: "Borrow structure patterns, not visual clones — keep the redesign Amazon-plausible.",
      },
    ],
    journey: [
      { stage: "Intent", detail: "User arrives with a goal and incomplete certainty." },
      { stage: "Friction", detail: "Existing UI buries the signal needed to commit." },
      { stage: "Validation", detail: "Research confirms others stall at the same step." },
      { stage: "Redesign", detail: "New flow surfaces the missing signal earlier." },
    ],
    fidelity: [
      { step: "Problem brief", detail: "Named the friction with evidence, not taste." },
      { step: "Benchmark boards", detail: "Competitor patterns for the same decision moment." },
      { step: "Wireframes", detail: "Alternate flow structures stress-tested against the brief." },
      { step: "Hi-fi proposal", detail: "Polished redesign communicating the new decision path." },
    ],
    reflection:
      "Personal projects only count when research proves the pain. Validation was the difference between a redesign rant and a design argument.",
  },
  {
    id: "gxs",
    slug: "gxs",
    number: "03",
    title: "GXS Bank",
    org: "Product Design Intern",
    context: "Existing digital banking product · team collaboration",
    tags: ["Internship", "A/B testing", "Preference tests", "UX writing"],
    summary:
      "Joined an existing product, flagged gaps against real user workflows in a shared Figma file, helped run A/B and preference tests, wrote questionnaires, and consolidated findings.",
    researchFocus:
      "Workflow gap critique → collaborative Figma feedback → A/B & preference testing → questionnaire design & synthesis.",
    problem:
      "Live product flows didn’t always match how users actually completed banking tasks — gaps that only show up when you watch workflows, not just screens.",
    constraint:
      "Internship inside an existing system: design tokens, shared Figma ownership, cross-functional prioritization, and research that had to be actionable for the team.",
    outcome:
      "Documented workflow gaps in shared Figma, contributed to A/B and preference testing once new screens landed, and turned questionnaire responses into consolidated insights for prioritization.",
    role: "Product Design Intern — critique, testing support, research synthesis, UX microcopy",
    timeline: "Sep 2024 — Jan 2025",
    methods: [
      { method: "Workflow gap analysis", why: "Compare designed flows to real task paths users take." },
      { method: "Collaborative Figma critique", why: "Make feedback visible and discussable with the squad." },
      { method: "A/B & preference tests", why: "Let users choose and behave — not just comment." },
      { method: "Questionnaire design + synthesis", why: "Capture structured signal and consolidate themes for the team." },
    ],
    insights: [
      {
        finding: "Gaps lived between screens — handoffs and microcopy — more than in isolated UI blocks.",
        decision: "Annotate end-to-end workflows in Figma so engineering and design debate the same seams.",
      },
      {
        finding: "Preference tests alone weren’t enough; pairing with A/B framed trade-offs for stakeholders.",
        decision: "Support both evaluative methods and write questionnaires that produce comparable findings.",
      },
    ],
    journey: [
      { stage: "Observe", detail: "Map real user workflows against current product paths." },
      { stage: "Annotate", detail: "Log gaps in shared Figma for team visibility." },
      { stage: "Test", detail: "Run A/B and preference tests when candidate screens are ready." },
      { stage: "Synthesize", detail: "Consolidate questionnaire and test findings into priorities." },
    ],
    fidelity: [
      { step: "Existing UI audit", detail: "Critique live flows against workflow reality." },
      { step: "Shared Figma notes", detail: "Team-readable annotations, not private opinions." },
      { step: "Test materials", detail: "Questionnaires and preference setups for new screens." },
      { step: "Insight readout", detail: "Consolidated findings that feed prioritization." },
    ],
    reflection:
      "Internship UX is less “own the file” and more “make the truth visible.” Shared critique and clean research synthesis moved the product more than solo polish.",
  },
  {
    id: "shopee",
    slug: "shopee",
    number: "04",
    title: "Shopee design test",
    org: "Design challenge",
    context: "Timed problem-first case with mentor feedback",
    tags: ["Design test", "Prioritization", "Depth over breadth"],
    summary:
      "Applied the same problem-first approach under challenge constraints — and received feedback that I’d tried to fix too many issues at once instead of going deep on one. That lesson now shapes how I scope work.",
    researchFocus:
      "Problem framing under time pressure → the hard lesson: depth on one issue beats shallow fixes across many.",
    problem:
      "The challenge surfaced multiple legitimate UX issues. The trap was treating all of them as equally urgent inside a fixed window.",
    constraint:
      "Design-test timebox: limited research depth, need to show judgment, not just volume of proposed fixes.",
    outcome:
      "A strong problem-first attempt plus a durable practice change — scope to the highest-leverage issue, go deep, and leave a clear trail of what was deferred.",
    role: "Candidate · end-to-end design test",
    timeline: "Challenge window",
    methods: [
      { method: "Rapid problem framing", why: "Show thinking under time pressure." },
      { method: "Issue inventory", why: "List friction points before proposing UI." },
      { method: "Prioritization (post-feedback)", why: "Pick one issue and defend why it comes first." },
      { method: "Deep-flow redesign", why: "Spend the wireframe budget where impact is highest." },
    ],
    insights: [
      {
        finding: "Mentor feedback: fixing too many issues at once diluted the case.",
        decision: "Now I force a single primary problem statement and park the rest as a backlog.",
      },
      {
        finding: "Breadth reads as energy; depth reads as judgment.",
        decision: "Case studies and tests lead with one ordeal, one decision chain, one outcome.",
      },
    ],
    journey: [
      { stage: "Scan", detail: "Inventory issues in the prompt experience." },
      { stage: "Overreach", detail: "Earlier instinct: address everything visible." },
      { stage: "Feedback", detail: "Mentorship flags depth vs. breadth." },
      { stage: "Reframe", detail: "Practice becomes: one problem, deep solution, explicit deferrals." },
    ],
    fidelity: [
      { step: "Issue map", detail: "All frictions listed honestly." },
      { step: "Priority cut", detail: "One primary problem selected." },
      { step: "Deep wireframes", detail: "Full attention on the chosen flow." },
      { step: "Backlog note", detail: "Deferred issues documented — not ignored." },
    ],
    reflection:
      "The Shopee test is in this portfolio because the feedback changed my process. Good UX isn’t covering every wound — it’s choosing the one that matters most and healing it well.",
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}
