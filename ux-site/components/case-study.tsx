import Link from "next/link"
import type { CaseStudy } from "@/lib/content"
import { SectionEyebrow } from "@/components/site-chrome"

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
    <section className="border-y border-line bg-paper-deep/50 px-[clamp(1.25rem,4vw,4rem)] py-10">
      <SectionEyebrow>Cold read · 30 seconds</SectionEyebrow>
      <div className="mt-6 grid gap-0 md:grid-cols-3">
        {cells.map((cell, index) => (
          <div
            key={cell.label}
            className={`py-5 md:px-5 ${index > 0 ? "md:border-l md:border-line" : "md:pl-0"}`}
          >
            <p className="text-[11px] font-semibold tracking-[0.14em] text-signal uppercase">
              {cell.label}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{cell.body}</p>
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
      className="group block border-t border-line py-8 transition-colors first:border-t-0"
    >
      <div className="grid gap-4 lg:grid-cols-[5rem_1fr_auto]">
        <p className="font-display text-sm font-semibold text-mist">{project.number}</p>
        <div className="min-w-0 space-y-3">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h2 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] font-semibold tracking-[-0.03em] text-ink transition-colors group-hover:text-signal">
              {project.title}
            </h2>
            <span className="text-xs tracking-[0.08em] text-ink-soft uppercase">
              {project.org}
            </span>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">{project.summary}</p>
          <p className="max-w-2xl text-sm leading-relaxed text-ink">
            <span className="font-semibold text-signal">Research · </span>
            {project.researchFocus}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-line px-2 py-1 text-[10px] font-semibold tracking-[0.12em] text-ink-soft uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="text-sm font-semibold text-ink transition-transform group-hover:translate-x-0.5 group-hover:text-signal">
          Open case →
        </span>
      </div>
    </Link>
  )
}

export function CaseStudyView({ study }: { study: CaseStudy }) {
  return (
    <article>
      <section className="px-[clamp(1.25rem,4vw,4rem)] pt-6 pb-12">
        <LinkBack />
        <div className="reveal mt-8 max-w-3xl space-y-5">
          <SectionEyebrow>
            Case {study.number} · {study.org}
          </SectionEyebrow>
          <h1 className="font-display text-[clamp(2.4rem,6vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-ink">
            {study.title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-ink-soft">{study.context}</p>
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="border border-line bg-paper-deep/80 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-ink-soft uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal reveal-delay-1 mt-10 grid gap-4 lg:grid-cols-3">
          <MetaCard label="Role" body={study.role} />
          <MetaCard label="Timeline" body={study.timeline} />
          <MetaCard label="Research focus" body={study.researchFocus} />
        </div>
      </section>

      <ColdRead
        problem={study.problem}
        constraint={study.constraint}
        outcome={study.outcome}
      />

      <section className="px-[clamp(1.25rem,4vw,4rem)] py-14">
        <SectionEyebrow>Methods — why these</SectionEyebrow>
        <h2 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-semibold tracking-[-0.03em]">
          Research before pixels.
        </h2>
        <div className="mt-8 border-t border-line">
          {study.methods.map((row) => (
            <div
              key={row.method}
              className="grid gap-2 border-b border-line py-5 sm:grid-cols-[minmax(10rem,32%)_1fr] sm:gap-8"
            >
              <p className="text-sm font-semibold text-ink">{row.method}</p>
              <p className="text-sm leading-relaxed text-ink-soft">{row.why}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep/40 px-[clamp(1.25rem,4vw,4rem)] py-14">
        <SectionEyebrow>Insights wired to decisions</SectionEyebrow>
        <div className="mt-8 space-y-6">
          {study.insights.map((insight, index) => (
            <div
              key={insight.finding}
              className="grid gap-4 border border-line bg-paper px-5 py-6 lg:grid-cols-[4rem_1fr]"
            >
              <p className="font-display text-sm font-semibold text-signal">
                I-{String(index + 1).padStart(2, "0")}
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-ink-soft uppercase">
                    Finding
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink">{insight.finding}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-signal uppercase">
                    Decision
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink">{insight.decision}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-[clamp(1.25rem,4vw,4rem)] py-14">
        <SectionEyebrow>Persona path · user journey</SectionEyebrow>
        <h2 className="mt-3 max-w-xl font-display text-[clamp(1.6rem,3vw,2.2rem)] font-semibold tracking-[-0.03em]">
          Moments that changed the design.
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {study.journey.map((node) => (
            <div key={node.stage} className="border border-line bg-paper px-4 py-5">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-signal uppercase">
                {node.stage}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{node.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line px-[clamp(1.25rem,4vw,4rem)] py-14">
        <SectionEyebrow>Wireframes → standards → UI</SectionEyebrow>
        <h2 className="mt-3 max-w-xl font-display text-[clamp(1.6rem,3vw,2.2rem)] font-semibold tracking-[-0.03em]">
          Fidelity as a learning ladder.
        </h2>
        <div className="mt-8 border-t border-line">
          {study.fidelity.map((row, index) => (
            <div
              key={row.step}
              className="grid gap-3 border-b border-line py-5 sm:grid-cols-[4rem_minmax(8rem,24%)_1fr]"
            >
              <p className="font-display text-sm font-semibold text-mist">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="text-sm font-semibold text-ink">{row.step}</p>
              <p className="text-sm leading-relaxed text-ink-soft">{row.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-[linear-gradient(120deg,rgba(15,122,108,0.08),transparent_55%)] px-[clamp(1.25rem,4vw,4rem)] py-14">
        <SectionEyebrow>Reflection</SectionEyebrow>
        <p className="mt-4 max-w-3xl font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold leading-snug tracking-[-0.02em] text-ink">
          {study.reflection}
        </p>
      </section>
    </article>
  )
}

function MetaCard({ label, body }: { label: string; body: string }) {
  return (
    <div className="border border-line bg-paper/80 px-4 py-4">
      <p className="text-[11px] font-semibold tracking-[0.14em] text-signal uppercase">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
    </div>
  )
}

function LinkBack() {
  return (
    <Link
      href="/"
      className="inline-flex text-sm font-semibold text-ink-soft transition-colors hover:text-signal"
    >
      ← All work
    </Link>
  )
}
