import Link from "next/link"
import { site } from "@/lib/content"

const links = [
  { href: "/", label: "Work" },
  { href: "/approach", label: "Approach" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header className="relative z-20 flex items-center justify-between gap-6 px-[clamp(1.5rem,4vw,5rem)] py-6">
      <Link href="/" className="group">
        <span className="font-serif text-xl font-medium tracking-[-0.02em] text-offblack transition-colors group-hover:text-terracotta">
          {site.brand}
        </span>
      </Link>
      <nav className="flex items-center gap-1 sm:gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-2 py-1.5 font-mono text-[11px] tracking-[0.12em] text-offblack/70 uppercase transition-colors hover:text-terracotta sm:px-2.5"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line px-[clamp(1.5rem,4vw,5rem)] py-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-serif text-sm font-medium tracking-[-0.02em] text-offblack">
          {site.brand}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] tracking-[0.1em] text-offblack/60 uppercase">
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-terracotta">
            Email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-terracotta"
          >
            LinkedIn
          </a>
          <a
            href={site.resumeHref}
            download={site.resumeDownload}
            className="transition-colors hover:text-terracotta"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  const text = typeof children === "string" ? children : ""
  const match = text.trim().match(/^\[(.+)\]$/)
  const inner = match ? match[1] : text
  const segments = inner.split(/\s*\/\/\s*/)

  return (
    <div className="font-mono text-[11px] tracking-[0.14em] uppercase">
      <span className="text-terracotta">[</span>
      {segments.map((segment, index) => (
        <span key={`${segment}-${index}`}>
          {index > 0 && <span className="text-terracotta"> // </span>}
          <span className="text-offblack/55">{segment}</span>
        </span>
      ))}
      <span className="text-terracotta">]</span>
    </div>
  )
}
