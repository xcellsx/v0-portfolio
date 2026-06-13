"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ContactSection } from "@/components/contact-section"
import { PageIntroLedger } from "@/components/page-intro-ledger"
import { PosterLedgerFrame } from "@/components/poster-ledger-frame"
import {
  alphabeticalOrderMeta,
  alphabeticalPosters,
  type AlphabetPoster,
} from "@/lib/graphic-design-data"
import { SectionLabel } from "@/components/section-label"
import { fadeInFromTopClass } from "@/lib/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

function formatEntryLabel(poster: AlphabetPoster) {
  return `${poster.index} :: ${poster.letter} :: ${poster.title}`
}

export function GraphicDesignGallery() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()

  return (
    <div className="bg-offwhite text-offblack">
      <section
        ref={heroRef}
        className="border-b border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] pt-[clamp(2rem,5vh,4rem)] pb-[clamp(2rem,5vh,3rem)]"
      >
        <Link
          href="/"
          scroll
          className={`group home-link mb-[clamp(2rem,5vh,3rem)] inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] ${fadeInFromTopClass(heroVisible)}`}
        >
          <ArrowUpRight
            className="size-3 shrink-0 rotate-180 transition-transform group-hover:-translate-x-0.5"
            strokeWidth={1.5}
          />
          Home
        </Link>

        <div className={`space-y-[clamp(1.5rem,4vh,2.5rem)] ${fadeInFromTopClass(heroVisible)}`}>
          <SectionLabel>[ Graphic Design ]</SectionLabel>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.1] tracking-[-0.02em] text-terracotta">
            Poster A Day
          </h1>
          <PageIntroLedger
            description="A sequential A–Z poster archive — vector typography, 3D renders, and motion loops in one editorial grid."
            stats={[
              { label: "Series", value: alphabeticalOrderMeta.series },
              { label: "Archive", value: alphabeticalOrderMeta.quantity },
              { label: "Medium", value: alphabeticalOrderMeta.medium },
            ]}
          />

          <div className="grid grid-cols-2 gap-x-[clamp(0.75rem,2vw,1.25rem)] gap-y-[clamp(1.5rem,4vh,2.5rem)] overflow-visible lg:grid-cols-4">
            {alphabeticalPosters.map((poster, index) => (
              <div key={poster.id} className="flex min-w-0 flex-col gap-2">
                <PosterLedgerFrame
                  image={poster.image}
                  hoverImage={poster.hoverImage}
                  video={poster.video}
                  videoFallback={poster.videoFallback}
                  alt={poster.alt}
                  width={poster.width}
                  height={poster.height}
                  priority={index === 0}
                  compact
                />
                <div className="space-y-1.5">
                  <SectionLabel className="text-[9px] leading-snug tracking-[0.1em]">
                    [ {formatEntryLabel(poster)} ]
                  </SectionLabel>
                  <p className="font-sans text-xs leading-[1.65] text-offblack/75">
                    {poster.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
