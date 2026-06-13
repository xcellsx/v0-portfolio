"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"
import { ContactSection } from "@/components/contact-section"
import {
  aboutBio,
  aboutCoordinates,
  aboutMeta,
  aboutQuickLinks,
  beyondTheScreen,
  funFact,
  journeyEntries,
} from "@/lib/about-data"
import { skillTracks } from "@/lib/technical-skills-data"
import { fadeDelayStyle, fadeInFromTopClass } from "@/lib/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { SectionLabel } from "@/components/section-label"
import { useTypewriter } from "@/hooks/use-typewriter"

const HEADLINE = "Hi, I'm Celine."
const HEADLINE_PREFIX = "Hi, I'm "

const ModelViewer = dynamic(
  () => import("@/components/model-viewer").then((mod) => mod.ModelViewer),
  {
    ssr: false,
    loading: () => (
      <div className="viewport-skeleton aspect-square h-full w-full">
        <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/40 uppercase">
          [ Loading Archive_Asset… ]
        </p>
      </div>
    ),
  },
)

function TypewriterHeadline({
  displayedText,
  isComplete,
}: {
  displayedText: string
  isComplete: boolean
}) {
  const prefix =
    displayedText.length <= HEADLINE_PREFIX.length
      ? displayedText
      : displayedText.slice(0, HEADLINE_PREFIX.length)
  const name =
    displayedText.length > HEADLINE_PREFIX.length
      ? displayedText.slice(HEADLINE_PREFIX.length)
      : ""

  return (
    <h1 className="min-h-[1.08em] font-serif text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.08] tracking-[-0.02em]">
      {prefix}
      {name ? <span className="text-terracotta">{name}</span> : null}
      {!isComplete ? (
        <span
          className="ml-0.5 inline-block h-[0.85em] w-[2px] animate-pulse bg-offblack align-middle"
          aria-hidden
        />
      ) : null}
    </h1>
  )
}

function QuickActionLink({
  label,
  href,
  download,
  external,
}: {
  label: string
  href: string
  download?: string
  external?: boolean
}) {
  const className =
    "group inline-flex items-center gap-2 border border-offblack/20 px-4 py-2 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors hover:border-terracotta hover:bg-terracotta hover:text-offwhite"

  const arrow = (
    <ArrowUpRight
      className="size-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      strokeWidth={1.5}
    />
  )

  if (download) {
    return (
      <a href={href} download={download} className={className}>
        {label}
        {arrow}
      </a>
    )
  }

  if (external) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
        {arrow}
      </Link>
    )
  }

  return (
    <Link href={href} className={className}>
      {label}
      {arrow}
    </Link>
  )
}

export function AboutPageContent() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: factRef, isVisible: factVisible } = useScrollReveal()
  const { ref: journeyRef, isVisible: journeyVisible } = useScrollReveal()
  const { ref: toolkitRef, isVisible: toolkitVisible } = useScrollReveal()

  const { displayedText, isComplete: headlineDone } = useTypewriter(HEADLINE, {
    storageKey: "about-headline-seen",
    speed: 52,
    startDelay: 200,
  })

  const [showHeroContent, setShowHeroContent] = useState(false)

  useEffect(() => {
    if (!headlineDone) return
    const timeoutId = window.setTimeout(() => setShowHeroContent(true), 180)
    return () => window.clearTimeout(timeoutId)
  }, [headlineDone])

  const heroContentClass = () => fadeInFromTopClass(showHeroContent, "duration-700")

  return (
    <div className="bg-offwhite text-offblack">
      <section
        ref={heroRef}
        className="border-b border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] pt-[clamp(2rem,5vh,4rem)] pb-[clamp(2rem,5vh,3rem)]"
      >
        <Link
          href="/"
          scroll
          className={`group home-link mb-[clamp(2rem,5vh,3rem)] inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] opacity-100 ${fadeInFromTopClass(heroVisible, "duration-700")}`}
        >
          <ArrowUpRight
            className="size-3 shrink-0 rotate-180 transition-transform group-hover:-translate-x-0.5"
            strokeWidth={1.5}
          />
          Home
        </Link>

        <div className="space-y-[clamp(2.5rem,6vh,4rem)]">
          <div className="space-y-4">
            <div className={fadeInFromTopClass(heroVisible, "duration-700")}>
              <SectionLabel>[ Celine ]</SectionLabel>
            </div>
            <TypewriterHeadline displayedText={displayedText} isComplete={headlineDone} />
            <p
              className={`max-w-[65ch] font-sans text-base leading-[1.55] text-terracotta/90 ${heroContentClass()}`}
              style={fadeDelayStyle(80)}
            >
              {aboutMeta.role}. {aboutMeta.tagline}
            </p>
          </div>

          <div className="grid gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-[minmax(14rem,32%)_1fr] lg:items-start">
            <div
              className={`relative mx-auto w-full max-w-[18rem] lg:mx-0 lg:sticky lg:top-[clamp(2rem,5vh,4rem)] ${heroContentClass()}`}
              style={fadeDelayStyle(120)}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/images/me.png"
                  alt="Celine Goh"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 70vw, 18rem"
                />
              </div>
              <SectionLabel className="mt-3 text-[10px] tracking-[0.12em]">
                [ Portrait // Celine ]
              </SectionLabel>
            </div>

            <div className="min-w-0 space-y-6">
              {aboutBio.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className={`max-w-[65ch] font-sans text-[17px] leading-[1.55] text-offblack ${heroContentClass()}`}
                  style={fadeDelayStyle(200 + index * 80)}
                >
                  {paragraph}
                </p>
              ))}

              <div
                className={`space-y-2 border-t border-offblack/10 pt-6 ${heroContentClass()}`}
                style={fadeDelayStyle(360)}
              >
                <SectionLabel className="text-[10px] tracking-[0.12em]">
                  [ Beyond the Screen ]
                </SectionLabel>
                <p className="max-w-[65ch] font-sans text-base leading-[1.55] text-offblack/90">
                  {beyondTheScreen}
                </p>
              </div>

              <div
                className={`flex flex-wrap gap-3 ${heroContentClass()}`}
                style={fadeDelayStyle(420)}
              >
                {aboutQuickLinks.map((link) => (
                  <QuickActionLink
                    key={link.label}
                    label={link.label}
                    href={link.href}
                    download={"download" in link ? link.download : undefined}
                    external={link.external}
                  />
                ))}
              </div>

              <div
                className={`grid gap-4 border-t border-offblack/10 pt-6 sm:grid-cols-3 ${heroContentClass()}`}
                style={fadeDelayStyle(480)}
              >
                {aboutCoordinates.map((item) => (
                  <div key={item.label} className="space-y-1.5">
                    <SectionLabel className="text-[10px] tracking-[0.12em]">
                      [ {item.label} ]
                    </SectionLabel>
                    <p className="font-sans text-base leading-[1.5] text-offblack">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={factRef}
        className="border-b border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2.5rem,6vh,4rem)]"
      >
        <div className="grid gap-[clamp(2rem,5vw,3rem)] lg:grid-cols-2 lg:items-center">
          <div
            className={`space-y-4 ${fadeInFromTopClass(factVisible)}`}
            style={fadeDelayStyle(0)}
          >
            <SectionLabel>[ Fun Fact // {funFact.index} ]</SectionLabel>
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-terracotta">
              {funFact.title}
            </h2>
            <p className="max-w-[65ch] font-sans text-[17px] leading-[1.55] text-offblack">
              {funFact.description}
            </p>
            <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/45 uppercase">
              Drag to orbit · Auto-rotates when idle
            </p>
          </div>

          <div
            className={`relative aspect-square w-full max-w-md justify-self-center lg:justify-self-end ${fadeInFromTopClass(factVisible)}`}
            style={fadeDelayStyle(120)}
          >
            <ModelViewer
              modelPath={funFact.modelPath}
              className="h-full w-full"
              scrollFriendly
            />
          </div>
        </div>
      </section>

      <section
        ref={journeyRef}
        className="border-b border-offblack/10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2.5rem,6vh,4rem)]"
      >
        <div className={fadeInFromTopClass(journeyVisible)} style={fadeDelayStyle(0)}>
          <SectionLabel>[ Journey // Timeline ]</SectionLabel>
        </div>

        <div className="mt-8 border-t border-[#E5E7EB]">
          {journeyEntries.map((entry, index) => (
            <article
              key={entry.year}
              className={`grid gap-3 border-b border-[#E5E7EB] py-5 sm:grid-cols-[minmax(6rem,12%)_minmax(10rem,22%)_1fr] sm:gap-6 sm:items-baseline ${fadeInFromTopClass(journeyVisible)}`}
              style={fadeDelayStyle(80 + index * 90)}
            >
              <p className="font-mono text-xs tracking-[0.12em] text-terracotta uppercase">
                {entry.year}
              </p>
              <p className="font-sans text-base font-medium text-offblack">{entry.phase}</p>
              <p className="max-w-[65ch] font-sans text-base leading-[1.55] text-offblack sm:max-w-none">
                {entry.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        ref={toolkitRef}
        className="px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2.5rem,6vh,4rem)]"
      >
        <div className={fadeInFromTopClass(toolkitVisible)} style={fadeDelayStyle(0)}>
          <SectionLabel>[ Toolkit // Directory ]</SectionLabel>
        </div>

        <div className="mt-8 border-t border-[#E5E7EB]">
          {skillTracks.map((track, index) => (
            <article
              key={track.index}
              className={`grid gap-3 border-b border-[#E5E7EB] py-5 sm:grid-cols-[minmax(8rem,18%)_1fr] sm:gap-6 sm:items-baseline ${fadeInFromTopClass(toolkitVisible)}`}
              style={fadeDelayStyle(80 + index * 90)}
            >
              <SectionLabel className="text-xs font-medium tracking-[0.12em]">
                [ {track.index} // {track.label} ]
              </SectionLabel>
              <p className="font-sans text-base leading-[1.55] text-offblack">
                {track.skills.join(" · ")}
              </p>
            </article>
          ))}
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
