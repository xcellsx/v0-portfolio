import type { UiUxCaseStudyData } from "@/lib/ui-ux-case-study-types"

export const shopeeCaseStudy: UiUxCaseStudyData = {
  title: "Shopee",
  subtitle: "Price Honesty and Choice Overload on the Path to Pay",
  eyebrow: "Speculative // Shopee",
  confidentiality:
    "Speculative redesign — not a Shopee engagement. Research lives in Figma; the file is not published here.",
  problem: {
    headline: "Two frictions, stacked.",
    summary:
      "Buyers hit compounding friction between deciding to buy and paying: too many near-identical choices on the PDP (slowing the decision), then inconsistent pricing from PDP → cart → checkout (undermining trust right before payment). Both show up in real Shopee complaints, and both map to known cart-abandonment causes.",
    detail:
      "One-week design test. Research was reviews plus a self walkthrough, then annotated in Figma — stronger than a vibe check, still not a recruited study.",
  },
  outcome: {
    headline: "Name the jump. Don't turn checkout into a cart.",
    summary:
      "The research board isolated price jumps, missed variants, a Buy Now cart that doesn't merge, shifting subtotals, and multi-seller shipping fees that aren't transparent. The interface pass put the original number up front, made variant state obvious, and moved product decisions onto the page. Critique: people already on checkout are not there to change variant — and the reference should have been a mobile e-commerce app, not web.",
    metrics: [
      "Price inconsistency treated as a trust break, not a rounding error — SG review: $0.00 then $8.56 on Buy Now",
      "PDP choice overload and missed variant called out as buyer-error risk",
      "Checkout left as pay, not a second editor — the part the first hi-fi got wrong",
    ],
  },
  breakdown: [
    {
      metric: "Problem",
      specification:
        "Choice overload on the PDP, plus prices that change meaning across PDP, cart, and checkout.",
    },
    {
      metric: "Solution",
      specification:
        "Research-first: evidence cards and an annotated walkthrough, then an interface pass for price honesty, variant visibility, and on-page product decisions.",
    },
    {
      metric: "Role",
      specification: "Speculative UI/UX — one-week design test, not a Shopee engagement.",
    },
    {
      metric: "Research",
      specification:
        "Trustpilot and Play Store complaints (SG, MY, TH), industry benchmarks on abandonment and choice overload, plus an annotated walkthrough of single-item and multi-seller paths.",
    },
    {
      metric: "Validation",
      specification:
        "No usability test. Readout: don't make checkout a variant editor; reference mobile e-commerce, not web.",
    },
    {
      metric: "Timeline",
      specification: "One week.",
    },
  ],
  research: {
    headline: "The complaints were specific. I still used myself as the sample.",
    summary:
      "The Figma Research page is the actual brief: SG price-jump evidence, MY checkout mismatch, TH popup/menu density, then benchmarks (~70% cart abandonment; ~48% citing unexpected extra costs; choice overload crushing conversion). A walkthrough of the live app sat next to that — PDP, Buy Now, cart, checkout.",
    methods: [
      {
        label: "What I ran",
        items: [
          "SG Trustpilot: item at $0.00, then $8.56 on Buy Now / add to cart; price changing during checkout",
          "MY: price difference at checkout. TH: too many popups and menus",
          "Benchmarks: ~70% average cart abandonment; ~48% unexpected additional costs; choice overload (30% vs 3% conversion by option count)",
          "Annotated walkthrough: single-item journey and a multi-seller cart test",
        ],
      },
      {
        label: "What I heard",
        items: [
          "PDP: overwhelming options (choice overload); selected variant easy to miss — buyer-error risk",
          "Buy Now opens a cart that does not merge with the existing cart",
          "Cart: subtotal shifts. Checkout: multi-seller stack, separate shipping fees, fee logic that isn't transparent",
        ],
      },
      {
        label: "What I skipped",
        items: [
          "No recruited users, no test",
          "First hi-fi let checkout edit variants — convention (and later critique) says cart is for that",
          "Used web checkout as the pattern library instead of a mobile e-commerce app",
        ],
      },
    ],
    lesson:
      "The research held. The first interface didn't. Stay on the problem — and for mobile commerce, reference mobile commerce. A checkout page is for paying, not for swapping SKUs.",
  },
  journey: {
    label: "Journey // Paying the Number You Saw",
    headline: "If the price was always right, say so earlier.",
    summary:
      "Mapped from the annotated walkthrough: a shopper who thinks they know the price, then watches the number move — sometimes because fees were hidden, sometimes because Buy Now is a different cart.",
    stages: [
      {
        index: "01",
        stage: "PDP",
        emotion: "Overloaded",
        user: "Too many near-identical options. Easy to miss which variant is selected.",
        product: "Live: choice overload and weak variant confirmation. Proposed: decisions on the page, not in a sheet.",
      },
      {
        index: "02",
        stage: "Buy Now",
        emotion: "Split cart",
        user: "They tap Buy Now expecting to pay for this item.",
        product: "Live: Buy Now cart does not merge with the existing cart.",
      },
      {
        index: "03",
        stage: "Cart",
        emotion: "The number moved",
        user: "Subtotal doesn't match what they thought they saw on the PDP.",
        product: "Live: subtotal shifts. Evidence: $0.00 → $8.56; prices changing during checkout.",
      },
      {
        index: "04",
        stage: "Checkout",
        emotion: "Fees, stacked",
        user: "Multi-seller baskets add shipping they didn't see as one number.",
        product: "Live: separate shipping fees; fee logic isn't transparent. ~48% of abandonment cites unexpected extra costs.",
      },
      {
        index: "05",
        stage: "Critique",
        emotion: "Wrong reference",
        user: "They were ready to pay. They were not trying to re-pick the variant.",
        product: "First hi-fi made checkout editable. Better: edit in cart, pay in checkout — and study a mobile app, not web.",
      },
    ],
  },
  hifi: {
    headline: "Research first. Pixels second — and still unfinished.",
    summary:
      "The public record of this sprint is the research structure: two stacked problems, regional evidence, benchmarks, and a walkthrough. The interface pass (price up front, variant visible, product on the page) is the thing I would iterate — the file isn't on this site.",
    withheld:
      "Figma stays unpublished. The board includes live-app captures; those don't belong on a public portfolio until that's a clear yes.",
    interventions: [
      {
        title: "Price up front",
        description:
          "Show the original number early so later totals don't read as a bait. The subtotal was often already 'correct' — hidden values made it feel like a jump.",
      },
      {
        title: "Variant, visible",
        description:
          "Make the selected option obvious on the PDP. Do not drag that editor into checkout — people on that page are paying.",
      },
      {
        title: "Fees as one story",
        description:
          "Multi-seller shipping has to explain itself before pay. Unexpected extra cost is the abandonment reason the benchmarks already named.",
      },
    ],
  },
}
