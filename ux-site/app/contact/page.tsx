import { SectionEyebrow } from "@/components/site-chrome"
import { site } from "@/lib/content"

export const metadata = {
  title: `Contact — ${site.title}`,
  description: "Get in touch about UX work, case studies, or collaborations.",
}

export default function ContactPage() {
  return (
    <div className="px-[clamp(1.25rem,4vw,4rem)] py-[clamp(2rem,6vh,4rem)]">
      <SectionEyebrow>Contact</SectionEyebrow>
      <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
        Happy to walk through any case in more depth.
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
        Reach out for portfolio walkthroughs, UX roles, or collaboration. I can share process
        artifacts — journey maps, wireframes, test notes — for any of the four cases.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <a
          href={`mailto:${site.email}`}
          className="border border-line bg-paper px-5 py-6 transition-colors hover:border-signal"
        >
          <p className="text-[11px] font-semibold tracking-[0.14em] text-signal uppercase">Email</p>
          <p className="mt-3 font-display text-xl font-semibold tracking-[-0.02em] text-ink">
            {site.email}
          </p>
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-line bg-paper px-5 py-6 transition-colors hover:border-signal"
        >
          <p className="text-[11px] font-semibold tracking-[0.14em] text-signal uppercase">
            LinkedIn
          </p>
          <p className="mt-3 font-display text-xl font-semibold tracking-[-0.02em] text-ink">
            linkedin.com/in/celineghl
          </p>
        </a>
      </div>
    </div>
  )
}
