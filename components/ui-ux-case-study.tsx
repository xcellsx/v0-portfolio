"use client"

import Image from "next/image"
import { ContactSection } from "@/components/contact-section"
import {
  CaseStudyBackLink,
  CaseStudyLiveActions,
  OutcomeLead,
  SpecMatrix,
} from "@/components/case-study-primitives"
import { SectionLabel } from "@/components/section-label"
import type { UiUxCaseStudyData } from "@/lib/ui-ux-case-study-types"
import { fadeInFromTopClass } from "@/lib/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

function ResearchSection({
  study,
  visible,
}: {
  study: UiUxCaseStudyData
  visible: boolean
}) {
  return (
    <div className={`space-y-8 ${fadeInFromTopClass(visible)}`}>
      <div className="space-y-4">
        <SectionLabel>[ Research // Discovery ]</SectionLabel>
        <h2 className="max-w-3xl font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.2] tracking-[-0.02em]">
          {study.research.headline}
        </h2>
        <p className="max-w-2xl font-sans text-sm leading-[1.65] text-offblack/75">
          {study.research.summary}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {study.research.methods.map((column) => (
          <div key={column.label} className="space-y-3 border border-offblack/10 p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">
              [ {column.label} ]
            </p>
            <ul className="accent-list space-y-2 pl-4">
              {column.items.map((item) => (
                <li key={item} className="font-sans text-sm leading-[1.6] text-offblack/75">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <blockquote className="border-l border-terracotta/50 pl-5">
        <p className="font-sans text-sm leading-[1.7] text-offblack/85">{study.research.lesson}</p>
      </blockquote>
    </div>
  )
}

function JourneySection({
  study,
  visible,
}: {
  study: UiUxCaseStudyData
  visible: boolean
}) {
  return (
    <div className={fadeInFromTopClass(visible)}>
      <div className="mb-[clamp(2rem,5vh,3rem)] space-y-4">
        <SectionLabel>[ {study.journey.label} ]</SectionLabel>
        <h2 className="max-w-3xl font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.2] tracking-[-0.02em]">
          {study.journey.headline}
        </h2>
        <p className="max-w-2xl font-sans text-sm leading-[1.65] text-offblack/75">
          {study.journey.summary}
        </p>
      </div>

      <div className="hidden border-b border-offblack/10 pb-3 lg:grid lg:grid-cols-[4.5rem_minmax(9rem,18%)_1fr_1fr] lg:gap-6">
        <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/40 uppercase">#</p>
        <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/40 uppercase">Stage</p>
        <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/40 uppercase">User</p>
        <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/40 uppercase">Product</p>
      </div>

      {study.journey.stages.map((stage) => (
        <article
          key={stage.index}
          className="grid gap-3 border-b border-offblack/10 py-5 lg:grid-cols-[4.5rem_minmax(9rem,18%)_1fr_1fr] lg:gap-6 lg:items-start"
        >
          <p className="font-mono text-xs tracking-[0.14em] text-terracotta uppercase">{stage.index}</p>
          <div>
            <p className="font-serif text-lg font-medium leading-tight tracking-[-0.01em]">{stage.stage}</p>
            <p className="mt-1 font-mono text-[10px] tracking-[0.12em] text-offblack/45 uppercase">
              [ {stage.emotion} ]
            </p>
          </div>
          <p className="font-sans text-sm leading-[1.65] text-offblack/80">
            <span className="mb-1 block font-mono text-[10px] tracking-[0.12em] text-offblack/40 uppercase lg:hidden">
              User
            </span>
            {stage.user}
          </p>
          <p className="font-sans text-sm leading-[1.65] text-offblack/65">
            <span className="mb-1 block font-mono text-[10px] tracking-[0.12em] text-offblack/40 uppercase lg:hidden">
              Product
            </span>
            {stage.product}
          </p>
        </article>
      ))}
    </div>
  )
}

function HifiSection({
  study,
  visible,
}: {
  study: UiUxCaseStudyData
  visible: boolean
}) {
  return (
    <div className={`space-y-8 ${fadeInFromTopClass(visible)}`}>
      <div className="space-y-4">
        <SectionLabel>[ Interface // High Fidelity ]</SectionLabel>
        <h2 className="max-w-3xl font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.2] tracking-[-0.02em]">
          {study.hifi.headline}
        </h2>
        <p className="max-w-2xl font-sans text-sm leading-[1.65] text-offblack/75">
          {study.hifi.summary}
        </p>
        {study.hifi.withheld ? (
          <p className="max-w-2xl font-mono text-[10px] leading-relaxed tracking-[0.08em] text-offblack/45 uppercase">
            {study.hifi.withheld}
          </p>
        ) : null}
      </div>

      {study.hifi.preview ? (
        <div className="overflow-hidden border border-offblack/10 bg-offblack/[0.02] p-3 sm:p-5">
          <Image
            src={study.hifi.preview.src}
            alt={study.hifi.preview.alt}
            width={study.hifi.preview.width}
            height={study.hifi.preview.height}
            className="h-auto w-full object-contain"
            sizes="(max-width: 768px) 100vw, 90vw"
          />
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-3">
        {study.hifi.interventions.map((item) => (
          <div key={item.title} className="space-y-3 border border-offblack/10 p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">
              [ {item.title} ]
            </p>
            <p className="font-sans text-sm leading-[1.65] text-offblack/80">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function UiUxCaseStudy({ study }: { study: UiUxCaseStudyData }) {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: breakdownRef, isVisible: breakdownVisible } = useScrollReveal()
  const { ref: researchRef, isVisible: researchVisible } = useScrollReveal()
  const { ref: journeyRef, isVisible: journeyVisible } = useScrollReveal()
  const { ref: hifiRef, isVisible: hifiVisible } = useScrollReveal()

  return (
    <div className="bg-offwhite text-offblack">
      <section
        ref={heroRef}
        className="px-[clamp(1.5rem,4vw,5rem)] pt-[clamp(2rem,5vh,4rem)] pb-[clamp(3rem,8vh,5rem)]"
      >
        <CaseStudyBackLink href="/work/ui-ux" label="UI / UX" visible={heroVisible} />

        <div className={`space-y-6 ${fadeInFromTopClass(heroVisible)}`}>
          <SectionLabel>[ {study.eyebrow} ]</SectionLabel>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.1] tracking-[-0.02em] text-terracotta">
            {study.title}
          </h1>
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-offblack/75">
            {study.subtitle}
          </p>
          {study.confidentiality ? (
            <p className="max-w-xl font-mono text-[10px] leading-relaxed tracking-[0.08em] text-offblack/45 uppercase">
              {study.confidentiality}
            </p>
          ) : null}
          <CaseStudyLiveActions
            liveUrl={study.live?.url}
            liveNote={study.live?.note}
            figmaUrl={study.live?.figmaUrl}
          />
        </div>

        <div className="mt-[clamp(2rem,5vh,3rem)]">
          <OutcomeLead
            problem={study.problem}
            outcome={study.outcome}
            visible={heroVisible}
          />
        </div>
      </section>

      <section
        ref={breakdownRef}
        className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <div className={`mb-8 space-y-3 ${fadeInFromTopClass(breakdownVisible)}`}>
          <SectionLabel>[ Project Breakdown ]</SectionLabel>
          <p className="max-w-2xl font-sans text-sm leading-[1.65] text-offblack/75">
            A structured overview of the challenge, solution, and execution context.
          </p>
        </div>
        <div className={fadeInFromTopClass(breakdownVisible)} style={{ transitionDelay: "100ms" }}>
          <SpecMatrix rows={study.breakdown} />
        </div>
      </section>

      <section
        ref={researchRef}
        className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <ResearchSection study={study} visible={researchVisible} />
      </section>

      <section
        ref={journeyRef}
        className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <JourneySection study={study} visible={journeyVisible} />
      </section>

      <section
        ref={hifiRef}
        className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <HifiSection study={study} visible={hifiVisible} />
      </section>

      <ContactSection />
    </div>
  )
}
