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
  /** Omit or leave empty when no persona/journey work was done. */
  journey?: { stage: string; detail: string }[]
  fidelity: { step: string; detail: string }[]
  reflection: string
  liveUrl?: string
  figmaUrl?: string
}

export const site = {
  brand: "celine.ux",
  name: "Celine Goh",
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
      body: "Interviews, consults, and evidence that the pain is real — not just personal preference.",
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
 * Order: GXS (shipped/external) → Ninkatec (0→1 client) → Serenity → Shopee → Amazon
 */
export const caseStudies: CaseStudy[] = [
{
    id: "gxs",
    slug: "gxs",
    number: "01",
    title: "GXS Bank",
    org: "Product Design Intern",
    context:
      "Tagged to copywriting; also collaborated across product-design sub-teams on Money Lock flows and GXS Invest UI testing",
    tags: ["Internship", "Money Lock", "GXS Invest", "UserTesting"],
    summary:
      "Supported Money Lock interaction/flow fit against existing app patterns and helped produce preference/A-B directions for Lock (incl. logo) and GXS Invest — then built and ran tests before rotating off before results landed.",
    researchFocus:
      "Two briefs: (1) does the new Money Lock workflow gel with existing flows? (2) feedback on new GXS Invest UI — answered via UserTesting + preference sessions.",
    problem:
      "Two live design questions: Money Lock’s new post-intro screens risked feeling disconnected from existing app patterns (and Lock wasn’t a home-screen feature), and GXS Invest needed a clear read on which UI presentation made more sense.",
    constraint:
      "16-week internship; formally tagged to copywriting while contributing across product-design sub-departments; no public artifacts; left before test results came back.",
    outcome:
      "Delivered flow/interaction work to align Money Lock with existing patterns, preference/A-B options (incl. Money Lock logo), a full Money Lock workflow test in UserTesting, and a mini feedback session on Invest information presentation. Likely the team shipped a preferred option from feedback — I wasn’t there for the readout.",
    role: "Product Design Intern (copywriting seat · cross-team product design support)",
    timeline: "4 months (16 weeks)",
    methods: [
      {
        method: "Money Lock flow / interaction alignment",
        why: "Check whether screens after Money Lock introduction matched how the rest of the app already behaved.",
      },
      {
        method: "Preference / A-B directions (Lock + logo)",
        why: "Give the designer comparable options — including Money Lock logo variants — instead of one untested UI.",
      },
      {
        method: "UserTesting — full Money Lock workflow",
        why: "Run an end-to-end test of the Lock experience, not only a single screen critique.",
      },
      {
        method: "GXS Invest preference + mini feedback",
        why: "Two UI directions + a short session on whether information presentation made sense.",
      },
    ],
    insights: [
      {
        finding: "A new feature can feel “foreign” even when the concept is sound — especially when it isn’t on the home screen.",
        decision: "Prioritise interaction and post-intro screens that rhyme with existing flows.",
      },
      {
        finding: "Designers needed options, not only opinions — preference/A-B pairs (and logo variants) made feedback actionable.",
        decision: "Ship two comparable directions into test rather than debating one polished mock.",
      },
      {
        finding: "Leaving before results is normal in internships — the craft is still building a clean test.",
        decision: "Document the setup well enough that the team can decide without you in the room.",
      },
    ],
    journey: [
      {
        stage: "Brief",
        detail: "Designer unsure Lock gels with existing flows; Invest needs UI feedback.",
      },
      {
        stage: "Align Lock",
        detail: "Work the interactions/screens after Money Lock is introduced so they match app patterns.",
      },
      {
        stage: "Options",
        detail: "Two directions for preference/A-B — including Money Lock logo exploration.",
      },
      {
        stage: "Test + handoff",
        detail: "Full Lock workflow in UserTesting + Invest mini feedback; results after my stint.",
      },
    ],
    fidelity: [
      {
        step: "Flow / interaction work",
        detail: "Money Lock post-intro screens shaped to sit with existing app patterns (no public screens).",
      },
      {
        step: "Preference / A-B sets",
        detail: "Two design directions for Lock (and logo) plus Invest UI variants.",
      },
      {
        step: "UserTesting script + session",
        detail: "End-to-end Money Lock workflow test built in UserTesting.",
      },
      {
        step: "Invest mini feedback",
        detail: "Quick read on whether information presentation made sense.",
      },
    ],
    reflection:
      "Having a clear design system and structure matters — it’s what lets a new flow feel native instead of bolted on. I wouldn’t screenshot the live bank app for the portfolio without permission; the case stands on process, tests run, and the system lesson.",
  },
{
    id: "ninkatec",
    slug: "ninkatec",
    number: "02",
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
    id: "serenity",
    slug: "serenity",
    number: "03",
    title: "Serenity",
    org: "Personal project",
    context:
      "1-month end-to-end build (design + AI with Claude/Cursor) — Figma workflow + web deploy of a mobile-meant experience",
    tags: ["UI / UX", "AI", "Live prototype", "Figma"],
    summary:
      "Built an end-to-end task app aimed at neurodivergent planning/organising/completing pain — then learned in interviews that thin research left the design hard to defend.",
    researchFocus:
      "Light desk research (Google + Notion comparisons + small conversations) → build first → interview feedback: not ND-friendly enough, choices under-backed.",
    problem:
      "Neurodivergent users often struggle with planning, organising, and completing tasks — and many productivity tools (Notion-like density) add setup cost before any progress.",
    constraint:
      "One-month solo sprint; built with AI (Claude + Cursor); mobile experience shipped as a web deploy; some core features still not in the build; no formal usability testing.",
    outcome:
      "Full workflow in Figma + a live web prototype. Interview feedback flagged that it didn’t feel neurodivergent-friendly and that design choices lacked research backing — which is now the case’s main lesson.",
    role: "End-to-end designer & builder (UI/UX + AI implementation with Claude / Cursor)",
    timeline: "1 month",
    liveUrl: "https://serenity-delta-livid.vercel.app/",
    methods: [
      {
        method: "Desk research (Google)",
        why: "Quick scan of ND planning/organisation friction and existing tool patterns.",
      },
      {
        method: "Small conversations + Notion comparison",
        why: "Gut-check whether dense workspace tools add friction for people who already struggle to start.",
      },
      {
        method: "Build in Figma + ship web",
        why: "Move fast on a mobile-meant flow; accept incomplete features over waiting for perfect research.",
      },
      {
        method: "Interview feedback (post-build)",
        why: "External readers said it wasn’t ND-friendly and that choices weren’t research-backed — the real validation moment.",
      },
    ],
    insights: [
      {
        finding: "Building without a persona/journey left decisions hard to explain in interviews.",
        decision: "Next projects: map pain points and a primary user path before hi-fi.",
      },
      {
        finding: "Light Notion comparisons aren’t enough to claim an ND-friendly product.",
        decision: "Treat “ND-friendly” as a claim that needs evidence — or soften the positioning until research exists.",
      },
      {
        finding: "A live prototype still helps — but feedback without prior research hits harder.",
        decision: "Keep shipping demos; don’t skip the research spine that makes them defensible.",
      },
    ],
    journey: [],
    fidelity: [
      {
        step: "Figma workflow",
        detail: "End-to-end product flow documented in Figma (link to add).",
      },
      {
        step: "Web deploy (mobile-meant)",
        detail: "Live prototype on the web even though the experience is framed for mobile; some core features not applied yet.",
      },
      {
        step: "No formal test plan",
        detail: "No usability testing round — signal came later from interview feedback instead.",
      },
      {
        step: "Gap owned",
        detail: "No persona / journey map in this sprint — called out explicitly.",
      },
    ],
    reflection:
      "The lasting takeaway: always conduct research and map pain points first. Shipping fast with AI is useful; defending UX without evidence isn’t.",
  },
{
    id: "shopee",
    slug: "shopee",
    number: "04",
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
    id: "amazon",
    slug: "amazon",
    number: "05",
    title: "Amazon redesign",
    org: "Personal project",
    context: "Checkout fragmentation inside one product experience",
    tags: ["Checkout", "Flow redesign", "Documentation debt"],
    summary:
      "The core issue was multiple checkout flows living inside the same product. I explored a redesign, but it sprawled — this case is as much about scoping and documentation as the UI.",
    researchFocus:
      "Spot fragmented checkout paths → attempt consolidation redesign → learn that without tight scope + docs, the work gets too big.",
    problem:
      "Amazon’s experience carried multiple checkout flows for related jobs — users (and the designer) had to navigate inconsistent paths instead of one clear commit spine.",
    constraint:
      "Personal project with no internal access; easy to over-redesign when “fix checkout” expands into the whole purchase graph.",
    outcome:
      "Partial redesign exploration. Honest takeaway: the attempt was too large, and the case needs tighter documentation of what was in/out of scope.",
    role: "Solo UX / UI exploration",
    timeline: "Self-directed",
    methods: [
      {
        method: "Flow mapping",
        why: "Lay out the multiple checkout paths side by side.",
      },
      {
        method: "Consolidation redesign",
        why: "Try to reduce path sprawl into a clearer commit experience.",
      },
      {
        method: "Scope check (retrospective)",
        why: "Admit where the redesign ballooned past a defendable brief.",
      },
    ],
    insights: [
      {
        finding: "Multiple checkout flows in one product create learning tax and error risk.",
        decision: "Aim for one primary checkout spine with intentional variants — not parallel mini-checkouts.",
      },
      {
        finding: "“Fix checkout” is a trap scope — it swallows adjacent commerce UI fast.",
        decision: "Next pass: document a single flow boundary before drawing more screens.",
      },
    ],
    journey: [
      { stage: "Enter purchase", detail: "User hits one of several checkout-shaped paths." },
      { stage: "Diverge", detail: "Same product, different rules/UI depending on entry." },
      { stage: "Redesign attempt", detail: "Consolidation exploration grows too wide." },
      { stage: "Retrospective", detail: "Need clearer docs + a smaller next cut." },
    ],
    fidelity: [
      { step: "Flow inventory", detail: "Multiple checkout paths identified." },
      { step: "Redesign exploration", detail: "Partial UI/flow proposals — incomplete as a ship story." },
      { step: "Doc gap", detail: "Case marked as needing better before/after documentation." },
      { step: "Next cut", detail: "Re-scope to one checkout variant and rewrite the brief." },
    ],
    reflection:
      "I’m keeping this case because the failure mode is useful: redesign without a sharp scope (and without solid documentation) turns into “too much.” I’ll tighten the write-up when I redo the docs.",
  }
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}
