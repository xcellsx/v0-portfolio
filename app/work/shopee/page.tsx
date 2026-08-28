import { UiUxCaseStudy } from "@/components/ui-ux-case-study"
import { shopeeCaseStudy } from "@/lib/shopee-case-study-data"

export const metadata = {
  description:
    "Shopee speculative redesign: price honesty, variant confirmation, and on-page product decisions. Interview exercise — not a Shopee engagement.",
}

export default function ShopeePage() {
  return <UiUxCaseStudy study={shopeeCaseStudy} />
}
