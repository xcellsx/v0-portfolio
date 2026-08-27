import Link from "next/link"
import type { CaseStudy } from "@/lib/content"
import { SectionLabel } from "@/components/site-chrome"

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
              {project.role}
            </span>
          </div>
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-offblack">
            <span className="font-mono text-[10px] tracking-[0.1em] text-terracotta uppercase">
              Outcome ·{" "}
            </span>
            {project.outcome}
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
      {/* Hero: case // role + single outcome */}
      <section className="px-[clamp(1.5rem,4vw,5rem)] pt-4 pb-12">
        <LinkBack />
        <div className="reveal mt-8 max-w-3xl space-y-5">
          <SectionLabel>{`[ Case ${study.number} // ${study.role} ]`}</SectionLabel>
          <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">
            Outcome
          </p>
          <h1 className="font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.02em] text-offblack">
            {study.outcome}
          </h1>
          {(study.liveUrl || study.figmaUrl) && (
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
              {study.liveUrl ? (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-offblack pb-0.5 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors hover:border-terracotta hover:text-terracotta"
                >
                  Live prototype →
                </a>
              ) : null}
              {study.figmaUrl ? (
                <a
                  href={study.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-offblack/25 pb-0.5 font-mono text-[11px] tracking-[0.12em] text-offblack/70 uppercase transition-colors hover:border-terracotta hover:text-terracotta"
                >
                  Figma →
                </a>
              ) : null}
            </div>
          )}
        </div>

        {/* Company / department / timeline / tags */}
        <div className="reveal reveal-delay-1 mt-10 border-t border-line pt-8">
          <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-medium tracking-[-0.02em] text-terracotta">
            {study.company}
          </h2>
          <p className="mt-2 font-mono text-[11px] tracking-[0.12em] text-offblack/55 uppercase">
            {study.department}
            <span className="text-offblack/30"> · </span>
            {study.timeline}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] tracking-[0.12em] text-offblack/50 uppercase">
            {study.tags.map((tag) => (
              <span key={tag}>[ {tag} ]</span>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="border-t border-line px-[clamp(1.5rem,4vw,5rem)] py-12">
        <SectionLabel>[ Problem ]</SectionLabel>
        <div className="mt-8 space-y-0 border-t border-line">
          {study.problems.map((problem) => (
            <div
              key={problem.id}
              className="grid gap-3 border-b border-line py-6 sm:grid-cols-[4rem_1fr]"
            >
              <p className="font-mono text-[11px] tracking-[0.14em] text-terracotta uppercase">
                [{problem.id}]
              </p>
              <p className="font-sans text-sm leading-relaxed text-offblack/85 sm:text-base">
                {problem.statement}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Research */}
      <section className="border-t border-line bg-paper-deep/30 px-[clamp(1.5rem,4vw,5rem)] py-12">
        <SectionLabel>[ Research ]</SectionLabel>
        <ul className="mt-8 space-y-0 border-t border-line">
          {study.research.map((item) => (
            <li
              key={item}
              className="border-b border-line py-4 font-sans text-sm leading-relaxed text-offblack/80"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Per-problem: insights, decisions, constraints, done, outcome */}
      <section className="border-t border-line px-[clamp(1.5rem,4vw,5rem)] py-12">
        <SectionLabel>[ Insights // Decisions // Constraints // Done ]</SectionLabel>
        <div className="mt-10 space-y-12">
          {study.streams.map((stream) => {
            const problem = study.problems.find((p) => p.id === stream.problemId)
            return (
              <div key={stream.problemId} className="border border-line">
                <div className="border-b border-line bg-paper-deep/40 px-5 py-4 sm:px-6">
                  <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">
                    Problem [{stream.problemId}]
                  </p>
                  {problem ? (
                    <p className="mt-2 font-sans text-sm leading-relaxed text-offblack/70">
                      {problem.statement}
                    </p>
                  ) : null}
                </div>
                <div className="grid gap-0 sm:grid-cols-2">
                  <StreamCell label="Insights" body={stream.insights} />
                  <StreamCell label="Decisions" body={stream.decisions} />
                  <StreamCell label="Constraints" body={stream.constraints} />
                  <StreamCell label="What was done" body={stream.whatWasDone} />
                </div>
                <div className="border-t border-line px-5 py-5 sm:px-6">
                  <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">
                    Outcome · Problem [{stream.problemId}]
                  </p>
                  <p className="mt-2 font-serif text-lg font-medium leading-snug tracking-[-0.02em] text-offblack">
                    {stream.outcome}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Reflection */}
      <section className="border-t border-line bg-[linear-gradient(120deg,rgba(174,34,23,0.06),transparent_55%)] px-[clamp(1.5rem,4vw,5rem)] py-14">
        <SectionLabel>[ Reflection ]</SectionLabel>
        <p className="mt-5 max-w-3xl font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium leading-snug tracking-[-0.02em] text-offblack">
          {study.reflection}
        </p>
      </section>
    </article>
  )
}

function StreamCell({ label, body }: { label: string; body: string }) {
  return (
    <div className="border-b border-line px-5 py-5 last:border-b-0 sm:border-r sm:px-6 sm:odd:[&:nth-last-child(-n+2)]:border-b-0 sm:even:border-r-0">
      <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/45 uppercase">{label}</p>
      <p className="mt-2 font-sans text-sm leading-relaxed text-offblack/80">{body}</p>
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
