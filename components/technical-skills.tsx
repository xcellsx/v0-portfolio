"use client"

import { SectionLabel } from "@/components/section-label"
import { WireframeRose } from "@/components/wireframe-rose"
import { skillTracks } from "@/lib/technical-skills-data"
import { fadeDelayStyle, fadeInFromTopClass } from "@/lib/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

function SkillItem({ skill }: { skill: string }) {
  return (
    <li className="skill-item group/skill flex cursor-default items-start gap-2.5 py-1.5">
      <span className="skill-marker mt-[0.35em] w-3 shrink-0 text-center font-mono text-[10px] leading-none">
        <span className="skill-marker-idle">●</span>
        <span className="skill-marker-active">→</span>
      </span>
      <span className="skill-keyword font-sans text-sm leading-[1.6]">{skill}</span>
    </li>
  )
}

export function TechnicalSkills() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="technical-profile" ref={ref} className="min-h-screen bg-offwhite text-offblack">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="flex min-h-0 flex-col justify-center px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2rem,5vh,4rem)]">
          <h2
            className={`mb-[clamp(2rem,5vh,3.5rem)] font-serif text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1.2] tracking-[-0.02em] text-terracotta ${fadeInFromTopClass(isVisible)}`}
          >
            Technical Skills
          </h2>

          <div className="flex w-full max-w-md flex-col gap-[clamp(2rem,5vh,3rem)]">
            {skillTracks.map((track, columnIndex) => (
              <div
                key={track.label}
                className={`flex min-w-0 flex-col ${fadeInFromTopClass(isVisible)}`}
                style={fadeDelayStyle(140 + columnIndex * 120)}
              >
                <div className="mb-5">
                  <SectionLabel className="text-[11px] tracking-[0.14em]">
                    [ {track.index} // {track.label} ]
                  </SectionLabel>
                  <div className="accent-rule mt-3 h-px w-full opacity-30" aria-hidden />
                </div>

                <ul className="space-y-0.5">
                  {track.skills.map((skill) => (
                    <SkillItem key={skill} skill={skill} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`relative min-h-[40vh] px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2rem,5vh,4rem)] lg:min-h-screen ${fadeInFromTopClass(isVisible, "duration-[1100ms]")}`}
          style={fadeDelayStyle(200)}
        >
          <WireframeRose />
        </div>
      </div>
    </section>
  )
}
