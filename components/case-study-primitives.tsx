"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionLabel } from "@/components/section-label"
import { fadeInFromTopClass } from "@/lib/scroll-reveal"

export function CaseStudyBackLink({
  href,
  label = "Back",
  visible = true,
}: {
  href: string
  label?: string
  visible?: boolean
}) {
  return (
    <Link
      href={href}
      scroll
      className={`group home-link mb-[clamp(2rem,5vh,3rem)] inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] ${fadeInFromTopClass(visible)}`}
    >
      <ArrowUpRight
        className="size-3 shrink-0 rotate-180 transition-transform group-hover:-translate-x-0.5"
        strokeWidth={1.5}
      />
      {label}
    </Link>
  )
}

export function CaseStudyGraphic({
  src,
  alt,
  width,
  height,
  className = "mx-auto h-auto w-full max-w-[min(92vw,26rem)] object-contain min-[1100px]:max-w-none",
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes="(max-width: 1100px) 92vw, (max-width: 1536px) 33vw, 520px"
    />
  )
}

export function SpecMatrix({
  rows,
  className = "",
}: {
  rows: readonly { metric: string; specification: string }[]
  className?: string
}) {
  return (
    <div className={`border-t border-[#E5E7EB] ${className}`}>
      {rows.map((row) => (
        <div
          key={row.metric}
          className="grid gap-4 border-b border-[#E5E7EB] py-4 sm:grid-cols-[minmax(10rem,28%)_1fr] sm:gap-8"
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

export function CaseStudyLiveActions({
  liveUrl,
  liveNote,
}: {
  liveUrl?: string
  liveNote?: string
}) {
  if (!liveUrl) return null

  return (
    <div className="flex flex-col gap-3">
      {liveNote ? (
        <p className="max-w-md font-mono text-[10px] leading-relaxed tracking-[0.08em] text-offblack/45 uppercase">
          {liveNote}
        </p>
      ) : null}
      <Link
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex w-fit items-center gap-2 border border-offblack/20 px-4 py-2 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors hover:border-terracotta hover:bg-terracotta hover:text-offwhite"
      >
        Run Live Build
        <ArrowUpRight
          className="size-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.5}
        />
      </Link>
    </div>
  )
}

export function ContextSplit({
  indexLabel,
  headline,
  quote,
  visible,
}: {
  indexLabel: string
  headline: string
  quote: string
  visible: boolean
}) {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="flex items-center px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)] lg:min-h-[28rem]">
        <p
          className={`font-mono text-xs tracking-[0.14em] text-offblack/55 uppercase ${fadeInFromTopClass(visible)}`}
        >
          {indexLabel}
        </p>
      </div>
      <div className="flex flex-col justify-center px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)] lg:min-h-[28rem]">
        <div className={fadeInFromTopClass(visible)} style={{ transitionDelay: "100ms" }}>
          <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-terracotta">
            {headline}
          </h2>
          <blockquote className="mt-6 border-l border-offblack/15 pl-5 font-sans text-sm leading-[1.7] text-offblack/80">
            {quote}
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export function DeepDiveRows({
  items,
}: {
  items: readonly {
    title: string
    src: string
    width: number
    height: number
    quote: string
  }[]
}) {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={item.title}
          className={`grid border-t border-offblack/10 lg:grid-cols-2 ${
            index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
          }`}
        >
          <div className="flex items-center justify-center px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2rem,5vh,3.5rem)]">
            <CaseStudyGraphic
              src={item.src}
              alt={item.title}
              width={item.width}
              height={item.height}
              className="mx-auto h-auto w-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-center px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2rem,5vh,3.5rem)]">
            <SectionLabel className="text-[11px] tracking-[0.12em]">
              {item.title}
            </SectionLabel>
            <blockquote className="mt-5 border-l border-offblack/15 pl-5 font-sans text-sm leading-[1.7] text-offblack/80">
              {item.quote}
            </blockquote>
          </div>
        </div>
      ))}
    </>
  )
}
