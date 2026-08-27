"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ContactSection } from "@/components/contact-section"
import { CaseStudyBackLink } from "@/components/case-study-primitives"
import { SectionLabel } from "@/components/section-label"
import {
  uxIncomingSlots,
  uxPortfolioIntro,
  uxProjects,
} from "@/lib/ux-portfolio-data"
import { fadeInFromTopClass } from "@/lib/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function UxPortfolioIndex() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: principlesRef, isVisible: principlesVisible } = useScrollReveal()
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollReveal()

  return (
    <div className="bg-offwhite text-offblack">
      <section
        ref={heroRef}
        className="relative overflow-hidden px-[clamp(1.5rem,4vw,5rem)] pt-[clamp(2rem,5vh,4rem)] pb-[clamp(3rem,8vh,5rem)]"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 100% 0%, rgba(174,34,23,0.09), transparent 55%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(28,27,24,0.05), transparent 50%)",
          }}
        />
        <div className="relative">
          <CaseStudyBackLink href="/" label="Home" visible={heroVisible} />
          <div className={`max-w-3xl space-y-6 ${fadeInFromTopClass(heroVisible)}`}>
            <SectionLabel>[ {uxPortfolioIntro.label} ]</SectionLabel>
            <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.25rem)] font-medium leading-[1.05] tracking-[-0.02em] text-terracotta">
              {uxPortfolioIntro.headline}
            </h1>
            <p className="max-w-2xl font-sans text-[clamp(0.9375rem,1.5vw,1.0625rem)] leading-relaxed text-offblack/75">
              {uxPortfolioIntro.lede}
            </p>
          </div>
        </div>
      </section>

      <section
        ref={principlesRef}
        className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,7vh,4.5rem)]"
      >
        <div className={`mb-8 ${fadeInFromTopClass(principlesVisible)}`}>
          <SectionLabel>[ Practice Standards ]</SectionLabel>
          <p className="mt-3 max-w-xl font-sans text-sm text-offblack/60">
            Aligned with how hiring managers cold-read UX portfolios in 2025–26: decisions over
            deliverables, insights wired to UI, honest trade-offs.
          </p>
        </div>
        <div className="grid gap-0 border-t border-offblack/10 md:grid-cols-3">
          {uxPortfolioIntro.principles.map((principle, index) => (
            <div
              key={principle.title}
              className={`border-b border-offblack/10 py-6 md:border-b-0 md:px-6 ${
                index > 0 ? "md:border-l md:border-offblack/10" : "md:pl-0"
              } ${fadeInFromTopClass(principlesVisible)}`}
              style={{ transitionDelay: `${80 + index * 70}ms` }}
            >
              <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">
                0{index + 1}
              </p>
              <h2 className="mt-3 font-serif text-xl font-medium tracking-[-0.02em] text-offblack">
                {principle.title}
              </h2>
              <p className="mt-3 font-sans text-sm leading-[1.65] text-offblack/70">
                {principle.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        ref={projectsRef}
        className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <div className={`mb-[clamp(2rem,5vh,3rem)] ${fadeInFromTopClass(projectsVisible)}`}>
          <SectionLabel>[ Selected Case Studies ]</SectionLabel>
        </div>

        <ul className="space-y-0 border-t border-offblack/10">
          {uxProjects.map((project, index) => (
            <li
              key={project.id}
              className={`border-b border-offblack/10 ${fadeInFromTopClass(projectsVisible)}`}
              style={{ transitionDelay: `${100 + index * 80}ms` }}
            >
              <Link
                href={project.href}
                className="group grid gap-6 py-[clamp(1.75rem,4vh,2.75rem)] transition-colors lg:grid-cols-[4rem_1fr_auto]"
              >
                <p className="font-mono text-sm tracking-[0.12em] text-offblack/35">
                  {project.number}
                </p>
                <div className="min-w-0 space-y-3">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-serif text-[clamp(1.35rem,2.5vw,2rem)] font-medium tracking-[-0.02em] text-terracotta transition-colors group-hover:text-offblack">
                      {project.title}
                    </h3>
                    {project.org ? (
                      <span className="font-mono text-[10px] tracking-[0.12em] text-offblack/45 uppercase">
                        {project.org}
                      </span>
                    ) : null}
                  </div>
                  <p className="font-sans text-sm text-offblack/65">{project.subtitle}</p>
                  <p className="max-w-2xl font-sans text-sm leading-[1.65] text-offblack/80">
                    <span className="font-mono text-[10px] tracking-[0.1em] text-terracotta uppercase">
                      Research ·{" "}
                    </span>
                    {project.researchFocus}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1 font-mono text-[10px] tracking-[0.12em] text-offblack/55 uppercase">
                    {project.tags.map((tag) => (
                      <span key={tag}>[ {tag} ]</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4 lg:flex-col lg:items-end">
                  <span className="font-mono text-[10px] tracking-[0.12em] text-offblack/40 uppercase">
                    {project.coverHint}
                  </span>
                  <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-offblack transition-colors group-hover:text-terracotta">
                    Open case
                    <ArrowUpRight
                      className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div
          className={`mt-[clamp(2.5rem,6vh,4rem)] ${fadeInFromTopClass(projectsVisible)}`}
          style={{ transitionDelay: "240ms" }}
        >
          <SectionLabel>[ Incoming — Ready For Your Dumps ]</SectionLabel>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {uxIncomingSlots.map((slot) => (
              <div
                key={slot.number}
                className="border border-dashed border-offblack/20 px-5 py-6"
              >
                <p className="font-mono text-[11px] tracking-[0.14em] text-offblack/35">
                  {slot.number}
                </p>
                <p className="mt-2 font-serif text-lg font-medium tracking-[-0.02em] text-offblack/70">
                  {slot.label}
                </p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-offblack/50">
                  {slot.hint}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
