"use client"

import Image from "next/image"
import { ContactSection } from "@/components/contact-section"
import {
  CaseStudyBackLink,
  CaseStudyLiveActions,
  ContextSplit,
  DeepDiveRows,
  SpecMatrix,
} from "@/components/case-study-primitives"
import { SectionLabel } from "@/components/section-label"
import {
  twinPagodasContext,
  twinPagodasEvolution,
  twinPagodasLive,
  twinPagodasScreens,
  twinPagodasSpecMatrix,
} from "@/lib/twin-pagodas-case-study-data"
import { fadeInFromTopClass } from "@/lib/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function TwinPagodasCaseStudy() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: matrixRef, isVisible: matrixVisible } = useScrollReveal()
  const { ref: contextRef, isVisible: contextVisible } = useScrollReveal()

  return (
    <div className="bg-offwhite text-offblack">
      <section
        ref={heroRef}
        className="px-[clamp(1.5rem,4vw,5rem)] pt-[clamp(2rem,5vh,4rem)] pb-[clamp(3rem,8vh,5rem)]"
      >
        <CaseStudyBackLink href="/work/web-development" visible={heroVisible} />

        <div className={`space-y-6 ${fadeInFromTopClass(heroVisible)}`}>
          <SectionLabel>[ Web Development // 3D ]</SectionLabel>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.1] tracking-[-0.02em] text-terracotta">
            Twin Pagodas
          </h1>
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-offblack/75">
            Scroll-Driven Cultural Tourism Microsite
          </p>
          <CaseStudyLiveActions liveUrl={twinPagodasLive.url} />
        </div>

        <div
          className={`mt-[clamp(2.5rem,6vh,4rem)] flex justify-center ${fadeInFromTopClass(heroVisible)}`}
          style={{ transitionDelay: "120ms" }}
        >
          <Image
            src="/images/twin-pagodas/landing-page.png"
            alt="Twin Pagodas web experience"
            width={1400}
            height={900}
            priority
            className="h-auto w-full max-w-[min(90vw,72rem)] object-contain"
            sizes="(max-width: 768px) 100vw, 85vw"
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
          <SpecMatrix rows={twinPagodasSpecMatrix} />
        </div>
      </section>

      <section ref={contextRef} className="border-t border-offblack/10">
        <ContextSplit
          indexLabel={twinPagodasContext.indexLabel}
          headline={twinPagodasContext.headline}
          quote={twinPagodasContext.quote}
          visible={contextVisible}
        />
      </section>

      <section className="border-t border-offblack/10">
        <div className="px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2rem,5vh,3rem)]">
          <SectionLabel>[ Section 02 // Build Evolution ]</SectionLabel>
        </div>
        <DeepDiveRows items={twinPagodasEvolution} />
      </section>

      <section className="border-t border-offblack/10">
        <div className="px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2rem,5vh,3rem)]">
          <SectionLabel>[ Section 03 // Live Interface ]</SectionLabel>
        </div>
        <DeepDiveRows items={twinPagodasScreens} />
      </section>

      <ContactSection />
    </div>
  )
}
