"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ContactSection } from "@/components/contact-section"
import { LabDirectorySandbox } from "@/components/lab-directory-sandbox"
import { labAssets, threeDMeta } from "@/lib/three-d-design-data"
import { PageIntroLedger } from "@/components/page-intro-ledger"
import { SectionLabel } from "@/components/section-label"
import { fadeInFromTopClass } from "@/lib/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function ThreeDDesignIndex() {
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
          <SectionLabel>[ 3D Design ]</SectionLabel>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.1] tracking-[-0.02em] text-terracotta">
            Playground
          </h1>
          <PageIntroLedger
            description="Select a file from the index to preview meshes, renders, and animation loops."
            stats={[
              { label: "Volume", value: threeDMeta.volume },
              { label: "Archive", value: threeDMeta.quantity },
              { label: "Stack", value: threeDMeta.medium },
            ]}
          />

          <LabDirectorySandbox assets={labAssets} />
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
