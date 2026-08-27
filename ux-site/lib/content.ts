export interface CaseProblem {
  id: string
  statement: string
}

/** Per-problem block: insights, decisions, constraints, work done, outcome. */
export interface CaseStream {
  problemId: string
  insights: string
  decisions: string
  constraints: string
  whatWasDone: string
  outcome: string
}

export interface CaseStudy {
  id: string
  slug: string
  number: string
  /** Project / product name shown in lists */
  title: string
  role: string
  company: string
  department: string
  timeline: string
  tags: string[]
  /** Single headline outcome — the thing that should stick */
  outcome: string
  problems: CaseProblem[]
  research: string[]
  streams: CaseStream[]
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
 * Order: GXS → Ninkatec → Serenity → Shopee → Amazon
 * Structure: Outcome → meta → Problems → Research → per-problem streams → Reflection
 */
export const caseStudies: CaseStudy[] = [
  {
    id: "gxs",
    slug: "gxs",
    number: "01",
    title: "GXS Bank",
    role: "Product Design Intern",
    company: "GXS Bank",
    department: "Product Design",
    timeline: "4 months · 16 weeks",
    tags: ["Money Lock", "GXS Invest", "UserTesting", "Preference test"],
    outcome:
      "Built and ran the Money Lock end-to-end UserTesting workflow, and shipped preference/A-B directions for Lock (incl. logo) and GXS Invest — then handed off before results landed.",
    problems: [
      {
        id: "1",
        statement:
          "Designer was unsure the new Money Lock workflow gelled with existing app flows — Lock wasn’t on the home screen, and post-intro interactions risked feeling foreign.",
      },
      {
        id: "2",
        statement:
          "Designer needed feedback on the new GXS Invest UI — which presentation of information made more sense.",
      },
    ],
    research: [
      "Full Money Lock workflow test built in UserTesting.",
      "Preference / A-B directions for Money Lock UI and logo.",
      "Mini feedback session on GXS Invest information presentation.",
    ],
    streams: [
      {
        problemId: "1",
        insights:
          "A new feature can feel bolted-on when post-intro screens don’t rhyme with existing patterns — especially when it isn’t discoverable from home.",
        decisions:
          "Prioritise interaction and screens after Money Lock is introduced so they match how the rest of the app already behaves; pair UI options (incl. logo) for preference testing instead of one untested direction.",
        constraints:
          "Existing banking product; Lock not a home-screen feature; internship seat formally tagged to copywriting while supporting product-design sub-teams; no public artifacts.",
        whatWasDone:
          "Worked Money Lock post-intro interactions/screens for flow fit; produced preference/A-B sets including logo variants; built an end-to-end Money Lock test in UserTesting.",
        outcome:
          "Test + preference kit ready for the team to decide on Lock fit and visual direction — I rotated off before the readout.",
      },
      {
        problemId: "2",
        insights:
          "Invest needed comparable UI options and a quick read on whether information hierarchy made sense — not only polish on a single mock.",
        decisions:
          "Help produce two design directions for preference/A-B and run a mini feedback session on information presentation.",
        constraints:
          "Short feedback format; same internship handoff timing — results after my stint.",
        whatWasDone:
          "Two Invest UI directions for preference testing; mini session on whether the presentation of information made sense.",
        outcome:
          "Feedback inputs left with the squad; assumed a preferred option shipped from testing — I wasn’t there for confirmation.",
      },
    ],
    reflection:
      "Clear design system and structure matter — they’re what make a new flow feel native. I wouldn’t screenshot the live bank app without permission; this case stands on the tests built and the handoff.",
  },
  {
    id: "ninkatec",
    slug: "ninkatec",
    number: "02",
    title: "Ninkatec onboarding",
    role: "Designer",
    company: "Ninkatec",
    department: "School · client project",
    timeline: "4 months",
    tags: ["0→1", "Client consult", "Persona", "Preference test"],
    outcome:
      "Handed over an onboarding web experience that replaced scattered manual forms, with a database for staff, patients, and nurses.",
    problems: [
      {
        id: "1",
        statement:
          "Onboarding lived in mostly manual workflows — fragmented forms and handoffs made consolidation hard.",
      },
    ],
    research: [
      "Client consult for initial problem sourcing.",
      "Internal company interviews on pain points across roles.",
      "Primary persona: Jane (mock) as main platform user.",
      "Preference testing on design direction.",
    ],
    streams: [
      {
        problemId: "1",
        insights:
          "The job wasn’t a prettier site — it was replacing manual forms with one trustworthy path; Jane kept the spine from fracturing across roles.",
        decisions:
          "Design the main onboarding flow for Jane; capture other roles in the data model; use preference tests to pick direction before deepening UI.",
        constraints:
          "Four-month school engagement; real client; NDA limits what artifacts can be shown publicly.",
        whatWasDone:
          "Converted manual forms into an onboarding web flow; structured a DB for operational users, patients, and nurses; preference-tested direction.",
        outcome:
          "Handover completed. Live production status after handover unknown.",
      },
    ],
    reflection:
      "Artifacts stay private under NDA. The transferable craft is consult → interview → persona → digitize the manual spine → preference-test → handover.",
  },
  {
    id: "serenity",
    slug: "serenity",
    number: "03",
    title: "Serenity",
    role: "End-to-end designer & builder (Claude + Cursor)",
    company: "Personal project",
    department: "Independent",
    timeline: "1 month",
    tags: ["UI / UX", "AI", "Live prototype", "Figma"],
    outcome:
      "Shipped a Figma workflow + live web prototype of a mobile-meant task app — and learned from interviews that thin research left ND-friendly claims hard to defend.",
    problems: [
      {
        id: "1",
        statement:
          "Neurodivergent users often struggle with planning, organising, and completing tasks — dense tools (e.g. Notion-like) add setup cost before progress.",
      },
    ],
    research: [
      "Light desk research (Google).",
      "Small conversations + Notion comparisons.",
      "No persona / journey map.",
      "No formal usability test — signal came from later interview feedback.",
    ],
    streams: [
      {
        problemId: "1",
        insights:
          "Building without persona/journey made decisions hard to explain; light Notion comparisons aren’t enough to claim an ND-friendly product.",
        decisions:
          "Ship the demo anyway (Figma + web); treat interview critique as the real validation — research and pain-point mapping must come first next time.",
        constraints:
          "One-month solo sprint with AI; mobile experience on web; some core features not in the build yet.",
        whatWasDone:
          "End-to-end product workflow in Figma; deployed web prototype; incomplete feature set accepted to move fast.",
        outcome:
          "Live prototype exists. Interview feedback: not ND-friendly enough; design choices under-backed by research.",
      },
    ],
    liveUrl: "https://serenity-delta-livid.vercel.app/",
    reflection:
      "Always conduct research and map pain points first. Shipping fast with AI is useful; defending UX without evidence isn’t.",
  },
  {
    id: "shopee",
    slug: "shopee",
    number: "04",
    title: "Shopee redesign",
    role: "UI/UX designer",
    company: "Shopee",
    department: "App redesign exercise",
    timeline: "1 week",
    tags: ["Mobile", "Checkout", "1 week"],
    outcome:
      "Redesigned for upfront price clarity and clearer product/variant presentation — then learned checkout users rarely want to change variants there, and I should have benchmarked mobile commerce, not web.",
    problems: [
      {
        id: "1",
        statement:
          "Price felt inconsistent into checkout (subtotal often correct, but key values stayed hidden) plus smaller UI frictions around variants and product detail.",
      },
    ],
    research: [
      "Web search on reviews.",
      "Personal walkthrough of the app (myself as shopper).",
      "No formal test.",
    ],
    streams: [
      {
        problemId: "1",
        insights:
          "Trust broke on hidden values, not bad math; editable variants on checkout fight convention; bottom sheets hid image/variant context too early.",
        decisions:
          "Surface the original number upfront; make variants more obvious (even on checkout); put product info on the page (image + variants) instead of a bottom sheet.",
        constraints:
          "One-week solo redesign; Figma kept private; referenced web patterns more than mobile e-commerce apps.",
        whatWasDone:
          "Figma redesign covering price upfront, variant confirmation/edit, and in-page product/variant UI.",
        outcome:
          "Strongest learning landed on checkout behaviour — people already there don’t usually want to change variant. Reference mobile e-commerce next time.",
      },
    ],
    reflection:
      "Same focus lesson as Amazon: don’t over-solve adjacent UI. Benchmark mobile commerce apps, not web checkout habits.",
  },
  {
    id: "amazon",
    slug: "amazon",
    number: "05",
    title: "Amazon redesign",
    role: "Consumer UX / UI exploration",
    company: "Amazon",
    department: "Personal project",
    timeline: "≤ 1 week",
    tags: ["Checkout", "Wireframes", "Interview feedback"],
    outcome:
      "Wireframed a more uniform variant/checkout path with stock indicators and less upfront text — interview feedback said I’d drifted from the live web checkout, and a low-stock indicator may have been enough.",
    problems: [
      {
        id: "1",
        statement:
          "Different UIs for adding variants of the same item to cart — checkout felt inconsistent, with high upfront text load and weak stock clarity.",
      },
    ],
    research: [
      "Almost none — friction spotted in-product, then straight to wireframes/mockups.",
      "No persona / journey / usability test.",
      "Validation via interview critique.",
    ],
    streams: [
      {
        problemId: "1",
        insights:
          "Variant inconsistency is real, but “fix everything nearby” isn’t the same brief; interviewers flagged drift from existing web checkout; low-stock indicator alone may cover the inventory piece.",
        decisions:
          "Attempted uniform checkout, stock indicators, adjusted checkout section, reduced upfront copy — then accepted the critique to scope smaller next time.",
        constraints:
          "≤1 week personal sprint; thin research; Figma only.",
        whatWasDone:
          "Wireframes/mockups for uniform checkout, stock indicators, checkout adjustments, less upfront text.",
        outcome:
          "Useful interview feedback: follow the live checkout model; prefer the smallest fix when research is thin.",
      },
    ],
    reflection:
      "Same lesson as Shopee: stay focused on the problem — don’t fix one friction and leave a mess of extra changes.",
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}
