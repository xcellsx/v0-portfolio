import type { UiUxCaseStudyData } from "@/lib/ui-ux-case-study-types"

export const ninkatecCaseStudy: UiUxCaseStudyData = {
  title: "Ninkatec",
  subtitle: "Onboarding Consolidation for a Manual Care Operation",
  eyebrow: "Case Study // Ninkatec",
  confidentiality:
    "Client engagement under NDA. Screens, internal links, and patient-adjacent artifacts are not published.",
  problem: {
    headline: "Onboarding lived in paper.",
    summary:
      "Most of the operation's intake still ran on manual forms. Staff re-entered the same information across disconnected sheets — patients, nurses, and organisational details never sat in one place — so onboarding was slow, inconsistent, and easy to drop.",
    detail: "The product problem was not a missing feature. It was a missing system of record.",
  },
  outcome: {
    headline: "One flow. One database. Handed over.",
    summary:
      "A consult-led engagement that turned scattered paperwork into a single onboarding web flow, backed by a database for organisation records, patients, and nurses. Preference testing helped choose the layout the staff could actually live with.",
    metrics: [
      "Manual forms collapsed into one onboarding web experience",
      "Structured storage for organisation, patient, and nurse records",
      "Preference test used to pick the layout that fit the operators — not the designers",
    ],
  },
  breakdown: [
    {
      metric: "Problem",
      specification:
        "Onboarding depended on manual forms, so intake was fragmented across staff, patients, and nurses.",
    },
    {
      metric: "Solution",
      specification:
        "A consolidated onboarding web flow plus a database that became the system of record after handover.",
    },
    {
      metric: "Role",
      specification: "Designer — consult-led problem sourcing through interface and data structure.",
    },
    {
      metric: "Research",
      specification:
        "Client consult to frame the problem, then internal interviews across the company on pain points. Jane is a mock persona standing in for the primary platform user.",
    },
    {
      metric: "Validation",
      specification: "Preference testing to compare layout directions with the people who would operate the system.",
    },
    {
      metric: "Timeline",
      specification: "4-month engagement, closed with a handover. Live shipment status is unknown.",
    },
  ],
  research: {
    headline: "The brief was a conversation, not a ticket.",
    summary:
      "We started with a consult: sit with the client, then interview inside the company until the pain points were specific. The primary user of the platform is not the patient — it is the staff member who has to get someone onto the books.",
    methods: [
      {
        label: "What I ran",
        items: [
          "Consult-style problem sourcing with the client before any interface work",
          "Internal interviews across roles to map where manual onboarding actually broke",
          "Preference testing of layout directions with the people who would use the system daily",
        ],
      },
      {
        label: "What I heard",
        items: [
          "Intake was a stack of forms, not a flow — the same facts were typed more than once",
          "Patient, nurse, and organisational data lived apart, so handover between staff was fragile",
          "Jane, the mock primary user, needed a path she could complete without hunting for the next sheet",
        ],
      },
      {
        label: "What I skipped",
        items: [
          "No public usability study — testing stayed internal and preference-led",
          "No published screens: the engagement is under NDA",
          "Shipment after handover was not tracked, so outcome stops at delivery, not live metrics",
        ],
      },
    ],
    lesson:
      "Map the operator's pain before drawing the product. Preference tests beat taste when the users already know the work.",
  },
  journey: {
    label: "Journey // Onboarding Jane's Caseload",
    headline: "From a pile of forms to a record that exists.",
    summary:
      "Jane is a mock persona for the main platform user — the staff member responsible for getting people into the operation. This is the path the onboarding flow had to make possible.",
    stages: [
      {
        index: "01",
        stage: "Trigger",
        emotion: "Administrative drag",
        user: "Jane has a new patient or nurse to bring onto the books. The work starts as a stack of paper and one-off files.",
        product: "Nothing connected yet — this is the gap the engagement was hired to close.",
      },
      {
        index: "02",
        stage: "Intake",
        emotion: "Repetition",
        user: "She fills the same facts across disconnected forms. Nothing tells her what is already captured.",
        product: "Legacy process: manual forms, no single source of truth.",
      },
      {
        index: "03",
        stage: "Handoff",
        emotion: "Risk",
        user: "Another staff member inherits an incomplete picture. Patients and nurses are not reliably linked to the organisation.",
        product: "Still no shared record — errors travel with the paper.",
      },
      {
        index: "04",
        stage: "Capture",
        emotion: "Relief",
        user: "Jane walks a single onboarding web flow instead of assembling the packet herself.",
        product: "Consolidated onboarding experience — one path, fields that match the real intake.",
      },
      {
        index: "05",
        stage: "Store",
        emotion: "Confidence",
        user: "The record is findable later: organisation, patient, nurse — not three different folders.",
        product: "Database designed to hold those three record types as the system of record.",
      },
      {
        index: "06",
        stage: "Handover",
        emotion: "Open loop",
        user: "The client owns the system. Whether it shipped into daily use was outside the engagement.",
        product: "Delivered and handed over. Live status not confirmed.",
      },
    ],
  },
  hifi: {
    headline: "The interface is the form, finished.",
    summary:
      "High-fidelity work translated every manual form into screens a staff member could complete in one sitting, then stored the result. Layout was not a brand exercise — it was preference-tested against the operators.",
    withheld:
      "Screens, prototypes, and internal URLs stay off this site under NDA. What follows is the structure of the work, not the pixels.",
    interventions: [
      {
        title: "Form → flow",
        description:
          "Each paper form became a step in a single onboarding web path, ordered the way staff already thought about intake.",
      },
      {
        title: "System of record",
        description:
          "A database for organisation info, patients, and nurses — so onboarding produced a record, not another file.",
      },
      {
        title: "Preference, not taste",
        description:
          "Layout directions were compared with the client team to pick what was suitable for their operation, not what looked calmer on a deck.",
      },
    ],
  },
}
