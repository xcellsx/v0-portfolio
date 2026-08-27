import { SectionLabel } from "@/components/site-chrome"
import { site } from "@/lib/content"

export const metadata = {
  title: `Approach — ${site.title}`,
  description: "Problem-first UX process: research, persona, journey, wireframes, testing.",
}

export default function ApproachPage() {
  return (
    <div className="px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2rem,6vh,4rem)]">
      <SectionLabel>[ Approach ]</SectionLabel>
      <h1 className="mt-5 max-w-3xl font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.02em] text-terracotta">
        Across projects, I start with the problem — not the screens.
      </h1>
      <p className="mt-5 max-w-2xl font-sans text-sm leading-relaxed text-offblack/70 sm:text-base">
        Research and validation, then persona and user journey mapping, then wireframes
        benchmarked against industry standards, then testing. That spine stays consistent from
        school 0→1 work to internship product teams.
      </p>

      <div className="mt-12 border-t border-line">
        {site.process.map((item) => (
          <div
            key={item.step}
            className="grid gap-3 border-b border-line py-8 md:grid-cols-[5rem_minmax(10rem,24%)_1fr]"
          >
            <p className="font-mono text-[11px] tracking-[0.14em] text-terracotta uppercase">
              {item.step}
            </p>
            <h2 className="font-serif text-xl font-medium tracking-[-0.02em] text-offblack">
              {item.title}
            </h2>
            <p className="font-sans text-sm leading-relaxed text-offblack/70">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-2xl border border-line px-6 py-7">
        <SectionLabel>[ Working // Note ]</SectionLabel>
        <p className="mt-4 font-sans text-sm leading-relaxed text-offblack/70">
          A Shopee design-test critique taught me to go deep on one issue instead of fixing
          everything at once. That prioritization habit now shapes how I scope research, journeys,
          and redesigns.
        </p>
      </div>
    </div>
  )
}
