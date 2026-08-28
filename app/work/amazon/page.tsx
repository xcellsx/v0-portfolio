import { UiUxCaseStudy } from "@/components/ui-ux-case-study"
import { amazonCaseStudy } from "@/lib/amazon-case-study-data"

export const metadata = {
  description:
    "Amazon speculative redesign: unifying add-to-cart across product variants. Interview exercise — not an Amazon engagement.",
}

export default function AmazonPage() {
  return <UiUxCaseStudy study={amazonCaseStudy} />
}
