export interface SkillTrack {
  index: string
  label: string
  skills: string[]
}

export const skillTracks: SkillTrack[] = [
  {
    index: "01",
    label: "DESIGN",
    skills: ["Figma", "Design Systems", "User Research"],
  },
  {
    index: "02",
    label: "DEVELOP",
    skills: ["JavaScript", "React / Next.js", "HTML5", "CSS"],
  },
  {
    index: "03",
    label: "VISUAL",
    skills: ["Blender", "Spline", "Affinity", "Illustrator"],
  },
]
