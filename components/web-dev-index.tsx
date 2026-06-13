"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ContactSection } from "@/components/contact-section"
import { PageIntroLedger } from "@/components/page-intro-ledger"
import { RepositoryWorkbench } from "@/components/repository-workbench"
import { SectionLabel } from "@/components/section-label"
import { webDevMeta, webDevRepositories, webDevStack } from "@/lib/web-dev-data"
import { fadeInFromTopClass } from "@/lib/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

function StackMatrix() {
  return (
    <div className="border-t border-[#E5E7EB] pt-[clamp(2rem,5vh,3rem)]">
      <SectionLabel className="mb-4 text-[11px] tracking-[0.14em]">
        [ Stack // Current Build ]
      </SectionLabel>
      {webDevStack.map((row) => (
        <div
          key={row.metric}
          className="grid gap-3 border-b border-[#E5E7EB] py-4 sm:grid-cols-[minmax(8rem,20%)_1fr]"
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

export function WebDevIndex() {
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

        <div className={`space-y-[clamp(2rem,5vh,3rem)] ${fadeInFromTopClass(heroVisible)}`}>
          <SectionLabel>[ Web Development ]</SectionLabel>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.1] tracking-[-0.02em] text-terracotta">
            Code Workbench
          </h1>
          <PageIntroLedger
            description="Production repositories framed as live engineering readouts — select a repo to inspect the deployment ledger and live preview."
            stats={[
              { label: "Volume", value: webDevMeta.volume },
              { label: "Deploy", value: webDevMeta.quantity },
              { label: "Stack", value: webDevMeta.medium },
            ]}
          />

          <RepositoryWorkbench repositories={webDevRepositories} />
          <StackMatrix />
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
