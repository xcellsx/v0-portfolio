"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ContactSection } from "@/components/contact-section"
import {
  resumeBuilds,
  resumeEducation,
  resumeExperience,
  resumeLinks,
  resumeMeta,
  resumeSkills,
  resumeSummary,
} from "@/lib/resume-data"
import { SectionLabel } from "@/components/section-label"
import { fadeDelayStyle, fadeInFromTopClass } from "@/lib/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

function QuickActionLink({
  label,
  href,
  download,
  external,
  primary,
}: {
  label: string
  href: string
  download?: string
  external?: boolean
  primary?: boolean
}) {
  const className = primary
    ? "group inline-flex items-center gap-2 border-2 border-terracotta px-4 py-2.5 font-mono text-xs tracking-[0.12em] uppercase text-terracotta transition-colors hover:bg-terracotta hover:text-offwhite"
    : "group inline-flex items-center gap-2 border border-offblack/20 px-4 py-2.5 font-mono text-xs tracking-[0.12em] uppercase transition-colors hover:border-terracotta hover:bg-terracotta hover:text-offwhite"

  const arrow = (
    <ArrowUpRight
      className="size-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      strokeWidth={1.5}
    />
  )

  if (download) {
    return (
      <a href={href} download={download} className={className}>
        {label}
        {arrow}
      </a>
    )
  }

  if (external) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
        {arrow}
      </Link>
    )
  }

  return (
    <Link href={href} className={className}>
      {label}
      {arrow}
    </Link>
  )
}

export function ResumePageContent() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollReveal()
  const { ref: educationRef, isVisible: educationVisible } = useScrollReveal()
  const { ref: toolkitRef, isVisible: toolkitVisible } = useScrollReveal()
  const { ref: archiveRef, isVisible: archiveVisible } = useScrollReveal()

  return (
    <div className="bg-offwhite text-offblack">
      <section
        ref={heroRef}
        className="border-b border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] pt-[clamp(2rem,5vh,4rem)] pb-[clamp(2rem,5vh,3rem)]"
      >
        <Link
          href="/"
          scroll
          className={`group home-link mb-[clamp(2rem,5vh,3rem)] inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] ${fadeInFromTopClass(heroVisible, "duration-700")}`}
        >
          <ArrowUpRight
            className="size-3 shrink-0 rotate-180 transition-transform group-hover:-translate-x-0.5"
            strokeWidth={1.5}
          />
          Home
        </Link>

        <div className={`space-y-[clamp(2rem,5vh,3rem)] ${fadeInFromTopClass(heroVisible, "duration-700")}`}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <SectionLabel>[ System_Profile // Intro ]</SectionLabel>
              <h1 className="font-serif text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.02em] text-terracotta">
                {resumeMeta.name}
              </h1>
              <p className="font-sans text-base text-offblack/90">{resumeMeta.title}</p>
              <p className="font-mono text-sm tracking-[0.1em] text-offblack/55 uppercase">
                {resumeMeta.location} // {resumeMeta.email}
              </p>
            </div>

            <div
              className="flex flex-wrap gap-3"
              style={fadeDelayStyle(120)}
            >
              <QuickActionLink
                label="Download PDF"
                href={resumeMeta.pdfHref}
                download={resumeMeta.pdfDownload}
                primary
              />
              {resumeLinks.map((link) => (
                <QuickActionLink
                  key={link.label}
                  label={link.label}
                  href={link.href}
                  external
                />
              ))}
            </div>
          </div>

          <div
            className={`border-t border-[#E5E7EB] ${fadeInFromTopClass(heroVisible, "duration-700")}`}
            style={fadeDelayStyle(200)}
          >
            <div className="py-4">
              <SectionLabel>[ Summary ]</SectionLabel>
            </div>
            <p className="max-w-[65ch] border-b border-[#E5E7EB] pb-6 font-sans text-base leading-[1.6] text-offblack">
              {resumeSummary}
            </p>
          </div>
        </div>
      </section>

      <section
        ref={experienceRef}
        className="border-b border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2rem,5vh,3rem)]"
      >
        <div className={fadeInFromTopClass(experienceVisible)} style={fadeDelayStyle(0)}>
          <SectionLabel>[ Experience // Data_Log ]</SectionLabel>
        </div>

        <div className="mt-8 space-y-8">
          {resumeExperience.map((entry, index) => (
            <article
              key={entry.period}
              className={`space-y-3 border-b border-[#E5E7EB] pb-8 last:border-b-0 ${fadeInFromTopClass(experienceVisible)}`}
              style={fadeDelayStyle(80 + index * 100)}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="font-sans text-base font-medium text-offblack">{entry.role}</h2>
                <p className="font-mono text-xs tracking-[0.12em] text-terracotta uppercase">
                  {entry.period}
                </p>
              </div>
              <p className="font-mono text-xs tracking-[0.12em] text-offblack/40 uppercase">
                {entry.org}
              </p>
              <ul className="accent-list space-y-2 pl-5">
                {entry.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 32)}
                    className="font-sans text-base leading-[1.6] text-offblack/85"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        ref={educationRef}
        className="border-b border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2rem,5vh,3rem)]"
      >
        <div className={fadeInFromTopClass(educationVisible)} style={fadeDelayStyle(0)}>
          <SectionLabel>[ Education // Credentials ]</SectionLabel>
        </div>

        <div className="mt-8 space-y-8">
          {resumeEducation.map((entry, index) => (
            <article
              key={entry.period}
              className={`grid gap-3 border-b border-[#E5E7EB] pb-8 last:border-b-0 sm:grid-cols-[minmax(8rem,18%)_1fr] ${fadeInFromTopClass(educationVisible)}`}
              style={fadeDelayStyle(80 + index * 100)}
            >
              <p className="font-mono text-xs tracking-[0.12em] text-terracotta uppercase">
                {entry.period}
              </p>
              <div className="space-y-2">
                <p className="font-sans text-base font-medium text-offblack">{entry.credential}</p>
                <p className="font-mono text-xs tracking-[0.12em] text-offblack/40 uppercase">
                  {entry.institution}
                </p>
                <p className="font-sans text-base leading-[1.6] text-offblack/85">{entry.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        ref={toolkitRef}
        className="border-b border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2rem,5vh,3rem)]"
      >
        <div className={fadeInFromTopClass(toolkitVisible)} style={fadeDelayStyle(0)}>
          <SectionLabel>[ Toolkit ]</SectionLabel>
        </div>

        <div className="mt-8 border-t border-[#E5E7EB]">
          {resumeSkills.map((track, index) => (
            <div
              key={track.index}
              className={`grid gap-3 border-b border-[#E5E7EB] py-4 sm:grid-cols-[minmax(8rem,20%)_1fr] ${fadeInFromTopClass(toolkitVisible)}`}
              style={fadeDelayStyle(80 + index * 80)}
            >
              <SectionLabel className="text-xs font-medium tracking-[0.12em]">
                [ {track.index} // {track.label} ]
              </SectionLabel>
              <p className="font-sans text-base text-offblack">{track.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        ref={archiveRef}
        className="px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2rem,5vh,3rem)]"
      >
        <div className={fadeInFromTopClass(archiveVisible)} style={fadeDelayStyle(0)}>
          <SectionLabel>[ Archive // Core_Repositories ]</SectionLabel>
        </div>

        <div
          className={`mt-6 space-y-1.5 font-mono text-base leading-[1.8] text-offblack/80 ${fadeInFromTopClass(archiveVisible)}`}
          style={fadeDelayStyle(80)}
        >
          <p className="text-offblack/55">📁 PROJECTS_VOL.01</p>
          {resumeBuilds.map((build, index) => {
            const isLast = index === resumeBuilds.length - 1
            const prefix = isLast ? "└──" : "├──"
            const row = (
              <span
                className={`flex flex-wrap items-baseline gap-x-2 gap-y-1 pl-4 ${fadeInFromTopClass(archiveVisible)}`}
                style={fadeDelayStyle(120 + index * 70)}
              >
                <span className="text-offblack/40">{prefix}</span>
                <span className="text-offblack">📄 {build.filename}</span>
                <span className="text-xs tracking-[0.1em] text-terracotta uppercase">
                  [{build.tag}]
                </span>
                <span className="text-offblack/40">──</span>
                <span className="font-sans text-base text-offblack/75">{build.description}</span>
              </span>
            )

            if (build.href) {
              return (
                <Link
                  key={build.filename}
                  href={build.href}
                  className="block transition-colors hover:text-terracotta"
                >
                  {row}
                </Link>
              )
            }

            return <div key={build.filename}>{row}</div>
          })}
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
