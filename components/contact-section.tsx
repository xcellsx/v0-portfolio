"use client"

import Link from "next/link"
import { ArrowUp, ArrowUpRight } from "lucide-react"
import { SectionLabel } from "@/components/section-label"
import { fadeDelayStyle, fadeInFromTopClass } from "@/lib/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const connectLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/celineghl/" },
  { label: "GitHub", href: "https://github.com/xcellsx" },
  { label: "Instagram", href: "https://www.instagram.com/celstudiosx" },
]

const indexLinks = [
  { label: "UI/UX", href: "/work/ui-ux" },
  { label: "Graphic Design", href: "/work/graphic-design" },
  { label: "3D Design", href: "/work/3d-design" },
  { label: "Web Dev", href: "/work/web-development" },
]

const EMAIL = "celstudiosx@gmail.com"
const RESUME_HREF = "/CV_Celine%20Goh%20Hui%20Ling_130626.pdf"

function FooterNavLink({
  href,
  children,
  external = false,
  download,
  showArrow = true,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
  download?: string
  showArrow?: boolean
}) {
  const className = "footer-nav group inline-flex items-center gap-2"

  const content = (
    <>
      {showArrow && (
        <ArrowUpRight
          className="size-3 shrink-0 text-offblack transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-terracotta"
          strokeWidth={1.5}
        />
      )}
      <span className="footer-nav-link">{children}</span>
    </>
  )

  if (download) {
    return (
      <a href={href} download={download} className={className}>
        {content}
      </a>
    )
  }

  if (external) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </Link>
    )
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  )
}

function FooterColumn({
  index,
  title,
  children,
}: {
  index: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex min-w-0 flex-col gap-5">
      <SectionLabel className="text-[11px] tracking-[0.14em]">
        [ {index} // {title} ]
      </SectionLabel>
      <div className="flex flex-col items-start gap-3">{children}</div>
    </div>
  )
}

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer
      ref={ref}
      className="bg-offwhite px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2.5rem,6vh,4rem)] text-offblack"
    >
      <h2
        className={`mb-[clamp(2rem,5vh,3.5rem)] font-serif text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1.2] tracking-[-0.02em] text-terracotta ${fadeInFromTopClass(isVisible)}`}
      >
        Let&apos;s Collaborate
      </h2>

      <div
        className={`grid gap-10 border-b border-offblack/10 pb-[clamp(2rem,4vh,2.5rem)] md:grid-cols-3 md:gap-8 ${fadeInFromTopClass(isVisible)}`}
        style={fadeDelayStyle(80)}
      >
        <FooterColumn index="01" title="INQUIRIES">
          <FooterNavLink href={`mailto:${EMAIL}`}>{EMAIL}</FooterNavLink>
          <FooterNavLink href="/resume">View Resume</FooterNavLink>
          <FooterNavLink href={RESUME_HREF} download="CV_Celine Goh Hui Ling_130626.pdf">
            Download PDF
          </FooterNavLink>
        </FooterColumn>

        <FooterColumn index="02" title="CONNECT">
          {connectLinks.map((link) => (
            <FooterNavLink key={link.label} href={link.href} external>
              {link.label}
            </FooterNavLink>
          ))}
        </FooterColumn>

        <FooterColumn index="03" title="INDEX">
          {indexLinks.map((link) => (
            <FooterNavLink key={link.label} href={link.href}>
              {link.label}
            </FooterNavLink>
          ))}
        </FooterColumn>
      </div>

      <div
        className={`mt-[clamp(1.5rem,3vh,2rem)] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ${fadeInFromTopClass(isVisible)}`}
        style={fadeDelayStyle(200)}
      >
        <p className="footer-meta footer-meta-muted">© 2026 — Celine Goh</p>
        <button
          type="button"
          onClick={scrollToTop}
          className="footer-meta group inline-flex items-center gap-2"
        >
          <span className="footer-meta-link">Back to top</span>
          <ArrowUp
            className="size-3.5 shrink-0 text-offblack transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-terracotta"
            strokeWidth={1.5}
          />
        </button>
      </div>
    </footer>
  )
}
