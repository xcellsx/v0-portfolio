import Link from "next/link"
import Image from "next/image"
import { IridescentCard } from "./iridescent-blob"
import { ToolkitIcon } from "./toolkit-icons"

const projects = [
  {
    title: "AETHER™",
    category: "branding",
    year: "2025",
    image: "/images/aether/aether-card.png",
    slug: "aether",
    toolkit: ["figma", "illustrator", "blender"],
  },
  {
    title: "The Keepsake",
    category: "web development",
    year: "2025",
    image: "/images/keepsake/keepsake-card.png",
    slug: "the-keepsake",
    toolkit: ["figma", "typescript"],
  },
  {
    title: "Spirit Sprite",
    category: "3d model",
    year: "2025",
    image: "/images/spirit-sprite/card.png",
    slug: "spirit-sprite",
    toolkit: ["blender"],
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
                <div className="text-right">
                  <span className="text-sm block">{project.year}</span>
                  {project.toolkit && (
                    <div className="flex gap-1.5 mt-1.5 justify-end">
                      {project.toolkit.map((tool) => (
                        <ToolkitIcon key={tool} tool={tool} className="w-3.5 h-3.5" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
