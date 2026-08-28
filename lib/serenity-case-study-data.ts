export const serenityProblem = {
  headline: "The Cognitive Cost of Order.",
  summary:
    "Traditional productivity systems fail neurodivergent (ADHD/Autism) brains because they rely on heavy visual friction. Red notification dots, infinite nested calendar menus, and manual micro-input forms create immediate executive dysfunction and task paralysis.",
  detail:
    "The problem isn't a lack of organization — it's the steep energy tax required to establish it.",
} as const

export const serenityOutcome = {
  headline: "Calm by Default.",
  summary:
    "Serenity replaces overwhelming productivity patterns with a single-input, AI-chunked workflow that outputs isolated micro-actions — each scoped to feel completable without dread.",
  metrics: [
    "One unconstrained text field replaces multi-step form entry",
    "Ambient processing screen buys cognitive breathing room during AI parsing",
    "Output cards show singular actions with auto-evaluated timeframes",
  ],
} as const

export const serenityBreakdown = [
  {
    metric: "Problem",
    specification:
      "Neurodivergent users experience task paralysis when productivity tools demand heavy visual friction before any work begins.",
  },
  {
    metric: "Solution",
    specification:
      "A generative task-chunking ecosystem — brain dump in, calm micro-actions out — with intentional processing pauses and stripped-back UI chrome.",
  },
  {
    metric: "Role",
    specification:
      "Lead End-to-End Product Designer & Front-End UI Engineer — Figma through React, with Claude + Cursor in the build loop.",
  },
  {
    metric: "Research",
    specification:
      "Desk research and informal conversations comparing existing tools (especially Notion). No personas, journey map, or usability testing before the sprint.",
  },
  {
    metric: "Stack",
    specification: "Figma, React, Next.js, Claude + Cursor, Blender Geometry Nodes",
  },
  {
    metric: "Timeline",
    specification: "4-Week Hyper-Sprint (June 2026)",
  },
] as const

export const serenitySpecMatrix = [
  {
    metric: "Project Identity",
    specification: "Serenity — Automated Task Architecture & Cognitive Sanctuary",
  },
  {
    metric: "Core Paradigm",
    specification: "Generative Task-Chunking Ecosystem for Executive Dysfunction",
  },
  {
    metric: "Role & Execution",
    specification:
      "Lead End-to-End Product Designer & Front-End UI Engineer — Figma through React, with Claude + Cursor in the build loop.",
  },
  {
    metric: "Core Stack",
    specification: "Figma, React, Next.js, Claude + Cursor, Blender Geometry Nodes",
  },
  {
    metric: "Timeline",
    specification: "4-Week Hyper-Sprint (June 2026)",
  },
] as const

export const serenitySteps = [
  {
    step: "Step 1: The Brain Dump Input",
    label: "INPUT LAYER // RAW CONTEXT",
    src: "/images/projects/serenity/step-01.png",
    width: 402,
    height: 874,
    description:
      "A single, unconstrained text field designed for raw, chaotic thoughts. Zero formatting rules. Zero categorical stress.",
  },
  {
    step: "Step 2: Debulking",
    label: "PARSING LAYER // TASK CHUNKING",
    technicalAnchor: "ONE JOB ON SCREEN // REDUCE THE LOAD",
    src: "/images/projects/serenity/step-02.png",
    width: 402,
    height: 874,
    description:
      "The dump is broken into smaller pieces while the user waits. Copy stays quiet; the screen does one job — show that the load is being reduced, not that the user must organise it.",
  },
  {
    step: "Step 3: Crystalline Checklists",
    label: "DISPOSITION LAYER // ISOLATED MICRO-ACTIONS",
    src: "/images/projects/serenity/step-03.png",
    width: 402,
    height: 874,
    description:
      "The output. Clear, non-threatening frosted glass cards displaying singular actions. Timeframes are automatically evaluated to prevent stress.",
  },
] as const

export const serenityComponents = [
  {
    title: "Component 01 // The Sensory Shell",
    src: "/images/projects/serenity/component-sensory-shell.png",
    width: 402,
    height: 874,
    quote:
      "I stripped away traditional corporate software patterns—such as persistent side menus, user profile avatars, and utility navigation rows—to preserve user energy. The design uses rigid, predictable layouts and semantic CSS spacing to guarantee an interface that functions as a predictable sanctuary.",
  },
  {
    title: "Component 02 // The Calendar Tapestry",
    src: "/images/projects/serenity/component-calendar.png",
    width: 402,
    height: 874,
    quote:
      "Color-coded charts often amplify stress. I built the calendar module around subtle shape markers rather than colored circles. This lets users map their commitments instantly without feeling overwhelmed by an intense wall of alerts.",
  },
] as const

export const serenityLive = {
  url: "https://serenity-delta-livid.vercel.app/",
  figmaUrl:
    "https://www.figma.com/design/jkBbEhpXIHpD2w1T6OAxbW/Serenity.--Copy-?node-id=2-8",
  mobileNote:
    "Web prototype for a mobile-first experience — some core features from Figma are not in the live build yet.",
} as const

export const serenityResearch = {
  headline: "Pixels before pain points.",
  summary:
    "A one-month end-to-end sprint: problem framing in Figma, then a React prototype built with Claude and Cursor. Discovery was desk research and a handful of informal conversations — not interviews with neurodivergent users, and not a mapped journey.",
  methods: [
    {
      label: "What I ran",
      items: [
        "Desk research on ADHD / autism and task paralysis — planning, organising, completing",
        "Informal conversations comparing existing tools, especially Notion",
        "Competitive pattern audit: nested pages, notification chrome, manual micro-forms",
      ],
    },
    {
      label: "What I heard",
      items: [
        "The work isn't 'remembering tasks' — it's the energy tax of structuring them before any action starts",
        "Notion-class tools assume the user can already organise; that structure is the stall",
        "Visual friction (alerts, nested calendars, category fields) triggers avoidance on contact",
      ],
    },
    {
      label: "What I skipped",
      items: [
        "No persona. No journey map before design.",
        "No usability testing during the sprint",
        "Later interviews: the product still didn't feel neurodivergent-friendly — design choices had no research to stand on",
      ],
    },
  ],
  lesson:
    "Always conduct research and map pain points first. Calm UI is not evidence that the interaction model fits the brain it claims to serve.",
} as const

export const serenityJourney = {
  headline: "From dump to one completable action.",
  summary:
    "Reconstructed for this case study — this is the journey I should have mapped before touching Figma. Scenario: a neurodivergent user who cannot get from 'too much in my head' to 'I finished one thing' in tools like Notion.",
  stages: [
    {
      index: "01",
      stage: "Trigger",
      emotion: "Paralysis",
      user: "Too many unformed tasks. Opening a planner feels like another project to organise.",
      product: "Not in the product yet — this is the moment Serenity has to intercept.",
    },
    {
      index: "02",
      stage: "Capture",
      emotion: "Low-effort relief",
      user: "Dumps whatever is weighing on them into one field. No categories, dates, or tags.",
      product: "Single unconstrained input: 'What is weighing on your mind right now?'",
    },
    {
      index: "03",
      stage: "Debulk",
      emotion: "Pause",
      user: "Waits. Does not have to chunk the work themselves.",
      product: "Debulking screen — AI parses the dump into smaller pieces while chrome stays quiet.",
    },
    {
      index: "04",
      stage: "Disposition",
      emotion: "Clarity — if it lands",
      user: "Sees a short list of isolated actions instead of a nested workspace.",
      product: "Task cards with a single complete-in-place control. One tap, one done.",
    },
    {
      index: "05",
      stage: "Regulate or accomplish",
      emotion: "Choice without a wall",
      user: "Picks a path: ground first, or start a task.",
      product: "Hub tiles (Regulate / Accomplish / Calendar / Dashboard) — several of these still live only in Figma.",
    },
    {
      index: "06",
      stage: "Aftermath",
      emotion: "Residual doubt",
      user: "Later feedback: still didn't feel built for a neurodivergent brain.",
      product: "No test loop in the sprint, so there was nothing to correct against.",
    },
  ],
} as const

export const serenityHifi = {
  headline: "Directing the Engine, Guarding the Interface.",
  summary:
    "Three high-fidelity screens carry the core loop. Designed for mobile; prototyped on web. Mood, energy, calendar, and profile are in the system — not all of them are in the live build yet.",
} as const
