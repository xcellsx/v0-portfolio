import Link from "next/link"
import { site } from "@/lib/content"

const links = [
  { href: "/", label: "Work" },
  { href: "/approach", label: "Approach" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header className="relative z-20 flex items-center justify-between gap-6 px-[clamp(1.25rem,4vw,4rem)] py-5">
      <Link href="/" className="group flex items-baseline gap-2">
        <span className="font-display text-xl font-semibold tracking-[-0.03em] text-ink">
          {site.brand}
        </span>
        <span className="text-[11px] font-semibold tracking-[0.16em] text-signal uppercase">
          {site.mark}
        </span>
      </Link>
      <nav className="flex items-center gap-1 sm:gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-2.5 py-1.5 text-sm text-ink-soft transition-colors hover:text-ink sm:px-3"
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
    <footer className="mt-auto border-t border-line px-[clamp(1.25rem,4vw,4rem)] py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-sm font-semibold tracking-[-0.02em] text-ink">
          {site.brand} · {site.mark}
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-ink-soft">
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-signal">
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-signal"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold tracking-[0.16em] text-signal uppercase">
      {children}
    </p>
  )
}
