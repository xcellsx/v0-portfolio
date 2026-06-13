"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionLabel } from "@/components/section-label"
import { fadeDelayStyle, fadeInFromTopClass } from "@/lib/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import type { WebDevRepository } from "@/lib/web-dev-data"

function StackPill({ label }: { label: string }) {
  return (
    <span className="rounded-sm border border-offblack/15 px-2 py-1 font-mono text-[9px] tracking-[0.1em] text-offblack/60 uppercase">
      [{label}]
    </span>
  )
}

function BrowserPreview({ repo }: { repo: WebDevRepository }) {
  return (
    <div className="flex min-h-[clamp(14rem,38vh,28rem)] flex-1 flex-col overflow-hidden border border-offblack/15 bg-offwhite">
      <div className="flex shrink-0 items-center gap-2 border-b border-offblack/10 px-3 py-2">
        <span className="size-2 rounded-full bg-offblack/15" aria-hidden />
        <span className="size-2 rounded-full bg-offblack/15" aria-hidden />
        <span className="size-2 rounded-full bg-offblack/15" aria-hidden />
        <p className="ml-2 truncate font-mono text-[9px] tracking-[0.12em] text-offblack/40 uppercase">
          system_live_preview // {repo.title.toLowerCase().replace(/\s+/g, "_")}
        </p>
      </div>
      <div className="flex min-h-0 flex-1 items-center justify-center bg-offblack/[0.03] p-3">
        <Image
          src={repo.previewImage}
          alt={`${repo.title} preview`}
          width={repo.previewWidth ?? 1200}
          height={repo.previewHeight ?? 800}
          className="max-h-full w-auto max-w-full object-contain"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>
    </div>
  )
}

function RepositoryBlock({ repo, index }: { repo: WebDevRepository; index: number }) {
  const { ref, isVisible } = useScrollReveal()

  const actionClass =
    "group inline-flex items-center gap-2 border border-offblack/20 px-3 py-2 font-mono text-[10px] tracking-[0.12em] uppercase transition-colors hover:border-terracotta hover:bg-terracotta hover:text-offwhite"

  return (
    <article
      ref={ref}
      className={`grid border border-offblack/10 lg:grid-cols-[2fr_3fr] ${fadeInFromTopClass(isVisible)}`}
      style={fadeDelayStyle(index * 80)}
    >
      <div className="border-b border-offblack/10 p-4 sm:p-5 lg:border-b-0 lg:border-r lg:border-offblack/10">
        <p className="font-mono text-xs tracking-[0.12em] text-terracotta uppercase">
          💾 {repo.repoId}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {repo.stack.map((tag) => (
            <StackPill key={tag} label={tag} />
          ))}
        </div>

        <p className="mt-4 font-mono text-[10px] tracking-[0.1em] text-offblack/50 uppercase">
          Status:{" "}
          <span className="text-offblack">{repo.status}</span>
          {" // "}
          {repo.deployNote}
        </p>

        <ul className="accent-list mt-5 space-y-3 pl-4">
          {repo.bullets.map((bullet) => (
            <li
              key={bullet.slice(0, 40)}
              className="font-sans text-sm leading-[1.65] text-offblack/85"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex min-h-[clamp(18rem,42vh,32rem)] flex-col p-4 sm:p-5">
        <SectionLabel className="mb-3 text-[10px] tracking-[0.14em]">
          [ System_Live_Preview ]
        </SectionLabel>

        <BrowserPreview repo={repo} />

        {repo.liveNote ? (
          <p className="mt-3 font-mono text-[9px] leading-relaxed tracking-[0.08em] text-offblack/45 uppercase">
            {repo.liveNote}
          </p>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-3">
          {repo.liveUrl ? (
            <Link
              href={repo.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={actionClass}
            >
              Run Live Build
              <ArrowUpRight
                className="size-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.5}
              />
            </Link>
          ) : null}
          <Link href={repo.sourceUrl ?? repo.caseStudyHref} className={actionClass}>
            {repo.sourceUrl ? "View Source" : "View Case Study"}
            <ArrowUpRight
              className="size-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </article>
  )
}

export function RepositoryWorkbench({ repositories }: { repositories: WebDevRepository[] }) {
  return (
    <div className="space-y-[clamp(1.5rem,4vh,2rem)]">
      <SectionLabel className="text-[11px] tracking-[0.14em]">
        [ Repository // Deployed_Builds ]
      </SectionLabel>
      {repositories.map((repo, index) => (
        <RepositoryBlock key={repo.id} repo={repo} index={index} />
      ))}
    </div>
  )
}
