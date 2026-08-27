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
    specification: "Lead End-to-End Product Designer & Front-End UI Engineer",
  },
  {
    metric: "Core Stack",
    specification: "Figma Variables, React Engine, Next.js State Arrays, Blender Geometry Nodes",
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
    step: "Step 2: Ambient Processing",
    label: "PARSING CHAOTIC STRINGS // SEMANTIC SYNTAX MAPPING",
    technicalAnchor: "SUBSURFACE PROCESSING // TOKEN SEGMENTATION",
    src: "/images/projects/serenity/step-02.png",
    width: 402,
    height: 874,
    description:
      "An intentional micro-moment of calm. Large, looping, low-poly geometries track the processing timeline while a background generative script delegates the heavy cognitive work of task breakdown.",
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
  mobileNote:
    "Web prototype for visualisation — the product is designed as a native mobile build.",
} as const

/** Research amplification — insights wired to interface decisions. */
export const serenityColdRead = {
  problem:
    "Neurodivergent users abandoned productivity apps because the act of organizing created more executive dysfunction than the tasks themselves.",
  constraint:
    "Ship a calm mobile-first sanctuary in a four-week sprint without recreating corporate dashboard patterns users already rejected.",
  outcome:
    "A brain-dump → ambient parse → crystalline checklist flow that removes notification chrome and manual micro-categorization.",
} as const

export const serenityResearch = {
  sectionLabel: "[ Section 02 // User Research ]",
  headline: "Cognitive load was the product problem.",
  framing:
    "Research wasn’t a pre-design ritual — it set the non-negotiables: zero red dots, no nested calendars on first open, and one unconstrained input before any structure.",
  questions: [
    "Where does task paralysis actually start — capture, planning, or execution?",
    "Which UI patterns tax working memory for ADHD / autistic users?",
    "What micro-moment of calm is required before users will trust automated chunking?",
  ],
  methods: [
    {
      method: "Desk research + clinical pattern review",
      why: "Ground interface decisions in known executive-dysfunction friction (notifications, color-coded overload, forced taxonomy).",
      n: "Literature + existing app teardown",
    },
    {
      method: "Story mapping with target scenarios",
      why: "Map the emotional arc from chaotic thought → actionable micro-step without premature structure.",
      n: "Solo synthesis → validated flow",
    },
    {
      method: "Prototype walkthroughs",
      why: "Test whether ambient processing reduced anxiety vs. instant list dumps that still felt like work.",
      n: "Think-aloud on core three-step loop",
    },
  ],
  insights: [
    {
      id: "S-01",
      finding: "Capture fails when the UI demands categories first.",
      evidence:
        "Users stalled at “which list / tag / project?” before they had language for the thought itself.",
      decision:
        "Single unconstrained brain-dump field — formatting and taxonomy deferred until after AI chunking.",
      artifact: "Step 1 input layer",
    },
    {
      id: "S-02",
      finding: "Instant results still felt like pressure.",
      evidence:
        "Immediate checklist output read as another demand; a short ambient wait reframed the system as doing the hard part.",
      decision:
        "Intentional processing moment with calm geometry — cognitive offloading made visible.",
      artifact: "Step 2 ambient processing",
    },
    {
      id: "S-03",
      finding: "Corporate chrome restarts the stress loop.",
      evidence:
        "Side nav, avatars, and alert badges recalled tools users already associated with failure and overwhelm.",
      decision:
        "Strip persistent utility chrome; rigid, predictable layout as sanctuary — not productivity theater.",
      artifact: "Sensory shell component",
    },
  ],
  tension: {
    label: "[ The Ordeal ]",
    title: "More features made it worse.",
    body: "Early explorations included color-coded calendars and richer planning panels. Research pushed the opposite: fewer signals, shape markers over color alerts, and checklists that show one micro-action at a time.",
  },
} as const