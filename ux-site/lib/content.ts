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
    title: "Shopee redesign",
    org: "UI/UX · app redesign exercise",
    context: "1-week redesign of Shopee’s mobile app — price clarity, variants, and product detail presentation",
    tags: ["Mobile", "Checkout", "1 week"],
    summary:
      "Price didn’t feel consistent into checkout, plus smaller UI frictions — I redesigned for upfront price clarity, clearer variant control, and in-page product info, then learned checkout users rarely want to change variants there.",
    researchFocus:
      "Web review search + my own walkthrough of the app (thin research; no formal persona beyond myself as shopper).",
    problem:
      "Prices appeared to jump across screens into checkout (subtotal was often correct but key values stayed hidden), and product/variant details were easy to miss or hard to edit once you were deep in the flow.",
    constraint:
      "One-week solo redesign; no usability test; Figma file kept private; referenced web patterns more than mobile e-commerce conventions.",
    outcome:
      "Mocked: original price up front, more obvious/editable variants even on checkout, and product info on the page (image + variant selection) instead of a bottom sheet. Biggest learning from the checkout angle — people already on checkout usually don’t want to change variant. Also: I should have benchmarked mobile e-commerce apps, not web.",
    role: "UI/UX designer (redesign exercise)",
    timeline: "1 week",
    methods: [
      {
        method: "Review mining (web search)",
        why: "Pull recurring shopper complaints about price/checkout clarity.",
      },
      {
        method: "Personal walkthrough",
        why: "Validate friction hands-on as a shopper — where price and variants feel wrong.",
      },
      {
        method: "Figma redesign",
        why: "Propose upfront pricing, variant confirmation/edit, and in-page product detail instead of a sheet.",
      },
    ],
    insights: [
      {
        finding: "The math was often fine — the trust break was hidden values making price feel like it jumped.",
        decision: "Surface the original / expected number earlier instead of only revealing clarity at subtotal.",
      },
      {
        finding: "Making variants editable on checkout fights convention (cart is usually the edit place).",
        decision: "Outcome learning: checkout users rarely want to change variant — put energy where they still will.",
      },
      {
        finding: "Bottom-sheet product info hid image/variant context when decisions were still forming.",
        decision: "Keep image updates and variant selection on the main UI during selection.",
      },
    ],
    journey: [
      {
        stage: "Browse / select",
        detail: "Product info and variants need to stay visible — not tucked in a sheet.",
      },
      {
        stage: "Price trust",
        detail: "Hidden line items make the number feel unstable even when subtotal is right.",
      },
      {
        stage: "Checkout",
        detail: "Users are committing — variant edits here are uncommon; clarity matters more than edit power.",
      },
      {
        stage: "Retrospective",
        detail: "Benchmark mobile commerce patterns next time, not web checkout habits.",
      },
    ],
    fidelity: [
      {
        step: "Walkthrough notes",
        detail: "Price jumps + minor UI frictions logged from real app use.",
      },
      {
        step: "Figma redesign",
        detail: "Upfront price, in-page product/variant UI, clearer checkout variant treatment (file private).",
      },
      {
        step: "No test round",
        detail: "No usability test — outcome judgment from redesign logic + later reflection.",
      },
      {
        step: "Reference miss",
        detail: "Should have used mobile e-commerce apps as the primary benchmark.",
      },
    ],
    reflection:
      "Same focus lesson as Amazon: don’t over-solve adjacent UI. And specifically here — reference mobile e-commerce, not web, when the product is an app.",
  },
{
    id: "amazon",
    slug: "amazon",
    number: "05",
    title: "Amazon redesign",
    org: "Personal · consumer UX",
    context: "≤1 week mock redesign — add-to-cart / checkout consistency across product variants",
    tags: ["Checkout", "Wireframes", "Interview feedback"],
    summary:
      "Different add-to-cart UIs for variants of the same item — I tried to unify checkout, add stock indicators, trim upfront text, then got interview feedback that I’d wandered off the real web checkout patterns.",
    researchFocus:
      "Almost none — spotted friction in-product, jumped to wireframes/mockups; research debt showed up in interview critique.",
    problem:
      "The same product used different UIs for adding variants to cart — checkout felt inconsistent, with high upfront text load and weak stock clarity.",
    constraint:
      "Personal sprint of about a week or less; no formal research, persona, journey, or usability test — Figma wireframes/mockups only.",
    outcome:
      "Wireframed a more uniform checkout, stock indicators, a tightened checkout section, and less text upfront. Interview feedback: the redesign didn’t follow the existing web checkout experience closely enough, and a low-stock indicator alone would have been sufficient for part of the ask.",
    role: "Solo consumer UX / UI exploration",
    timeline: "≤ 1 week",
    methods: [
      {
        method: "In-product friction spot",
        why: "Notice variant add-to-cart UIs diverging for the same item.",
      },
      {
        method: "Wireframes / mockups",
        why: "Unify checkout, add stock indicators, adjust checkout section, reduce upfront copy for cognitive load.",
      },
      {
        method: "Interview critique (post-hoc)",
        why: "External feedback on whether the redesign respected the live checkout model.",
      },
    ],
    insights: [
      {
        finding: "Variant add-to-cart inconsistency is a real friction — but “fix everything nearby” isn’t the same brief.",
        decision: "Next time: one primary problem statement before touching adjacent checkout chrome.",
      },
      {
        finding: "Interviewers flagged drift from the existing web checkout experience.",
        decision: "Benchmark against the live pattern first; change only what the problem requires.",
      },
      {
        finding: "A low-stock indicator may have been enough for the inventory clarity piece.",
        decision: "Prefer the smallest shippable fix when research is thin.",
      },
    ],
    journey: [],
    fidelity: [
      {
        step: "Wireframes",
        detail: "Uniform checkout path, stock indicators, adjusted checkout section, less upfront text.",
      },
      {
        step: "Mockups",
        detail: "Hi-fi exploration in Figma (link to add).",
      },
      {
        step: "No test round",
        detail: "Validation came from interview feedback, not a usability study.",
      },
      {
        step: "Scope miss",
        detail: "Changed more surface area than the core variant/cart inconsistency required.",
      },
    ],
    reflection:
      "Same lesson as Shopee: stay focused on the problem — don’t fix one friction and leave a mess of extra changes. Thin research made that overreach easier.",
  }
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}
