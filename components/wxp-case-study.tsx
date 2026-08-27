"use client"

import { ContactSection } from "@/components/contact-section"
import { CaseStudyBackLink, SpecMatrix } from "@/components/case-study-primitives"
import {
  ColdReadStrip,
  FidelityLadder,
  JourneyStages,
  MethodWhyList,
  ResearchInsightGrid,
} from "@/components/ux-case-study-primitives"
import {
  WxpFidelityFrames,
  WxpFidelityStrip,
  WxpHeroProduct,
  WxpJourneyDiagram,
} from "@/components/wxp-visuals"
import { SectionLabel } from "@/components/section-label"
import {
  wxpColdRead,
  wxpDecisions,
  wxpFidelity,
  wxpJourney,
  wxpMeta,
  wxpOutcome,
  wxpProblem,
  wxpResearch,
  wxpSpecMatrix,
} from "@/lib/wxp-case-study-data"
import { fadeInFromTopClass } from "@/lib/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function WxpCaseStudy() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: matrixRef, isVisible: matrixVisible } = useScrollReveal()
  const { ref: contextRef, isVisible: contextVisible } = useScrollReveal()
  const { ref: researchRef, isVisible: researchVisible } = useScrollReveal()
  const { ref: journeyRef, isVisible: journeyVisible } = useScrollReveal()
  const { ref: fidelityRef, isVisible: fidelityVisible } = useScrollReveal()
  const { ref: decisionsRef, isVisible: decisionsVisible } = useScrollReveal()
  const { ref: outcomeRef, isVisible: outcomeVisible } = useScrollReveal()

  return (
    <div className="bg-offwhite text-offblack">
      <section
        ref={heroRef}
        className="px-[clamp(1.5rem,4vw,5rem)] pt-[clamp(2rem,5vh,4rem)] pb-[clamp(3rem,8vh,5rem)]"
      >
        <CaseStudyBackLink href={wxpMeta.backHref} label={wxpMeta.backLabel} visible={heroVisible} />

        <div className={`space-y-6 ${fadeInFromTopClass(heroVisible)}`}>
          <SectionLabel>[ {wxpMeta.discipline} ]</SectionLabel>
          <p className="font-mono text-[11px] tracking-[0.14em] text-offblack/50 uppercase">
            {wxpMeta.org}
          </p>
          <h1 className="max-w-4xl font-serif text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.08] tracking-[-0.02em] text-terracotta">
            {wxpMeta.title}
          </h1>
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-offblack/75">
            {wxpMeta.tagline}
          </p>
        </div>

        <div
          className={`mt-[clamp(2.5rem,6vh,4rem)] grid gap-4 lg:grid-cols-3 ${fadeInFromTopClass(heroVisible)}`}
          style={{ transitionDelay: "120ms" }}
        >
          <WxpHeroProduct />
          <WxpJourneyDiagram />
          <WxpFidelityStrip />
        </div>
      </section>

      <ColdReadStrip
        problem={wxpColdRead.problem}
        constraint={wxpColdRead.constraint}
        outcome={wxpColdRead.outcome}
      />

      <section
        ref={matrixRef}
        className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <div className={`mb-8 ${fadeInFromTopClass(matrixVisible)}`}>
          <SectionLabel>[ Section 01 // Spec Matrix ]</SectionLabel>
        </div>
        <div className={fadeInFromTopClass(matrixVisible)} style={{ transitionDelay: "100ms" }}>
          <SpecMatrix rows={wxpSpecMatrix} />
        </div>
      </section>

      <section ref={contextRef} className="border-t border-offblack/10">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)] lg:min-h-[28rem]">
            <p
              className={`font-mono text-xs tracking-[0.14em] text-offblack/55 uppercase ${fadeInFromTopClass(contextVisible)}`}
            >
              {wxpProblem.indexLabel}
            </p>
          </div>
          <div className="flex flex-col justify-center px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)] lg:min-h-[28rem]">
            <div className={fadeInFromTopClass(contextVisible)} style={{ transitionDelay: "100ms" }}>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-terracotta">
                {wxpProblem.headline}
              </h2>
              <blockquote className="mt-6 border-l border-offblack/15 pl-5 font-sans text-sm leading-[1.7] text-offblack/80">
                {wxpProblem.quote}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={researchRef}
        className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <div className={`mb-[clamp(2rem,5vh,3rem)] space-y-4 ${fadeInFromTopClass(researchVisible)}`}>
          <SectionLabel>{wxpResearch.sectionLabel}</SectionLabel>
          <h2 className="max-w-3xl font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.2] tracking-[-0.02em]">
            {wxpResearch.headline}
          </h2>
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-offblack/70">
            {wxpResearch.framing}
          </p>
        </div>

        <div
          className={`mb-[clamp(2.5rem,6vh,4rem)] ${fadeInFromTopClass(researchVisible)}`}
          style={{ transitionDelay: "80ms" }}
        >
          <p className="mb-4 font-mono text-[10px] tracking-[0.14em] text-offblack/45 uppercase">
            Research questions
          </p>
          <ul className="space-y-3 border-t border-offblack/10 pt-4">
            {wxpResearch.questions.map((q) => (
              <li
                key={q}
                className="border-b border-offblack/10 pb-3 font-sans text-sm leading-[1.65] text-offblack/80"
              >
                {q}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`mb-[clamp(2.5rem,6vh,4rem)] ${fadeInFromTopClass(researchVisible)}`}
          style={{ transitionDelay: "120ms" }}
        >
          <p className="mb-4 font-mono text-[10px] tracking-[0.14em] text-offblack/45 uppercase">
            Methods — why these, not others
          </p>
          <MethodWhyList methods={wxpResearch.methods} />
        </div>

        <div className={fadeInFromTopClass(researchVisible)} style={{ transitionDelay: "160ms" }}>
          <p className="mb-2 font-mono text-[10px] tracking-[0.14em] text-offblack/45 uppercase">
            Insights wired to decisions
          </p>
          <ResearchInsightGrid insights={wxpResearch.insights} />
        </div>

        <div
          className={`mt-[clamp(2.5rem,6vh,4rem)] border border-offblack/10 bg-[linear-gradient(120deg,rgba(174,34,23,0.06),transparent_55%)] px-[clamp(1.25rem,3vw,2rem)] py-[clamp(1.75rem,4vh,2.5rem)] ${fadeInFromTopClass(researchVisible)}`}
          style={{ transitionDelay: "200ms" }}
        >
          <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">
            {wxpResearch.tension.label}
          </p>
          <h3 className="mt-3 font-serif text-[clamp(1.35rem,2.5vw,1.85rem)] font-medium tracking-[-0.02em] text-offblack">
            {wxpResearch.tension.title}
          </h3>
          <p className="mt-4 max-w-3xl font-sans text-sm leading-[1.7] text-offblack/80">
            {wxpResearch.tension.body}
          </p>
        </div>
      </section>

      <section
        ref={journeyRef}
        className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <div className={`mb-[clamp(2rem,5vh,3rem)] space-y-4 ${fadeInFromTopClass(journeyVisible)}`}>
          <SectionLabel>{wxpJourney.sectionLabel}</SectionLabel>
          <h2 className="max-w-3xl font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.2] tracking-[-0.02em]">
            {wxpJourney.headline}
          </h2>
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-offblack/70">
            {wxpJourney.framing}
          </p>
        </div>
        <div className={fadeInFromTopClass(journeyVisible)} style={{ transitionDelay: "100ms" }}>
          <JourneyStages stages={wxpJourney.stages} />
        </div>
      </section>

      <section
        ref={fidelityRef}
        className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <div className={`mb-[clamp(2rem,5vh,3rem)] space-y-4 ${fadeInFromTopClass(fidelityVisible)}`}>
          <SectionLabel>{wxpFidelity.sectionLabel}</SectionLabel>
          <h2 className="max-w-3xl font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.2] tracking-[-0.02em]">
            {wxpFidelity.headline}
          </h2>
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-offblack/70">
            {wxpFidelity.framing}
          </p>
        </div>
        <div className={fadeInFromTopClass(fidelityVisible)} style={{ transitionDelay: "100ms" }}>
          <FidelityLadder steps={wxpFidelity.steps} />
        </div>
        <div
          className={`mt-8 ${fadeInFromTopClass(fidelityVisible)}`}
          style={{ transitionDelay: "160ms" }}
        >
          <WxpFidelityFrames />
        </div>
      </section>

      <section
        ref={decisionsRef}
        className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <div className={`mb-[clamp(2rem,5vh,3rem)] space-y-4 ${fadeInFromTopClass(decisionsVisible)}`}>
          <SectionLabel>{wxpDecisions.sectionLabel}</SectionLabel>
          <h2 className="max-w-3xl font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.2] tracking-[-0.02em]">
            {wxpDecisions.headline}
          </h2>
        </div>
        <div className={`space-y-0 border-t border-offblack/10 ${fadeInFromTopClass(decisionsVisible)}`}>
          {wxpDecisions.items.map((item) => (
            <div
              key={item.chose}
              className="grid gap-4 border-b border-offblack/10 py-6 lg:grid-cols-3"
            >
              <div>
                <p className="font-mono text-[10px] tracking-[0.12em] text-terracotta uppercase">
                  Chose
                </p>
                <p className="mt-2 font-sans text-sm font-medium leading-[1.55] text-offblack">
                  {item.chose}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/40 uppercase">
                  Refused
                </p>
                <p className="mt-2 font-sans text-sm leading-[1.55] text-offblack/70">
                  {item.refused}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/40 uppercase">
                  Why
                </p>
                <p className="mt-2 font-sans text-sm leading-[1.55] text-offblack/75">{item.why}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        ref={outcomeRef}
        className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <div className={`mb-[clamp(2rem,5vh,3rem)] space-y-4 ${fadeInFromTopClass(outcomeVisible)}`}>
          <SectionLabel>{wxpOutcome.sectionLabel}</SectionLabel>
          <h2 className="max-w-3xl font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.2] tracking-[-0.02em]">
            {wxpOutcome.headline}
          </h2>
        </div>

        <div
          className={`grid gap-0 border-t border-offblack/10 md:grid-cols-3 ${fadeInFromTopClass(outcomeVisible)}`}
        >
          {wxpOutcome.results.map((result, index) => (
            <div
              key={result.label}
              className={`border-b border-offblack/10 py-6 md:border-b-0 md:px-5 ${
                index > 0 ? "md:border-l md:border-offblack/10" : "md:pl-0"
              }`}
            >
              <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">
                {result.label}
              </p>
              <p className="mt-3 font-sans text-sm leading-[1.65] text-offblack/80">
                {result.detail}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-[clamp(2.5rem,6vh,4rem)] max-w-3xl ${fadeInFromTopClass(outcomeVisible)}`}
          style={{ transitionDelay: "120ms" }}
        >
          <p className="font-mono text-[10px] tracking-[0.14em] text-offblack/45 uppercase">
            {wxpOutcome.reflection.title}
          </p>
          <p className="mt-3 font-sans text-sm leading-[1.7] text-offblack/80">
            {wxpOutcome.reflection.body}
          </p>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
