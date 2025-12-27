"use client"

import { useTheme } from "./theme-provider"

const skills = [
  {
    title: "Design",
    tools: ["PROCREATE", "ILLUSTRATOR", "FIGMA"],
    icon: "pen",
  },
  {
    title: "Web Development",
    tools: ["HTML / CSS", "JAVASCRIPT", "UI / UX"],
    icon: "code",
  },
  {
    title: "3D Modeling",
    tools: ["BLENDER", "SPLINE", "FUSION"],
    icon: "cube",
  },
]

export function Skills() {
  const { theme } = useTheme()

  return (
    <section className="pt-0 pb-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-sm font-bold mb-8 tracking-widest uppercase text-center">SKILLS.</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div key={skill.title} className="border border-border p-8 text-center space-y-6">
              {skill.icon === "cube" ? (
                <video autoPlay loop muted playsInline key={theme} className="w-20 h-20 mx-auto object-contain">
                  <source src={theme === "dark" ? "/cube-dark.mp4" : "/cube.mp4"} type="video/mp4" />
                </video>
              ) : skill.icon === "code" ? (
                <video autoPlay loop muted playsInline key={theme} className="w-20 h-20 mx-auto object-contain">
                  <source src={theme === "dark" ? "/code-dark.mp4" : "/code.mp4"} type="video/mp4" />
                </video>
              ) : skill.icon === "pen" ? (
                <video autoPlay loop muted playsInline key={theme} className="w-20 h-20 mx-auto object-contain">
                  <source src={theme === "dark" ? "/pen-dark.mp4" : "/pen.mp4"} type="video/mp4" />
                </video>
              ) : null}

              <h3 className="font-script text-2xl">{skill.title}</h3>

              <div className="space-y-1">
                {skill.tools.map((tool) => (
                  <p key={tool} className="text-xs tracking-wider text-muted-foreground">
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
