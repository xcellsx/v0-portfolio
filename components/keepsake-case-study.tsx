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
  keepsakeBlueprint,
  keepsakeContext,
  keepsakeLive,
  keepsakeSpecMatrix,
} from "@/lib/keepsake-case-study-data"
import { fadeInFromTopClass } from "@/lib/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function KeepsakeCaseStudy() {
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
          <SectionLabel>[ Web Development ]</SectionLabel>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.1] tracking-[-0.02em] text-terracotta">
            The Keepsake
          </h1>
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-offblack/75">
            Digital Sanctuary for Paper-Star Wishes
          </p>
          <CaseStudyLiveActions liveUrl={keepsakeLive.url} />
        </div>

        <div
          className={`mt-[clamp(2.5rem,6vh,4rem)] flex justify-center ${fadeInFromTopClass(heroVisible)}`}
          style={{ transitionDelay: "120ms" }}
        >
          <Image
            src="/images/keepsake/main-image.png"
            alt="The Keepsake web app"
            width={1200}
            height={800}
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
          <SpecMatrix rows={keepsakeSpecMatrix} />
        </div>
      </section>

      <section ref={contextRef} className="border-t border-offblack/10">
        <ContextSplit
          indexLabel={keepsakeContext.indexLabel}
          headline={keepsakeContext.headline}
          quote={keepsakeContext.quote}
          visible={contextVisible}
        />
      </section>

      <section className="border-t border-offblack/10">
        <div className="px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2rem,5vh,3rem)]">
          <SectionLabel>[ Section 02 // The Blueprint ]</SectionLabel>
        </div>
        <DeepDiveRows items={keepsakeBlueprint} />
      </section>

      <ContactSection />
    </div>
  )
}
