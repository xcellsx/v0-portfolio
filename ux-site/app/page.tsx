import Link from "next/link"
import { ProjectCard } from "@/components/case-study"
import { SectionEyebrow } from "@/components/site-chrome"
import { caseStudies, site } from "@/lib/content"

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-[clamp(1.25rem,4vw,4rem)] pt-[clamp(2rem,8vh,5rem)] pb-[clamp(3rem,10vh,6rem)]">
        <div
          className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-signal/10 blur-3xl"
          aria-hidden
        />
        <div className="relative max-w-4xl">
          <p className="reveal text-[11px] font-semibold tracking-[0.18em] text-signal uppercase">
            Independent UI/UX portfolio
          </p>
          <h1 className="reveal reveal-delay-1 mt-5 font-display text-[clamp(3rem,9vw,6rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-ink">
            {site.brand}
            <span className="text-signal">.</span>
            <span className="block text-signal-deep">{site.mark}</span>
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-xl font-display text-[clamp(1.35rem,3vw,1.85rem)] font-semibold leading-snug tracking-[-0.02em] text-ink">
            {site.tagline}
          </p>
          <p className="reveal reveal-delay-3 mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
            {site.lede}
          </p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
            <Link
              href="/approach"
              className="bg-ink px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-signal-deep"
            >
              How I work
            </Link>
            <a
              href="#work"
              className="border border-ink/20 bg-paper/70 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-signal hover:text-signal"
            >
              See case studies
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-line px-[clamp(1.25rem,4vw,4rem)] py-10">
        <SectionEyebrow>Process spine</SectionEyebrow>
        <div className="mt-6 grid gap-0 sm:grid-cols-2 lg:grid-cols-5">
          {site.process.map((item, index) => (
            <div
              key={item.step}
              className={`border-t border-line py-5 sm:border-t-0 sm:px-4 lg:px-3 ${
                index > 0 ? "lg:border-l lg:border-line" : "lg:pl-0"
              }`}
            >
              <p className="font-display text-sm font-semibold text-signal">{item.step}</p>
              <p className="mt-2 font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="work"
        className="border-t border-line px-[clamp(1.25rem,4vw,4rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <SectionEyebrow>Selected work</SectionEyebrow>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold tracking-[-0.03em]">
              Four cases. Research first.
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-ink-soft md:block">
            Ninkatec · Amazon · GXS · Shopee — each led by problem framing and validation.
          </p>
        </div>
        <div className="border-t border-line">
          {caseStudies.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}
