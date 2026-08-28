import { UiUxCaseStudy } from "@/components/ui-ux-case-study"
import { gxsCaseStudy } from "@/lib/gxs-case-study-data"

export const metadata = {
  description:
    "GXS Bank: Money Lock workflow fit and Invest UI preference testing during a product design internship. Process case study — product screens not published.",
}

export default function GxsPage() {
  return <UiUxCaseStudy study={gxsCaseStudy} />
}
