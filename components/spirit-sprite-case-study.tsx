"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { ContactSection } from "@/components/contact-section"
import {
  CaseStudyBackLink,
  ContextSplit,
  SpecMatrix,
} from "@/components/case-study-primitives"
import { SectionLabel } from "@/components/section-label"
import { IridescentCard } from "@/components/iridescent-blob"
import {
  spiritSpriteContext,
  spiritSpriteEvolution,
  spiritSpriteHeroVideo,
  spiritSpriteManual,
  spiritSpriteMethodology,
  spiritSpriteOtherProjects,
  spiritSpriteSpecMatrix,
} from "@/lib/spirit-sprite-case-study-data"
import { fadeInFromTopClass } from "@/lib/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

function statusClass(status: string) {
  switch (status) {
    case "COMPLETE":
    case "DEPLOYED":
      return "bg-green-500/20 text-green-600"
    case "IN PROGRESS":
      return "bg-blue-500/20 text-blue-600"
    case "REJECTED":
      return "bg-yellow-500/20 text-yellow-700"
    default:
      return "bg-red-500/20 text-red-600"
  }
}

export function SpiritSpriteCaseStudy() {
  const [currentEvolution, setCurrentEvolution] = useState(0)
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: matrixRef, isVisible: matrixVisible } = useScrollReveal()
  const { ref: contextRef, isVisible: contextVisible } = useScrollReveal()
  const { ref: methodRef, isVisible: methodVisible } = useScrollReveal()
  const { ref: evolutionRef, isVisible: evolutionVisible } = useScrollReveal()
  const { ref: manualRef, isVisible: manualVisible } = useScrollReveal()

  const phase = spiritSpriteEvolution[currentEvolution]

  return (
    <div className="bg-offwhite text-offblack">
      <section
        ref={heroRef}
        className="px-[clamp(1.5rem,4vw,5rem)] pt-[clamp(2rem,5vh,4rem)] pb-[clamp(3rem,8vh,5rem)]"
      >
        <CaseStudyBackLink href="/work/3d-design" visible={heroVisible} />

        <div className={`space-y-6 ${fadeInFromTopClass(heroVisible)}`}>
          <SectionLabel>[ 3D Design // Character ]</SectionLabel>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.1] tracking-[-0.02em] text-terracotta">
            Spirit Sprite
          </h1>
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-offblack/75">
            Avatar-inspired spirit animation around the Tree of Life — Blender
          </p>
        </div>

        <div
          className={`mt-[clamp(2.5rem,6vh,4rem)] overflow-hidden ${fadeInFromTopClass(heroVisible)}`}
          style={{ transitionDelay: "120ms" }}
        >
          <video
            src={spiritSpriteHeroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="aspect-video h-auto w-full object-cover"
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
          <SpecMatrix rows={spiritSpriteSpecMatrix} />
        </div>
      </section>

      <section ref={contextRef} className="border-t border-offblack/10">
        <ContextSplit
          indexLabel={spiritSpriteContext.indexLabel}
          headline={spiritSpriteContext.headline}
          quote={spiritSpriteContext.quote}
          visible={contextVisible}
        />
        <div className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] pb-[clamp(3rem,8vh,5rem)]">
          <p className={`max-w-3xl font-sans text-sm leading-relaxed text-offblack/75 ${fadeInFromTopClass(contextVisible)}`}>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-terracotta">
              [ The Goal ]
            </span>
            <span className="mt-2 block">{spiritSpriteContext.goal}</span>
          </p>
        </div>
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
          {spiritSpriteMethodology.map((step, index) => (
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

      <section
        ref={evolutionRef}
        className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <div className={`mb-8 ${fadeInFromTopClass(evolutionVisible)}`}>
          <SectionLabel>[ Section 03 // Build Evolution ]</SectionLabel>
        </div>

        <div className={`flex items-center gap-4 sm:gap-8 ${fadeInFromTopClass(evolutionVisible)}`}>
          <button
            type="button"
            onClick={() =>
              setCurrentEvolution(
                (prev) => (prev - 1 + spiritSpriteEvolution.length) % spiritSpriteEvolution.length,
              )
            }
            className="shrink-0 p-2 transition-opacity hover:opacity-60"
            aria-label="Previous evolution phase"
          >
            <ChevronLeft className="size-5 sm:size-6" />
          </button>

          <div className="min-w-0 flex-1">
            <div className="relative mb-4 aspect-video overflow-hidden bg-offblack/5">
              {phase?.video ? (
                <video
                  src={phase.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="size-full object-cover"
                />
              ) : phase?.image ? (
                <Image src={phase.image} alt={phase.phase} fill className="object-cover" />
              ) : (
                <IridescentCard className="size-full" />
              )}
            </div>
            <div className="mb-2 flex flex-col items-center gap-2">
              <h3 className="text-center font-sans text-sm font-medium">{phase?.phase}</h3>
              <span className={`rounded px-2 py-0.5 font-mono text-[10px] uppercase ${statusClass(phase?.status ?? "")}`}>
                {phase?.status}
              </span>
            </div>
            <p className="px-2 text-center font-sans text-xs leading-relaxed text-offblack/70 sm:text-sm">
              {phase?.description}
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setCurrentEvolution((prev) => (prev + 1) % spiritSpriteEvolution.length)
            }
            className="shrink-0 p-2 transition-opacity hover:opacity-60"
            aria-label="Next evolution phase"
          >
            <ChevronRight className="size-5 sm:size-6" />
          </button>
        </div>
      </section>

      <section
        ref={manualRef}
        className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <div className={`mb-8 ${fadeInFromTopClass(manualVisible)}`}>
          <SectionLabel>[ Section 04 // Final Render ]</SectionLabel>
        </div>
        <div className={`grid gap-4 sm:grid-cols-2 ${fadeInFromTopClass(manualVisible)}`}>
          {spiritSpriteManual.map((slide) => (
            <div key={slide.title} className="group relative aspect-[4/3] overflow-hidden bg-offblack/5">
              {slide.image ? (
                <Image src={slide.image} alt={slide.title} fill className="object-cover" />
              ) : slide.video ? (
                <video
                  src={slide.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="size-full object-cover"
                />
              ) : (
                <IridescentCard className="size-full" />
              )}
              <div className="absolute inset-x-0 bottom-0 bg-offwhite/90 p-3">
                <p className="font-sans text-xs font-medium">{slide.title}</p>
                <p className="mt-1 font-sans text-xs leading-relaxed text-offblack/65">{slide.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]">
        <SectionLabel className="mb-8">[ Related Projects ]</SectionLabel>
        <div className="grid gap-6 md:grid-cols-2">
          {spiritSpriteOtherProjects.map((project) => (
            <Link key={project.title} href={project.href} className="group space-y-3">
              <div className="relative aspect-[16/9] overflow-hidden bg-offblack/5 transition-opacity group-hover:opacity-80">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-sans text-sm font-medium">{project.title}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-offblack/55">
                    [{project.category}]
                  </p>
                </div>
                <span className="font-mono text-xs text-offblack/55">{project.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
