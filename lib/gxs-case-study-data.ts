import type { UiUxCaseStudyData } from "@/lib/ui-ux-case-study-types"

export const gxsCaseStudy: UiUxCaseStudyData = {
  title: "GXS Bank",
  subtitle: "Money Lock Fit & Invest UI Preference",
  eyebrow: "Case Study // GXS Bank",
  confidentiality:
    "Product design internship. App screens, test recordings, and unreleased UI are not published — including screenshots of the live app.",
  problem: {
    headline: "A new flow that did not live on home.",
    summary:
      "Money Lock sat off the home screen, so the designer needed to know whether the new workflow still felt like the rest of the app after the intro. In parallel, GXS Invest needed a second pair of eyes on a new UI — including which direction, and which logo lockup, should go to a preference test.",
    detail: "Tagged to copywriting, then pulled into workflow testing and UI critique across the product design team.",
  },
  outcome: {
    headline: "Tests built. Results unseen.",
    summary:
      "I built a full UserTesting script for the Money Lock journey and ran a smaller read on whether Invest's information design made sense. The team would have shipped from that feedback. I left before the results came in.",
    metrics: [
      "Money Lock: interaction and post-intro screens aligned to existing in-app patterns",
      "Invest: two UI directions plus Money Lock logo variants prepared for preference / A-B style testing",
      "Full Money Lock workflow instrumented in UserTesting; Invest got a mini feedback session on information presentation",
    ],
  },
  breakdown: [
    {
      metric: "Problem",
      specification:
        "Money Lock had to gel with existing flows despite not living on home. Invest needed a read on a new UI before committing.",
    },
    {
      metric: "Solution",
      specification:
        "Rewrite the post-intro Money Lock interaction to match established patterns; produce two Invest directions (and logo options) for preference testing.",
    },
    {
      metric: "Role",
      specification:
        "Product Design Intern — hired against copywriting, then staffed onto workflow testing and UI critique with other product design pods.",
    },
    {
      metric: "Research",
      specification:
        "UserTesting study covering the full Money Lock workflow, plus a mini feedback session on Invest information presentation.",
    },
    {
      metric: "Constraint",
      specification:
        "No take-home artifacts. Results arrived after the internship ended.",
    },
    {
      metric: "Timeline",
      specification: "24-week internship.",
    },
  ],
  research: {
    headline: "The test was the deliverable.",
    summary:
      "This was not a greenfield redesign. It was: does this new piece still feel like GXS once you are inside it, and does this Invest layout explain itself? I built the instruments. I did not stay long enough to read the scores.",
    methods: [
      {
        label: "What I ran",
        items: [
          "End-to-end Money Lock protocol in the UserTesting app — intro through completion, not a single screen",
          "Mini feedback session on whether Invest's information presentation made sense",
          "Preference materials: two Invest UI directions, plus Money Lock logo variants",
        ],
      },
      {
        label: "What I heard",
        items: [
          "The designer's risk on Money Lock: a flow that is not on home can still break the mental model of the rest of the app",
          "Invest needed an outside read before locking a UI, not just another polish pass",
          "Copy and structure were the same problem — if the presentation did not parse, the interaction would not either",
        ],
      },
      {
        label: "What I skipped",
        items: [
          "No results. The internship ended before the studies closed.",
          "No screenshots of the live app — intern work and a bank product are not portfolio chrome",
          "No claimed ship metric. I can only say the team had a test to pick from.",
        ],
      },
    ],
    lesson:
      "A clear design system and a stable structure are what let a new flow sit next to an old one. Without them, every feature has to reinvent how the app behaves.",
  },
  journey: {
    label: "Journey // Completing Money Lock",
    headline: "Off-home, still in-family.",
    summary:
      "Primary path: a customer who wants to lock money away, entering a workflow that does not start on the home screen. Invest ran beside it as a preference track, not the same journey.",
    stages: [
      {
        index: "01",
        stage: "Intent",
        emotion: "Caution",
        user: "They want to set money aside. This is not a casual tap on a home module they already know.",
        product: "Money Lock is reachable, but it is not part of the home canvas — so the intro has to re-orient.",
      },
      {
        index: "02",
        stage: "Intro",
        emotion: "Am I still in GXS?",
        user: "The first screens after entry decide whether this feels like a new product or a new room in the same house.",
        product: "Primary design change: post-intro interaction and screens rewritten to match existing flows.",
      },
      {
        index: "03",
        stage: "Commit",
        emotion: "Trust",
        user: "They set the lock. The steps have to rhyme with transfers and other money movements they already survived.",
        product: "Workflow tested as a whole in UserTesting — not isolated mockups.",
      },
      {
        index: "04",
        stage: "Invest, in parallel",
        emotion: "Scan",
        user: "A different customer (or the same one later) meets a new Invest UI and has to parse it quickly.",
        product: "Two directions for preference / A-B style review; logo variants in the same packet.",
      },
      {
        index: "05",
        stage: "Readout",
        emotion: "Unknown",
        user: "Someone on the team saw which option survived. I was already gone.",
        product: "Assume they shipped the strongest option from the feedback. That is an inference, not a metric.",
      },
    ],
  },
  hifi: {
    headline: "Structure first, then the variant.",
    summary:
      "High-fidelity work here was pattern-matching and optioneering: make Money Lock behave like the rest of the app, then give Invest two complete directions worth testing. Pixels from that work stay inside the bank.",
    withheld:
      "No intern files, no test recordings, no live-app photography. A bank product is not a moodboard.",
    interventions: [
      {
        title: "Money Lock, in-family",
        description:
          "Adjusted the interaction and the screens that appear after Money Lock is introduced so the new workflow rhymes with flows customers already know.",
      },
      {
        title: "Invest, two ways",
        description:
          "Produced two UI directions for a preference / A-B style test, including Money Lock logo treatments in the same review set.",
      },
      {
        title: "The protocol",
        description:
          "A full UserTesting script for Money Lock, plus a shorter session asking whether Invest's information hierarchy actually parsed.",
      },
    ],
  },
}
