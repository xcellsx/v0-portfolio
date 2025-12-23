import { ProjectCard } from "./project-card"

const projects = [
  {
    number: "01",
    title: "Digital Beauty Lab",
    tags: ["3D Interaction", "Web Design", "React"],
    description:
      "An immersive e-commerce concept featuring a reactive 3D product model. Built to explore the intersection of beauty and spatial web design.",
  },
  {
    number: "02",
    title: "The Keepsakes",
    tags: ["Web Application", "Product Design", "Authentication"],
    description:
      "A digital sanctuary for memories. This web application bridges the gap between digital journaling and e-commerce, offering a seamless user flow and curated stationery.",
  },
  {
    number: "03",
    title: "Vase Study / Generative Form",
    tags: ["3D Modeling", "Industrial Design", "R&D"],
    description:
      "An exploration of organic geometry and glass refraction. Designed to test the limits of digital manufacturing and material visualization.",
  },
]

export function Work() {
  return (
    <section id="work" className="py-20 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="font-mono text-sm text-muted-foreground mb-2 tracking-wider">SELECTED WORK</h2>
          <div className="h-px bg-border" />
        </div>
        <div className="space-y-px">
          {projects.map((project) => (
            <ProjectCard key={project.number} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
