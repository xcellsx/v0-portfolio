"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ContactSection } from "@/components/contact-section"
import { PageIntroLedger } from "@/components/page-intro-ledger"
import { SectionLabel } from "@/components/section-label"
import { uiUxMeta, uiUxProjects, uiUxWorkflow } from "@/lib/ui-ux-data"
import { fadeDelayStyle, fadeInFromTopClass } from "@/lib/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

function WorkflowStep({
  step,
  index,
}: {
  step: (typeof uiUxWorkflow)[number]
  index: number
}) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <article
      ref={ref}
      className={`grid gap-3 border-b border-offblack/10 py-5 sm:grid-cols-[minmax(5rem,12%)_minmax(8rem,22%)_1fr] sm:gap-6 ${fadeInFromTopClass(isVisible)}`}
      style={fadeDelayStyle(index * 70)}
    >
      <p className="font-mono text-xs tracking-[0.14em] text-terracotta uppercase">
        {step.index}
      </p>
      <div>
        <p className="font-serif text-lg font-medium leading-tight tracking-[-0.01em] text-offblack">
          {step.phase}
        </p>
        <p className="mt-1 font-mono text-[10px] tracking-[0.12em] text-offblack/45 uppercase">
          [ {step.label} ]
        </p>
      </div>
      <p className="font-sans text-sm leading-[1.65] text-offblack/80">{step.description}</p>
    </article>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof uiUxProjects)[number]
  index: number
}) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <article
      ref={ref}
      className={`border border-offblack/10 ${fadeInFromTopClass(isVisible)}`}
      style={fadeDelayStyle(index * 90)}
    >
      <div className="grid lg:grid-cols-12">
        <div className="border-b border-offblack/10 p-5 sm:p-6 lg:col-span-5 lg:border-b-0 lg:border-r lg:border-offblack/10">
          <SectionLabel className="text-[10px] tracking-[0.14em]">
            [ Case Study // {project.title} ]
          </SectionLabel>

          <h3 className="mt-4 font-serif text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.15] tracking-[-0.02em] text-terracotta">
            {project.title}
          </h3>
          <p className="mt-2 font-sans text-sm leading-relaxed text-offblack/70">
            {project.subtitle}
          </p>

          <div className="mt-6 space-y-5">
            <div className="space-y-2 border-l-2 border-terracotta/40 pl-4">
              <p className="font-mono text-[10px] tracking-[0.12em] text-terracotta uppercase">
                Problem
              </p>
              <p className="font-sans text-sm leading-[1.65] text-offblack/85">{project.problem}</p>
            </div>

            <div className="space-y-2 border-l-2 border-offblack/15 pl-4">
              <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/55 uppercase">
                Outcome
              </p>
              <p className="font-sans text-sm leading-[1.65] text-offblack/85">{project.outcome}</p>
            </div>
          </div>

          <dl className="mt-6 space-y-3 border-t border-offblack/10 pt-5">
            <div>
              <dt className="font-mono text-[10px] tracking-[0.12em] text-offblack/45 uppercase">
                Role
              </dt>
              <dd className="mt-1 font-sans text-sm text-offblack/80">{project.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.12em] text-offblack/45 uppercase">
                Timeline
              </dt>
              <dd className="mt-1 font-sans text-sm text-offblack/80">{project.timeline}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.12em] text-offblack/45 uppercase">
                Stack
              </dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-offblack/15 px-2 py-1 font-mono text-[9px] tracking-[0.1em] text-offblack/60 uppercase"
                  >
                    [{tag}]
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={project.caseStudyHref}
              className="group inline-flex items-center gap-2 border border-offblack/20 px-3 py-2 font-mono text-[10px] tracking-[0.12em] uppercase transition-colors hover:border-terracotta hover:bg-terracotta hover:text-offwhite"
            >
              View Breakdown
              <ArrowUpRight
                className="size-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.5}
              />
            </Link>
            {project.liveUrl ? (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-offblack/20 px-3 py-2 font-mono text-[10px] tracking-[0.12em] uppercase transition-colors hover:border-terracotta hover:text-terracotta"
              >
                Live Prototype
                <ArrowUpRight
                  className="size-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </Link>
            ) : null}
          </div>
        </div>

        <div className="flex items-center justify-center bg-offblack/[0.02] p-5 sm:p-6 lg:col-span-7">
          <Image
            src={project.previewImage}
            alt={`${project.title} preview`}
            width={project.previewWidth}
            height={project.previewHeight}
            className="h-auto w-full max-w-2xl object-contain"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </div>
    </article>
  )
}

export function UiUxIndex() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: workflowRef, isVisible: workflowVisible } = useScrollReveal()

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
          <SectionLabel>[ UI / UX ]</SectionLabel>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.1] tracking-[-0.02em] text-terracotta">
            Interface Lab
          </h1>
          <PageIntroLedger
            description="How I move from user pain points to shipped interfaces — with problem framing and measurable outcomes at every step."
            stats={[
              { label: "Volume", value: uiUxMeta.volume },
              { label: "Archive", value: uiUxMeta.quantity },
              { label: "Stack", value: uiUxMeta.medium },
            ]}
          />
        </div>
      </section>

      <section
        ref={workflowRef}
        className="border-b border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2.5rem,6vh,4rem)]"
      >
        <div className={`mb-8 space-y-3 ${fadeInFromTopClass(workflowVisible)}`}>
          <SectionLabel>[ Workflow // End-to-End Process ]</SectionLabel>
          <p className="max-w-2xl font-sans text-sm leading-[1.65] text-offblack/75">
            Every project follows the same four-phase arc — from understanding the friction to
            validating the fix.
          </p>
        </div>

        <div className="border-t border-offblack/10">
          {uiUxWorkflow.map((step, index) => (
            <WorkflowStep key={step.phase} step={step} index={index} />
          ))}
        </div>
      </section>

      <section className="px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2.5rem,6vh,4rem)]">
        <div className="mb-8 space-y-3">
          <SectionLabel>[ Projects // Case Studies ]</SectionLabel>
          <p className="max-w-2xl font-sans text-sm leading-[1.65] text-offblack/75">
            Each entry highlights the problem I was solving and the outcome delivered — with a
            full breakdown inside.
          </p>
        </div>

        <div className="space-y-8">
          {uiUxProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
