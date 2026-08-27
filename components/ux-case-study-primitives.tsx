"use client"

import { fadeInFromTopClass } from "@/lib/scroll-reveal"
import { SectionLabel } from "@/components/section-label"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function ColdReadStrip({
  problem,
  constraint,
  outcome,
}: {
  problem: string
  constraint: string
  outcome: string
}) {
  const { ref, isVisible } = useScrollReveal()
  const cells = [
    { label: "Problem", body: problem },
    { label: "Constraint", body: constraint },
    { label: "Outcome", body: outcome },
  ] as const

  return (
    <section
      ref={ref}
      className="border-t border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2.5rem,6vh,4rem)]"
      aria-label="Case study cold read"
    >
      <div className={`mb-8 ${fadeInFromTopClass(isVisible)}`}>
        <SectionLabel>[ Cold Read // 30 Seconds ]</SectionLabel>
        <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-offblack/65">
          Problem, constraint, outcome — before the scroll. Process artifacts support these answers;
          they don&apos;t replace them.
        </p>
      </div>
      <div className="grid gap-0 border-t border-offblack/10 md:grid-cols-3">
        {cells.map((cell, index) => (
          <div
            key={cell.label}
            className={`border-b border-offblack/10 py-6 md:border-b-0 md:px-6 md:py-8 ${
              index > 0 ? "md:border-l md:border-offblack/10 md:pl-8" : "md:pl-0"
            } ${index < cells.length - 1 ? "" : ""} ${fadeInFromTopClass(isVisible)}`}
            style={{ transitionDelay: `${100 + index * 80}ms` }}
          >
            <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">
              {cell.label}
            </p>
            <p className="mt-3 font-sans text-sm leading-[1.65] text-offblack/85">{cell.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ResearchInsightGrid({
  insights,
}: {
  insights: readonly {
    id: string
    finding: string
    evidence: string
    decision: string
    artifact: string
  }[]
}) {
  return (
    <div className="space-y-0 border-t border-offblack/10">
      {insights.map((insight, index) => (
        <article
          key={insight.id}
          className="grid gap-6 border-b border-offblack/10 py-[clamp(2rem,5vh,3rem)] lg:grid-cols-[minmax(6rem,12%)_1fr]"
        >
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-terracotta uppercase">
              {insight.id}
            </p>
            <p className="mt-2 font-mono text-[10px] tracking-[0.1em] text-offblack/40 uppercase">
              Insight {String(index + 1).padStart(2, "0")}
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="max-w-3xl font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium leading-[1.25] tracking-[-0.02em] text-offblack">
              {insight.finding}
            </h3>
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/45 uppercase">
                  Evidence
                </p>
                <p className="mt-2 font-sans text-sm leading-[1.65] text-offblack/75">
                  {insight.evidence}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/45 uppercase">
                  Decision
                </p>
                <p className="mt-2 font-sans text-sm leading-[1.65] text-offblack/75">
                  {insight.decision}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/45 uppercase">
                  Wired to
                </p>
                <p className="mt-2 font-sans text-sm leading-[1.65] text-offblack/75">
                  {insight.artifact}
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export function MethodWhyList({
  methods,
}: {
  methods: readonly { method: string; why: string; n: string }[]
}) {
  return (
    <div className="border-t border-offblack/10">
      {methods.map((row) => (
        <div
          key={row.method}
          className="grid gap-3 border-b border-offblack/10 py-5 sm:grid-cols-[minmax(10rem,28%)_1fr_minmax(8rem,22%)] sm:gap-6"
        >
          <p className="font-mono text-[11px] tracking-[0.1em] text-offblack uppercase">
            {row.method}
          </p>
          <p className="font-sans text-sm leading-[1.6] text-offblack/75">{row.why}</p>
          <p className="font-mono text-[10px] tracking-[0.08em] text-offblack/45 uppercase">
            {row.n}
          </p>
        </div>
      ))}
    </div>
  )
}

export function JourneyStages({
  stages,
}: {
  stages: readonly {
    stage: string
    actor: string
    action: string
    pain: string
    designMove: string
  }[]
}) {
  return (
    <div className="grid gap-0 border-t border-offblack/10 md:grid-cols-2 xl:grid-cols-4">
      {stages.map((stage, index) => (
        <div
          key={stage.stage}
          className={`border-b border-offblack/10 py-6 md:px-5 xl:border-b-0 ${
            index % 2 === 1 ? "md:border-l md:border-offblack/10" : ""
          } ${index > 0 ? "xl:border-l xl:border-offblack/10" : ""}`}
        >
          <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">
            {stage.stage}
          </p>
          <p className="mt-3 font-mono text-[10px] tracking-[0.1em] text-offblack/40 uppercase">
            {stage.actor}
          </p>
          <p className="mt-3 font-sans text-sm font-medium leading-[1.5] text-offblack">
            {stage.action}
          </p>
          <div className="mt-5 space-y-3">
            <div>
              <p className="font-mono text-[9px] tracking-[0.12em] text-offblack/40 uppercase">
                Pain
              </p>
              <p className="mt-1 font-sans text-xs leading-[1.6] text-offblack/70">{stage.pain}</p>
            </div>
            <div>
              <p className="font-mono text-[9px] tracking-[0.12em] text-terracotta/80 uppercase">
                Design move
              </p>
              <p className="mt-1 font-sans text-xs leading-[1.6] text-offblack/80">
                {stage.designMove}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function FidelityLadder({
  steps,
}: {
  steps: readonly {
    fidelity: string
    question: string
    learning: string
    shown: string
  }[]
}) {
  return (
    <div className="space-y-0 border-t border-offblack/10">
      {steps.map((step, index) => (
        <div
          key={step.fidelity}
          className="grid gap-6 border-b border-offblack/10 py-[clamp(2rem,5vh,3rem)] lg:grid-cols-[minmax(7rem,14%)_1fr]"
        >
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-terracotta uppercase">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 font-serif text-xl font-medium tracking-[-0.02em] text-offblack">
              {step.fidelity}
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/45 uppercase">
                Question answered
              </p>
              <p className="mt-2 font-sans text-sm leading-[1.65] text-offblack/80">
                {step.question}
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/45 uppercase">
                Learning
              </p>
              <p className="mt-2 font-sans text-sm leading-[1.65] text-offblack/80">
                {step.learning}
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/45 uppercase">
                Artifacts
              </p>
              <p className="mt-2 font-sans text-sm leading-[1.65] text-offblack/80">{step.shown}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function ArtifactSlot({
  label,
  hint,
}: {
  label: string
  hint: string
}) {
  return (
    <div className="flex min-h-[12rem] flex-col justify-between border border-dashed border-offblack/20 bg-[linear-gradient(135deg,rgba(174,34,23,0.04)_0%,transparent_42%),linear-gradient(180deg,#f5f2ec_0%,#ebe6dc_100%)] px-5 py-5">
      <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">{label}</p>
      <p className="max-w-xs font-sans text-sm leading-relaxed text-offblack/55">{hint}</p>
    </div>
  )
}
