import { SectionEyebrow } from "@/components/site-chrome"
import { site } from "@/lib/content"

export const metadata = {
  title: `Approach — ${site.title}`,
  description: "Problem-first UX process: research, persona, journey, wireframes, testing.",
}

export default function ApproachPage() {
  return (
    <div className="px-[clamp(1.25rem,4vw,4rem)] py-[clamp(2rem,6vh,4rem)]">
      <SectionEyebrow>Approach</SectionEyebrow>
      <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
        Across projects, I start with the problem — not the screens.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
        Research and validation, then persona and user journey mapping, then wireframes
        benchmarked against industry standards, then testing. That spine stays consistent from
        school 0→1 work to internship product teams.
      </p>

      <div className="mt-12 border-t border-line">
        {site.process.map((item) => (
          <div
            key={item.step}
            className="grid gap-3 border-b border-line py-8 md:grid-cols-[6rem_minmax(10rem,24%)_1fr]"
          >
            <p className="font-display text-lg font-semibold text-signal">{item.step}</p>
            <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
              {item.title}
            </h2>
            <p className="text-sm leading-relaxed text-ink-soft md:text-base">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-2xl border border-line bg-paper-deep/50 px-6 py-7">
        <SectionEyebrow>Working note</SectionEyebrow>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          A Shopee design-test critique taught me to go deep on one issue instead of fixing
          everything at once. That prioritization habit now shows up in how I scope research,
          journeys, and redesigns.
        </p>
      </div>
    </div>
  )
}
