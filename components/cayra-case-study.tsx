"use client"

import { ContactSection } from "@/components/contact-section"
import {
  CaseStudyBackLink,
  ContextSplit,
  DeepDiveRows,
  SpecMatrix,
} from "@/components/case-study-primitives"
import { SectionLabel } from "@/components/section-label"
import {
  cayraContext,
  cayraEvolution,
  cayraHeroVideo,
  cayraMethodology,
  cayraPrototype,
  cayraSpecMatrix,
} from "@/lib/cayra-case-study-data"
import { fadeInFromTopClass } from "@/lib/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function CayraCaseStudy() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: matrixRef, isVisible: matrixVisible } = useScrollReveal()
  const { ref: contextRef, isVisible: contextVisible } = useScrollReveal()
  const { ref: methodRef, isVisible: methodVisible } = useScrollReveal()

  return (
    <div className="bg-offwhite text-offblack">
      <section
        ref={heroRef}
        className="px-[clamp(1.5rem,4vw,5rem)] pt-[clamp(2rem,5vh,4rem)] pb-[clamp(3rem,8vh,5rem)]"
      >
        <CaseStudyBackLink href="/work/3d-design" visible={heroVisible} />

        <div className={`space-y-6 ${fadeInFromTopClass(heroVisible)}`}>
          <SectionLabel>[ 3D Design // Product ]</SectionLabel>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.1] tracking-[-0.02em] text-terracotta">
            Cayra
          </h1>
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-offblack/75">
            Toolless BetaFPV Airframe Redesign — Fusion 360
          </p>
        </div>

        <div
          className={`mt-[clamp(2.5rem,6vh,4rem)] flex justify-center ${fadeInFromTopClass(heroVisible)}`}
          style={{ transitionDelay: "120ms" }}
        >
          <video
            src={cayraHeroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="h-auto w-full max-w-[min(90vw,72rem)] object-contain"
          />
        </div>
      </section>

      <section
        ref={matrixRef}
        className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <div className={`mb-8 ${fadeInFromTopClass(matrixVisible)}`}>
          <SectionLabel>[ Section 01 // Technical Spec Matrix ]</SectionLabel>
        </div>
        <div className={fadeInFromTopClass(matrixVisible)} style={{ transitionDelay: "100ms" }}>
          <SpecMatrix rows={cayraSpecMatrix} />
        </div>
      </section>

      <section ref={contextRef} className="border-t border-offblack/10">
        <ContextSplit
          indexLabel={cayraContext.indexLabel}
          headline={cayraContext.headline}
          quote={cayraContext.quote}
          visible={contextVisible}
        />
      </section>

      <section
        ref={methodRef}
        className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <div className={`mb-8 ${fadeInFromTopClass(methodVisible)}`}>
          <SectionLabel>[ Section 02 // Methodology ]</SectionLabel>
        </div>
        <div
          className={`grid gap-6 border-t border-[#E5E7EB] sm:grid-cols-2 ${fadeInFromTopClass(methodVisible)}`}
          style={{ transitionDelay: "100ms" }}
        >
          {cayraMethodology.map((step, index) => (
            <div
              key={step.title}
              className={`space-y-2 border-b border-[#E5E7EB] py-5 ${
                index % 2 === 0 ? "sm:pr-6" : "sm:pl-6"
              }`}
            >
              <p className="font-mono text-[10px] tracking-[0.12em] text-terracotta uppercase">
                [ 0{index + 1} // {step.title} ]
              </p>
              <p className="font-sans text-sm leading-[1.6] text-offblack/80">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-offblack/10">
        <div className="px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2rem,5vh,3rem)]">
          <SectionLabel>[ Section 03 // Build Evolution ]</SectionLabel>
        </div>
        <DeepDiveRows items={cayraEvolution} />
      </section>

      <section className="border-t border-offblack/10">
        <div className="px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2rem,5vh,3rem)]">
          <SectionLabel>[ Section 04 // Final Prototype ]</SectionLabel>
        </div>
        <DeepDiveRows items={cayraPrototype} />
      </section>

      <ContactSection />
    </div>
  )
}
