"use client"

import Image from "next/image"
import { ContactSection } from "@/components/contact-section"
import { CaseStudyBackLink, CaseStudyLiveActions } from "@/components/case-study-primitives"
import {
  ColdReadStrip,
  MethodWhyList,
  ResearchInsightGrid,
} from "@/components/ux-case-study-primitives"
import { SectionLabel } from "@/components/section-label"
import {
  serenityColdRead,
  serenityComponents,
  serenityLive,
  serenityResearch,
  serenitySpecMatrix,
  serenitySteps,
} from "@/lib/serenity-case-study-data"
import { fadeInFromTopClass } from "@/lib/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

function SpecMatrix() {
  return (
    <div className="border-t border-[#E5E7EB]">
      {serenitySpecMatrix.map((row, index) => (
        <div
          key={row.metric}
          className={`grid gap-4 border-b border-[#E5E7EB] py-4 sm:grid-cols-[minmax(10rem,28%)_1fr] sm:gap-8 ${
            index === 0 ? "" : ""
          }`}
        >
          <SectionLabel className="text-[11px] tracking-[0.12em]">
            [ {row.metric} ]
          </SectionLabel>
          <p className="font-sans text-sm leading-[1.6] text-offblack">{row.specification}</p>
        </div>
      ))}
    </div>
  )
}

const STEP_GRAPHIC_CLASS =
  "mx-auto h-auto w-full max-w-[min(92vw,26rem)] object-contain min-[1100px]:max-w-none"
const COMPONENT_GRAPHIC_CLASS = "mx-auto h-auto w-full object-contain"

function FlowConnector() {
  return (
    <div
      className="flex shrink-0 items-center justify-center"
      aria-hidden
    >
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

function StepCopy({
  step,
}: {
  step: (typeof serenitySteps)[number]
}) {
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

function CaseStudyGraphic({
  src,
  alt,
  width,
  height,
  className = STEP_GRAPHIC_CLASS,
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes="(max-width: 1100px) 92vw, (max-width: 1536px) 33vw, 520px"
    />
  )
}

export function SerenityCaseStudy() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: matrixRef, isVisible: matrixVisible } = useScrollReveal()
  const { ref: contextRef, isVisible: contextVisible } = useScrollReveal()

  return (
    <div className="bg-offwhite text-offblack">
      <section
        ref={heroRef}
        className="px-[clamp(1.5rem,4vw,5rem)] pt-[clamp(2rem,5vh,4rem)] pb-[clamp(3rem,8vh,5rem)]"
      >
        <CaseStudyBackLink href="/work/ui-ux" label="UI/UX Index" visible={heroVisible} />

        <div className={`space-y-6 ${fadeInFromTopClass(heroVisible)}`}>
          <SectionLabel>[ UI // UX ]</SectionLabel>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.1] tracking-[-0.02em] text-terracotta">
            Serenity
          </h1>
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-offblack/75">
            Automated Task Architecture &amp; Cognitive Sanctuary
          </p>
          <CaseStudyLiveActions
            liveUrl={serenityLive.url}
            liveNote={serenityLive.mobileNote}
          />
        </div>

        <div
          className={`mt-[clamp(2.5rem,6vh,4rem)] flex justify-center ${fadeInFromTopClass(heroVisible)}`}
          style={{ transitionDelay: "120ms" }}
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

      <ColdReadStrip
        problem={serenityColdRead.problem}
        constraint={serenityColdRead.constraint}
        outcome={serenityColdRead.outcome}
      />

      <section
        ref={matrixRef}
        className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <div className={`mb-8 ${fadeInFromTopClass(matrixVisible)}`}>
          <SectionLabel>[ Section 01 // The Technical Spec Matrix ]</SectionLabel>
        </div>
        <div className={fadeInFromTopClass(matrixVisible)} style={{ transitionDelay: "100ms" }}>
          <SpecMatrix />
        </div>
      </section>

      <section
        ref={contextRef}
        className="border-t border-offblack/10"
      >
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)] lg:min-h-[28rem]">
            <p
              className={`font-mono text-xs tracking-[0.14em] text-offblack/55 uppercase ${fadeInFromTopClass(contextVisible)}`}
            >
              [ 01 / The Patient Problem ]
            </p>
          </div>
          <div className="flex flex-col justify-center px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)] lg:min-h-[28rem]">
            <div className={fadeInFromTopClass(contextVisible)} style={{ transitionDelay: "100ms" }}>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-terracotta">
                The Cognitive Cost of Order.
              </h2>
              <blockquote className="mt-6 border-l border-offblack/15 pl-5 font-sans text-sm leading-[1.7] text-offblack/80">
                Traditional productivity systems fail people who already feel overwhelmed
                because they rely on heavy visual friction. Red notification dots, infinite
                nested calendar menus, and manual micro-input forms create immediate task
                paralysis. The problem isn&apos;t a lack of organization; it&apos;s the steep
                energy tax required to establish it.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]">
        <div className="mb-[clamp(2rem,5vh,3rem)] space-y-4">
          <SectionLabel>{serenityResearch.sectionLabel}</SectionLabel>
          <h2 className="max-w-3xl font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.2] tracking-[-0.02em]">
            {serenityResearch.headline}
          </h2>
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-offblack/70">
            {serenityResearch.framing}
          </p>
        </div>

        <div className="mb-[clamp(2.5rem,6vh,4rem)]">
          <p className="mb-4 font-mono text-[10px] tracking-[0.14em] text-offblack/45 uppercase">
            Research questions
          </p>
          <ul className="space-y-3 border-t border-offblack/10 pt-4">
            {serenityResearch.questions.map((q) => (
              <li
                key={q}
                className="border-b border-offblack/10 pb-3 font-sans text-sm leading-[1.65] text-offblack/80"
              >
                {q}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-[clamp(2.5rem,6vh,4rem)]">
          <p className="mb-4 font-mono text-[10px] tracking-[0.14em] text-offblack/45 uppercase">
            Methods — why these, not others
          </p>
          <MethodWhyList methods={serenityResearch.methods} />
        </div>

        <div>
          <p className="mb-2 font-mono text-[10px] tracking-[0.14em] text-offblack/45 uppercase">
            Insights wired to decisions
          </p>
          <ResearchInsightGrid insights={serenityResearch.insights} />
        </div>

        <div className="mt-[clamp(2.5rem,6vh,4rem)] border border-offblack/10 bg-[linear-gradient(120deg,rgba(174,34,23,0.06),transparent_55%)] px-[clamp(1.25rem,3vw,2rem)] py-[clamp(1.75rem,4vh,2.5rem)]">
          <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">
            {serenityResearch.tension.label}
          </p>
          <h3 className="mt-3 font-serif text-[clamp(1.35rem,2.5vw,1.85rem)] font-medium tracking-[-0.02em] text-offblack">
            {serenityResearch.tension.title}
          </h3>
          <p className="mt-4 max-w-3xl font-sans text-sm leading-[1.7] text-offblack/80">
            {serenityResearch.tension.body}
          </p>
        </div>
      </section>

      <section className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]">
        <div className="mb-[clamp(2rem,5vh,3rem)] space-y-4">
          <SectionLabel>[ Section 03 // The Core Hybrid System ]</SectionLabel>
          <p className="font-mono text-[11px] tracking-[0.14em] text-offblack/55 uppercase">
            [ Protocol // Automated Chunking ]
          </p>
          <h2 className="max-w-3xl font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.2] tracking-[-0.02em]">
            Directing the Engine, Guarding the Interface.
          </h2>
        </div>

        <div className="min-[1100px]:hidden">
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

        <div className="hidden min-[1100px]:block">
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
          <SectionLabel>[ Section 04 // Deep-Dive Component Systems ]</SectionLabel>
        </div>

        {serenityComponents.map((component, index) => (
          <div
            key={component.title}
            className={`grid border-t border-offblack/10 lg:grid-cols-2 ${
              index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="flex items-center justify-center px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2rem,5vh,3.5rem)]">
              <CaseStudyGraphic
                src={component.src}
                alt={component.title}
                width={component.width}
                height={component.height}
                className={COMPONENT_GRAPHIC_CLASS}
              />
            </div>
            <div className="flex flex-col justify-center px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2rem,5vh,3.5rem)]">
              <h3 className="font-mono text-[11px] tracking-[0.14em] text-offblack/55 uppercase">
                {component.title}
              </h3>
              <blockquote className="mt-5 border-l border-offblack/15 pl-5 font-sans text-sm leading-[1.7] text-offblack/80">
                {component.quote}
              </blockquote>
            </div>
          </div>
        ))}
      </section>

      <ContactSection />
    </div>
  )
}
