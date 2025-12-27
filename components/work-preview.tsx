import Link from "next/link"
import { IridescentCard } from "./iridescent-blob"

const projects = [
  {
    title: "AETHER",
    category: "branding",
    year: "2025",
  },
  {
    title: "The Keepsakes",
    category: "web development",
    year: "2025",
  },
  {
    title: "tbd",
    category: "3d model",
    year: "2025",
  },
]

export function WorkPreview() {
  return (
    <section id="work" className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-sm font-bold mb-8 tracking-widest uppercase">MY WORKS.</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Link key={project.title} href="/work" className="group">
              <IridescentCard className="aspect-[4/3] mb-4 group-hover:opacity-80 transition-opacity" />

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-sm">{project.title}</h3>
                  <p className="text-xs text-muted-foreground">[{project.category}]</p>
                </div>
                <span className="text-sm">{project.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
