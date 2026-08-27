import { SectionLabel } from "@/components/site-chrome"
import { site } from "@/lib/content"

export const metadata = {
  title: `Contact — ${site.title}`,
  description: "Email, LinkedIn, and resume — get in touch about UX work.",
}

export default function ContactPage() {
  return (
    <div className="px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2rem,6vh,4rem)]">
      <SectionLabel>[ Contact ]</SectionLabel>
      <h1 className="mt-5 max-w-2xl font-serif text-[clamp(2.2rem,5vw,3.4rem)] font-medium leading-[1.08] tracking-[-0.02em] text-terracotta">
        Happy to walk through any case in more depth.
      </h1>
      <p className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-offblack/70 sm:text-base">
        Reach out for portfolio walkthroughs, UX roles, or collaboration.
      </p>

      <div className="mt-10 grid gap-0 border-t border-line sm:grid-cols-3">
        <a
          href={`mailto:${site.email}`}
          className="border-b border-line py-6 transition-colors hover:text-terracotta sm:border-b-0 sm:pr-6"
        >
          <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">Email</p>
          <p className="mt-3 font-serif text-lg font-medium tracking-[-0.02em] text-offblack">
            {site.email}
          </p>
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-line py-6 transition-colors hover:text-terracotta sm:border-b-0 sm:border-l sm:border-line sm:px-6"
        >
          <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">
            LinkedIn
          </p>
          <p className="mt-3 font-serif text-lg font-medium tracking-[-0.02em] text-offblack">
            celineghl
          </p>
        </a>
        <a
          href={site.resumeHref}
          download={site.resumeDownload}
          className="py-6 transition-colors hover:text-terracotta sm:border-l sm:border-line sm:pl-6"
        >
          <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">
            Resume
          </p>
          <p className="mt-3 font-serif text-lg font-medium tracking-[-0.02em] text-offblack">
            Download PDF
          </p>
        </a>
      </div>
    </div>
  )
}
