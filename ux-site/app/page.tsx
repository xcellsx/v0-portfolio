import Link from "next/link"
import { ProjectCard } from "@/components/case-study"
import { SectionLabel } from "@/components/site-chrome"
import { caseStudies, site } from "@/lib/content"

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-[clamp(1.5rem,4vw,5rem)] pt-[clamp(2.5rem,8vh,5rem)] pb-[clamp(3rem,10vh,6rem)]">
        <div className="relative max-w-4xl">
          <SectionLabel>[ UI // UX Portfolio ]</SectionLabel>
          <h1 className="reveal mt-6 font-serif text-[clamp(3rem,8vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-offblack">
            {site.brand}
          </h1>
          <p className="reveal reveal-delay-1 mt-6 max-w-xl font-serif text-[clamp(1.35rem,2.8vw,1.85rem)] font-medium leading-snug tracking-[-0.02em] text-terracotta">
            {site.tagline}
          </p>
          <p className="reveal reveal-delay-2 mt-4 max-w-xl font-sans text-sm leading-relaxed text-offblack/75 sm:text-base">
            {site.lede}
          </p>
          <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="/approach"
              className="border-b border-offblack pb-0.5 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors hover:border-terracotta hover:text-terracotta"
            >
              How I work
            </Link>
            <a
              href="#work"
              className="border-b border-offblack/25 pb-0.5 font-mono text-[11px] tracking-[0.12em] text-offblack/70 uppercase transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Selected work
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-line px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2.5rem,6vh,4rem)]">
        <SectionLabel>[ Process // Spine ]</SectionLabel>
        <div className="mt-8 grid gap-0 border-t border-line sm:grid-cols-2 lg:grid-cols-5">
          {site.process.map((item, index) => (
            <div
              key={item.step}
              className={`border-b border-line py-6 sm:border-b-0 lg:px-4 ${
                index > 0 ? "lg:border-l lg:border-line" : "lg:pl-0"
              }`}
            >
              <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">
                {item.step}
              </p>
              <p className="mt-3 font-serif text-lg font-medium tracking-[-0.02em] text-offblack">
                {item.title}
              </p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-offblack/70">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="work"
        className="border-t border-line px-[clamp(1.5rem,4vw,5rem)] py-[clamp(3rem,8vh,5rem)]"
      >
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <SectionLabel>[ Selected // Work ]</SectionLabel>
            <h2 className="mt-4 font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium tracking-[-0.02em] text-offblack">
            Selected work. Research first. Mobile-led.
          </h2>
          </div>
          <p className="hidden max-w-xs text-right font-mono text-[10px] tracking-[0.1em] text-offblack/45 uppercase md:block">
            Serenity · Shopee · Ninkatec · GXS · Amazon
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
