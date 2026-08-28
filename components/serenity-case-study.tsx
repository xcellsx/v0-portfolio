"use client"

import Image from "next/image"
import { ContactSection } from "@/components/contact-section"
import {
  CaseStudyBackLink,
  CaseStudyGraphic,
  CaseStudyLiveActions,
  DeepDiveRows,
  OutcomeLead,
  SpecMatrix,
} from "@/components/case-study-primitives"
import { SectionLabel } from "@/components/section-label"
import {
  serenityBreakdown,
  serenityComponents,
  serenityHifi,
  serenityJourney,
  serenityLive,
  serenityOutcome,
  serenityProblem,
  serenityResearch,
  serenitySteps,
} from "@/lib/serenity-case-study-data"
import { fadeInFromTopClass } from "@/lib/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

function FlowConnector() {
  return (
    <div className="flex shrink-0 items-center justify-center" aria-hidden>
      <div className="flex flex-col items-center gap-1 py-2 min-[1100px]:hidden">
        <span className="h-8 w-px bg-offblack/20" />
        <span className="font-mono text-[11px] leading-none text-offblack/35">↓</span>
      </div>
      <div className="hidden min-[1100px]:flex items-center px-1">
        <span className="h-px w-[clamp(1.25rem,2vw,2rem)] bg-offblack/20" />
        <span className="px-0.5 font-mono text-[10px] leading-none text-offblack/35">➔</span>
      </div>
    </div>
  )
}

function StepCopy({ step }: { step: (typeof serenitySteps)[number] }) {
  return (
    <div className="w-full max-w-[26rem] space-y-2 min-[1100px]:max-w-none">
      <h3 className="font-sans text-sm font-medium text-offblack">{step.step}</h3>
      <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/50 uppercase">
        [ {step.label} ]
      </p>
      {"technicalAnchor" in step && step.technicalAnchor ? (
        <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/40 uppercase">
          [ {step.technicalAnchor} ]
        </p>
      ) : null}
      <p className="font-sans text-sm leading-[1.6] text-offblack/75">{step.description}</p>
    </div>
  )
}

function ResearchSection({ visible }: { visible: boolean }) {
  return (
    <div className={`space-y-8 ${fadeInFromTopClass(visible)}`}>
      <div className="space-y-4">
        <SectionLabel>[ Research // Discovery ]</SectionLabel>
        <h2 className="max-w-3xl font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.2] tracking-[-0.02em]">
          {serenityResearch.headline}
        </h2>
        <p className="max-w-2xl font-sans text-sm leading-[1.65] text-offblack/75">
          {serenityResearch.summary}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {serenityResearch.methods.map((column) => (
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
        <p className="font-sans text-sm leading-[1.7] text-offblack/85">{serenityResearch.lesson}</p>
      </blockquote>
    </div>
  )
}

function JourneySection({ visible }: { visible: boolean }) {
  return (
    <div className={fadeInFromTopClass(visible)}>
      <div className="mb-[clamp(2rem,5vh,3rem)] space-y-4">
        <SectionLabel>[ Journey // Completing a Task ]</SectionLabel>
        <h2 className="max-w-3xl font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.2] tracking-[-0.02em]">
          {serenityJourney.headline}
        </h2>
        <p className="max-w-2xl font-sans text-sm leading-[1.65] text-offblack/75">
          {serenityJourney.summary}
        </p>
      </div>

      <div className="hidden border-b border-offblack/10 pb-3 lg:grid lg:grid-cols-[4.5rem_minmax(9rem,18%)_1fr_1fr] lg:gap-6">
        <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/40 uppercase">#</p>
        <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/40 uppercase">Stage</p>
        <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/40 uppercase">User</p>
        <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/40 uppercase">Product</p>
      </div>

      {serenityJourney.stages.map((stage) => (
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

export function SerenityCaseStudy() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: breakdownRef, isVisible: breakdownVisible } = useScrollReveal()
  const { ref: researchRef, isVisible: researchVisible } = useScrollReveal()
  const { ref: journeyRef, isVisible: journeyVisible } = useScrollReveal()
  const { ref: flowRef, isVisible: flowVisible } = useScrollReveal()

  return (
    <div className="bg-offwhite text-offblack">
      <section
        ref={heroRef}
        className="px-[clamp(1.5rem,4vw,5rem)] pt-[clamp(2rem,5vh,4rem)] pb-[clamp(3rem,8vh,5rem)]"
      >
        <CaseStudyBackLink href="/work/ui-ux" label="UI / UX" visible={heroVisible} />

        <div className={`space-y-6 ${fadeInFromTopClass(heroVisible)}`}>
          <SectionLabel>[ Case Study // Serenity ]</SectionLabel>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.1] tracking-[-0.02em] text-terracotta">
            Serenity
          </h1>
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-offblack/75">
            Automated Task Architecture &amp; Cognitive Sanctuary
          </p>
          <CaseStudyLiveActions
            liveUrl={serenityLive.url}
            liveNote={serenityLive.mobileNote}
            figmaUrl={serenityLive.figmaUrl}
          />
        </div>

        <div className="mt-[clamp(2rem,5vh,3rem)]">
          <OutcomeLead
            problem={serenityProblem}
            outcome={serenityOutcome}
            visible={heroVisible}
          />
        </div>

        <div
          className={`mt-[clamp(2.5rem,6vh,4rem)] flex justify-center ${fadeInFromTopClass(heroVisible)}`}
          style={{ transitionDelay: "180ms" }}
        >
          <Image
            src="/images/projects/serenity/screen.png"
            alt="Serenity app screens"
            width={1239}
            height={648}
            priority
            className="h-auto w-full max-w-[min(90vw,72rem)] object-contain"
            sizes="(max-width: 768px) 100vw, 85vw"
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
          <SpecMatrix rows={serenityBreakdown} />
        </div>
      </section>

      <section
        ref={researchRef}
        className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <ResearchSection visible={researchVisible} />
      </section>

      <section
        ref={journeyRef}
        className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <JourneySection visible={journeyVisible} />
      </section>

      <section
        ref={flowRef}
        className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <div className={`mb-[clamp(2rem,5vh,3rem)] space-y-4 ${fadeInFromTopClass(flowVisible)}`}>
          <SectionLabel>[ Interface // High Fidelity ]</SectionLabel>
          <p className="font-mono text-[11px] tracking-[0.14em] text-offblack/55 uppercase">
            [ Protocol // Automated Chunking ]
          </p>
          <h2 className="max-w-3xl font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.2] tracking-[-0.02em]">
            {serenityHifi.headline}
          </h2>
          <p className="max-w-2xl font-sans text-sm leading-[1.65] text-offblack/75">
            {serenityHifi.summary}
          </p>
        </div>

        <div className={`min-[1100px]:hidden ${fadeInFromTopClass(flowVisible)}`}>
          {serenitySteps.map((step, index) => (
            <div key={step.step}>
              <div className="flex flex-col items-center gap-5">
                <CaseStudyGraphic
                  src={step.src}
                  alt={step.step}
                  width={step.width}
                  height={step.height}
                />
                <StepCopy step={step} />
              </div>
              {index < serenitySteps.length - 1 ? (
                <div className="flex justify-center">
                  <FlowConnector />
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className={`hidden min-[1100px]:block ${fadeInFromTopClass(flowVisible)}`}>
          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-1">
            {serenitySteps.map((step, index) => (
              <div key={step.step} className="contents">
                <div className="flex justify-center">
                  <CaseStudyGraphic
                    src={step.src}
                    alt={step.step}
                    width={step.width}
                    height={step.height}
                  />
                </div>
                {index < serenitySteps.length - 1 ? <FlowConnector /> : null}
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-3 gap-[clamp(1.5rem,2.5vw,2rem)]">
            {serenitySteps.map((step) => (
              <StepCopy key={step.step} step={step} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-offblack/10">
        <div className="px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2rem,5vh,3rem)]">
          <SectionLabel>[ Component Deep-Dives ]</SectionLabel>
          <p className="mt-3 max-w-2xl font-sans text-sm leading-[1.65] text-offblack/75">
            Key interface systems and the design rationale behind each.
          </p>
        </div>
        <DeepDiveRows items={serenityComponents} />
      </section>

      <ContactSection />
    </div>
  )
}
