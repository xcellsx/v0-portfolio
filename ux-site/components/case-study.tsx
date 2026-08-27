import Link from "next/link"
import type { CaseStudy } from "@/lib/content"
import { SectionLabel } from "@/components/site-chrome"

export function ColdRead({
  problem,
  constraint,
  outcome,
}: {
  problem: string
  constraint: string
  outcome: string
}) {
  const cells = [
    { label: "Problem", body: problem },
    { label: "Constraint", body: constraint },
    { label: "Outcome", body: outcome },
  ]

  return (
    <section className="border-y border-line px-[clamp(1.5rem,4vw,5rem)] py-10">
      <SectionLabel>[ Cold Read // 30 Seconds ]</SectionLabel>
      <p className="mt-3 max-w-2xl font-sans text-sm text-offblack/60">
        Problem, constraint, outcome — before the scroll. Metrics optional; judgment required.
      </p>
      <div className="mt-8 grid gap-0 border-t border-line md:grid-cols-3">
        {cells.map((cell, index) => (
          <div
            key={cell.label}
            className={`py-6 md:px-6 ${index > 0 ? "md:border-l md:border-line" : "md:pl-0"}`}
          >
            <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">
              {cell.label}
            </p>
            <p className="mt-3 font-sans text-sm leading-[1.65] text-offblack/80">{cell.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ProjectCard({ project }: { project: CaseStudy }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block border-b border-line py-8 transition-colors"
    >
      <div className="grid gap-4 lg:grid-cols-[4.5rem_1fr_auto]">
        <p className="font-mono text-sm tracking-[0.12em] text-offblack/30">{project.number}</p>
        <div className="min-w-0 space-y-3">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h2 className="font-serif text-[clamp(1.35rem,2.5vw,1.9rem)] font-medium tracking-[-0.02em] text-terracotta transition-colors group-hover:text-offblack">
              {project.title}
            </h2>
            <span className="font-mono text-[10px] tracking-[0.1em] text-offblack/45 uppercase">
              {project.org}
            </span>
          </div>
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-offblack/70">
            {project.summary}
          </p>
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-offblack/85">
            <span className="font-mono text-[10px] tracking-[0.1em] text-terracotta uppercase">
              Research ·{" "}
            </span>
            {project.researchFocus}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1 font-mono text-[10px] tracking-[0.12em] text-offblack/50 uppercase">
            {project.tags.map((tag) => (
              <span key={tag}>[ {tag} ]</span>
            ))}
          </div>
        </div>
        <span className="font-mono text-[11px] tracking-[0.12em] text-offblack uppercase transition-colors group-hover:text-terracotta">
          Open case →
        </span>
      </div>
    </Link>
  )
}

export function CaseStudyView({ study }: { study: CaseStudy }) {
  return (
    <article>
      <section className="px-[clamp(1.5rem,4vw,5rem)] pt-4 pb-12">
        <LinkBack />
        <div className="reveal mt-8 max-w-3xl space-y-5">
          <SectionLabel>
            {`[ Case ${study.number} // ${study.org} ]`}
          </SectionLabel>
          <h1 className="font-serif text-[clamp(2.4rem,5.5vw,4rem)] font-medium leading-[1.05] tracking-[-0.02em] text-terracotta">
            {study.title}
          </h1>
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-offblack/70">
            {study.context}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] tracking-[0.12em] text-offblack/50 uppercase">
            {study.tags.map((tag) => (
              <span key={tag}>[ {tag} ]</span>
            ))}
          </div>
        </div>

        <div className="reveal reveal-delay-1 mt-10 grid gap-0 border-t border-line lg:grid-cols-3">
          <MetaCard label="Role" body={study.role} />
          <MetaCard label="Timeline" body={study.timeline} bordered />
          <MetaCard label="Research focus" body={study.researchFocus} bordered />
        </div>
      </section>

      <ColdRead
        problem={study.problem}
        constraint={study.constraint}
        outcome={study.outcome}
      />

      <section className="px-[clamp(1.5rem,4vw,5rem)] py-14">
        <SectionLabel>[ Methods // Why These ]</SectionLabel>
        <h2 className="mt-4 font-serif text-[clamp(1.5rem,3vw,2.15rem)] font-medium tracking-[-0.02em]">
          Research before pixels.
        </h2>
        <div className="mt-8 border-t border-line">
          {study.methods.map((row) => (
            <div
              key={row.method}
              className="grid gap-2 border-b border-line py-5 sm:grid-cols-[minmax(10rem,32%)_1fr] sm:gap-8"
            >
              <p className="font-mono text-[11px] tracking-[0.08em] text-offblack uppercase">
                {row.method}
              </p>
              <p className="font-sans text-sm leading-relaxed text-offblack/70">{row.why}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep/35 px-[clamp(1.5rem,4vw,5rem)] py-14">
        <SectionLabel>[ Insights // Decisions ]</SectionLabel>
        <div className="mt-8 space-y-0 border-t border-line">
          {study.insights.map((insight, index) => (
            <div
              key={insight.finding}
              className="grid gap-5 border-b border-line py-7 lg:grid-cols-[5rem_1fr]"
            >
              <p className="font-mono text-[11px] tracking-[0.14em] text-terracotta uppercase">
                I-{String(index + 1).padStart(2, "0")}
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/45 uppercase">
                    Finding
                  </p>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-offblack">
                    {insight.finding}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.12em] text-terracotta uppercase">
                    Decision
                  </p>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-offblack">
                    {insight.decision}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-[clamp(1.5rem,4vw,5rem)] py-14">
        <SectionLabel>[ Journey // Moments ]</SectionLabel>
        <h2 className="mt-4 max-w-xl font-serif text-[clamp(1.5rem,3vw,2.15rem)] font-medium tracking-[-0.02em]">
          Moments that changed the design.
        </h2>
        <div className="mt-8 grid gap-0 border-t border-line sm:grid-cols-2 xl:grid-cols-4">
          {study.journey.map((node, index) => (
            <div
              key={node.stage}
              className={`border-b border-line py-6 xl:border-b-0 ${
                index > 0 ? "xl:border-l xl:border-line xl:px-5" : "xl:pr-5"
              } ${index % 2 === 1 ? "sm:border-l sm:border-line sm:pl-5" : "sm:pr-5"}`}
            >
              <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">
                {node.stage}
              </p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-offblack/70">{node.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line px-[clamp(1.5rem,4vw,5rem)] py-14">
        <SectionLabel>[ Fidelity // Ladder ]</SectionLabel>
        <h2 className="mt-4 max-w-xl font-serif text-[clamp(1.5rem,3vw,2.15rem)] font-medium tracking-[-0.02em]">
          Wireframes before polish.
        </h2>
        <div className="mt-8 border-t border-line">
          {study.fidelity.map((row, index) => (
            <div
              key={row.step}
              className="grid gap-3 border-b border-line py-5 sm:grid-cols-[4rem_minmax(8rem,24%)_1fr]"
            >
              <p className="font-mono text-sm tracking-[0.12em] text-offblack/30">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="font-sans text-sm font-medium text-offblack">{row.step}</p>
              <p className="font-sans text-sm leading-relaxed text-offblack/70">{row.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-[linear-gradient(120deg,rgba(174,34,23,0.06),transparent_55%)] px-[clamp(1.5rem,4vw,5rem)] py-14">
        <SectionLabel>[ Reflection ]</SectionLabel>
        <p className="mt-5 max-w-3xl font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium leading-snug tracking-[-0.02em] text-offblack">
          {study.reflection}
        </p>
      </section>
    </article>
  )
}

function MetaCard({
  label,
  body,
  bordered = false,
}: {
  label: string
  body: string
  bordered?: boolean
}) {
  return (
    <div className={`py-5 ${bordered ? "lg:border-l lg:border-line lg:px-6" : "lg:pr-6"}`}>
      <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">{label}</p>
      <p className="mt-2 font-sans text-sm leading-relaxed text-offblack/70">{body}</p>
    </div>
  )
}

function LinkBack() {
  return (
    <Link
      href="/"
      className="inline-flex font-mono text-[11px] tracking-[0.12em] text-offblack/55 uppercase transition-colors hover:text-terracotta"
    >
      ← All work
    </Link>
  )
}
