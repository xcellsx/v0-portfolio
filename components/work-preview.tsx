import Link from "next/link"
import Image from "next/image"
import { IridescentCard } from "./iridescent-blob"

const projects = [
  {
    title: "AETHER™",
    category: "branding",
    year: "2025",
    image: "/aether-card.png",
    slug: "aether",
  },
  {
    title: "The Keepsake",
    category: "web development",
    year: "2025",
    image: "/keepsake-card.png",
    slug: "the-keepsake",
  },
  {
    title: "tbd",
    category: "3d model",
    year: "2025",
    slug: "tbd",
  },
]

export function WorkPreview() {
  return (
    <section id="work" className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-sm font-bold mb-8 tracking-widest uppercase">MY WORKS.</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Link key={project.title} href={project.slug ? `/work/${project.slug}` : "/work"} className="group">
              {project.image ? (
                <div className="aspect-[16/9] mb-4 overflow-hidden group-hover:opacity-80 transition-opacity relative">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <IridescentCard className="aspect-[16/9] mb-4 group-hover:opacity-80 transition-opacity" />
              )}

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
