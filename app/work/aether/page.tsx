"use client"

import { Header } from "@/components/header"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { IridescentCard } from "@/components/iridescent-blob"

const projectData = {
  title: "Aether™",
  category: "branding",
  year: "2025",
  disciplines: ["BRAND STRATEGY", "VISUAL IDENTITY", "PRODUCT MOCKUP"],
  liveUrl: "https://aether-ebon-three.vercel.app/",
  brandBookUrl: "/aether-brandbook.pdf", // Update with actual PDF URL
  heroVideo: "/aether-main.mp4",
  content: {
    heading: "DEFINING FUTURE-MINIMALISM.",
    description:
      "To create a visual identity for AETHER™, a high-performance clinical skincare brand launching the 'Quantum Glow' serum. The brief called for an aesthetic that rejects traditional 'medical' tropes in favor of something ethereal, translucent, and scientifically precise.",
    goal: "To synthesize a visual language that bridges the gap between clinical efficacy and ethereal beauty. The identity needed to feel like it came from a lab in the year 2050—clean, distinct, and illuminated.",
  },
  methodology: [
    { title: "BRIEF ANALYSIS", description: "Deconstructing 'Future-Minimalism' & 'Clinical' keywords" },
    { title: "VISUAL SYNTHESIS", description: "Exploring divergent directions: Sharp/Elegant vs. Soft/Biological" },
    { title: "IDENTITY SYSTEM", description: "Defining the 'Quantum' color palette & typographic hierarchy" },
    { title: "BRAND BOOK", description: "Codifying the rules for packaging and digital usage" },
  ],
  blueprints: [
    {
      image: "/images/colour-exploration.png", // Moodboard image - update path if needed
      description: "Visual Direction Testing. We stress-tested three distinct aesthetics: Sharp & Elegant (Green), Soft & Biological (Blue), and Heavy & Bold (Pink) before selecting the final direction.",
    },
    {
      image: "/images/aether-logo-grid.png", // Logo grid - update path if needed
      description: "Logomark geometry. Constructed to ensure legibility across small serum bottles and large digital billboards.",
    },
    {
      image: "/images/aether-color-palette.png", // Color palette - update path if needed
      description: "The 'Quantum' Palette. Moving away from standard medical blues to embrace a high-contrast, bio-luminescent color story.",
    },
  ],
  brandManual: [
    { image: "/images/brand-manual-1.png", title: "Logo Usage" },
    { image: "/images/brand-manual-2.png", title: "Typography" },
    { image: "/images/brand-manual-3.png", title: "Product Mockup" },
    { image: "/images/brand-manual-4.png", title: "Social Media" },
  ],
}

export default function AetherPage() {
  const [currentBlueprint, setCurrentBlueprint] = useState(0)

  const nextBlueprint = () => {
    setCurrentBlueprint((prev) => (prev + 1) % projectData.blueprints.length)
  }

  const prevBlueprint = () => {
    setCurrentBlueprint((prev) => (prev - 1 + projectData.blueprints.length) % projectData.blueprints.length)
  }

  return (
    <div className="min-h-screen relative bg-background">
      <Header />
      <main className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Back button and title row */}
          <div className="flex items-start justify-between mb-6 sm:mb-8 gap-2">
            <Link href="/work" className="flex items-center gap-2 hover-iridescent mt-2 shrink-0">
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <div className="text-center flex-1 min-w-0">
              <h1 className="font-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl break-words">{projectData.title}</h1>
            </div>
            <span className="text-xs text-muted-foreground mt-2 shrink-0 hidden sm:inline">[{projectData.category}]</span>
          </div>
          <div className="sm:hidden text-center mb-4">
            <span className="text-xs text-muted-foreground">[{projectData.category}]</span>
          </div>

          {/* Project metadata */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm">
              <div>
                <span className="text-muted-foreground">YEAR: </span>
                <span className="font-bold">{projectData.year}</span>
              </div>
              <div className="break-words">
                <span className="text-muted-foreground">DISCIPLINES: </span>
                <span className="font-bold text-xs sm:text-sm">{projectData.disciplines.join(", ")}</span>
              </div>
            </div>
            <Link
              href={projectData.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-bold border border-foreground rounded-full px-4 py-2 hover:bg-foreground hover:text-background transition-colors w-full sm:w-auto text-center"
            >
              LIVE SITE.
            </Link>
          </div>

          {/* Hero video */}
          <div className="aspect-video bg-muted mb-4 relative overflow-hidden">
            <video src={projectData.heroVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
          </div>

          {/* Content section */}
          <section className="mb-16 pt-8">
            <h2 className="text-lg font-bold mb-4">{projectData.content.heading}</h2>
            <div className="text-sm leading-relaxed mb-4">
              <p className="text-muted-foreground mb-4">{projectData.content.description}</p>
              <p>
                <span className="font-bold">THE GOAL: </span>
                <span className="text-muted-foreground">{projectData.content.goal}</span>
              </p>
            </div>
          </section>

          {/* Methodology section */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-lg font-bold mb-8 sm:mb-12">METHODOLOGY.</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden sm:block absolute top-3 left-0 right-0 h-px bg-border" />

              {/* Timeline steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4">
                {projectData.methodology.map((step, index) => (
                  <div key={step.title} className="relative">
                    {/* Circle marker */}
                    <div className="w-6 h-6 rounded-full border-2 border-foreground bg-background mb-3 sm:mb-4 relative z-10" />
                    <h3 className="font-bold text-sm mb-2">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Blueprint section */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-lg font-bold mb-6 sm:mb-8">THE BLUEPRINT.</h2>
            <div className="flex items-center gap-4 sm:gap-8">
              <button onClick={prevBlueprint} className="text-2xl hover-iridescent p-2 shrink-0" aria-label="Previous blueprint">
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="flex-1 min-w-0">
                <div className="aspect-video bg-muted relative overflow-hidden mb-4">
                  {projectData.blueprints[currentBlueprint]?.image ? (
                    <Image
                      src={projectData.blueprints[currentBlueprint].image || "/placeholder.svg"}
                      alt={projectData.blueprints[currentBlueprint].description}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <IridescentCard className="w-full h-full" />
                  )}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground text-center px-2">
                  {projectData.blueprints[currentBlueprint]?.description ||
                    `description of image ${currentBlueprint + 1}`}
                </p>
              </div>

              <button onClick={nextBlueprint} className="text-2xl hover-iridescent p-2 shrink-0" aria-label="Next blueprint">
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </section>

          {/* The Manual section */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-lg font-bold mb-6 sm:mb-8">THE MANUAL.</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {projectData.brandManual.map((slide, index) => (
                <div key={index} className="relative aspect-[4/3] bg-muted overflow-hidden">
                  {slide.image ? (
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <IridescentCard className="w-full h-full" />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-background/80 p-2">
                    <p className="text-xs font-bold">{slide.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                href={projectData.brandBookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-bold border border-foreground rounded-full px-6 py-2.5 hover:bg-foreground hover:text-background transition-colors"
              >
                VIEW COMPLETE BRAND BOOK
              </a>
            </div>
          </section>

          {/* Other projects section */}
          <section>
            <h2 className="text-lg font-bold mb-8">OTHER PROJECTS</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {otherProjects.map((project) => (
                <Link key={project.title} href={project.href} className="group">
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
        </div>
      </main>

      {/* Simple footer for project page */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <p className="text-xs text-muted-foreground text-center">© 2025 CELINE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

const otherProjects = [
  { title: "The Keepsake", category: "web development", year: "2025", href: "/work/the-keepsake", image: "/keepsake-card.png" },
  { title: "tbd", category: "3D Modeling", year: "2025", href: "/work" },
]
