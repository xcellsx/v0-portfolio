import type { UiUxCaseStudyData } from "@/lib/ui-ux-case-study-types"

export const amazonCaseStudy: UiUxCaseStudyData = {
  title: "Amazon",
  subtitle: "Uniform Add-to-Cart Across Variants",
  eyebrow: "Speculative // Amazon",
  confidentiality:
    "Speculative redesign of Amazon.sg — not an Amazon engagement. Nothing from this sprint shipped.",
  problem: {
    headline: "Same item, different doors into the cart.",
    summary:
      "On Amazon.sg, variants of the same product did not share one add-to-cart UI. Stock status was missing or inconsistent (low stock red, in stock green — when it showed at all). Key product information sat below the fold, and after scrolling you could not keep changing the visual.",
    detail: "A short sprint: a week or less. Discovery was a live-site audit, annotated in Figma — not interviews.",
  },
  outcome: {
    headline: "One buy box. Colour for stock. Then the critique.",
    summary:
      "The After frame keeps Amazon.sg chrome and rebuilds the purchase column: colour swatches in the buy box, qty + add to cart + buy now as one row, and 'Only 4 left in stock' in the decision. Interview feedback: stay closer to the web checkout pattern; a low-stock indicator is enough — don't overbuild the rest.",
    metrics: [
      "One add-to-cart treatment across variants, with swatches in the buy box",
      "Stock made visible in colour and in a single line ('Only 4 left in stock')",
      "Purchase column tightened so the action doesn't sit under a wall of copy",
    ],
  },
  breakdown: [
    {
      metric: "Problem",
      specification:
        "Inconsistent add-to-cart UIs, missing or mixed stock indicators, and key info that required a scroll — after which the product visual could not be changed.",
    },
    {
      metric: "Solution",
      specification:
        "A single buy box: swatches, stock colour, compact qty / cart / buy-now, less copy above the action.",
    },
    {
      metric: "Role",
      specification: "Speculative consumer UX — interview exercise, not a staffed Amazon project.",
    },
    {
      metric: "Research",
      specification:
        "Heuristic pass on live Amazon.sg PDPs, annotated in Figma (before screens + problem notes). No users, no test protocol.",
    },
    {
      metric: "Validation",
      specification:
        "Interview only: follow the web checkout experience more closely; a low-stock indicator is sufficient.",
    },
    {
      metric: "Timeline",
      specification: "One week or less.",
    },
  ],
  research: {
    headline: "The live page was the brief.",
    summary:
      "No persona and no test. The Figma is an annotated before: captured Amazon.sg PDPs, then two notes on what broke — scroll hiding the decision, and add-to-cart / stock chrome that did not stay consistent across variants.",
    methods: [
      {
        label: "What I ran",
        items: [
          "Live Amazon.sg PDP captures (before frames) for the same product family",
          "Annotation: key info requires a scroll; product visuals cannot be changed after scrolling",
          "Annotation: different add-to-cart UIs; stock indicators missing or mixed (low = red, in stock = green)",
        ],
      },
      {
        label: "What I heard",
        items: [
          "Interview: the After still didn't follow the web checkout experience closely enough",
          "Interview: an indicator for low stock is sufficient — extra chrome is not",
          "Together with Shopee: changing one surface without holding the rest of the flow creates a mess",
        ],
      },
      {
        label: "What I skipped",
        items: [
          "No user research beyond the live site",
          "No persona, no usability test",
          "Kept Amazon chrome, but still invented a buy-box rhythm that critique called non-native",
        ],
      },
    ],
    lesson:
      "Stay on the problem. Unifying add-to-cart and showing stock is enough. Redesigning the checkout ritual on top of that is how a week of frames unravels in the room.",
  },
  journey: {
    label: "Journey // Adding a Variant",
    headline: "Pick the colour. Don't relearn the button.",
    summary:
      "A shopper on Amazon.sg choosing among variants of one product. Reconstructed from the annotated before and the After buy box — not from a recruited study.",
    stages: [
      {
        index: "01",
        stage: "Land",
        emotion: "Scan",
        user: "They need image, variant, price, and stock without hunting.",
        product: "Before: key information sat below the fold.",
      },
      {
        index: "02",
        stage: "Scroll",
        emotion: "Lost the picture",
        user: "They scroll for specs, then want to switch colour without losing the visual.",
        product: "Before: after scrolling, product visuals could not be changed.",
      },
      {
        index: "03",
        stage: "Variant",
        emotion: "Friction",
        user: "Changing colour or size should not change how you buy.",
        product: "Before: different UIs for adding the same item's variants to cart.",
      },
      {
        index: "04",
        stage: "Stock",
        emotion: "Uncertainty",
        user: "Is this one actually available?",
        product: "Before: indicators missing or mixed. After: colour plus 'Only 4 left in stock' in the buy box.",
      },
      {
        index: "05",
        stage: "Commit",
        emotion: "Should be boring",
        user: "Qty, add to cart, buy now — in the pattern they already know from Amazon web.",
        product: "After: one compact row. Critique: still not native enough to web checkout.",
      },
    ],
  },
  hifi: {
    headline: "After: one column that does the buying.",
    summary:
      "The After viewport keeps Amazon.sg navigation and rebuilds the purchase column — swatches, stock line, qty, add to cart, buy now. It is a wireframe sitting on a captured page, not a new storefront.",
    preview: {
      src: "/images/projects/amazon/after.png",
      alt: "Amazon.sg product page after — buy box with colour swatches, stock line, and compact add-to-cart",
      width: 1600,
      height: 900,
    },
    interventions: [
      {
        title: "One buy box",
        description:
          "Colour swatches live next to qty / add to cart / buy now so switching variant does not swap the purchase UI.",
      },
      {
        title: "Stock in colour",
        description:
          "Low stock called in a single line. Interview pushback: the indicator is enough; don't over-explain.",
      },
      {
        title: "Less copy above the action",
        description:
          "The purchase column is quieter so add-to-cart is not buried. This is also where the redesign drifted from Amazon's own checkout rhythm.",
      },
    ],
  },
}
