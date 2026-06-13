"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"

const navItems = [
  { label: "About", href: "/about" },
  { label: "UI/UX", href: "/work/serenity" },
  { label: "Graphic Design", href: "/work/graphic-design" },
  { label: "3D", href: "/work/3d-design" },
  { label: "Web Development", href: "/work/web-development" },
  { label: "Resume", href: "/resume" },
]

const HEADLINE_LINES = [
  "I'm Celine, a",
  "Creative",
  "Technologist &",
  "Interaction",
  "Designer.",
]

const TYPE_SPEED_MS = 48
const LINE_PAUSE_MS = 120

function fadeClass(visible: boolean) {
  return `transition-all duration-700 ease-out ${
    visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
  }`
}

export function LandingContent() {
  const [displayedLines, setDisplayedLines] = useState<string[]>(
    () => HEADLINE_LINES.map(() => ""),
  )
  const [activeLineIndex, setActiveLineIndex] = useState(0)
  const [typingDone, setTypingDone] = useState(false)
  const [showBio, setShowBio] = useState(false)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const hasSeenIntro = sessionStorage.getItem("landing-intro-seen") === "1"

    if (prefersReducedMotion || hasSeenIntro) {
      setDisplayedLines(HEADLINE_LINES)
      setTypingDone(true)
      setShowBio(true)
      setShowNav(true)
      return
    }

    let lineIndex = 0
    let charIndex = 0
    let typeInterval: number | undefined
    let linePauseTimeout: number | undefined

    const startLine = () => {
      charIndex = 0
      setActiveLineIndex(lineIndex)

      typeInterval = window.setInterval(() => {
        charIndex += 1
        const nextText = HEADLINE_LINES[lineIndex].slice(0, charIndex)

        setDisplayedLines((prev) => {
          const updated = [...prev]
          updated[lineIndex] = nextText
          return updated
        })

        if (charIndex >= HEADLINE_LINES[lineIndex].length) {
          window.clearInterval(typeInterval)

          if (lineIndex >= HEADLINE_LINES.length - 1) {
            setTypingDone(true)
            sessionStorage.setItem("landing-intro-seen", "1")
            window.setTimeout(() => setShowBio(true), 250)
            window.setTimeout(() => setShowNav(true), 550)
            return
          }

          linePauseTimeout = window.setTimeout(() => {
            lineIndex += 1
            startLine()
          }, LINE_PAUSE_MS)
        }
      }, TYPE_SPEED_MS)
    }

    startLine()

    return () => {
      if (typeInterval) window.clearInterval(typeInterval)
      if (linePauseTimeout) window.clearTimeout(linePauseTimeout)
    }
  }, [])

  return (
    <div className="flex min-h-0 min-w-0 w-full flex-1 flex-col justify-between gap-10 px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2rem,5vh,4rem)] lg:min-h-screen">
      <div className="w-full space-y-[clamp(1rem,2.5vh,1.5rem)]">
        <h1 className="w-full font-serif text-[clamp(2rem,4.5vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.02em]">
          {HEADLINE_LINES.map((line, index) => {
            const accentLine = typingDone && (index === 1 || index === 4)
            return (
            <span
              key={line}
              className={`block min-h-[1.08em] ${accentLine ? "text-terracotta" : ""}`}
            >
              {displayedLines[index]}
              {index === activeLineIndex && !typingDone && (
                <span
                  className="ml-0.5 inline-block h-[0.85em] w-[2px] animate-pulse bg-offblack align-middle"
                  aria-hidden
                />
              )}
            </span>
            )
          })}
        </h1>
        <p
          className={`w-full font-sans text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed ${fadeClass(showBio)}`}
        >
          Designing intuitive user flows, modeling architectural spaces and organic 3D visuals,
          and developing responsive front-end applications.
        </p>
      </div>

      <nav className={`w-full ${fadeClass(showNav)}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              <span
                className="pointer-events-none absolute bottom-0 right-0 h-px w-1/4 bg-terracotta/60 transition-colors group-hover:bg-terracotta"
                aria-hidden
              />
              <Link
                href={item.href}
                className="group flex items-center justify-end gap-3 py-3 font-mono text-sm tracking-wide transition-colors hover:text-terracotta sm:text-[0.9375rem]"
              >
                <ArrowUpRight
                  className="size-3.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
