"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import { ProjectMockups } from "@/components/project-mockups"
import { ProjectToolkitStack } from "@/components/project-toolkit-stack"
import { selectedProjects } from "@/lib/selected-projects-data"

function fadeInFromTopClass(visible: boolean, duration = "duration-[900ms]") {
  return `transition-all ${duration} ease-out ${
    visible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
  }`
}

function fadeDelayStyle(delayMs: number): React.CSSProperties {
  return { transitionDelay: `${delayMs}ms` }
}

function backgroundNumberClass(visible: boolean) {
  return `transition-all duration-[900ms] ease-out ${
    visible ? "translate-y-0 opacity-[0.18]" : "-translate-y-10 opacity-0"
  }`
}

function ProjectMeta({
  project,
  learnMoreHref,
}: {
  project: (typeof selectedProjects)[number]
  learnMoreHref: string
}) {
  return (
    <>
      <h3 className="font-serif text-[clamp(1.25rem,2.5vw,2.25rem)] font-medium leading-[1.25] tracking-[-0.01em] text-terracotta">
        {project.title}
      </h3>
      <ProjectToolkitStack tools={project.toolkit} />
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.12em] text-offblack/80">
        {project.tags.map((tag) => (
          <span key={tag}>[ {tag} ]</span>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-2">
        <Link
          href={learnMoreHref}
          className="group inline-flex items-center gap-2 border-b border-offblack pb-0.5 font-mono text-xs uppercase tracking-[0.12em] text-offblack transition-colors hover:border-terracotta hover:text-terracotta"
        >
          <ArrowUpRight
            className="size-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.5}
          />
          Learn more
        </Link>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border-b border-offblack pb-0.5 font-mono text-xs uppercase tracking-[0.12em] text-offblack transition-colors hover:border-terracotta hover:text-terracotta"
          >
            <ArrowUpRight
              className="size-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
            View live
          </a>
        ) : null}
      </div>
      <p className="font-sans text-sm leading-[1.6] text-offblack/80">{project.description}</p>
    </>
  )
}

function ProjectPicker({
  activeIndex,
  onSelect,
}: {
  activeIndex: number
  onSelect: (index: number) => void
}) {
  return (
    <ul className="divide-y divide-offblack/10 border-y border-offblack/10">
      {selectedProjects.map((project, index) => (
        <li key={project.id}>
          <button
            type="button"
            onClick={() => onSelect(index)}
            className={`group flex w-full items-center justify-between gap-3 py-3.5 font-mono text-sm tracking-wide transition-colors sm:text-[0.9375rem] ${
              activeIndex === index ? "text-terracotta" : "text-offblack hover:text-offblack/70"
            }`}
            aria-current={activeIndex === index ? "true" : undefined}
          >
            <span>
              {project.number} {project.title}
            </span>
            <ArrowUpRight
              className="size-3.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
          </button>
        </li>
      ))}
    </ul>
  )
}

export function SelectedProjects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [contentVisible, setContentVisible] = useState(true)

  const activeProject = selectedProjects[activeIndex]

  const goToSlide = useCallback(
    (index: number) => {
      if (index < 0 || index >= selectedProjects.length || index === activeIndex) return

      setContentVisible(false)
      window.setTimeout(() => {
        setActiveIndex(index)
        setContentVisible(true)
      }, 320)
    },
    [activeIndex],
  )

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const learnMoreHref = activeProject?.learnMoreHref ?? "#"
  const showProjectContent = isVisible && contentVisible
  const isGallery = activeProject?.mockupLayout === "gallery"

  return (
    <section
      id="selected-works"
      ref={sectionRef}
      className="relative bg-offwhite text-offblack lg:h-screen lg:overflow-hidden"
    >
      {/* Mobile — stacked ledger cards */}
      <div className="flex flex-col gap-8 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2.5rem,6vh,4rem)] lg:hidden">
        <h2
          className={`font-serif text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1.2] tracking-[-0.02em] text-terracotta ${fadeInFromTopClass(isVisible, "duration-[1100ms]")}`}
        >
          Selected Projects
        </h2>

        <ProjectPicker activeIndex={activeIndex} onSelect={goToSlide} />

        {activeProject ? (
          <div
            className={`space-y-6 border border-offblack/10 p-4 sm:p-5 ${fadeInFromTopClass(showProjectContent)}`}
          >
            <p
              className={`select-none font-sans text-[clamp(4rem,18vw,6rem)] leading-none font-medium text-terracotta/20 ${backgroundNumberClass(showProjectContent)}`}
              aria-hidden
            >
              {activeProject.number}
            </p>

            <div className={isGallery ? "" : "mx-auto max-w-sm"}>
              <ProjectMockups project={activeProject} priority={activeIndex === 0} />
            </div>

            <div className="space-y-3 border-t border-offblack/10 pt-4">
              <ProjectMeta project={activeProject} learnMoreHref={learnMoreHref} />
            </div>
          </div>
        ) : null}
      </div>

      {/* Desktop — cinematic split */}
      <div className="hidden lg:block lg:h-full">
        <div
          className={`pointer-events-none absolute top-[clamp(2rem,5vh,4rem)] right-[clamp(1.5rem,4vw,5rem)] z-0 select-none font-sans text-[clamp(12rem,45vh,32rem)] leading-none font-medium text-terracotta ${backgroundNumberClass(showProjectContent)}`}
          style={fadeDelayStyle(80)}
          aria-hidden
        >
          {activeProject?.number ?? "01"}
        </div>

        <h2
          className={`absolute top-[clamp(2rem,5vh,4rem)] left-[clamp(1.5rem,4vw,5rem)] z-10 font-serif text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1.2] tracking-[-0.02em] text-terracotta ${fadeInFromTopClass(isVisible, "duration-[1100ms]")}`}
          style={fadeDelayStyle(0)}
        >
          Selected Projects
        </h2>

        {activeProject ? (
          <div
            className={`absolute top-[clamp(6.5rem,12vh,9rem)] left-[clamp(1.5rem,4vw,5rem)] z-10 max-w-sm space-y-3 ${fadeInFromTopClass(showProjectContent)}`}
            style={fadeDelayStyle(140)}
          >
            <ProjectMeta project={activeProject} learnMoreHref={learnMoreHref} />
          </div>
        ) : null}

        <nav
          className={`absolute right-0 bottom-[clamp(2rem,5vh,4rem)] z-20 w-1/2 px-[clamp(1.5rem,4vw,5rem)] ${fadeInFromTopClass(isVisible, "duration-[1100ms]")}`}
          style={fadeDelayStyle(180)}
        >
          <ul className="w-full">
            {selectedProjects.map((project, index) => (
              <li key={project.id} className="relative">
                <span
                  className="pointer-events-none absolute bottom-0 right-0 h-px w-1/4 bg-offblack/80"
                  aria-hidden
                />
                <button
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`group flex w-full items-center justify-end gap-3 py-3 font-mono text-sm tracking-wide transition-opacity hover:opacity-60 sm:text-[0.9375rem] ${
                    activeIndex === index ? "text-terracotta" : "text-offblack"
                  }`}
                  aria-current={activeIndex === index ? "true" : undefined}
                >
                  <ArrowUpRight
                    className="size-3.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                  />
                  <span>
                    {project.number} {project.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {activeProject ? (
          <div
            className={`pointer-events-none absolute inset-x-0 top-[16%] bottom-[9%] z-10 flex items-center justify-center ${fadeInFromTopClass(showProjectContent, "duration-[1000ms]")}`}
            style={fadeDelayStyle(260)}
          >
            <div className={isGallery ? "pointer-events-auto" : ""}>
              <ProjectMockups project={activeProject} priority={activeIndex === 0} />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
