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
    context: "Money Lock discovery + onboarding · UX testing on Lock and investment flows",
    tags: ["Internship", "Onboarding", "Money Lock", "UX testing"],
    summary:
      "Surfaced that Money Lock — a core money feature — was missing from the home experience, folded activation into onboarding, and ran UX testing on the new Lock flow plus investment-portfolio flows.",
    researchFocus:
      "Home/IA gap on Money Lock → onboarding + activation path → UX tests on Lock + investment portfolio (plus broader app research).",
    problem:
      "Money Lock was a core feature, but it didn’t show up on the home page — so users could miss it entirely before they ever reached activation.",
    constraint:
      "Existing banking product; internship scope; limited public screens for the onboarding/activation work.",
    outcome:
      "Proposed onboarding adjustments to introduce Money Lock and how to activate it; ran UX testing on the new Lock flow and on investment-portfolio flows. Broader app research sat alongside as supporting context.",
    role: "Product Design Intern",
    timeline: "Sep 2024 — Jan 2025",
    methods: [
      {
        method: "Feature / home audit",
        why: "Catch when a core capability is invisible from the main entry surface.",
      },
      {
        method: "Onboarding flow redesign",
        why: "Introduce Money Lock and activation steps where new users actually learn the product.",
      },
      {
        method: "UX testing (Lock + investments)",
        why: "Validate the new Lock path and investment-portfolio flows with users.",
      },
      {
        method: "Broader app research",
        why: "Background signal on the product overall — supporting, not the headline story.",
      },
    ],
    insights: [
      {
        finding: "Core features can still be “missing” if home doesn’t surface them.",
        decision: "Treat Money Lock as a discovery + activation problem, not only a settings detail.",
      },
      {
        finding: "Onboarding is where activation habits form.",
        decision: "Fold Money Lock intro + how-to-activate into the onboarding path.",
      },
      {
        finding: "Testing across Lock and investment flows showed where the new path still wobbled.",
        decision: "Use UX test notes to refine sequencing before calling the flow done.",
      },
    ],
    journey: [
      { stage: "Land on home", detail: "User never sees Money Lock called out." },
      { stage: "Onboard", detail: "New path introduces Lock and how to activate it." },
      { stage: "Activate", detail: "User understands what Lock does and how to turn it on." },
      { stage: "Test", detail: "UX tests on Lock flow + investment portfolio flows." },
    ],
    fidelity: [
      {
        step: "Gap callout",
        detail: "Money Lock missing from home — documented for the team.",
      },
      {
        step: "Onboarding + activation",
        detail: "Flow adjustments (screens not shown publicly).",
      },
      {
        step: "UX testing",
        detail: "New Lock flow + investment portfolio flows.",
      },
      {
        step: "Supporting research",
        detail: "General app research as backdrop.",
      },
    ],
    reflection:
      "More detail coming — this version is the honest gist: discovery gap → onboarding/activation → test Lock + investments. Screens for the onboarding piece stay out of the public case for now.",
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
      "AI task helper for people who feel overwhelmed — live web prototype + Figma mockups",
    tags: ["UI / UX", "AI", "Live prototype"],
    summary:
      "A calm task flow that turns a messy brain-dump into small next steps — for anyone who feels overwhelmed by typical productivity apps.",
    researchFocus:
      "Overwhelm + cognitive load → strip noisy chrome → dump → parse → one checklist at a time.",
    problem:
      "When people feel overwhelmed, most productivity apps add more structure (tags, calendars, alerts) before they’ve even captured the thought — which makes starting harder.",
    constraint:
      "Personal build: design for mobile first, ship a usable web prototype + Figma mockups without overselling a clinical niche.",
    outcome:
      "Live site + Figma mockups for a three-step loop (dump → ambient parse → simple checklist). Shown as a mobile product via phone-framed screens and a clear “designed for mobile” note on the web prototype.",
    role: "Solo designer & builder",
    timeline: "Personal sprint",
    methods: [
      {
        method: "Pattern teardown",
        why: "Spot which app patterns (alerts, taxonomy-first forms) make overwhelm worse.",
      },
      {
        method: "Story mapping",
        why: "Map from “too much in my head” to one doable next step.",
      },
      {
        method: "Prototype + Figma",
        why: "Test the loop in a live build while keeping hi-fi mockups for the mobile framing.",
      },
    ],
    insights: [
      {
        finding: "Overwhelm users stall when the UI asks for categories before capture.",
        decision: "One unconstrained dump field — structure comes after.",
      },
      {
        finding: "Instant lists can still feel like pressure.",
        decision: "A short processing beat so the system visibly does the chunking.",
      },
      {
        finding: "Extra chrome (nav, badges, profiles) adds noise when someone already feels overloaded.",
        decision: "Keep the shell quiet and predictable.",
      },
    ],
    journey: [
      { stage: "Overwhelm", detail: "Too many thoughts, no calm place to put them." },
      { stage: "Dump", detail: "One field — no tags, no setup tax." },
      { stage: "Offload", detail: "System chunks the mess while the UI stays quiet." },
      { stage: "Act", detail: "Small checklist items — one next step at a time." },
    ],
    fidelity: [
      { step: "Figma mockups", detail: "Mobile frames for the core loop." },
      { step: "Live web prototype", detail: "Clickable build for walkthroughs (phone viewport / framed shots in portfolio)." },
      { step: "Hi-fi UI", detail: "Calm checklist cards, minimal chrome." },
      { step: "Portfolio note", detail: "Explicit: designed for mobile; web is the demo surface." },
    ],
    reflection:
      "I dialed back a narrower clinical framing to a broader “overwhelmed” audience — clearer, more honest, easier to talk about in interviews.",
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
