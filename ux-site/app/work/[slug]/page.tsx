import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CaseStudyView } from "@/components/case-study"
import { caseStudies, getCaseStudy, site } from "@/lib/content"

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return { title: site.title }
  return {
    title: `${study.title} — ${site.title}`,
    description: study.summary,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()
  return <CaseStudyView study={study} />
}
