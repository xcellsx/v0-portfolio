"use client"

import { Header } from "@/components/header"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { IridescentCard } from "@/components/iridescent-blob"

const projectData = {
  title: "The Keepsakes",
  category: "web development",
  year: "2025",
  stack: ["REACT", "TAILWIND", "SUPABASE"],
  liveUrl: "https://v0-the-keepsakes.vercel.app/jar",
  heroVideo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main-video-yoK9crd8KQWPhhyKRXD0l7bKfWelCi.mp4",
  content: {
    heading: "DIGITIZING NOSTALGIA.",
    description:
      "Inspired by the tactile childhood ritual of folding paper stars to make wishes. I wanted to explore how a physical, intimate act of memory-keeping could translate into a web environment.",
    goal: "To build a 'digital sanctuary'—a space that feels as personal and delicate as the paper original, but lives permanently on the blockchain/web.",
  },
  methodology: [
    { title: "CONCEPT", description: "Paper Star in Jars" },
    { title: "LOGIC", description: "Creating Elements & Designs" },
    { title: "UI SYSTEM", description: "Figma Prototyping from sketching in previous step" },
    { title: "BUILD", description: "Bringing the UI System to life" },
  ],
  blueprints: [
    {
      image: "/images/initial-sketch.jpg",
      description: "Initial wireframe sketches exploring authentication flows and UI layouts",
    },
    {
      image: "/images/figma-prototype.png",
      description: "Figma prototype showing Sign In, Sign Up, and Keepsake Interface screens",
    },
    { image: "/images/code.png", description: "Three.js implementation of 3D mason jar with realistic glass material" },
  ],
}

export default function TheKeepsakePage() {
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
          <div className="flex items-start justify-between mb-8">
            <Link href="/work" className="flex items-center gap-2 hover-iridescent mt-2">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="text-center flex-1">
              <h1 className="font-script text-4xl md:text-5xl lg:text-6xl">{projectData.title}</h1>
            </div>
            <span className="text-xs text-muted-foreground mt-2">[{projectData.category}]</span>
          </div>

          {/* Project metadata */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-sm">
              <span className="text-muted-foreground">YEAR: </span>
              <span className="font-bold">{projectData.year}</span>
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">STACK: </span>
              <span className="font-bold">{projectData.stack.join(", ")}</span>
            </div>
            <Link
              href={projectData.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold border border-foreground rounded-full px-4 py-2 hover-iridescent"
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
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{projectData.content.description}</p>
            <p className="text-sm leading-relaxed">
              <span className="font-bold">THE GOAL: </span>
              <span className="text-muted-foreground">{projectData.content.goal}</span>
            </p>
          </section>

          {/* Methodology section */}
          <section className="mb-16">
            <h2 className="text-lg font-bold mb-12">METHODOLOGY.</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-3 left-0 right-0 h-px bg-border" />

              {/* Timeline steps */}
              <div className="grid grid-cols-4 gap-4">
                {projectData.methodology.map((step, index) => (
                  <div key={step.title} className="relative">
                    {/* Circle marker */}
                    <div className="w-6 h-6 rounded-full border-2 border-foreground bg-background mb-4 relative z-10" />
                    <h3 className="font-bold text-sm mb-2">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Blueprint section */}
          <section className="mb-16">
            <h2 className="text-lg font-bold mb-8">THE BLUEPRINT.</h2>
            <div className="flex items-center gap-8">
              <button onClick={prevBlueprint} className="text-2xl hover-iridescent p-2" aria-label="Previous blueprint">
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex-1">
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
                <p className="text-sm text-muted-foreground text-center">
                  {projectData.blueprints[currentBlueprint]?.description ||
                    `description of image ${currentBlueprint + 1}`}
                </p>
              </div>

              <button onClick={nextBlueprint} className="text-2xl hover-iridescent p-2" aria-label="Next blueprint">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </section>

          {/* Other projects section */}
          <section>
            <h2 className="text-lg font-bold mb-8">OTHER PROJECTS</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {otherProjects.map((project) => (
                <Link key={project.title} href={project.href} className="group">
                  <IridescentCard className="aspect-[16/9] mb-4 group-hover:opacity-80 transition-opacity" />
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
  { title: "AETHER", category: "branding", year: "2025", href: "/work/aether" },
  { title: "tbd", category: "3D Modeling", year: "2025", href: "/work" },
]
