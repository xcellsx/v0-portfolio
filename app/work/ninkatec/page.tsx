import { UiUxCaseStudy } from "@/components/ui-ux-case-study"
import { ninkatecCaseStudy } from "@/lib/ninkatec-case-study-data"

export const metadata = {
  description:
    "Ninkatec: consolidating a manual onboarding operation into a single web flow and system of record. Process case study — artifacts withheld under NDA.",
}

export default function NinkatecPage() {
  return <UiUxCaseStudy study={ninkatecCaseStudy} />
}
