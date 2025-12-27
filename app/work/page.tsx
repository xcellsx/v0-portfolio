"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { IridescentCard } from "@/components/iridescent-blob"

const categories = [
  { id: "web", label: "WEB DEVELOPMENT" },
  { id: "branding", label: "BRANDING" },
  { id: "modeling", label: "3D MODELING" },
]

const sections = [
  {
    id: "web",
    title: "Web Development",
    description:
      "From atomic design systems to responsive component architecture. I translate static Figma mockups into scalable, reactive code environments.",
    workflow: ["System Architecture", "Component Design", "React Implementation", "Interaction Polish"],
    projects: [
      { title: "The Keepsake", category: "web development", year: "2025", image: "/kwwpsake-card.png" },
      { title: "tbd", category: "web development", year: "2025" },
    ],
  },
  {
    id: "branding",
    title: "Branding",
    description:
      "More than just a logo. I build cohesive visual ecosystems, defining typography, color theory, and usage guidelines that ensure the brand lives consistently across all mediums.",
    workflow: ["Strategic Discovery", "Visual Direction", "Identity System Build", "Scalable Guidelines"],
    projects: [
      { title: "Aether", category: "branding", year: "2025" },
      { title: "tbd", category: "branding", year: "2025" },
    ],
  },
  {
    id: "modeling",
    title: "3D Modeling",
    description:
      "Sculpting digital form. My workflow moves from raw geometry to material synthesis and lighting, optimizing high-fidelity assets for real-time web performance.",
    workflow: ["Geometric Conception", "Topology & Texturing", "Lighting & Atmosphere", "Render Optimization"],
    projects: [
      { title: "tbd", category: "3d model", year: "2025" },
      { title: "tbd", category: "3d model", year: "2025" },
    ],
  },
]

export default function WorkPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen relative">
      <Header />
      <main className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-sm py-4 -mx-6 px-6 mb-8">
            <div className="flex justify-center gap-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className="text-xs tracking-wider hover-iridescent"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Work sections */}
          <div className="space-y-24">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-40">
                <div className="text-center mb-8">
                  <h2 className="font-script text-4xl md:text-5xl mb-4">{section.title}</h2>
                  <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {section.description}
                  </p>
                </div>

                {/* Workflow steps */}
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-8 flex-wrap">
                  {section.workflow.map((step, index) => (
                    <span key={step} className="flex items-center gap-2">
                      {step}
                      {index < section.workflow.length - 1 && <span>→</span>}
                    </span>
                  ))}
                </div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {section.projects.map((project, index) => (
                    <Link key={`${project.title}-${index}`} href="#" className="group">
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
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
