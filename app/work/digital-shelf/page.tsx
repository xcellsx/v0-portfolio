"use client"

import { Header } from "@/components/header"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { IridescentCard } from "@/components/iridescent-blob"
import { ToolkitIcon } from "@/components/toolkit-icons"

const digitalShelfProjectData = {
  title: "Digital Shelf",
  category: "web development",
  year: "2025",
  toolkit: ["figma", "typescript", "three.js"],
  disciplines: ["3D WEB DEVELOPMENT", "INTERACTIVE NAVIGATION", "MODEL VIEWER"],
  liveUrl: "", // Add your live URL when ready
  heroVideo: "", // Add hero video or image URL
  
  content: {
    heading: "A 3D SHOWCASE FOR 3D WORK.",
    description:
      "Building a digital shelf to display 3D models requires a 3D interface. This project explores immersive navigation in three-dimensional space, where users can interact with a virtual shelf that houses my 3D creations. The navigation itself becomes part of the experience—moving through space to discover models.",
    goal: "To create an intuitive 3D navigation system that feels natural and engaging. The shelf acts as both a portfolio and an interactive experience, allowing visitors to explore models in their native dimension while maintaining smooth performance and accessibility.",
  },

  methodology: [
    { title: "CONCEPT & ARCHITECTURE", description: "Designing the 3D shelf structure and navigation flow" },
    { title: "3D NAVIGATION SYSTEM", description: "Building immersive camera controls and spatial movement" },
    { title: "MODEL INTEGRATION", description: "Implementing GLB/GLTF loading and interactive model viewers" },
    { title: "OPTIMIZATION & POLISH", description: "Performance tuning and interaction refinement" },
  ],

  blueprints: [
    {
      image: "", // Add your blueprint image
      description: "3D Navigation Concept. Exploring camera movement patterns and spatial relationships between models on the shelf.",
    },
    {
      image: "", // Add your blueprint image
      description: "Shelf Architecture. Designing the virtual shelf structure and model placement system.",
    },
    {
      image: "", // Add your blueprint image
      description: "Interaction Design. Defining how users interact with models—hover states, selection, and detail views.",
    },
  ],

  brandManual: [
    { 
      image: "", // Add your image
      title: "3D Navigation",
      isCarousel: false
    },
    { 
      image: "", // Add your image
      title: "Model Viewer",
      isCarousel: false
    },
    { 
      image: "", // Add your image
      title: "Shelf Interface",
      isCarousel: false
    },
    { 
      image: "", // Add your image
      title: "Interaction States",
      isCarousel: false
    },
  ],
}

export default function DigitalShelfPage() {
  const [currentBlueprint, setCurrentBlueprint] = useState(0)
  const [currentManualIndex, setCurrentManualIndex] = useState(0)

  const nextBlueprint = () => {
    setCurrentBlueprint((prev) => (prev + 1) % digitalShelfProjectData.blueprints.length)
  }

  const prevBlueprint = () => {
    setCurrentBlueprint((prev) => (prev - 1 + digitalShelfProjectData.blueprints.length) % digitalShelfProjectData.blueprints.length)
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
              <h1 className="font-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl break-words">{digitalShelfProjectData.title}</h1>
            </div>
            <span className="text-xs text-muted-foreground mt-2 shrink-0 hidden sm:inline">[{digitalShelfProjectData.category}]</span>
          </div>
          <div className="sm:hidden text-center mb-4">
            <span className="text-xs text-muted-foreground">[{digitalShelfProjectData.category}]</span>
          </div>

          {/* Project metadata */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm">
              <div>
                <span className="text-muted-foreground">YEAR: </span>
                <span className="font-bold">{digitalShelfProjectData.year}</span>
              </div>
              <div className="break-words">
                <span className="text-muted-foreground">DISCIPLINES: </span>
                <span className="font-bold text-xs sm:text-sm">{digitalShelfProjectData.disciplines.join(", ")}</span>
              </div>
              {digitalShelfProjectData.toolkit && (
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">TOOLKIT: </span>
                  <div className="flex gap-1.5">
                    {digitalShelfProjectData.toolkit.map((tool) => (
                      <ToolkitIcon key={tool} tool={tool} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
              )}
            </div>
            {digitalShelfProjectData.liveUrl && (
              <Link
                href={digitalShelfProjectData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-bold border border-foreground rounded-full px-4 py-2 hover:bg-foreground hover:text-background transition-colors w-full sm:w-auto text-center"
              >
                LIVE SITE.
              </Link>
            )}
          </div>

          {/* Hero video/image */}
          {digitalShelfProjectData.heroVideo ? (
            <div className="aspect-video bg-muted mb-4 relative overflow-hidden">
              {digitalShelfProjectData.heroVideo.endsWith('.mp4') || 
               digitalShelfProjectData.heroVideo.endsWith('.avi') || 
               digitalShelfProjectData.heroVideo.endsWith('.mov') || 
               digitalShelfProjectData.heroVideo.endsWith('.webm') ? (
                <video src={digitalShelfProjectData.heroVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              ) : (
                <Image
                  src={digitalShelfProjectData.heroVideo}
                  alt={digitalShelfProjectData.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          ) : (
            <div className="aspect-video bg-muted mb-4 relative overflow-hidden flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Add hero video/image URL to digitalShelfProjectData.heroVideo</p>
            </div>
          )}

          {/* Content section */}
          <section className="mb-16 pt-8">
            <h2 className="text-lg font-bold mb-4">{digitalShelfProjectData.content.heading}</h2>
            <div className="text-sm leading-relaxed mb-4">
              <p className="text-muted-foreground mb-4">{digitalShelfProjectData.content.description}</p>
              <p>
                <span className="font-bold">THE GOAL: </span>
                <span className="text-muted-foreground">{digitalShelfProjectData.content.goal}</span>
              </p>
            </div>
          </section>

          {/* Methodology section */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-lg font-bold mb-8 sm:mb-12">METHODOLOGY.</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden lg:block absolute top-3 left-0 right-0 h-px bg-border" />

              {/* Timeline steps */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4">
                {digitalShelfProjectData.methodology.map((step, index) => (
                  <div key={step.title} className="relative">
                    {/* Circle marker with number */}
                    <div className="w-6 h-6 rounded-full border-2 border-foreground bg-background mb-3 sm:mb-4 relative z-10 flex items-center justify-center">
                      <span className="text-xs font-bold">{index + 1}</span>
                    </div>
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
                  {digitalShelfProjectData.blueprints[currentBlueprint]?.image ? (
                    <Image
                      src={digitalShelfProjectData.blueprints[currentBlueprint].image || "/placeholder.svg"}
                      alt={digitalShelfProjectData.blueprints[currentBlueprint].description}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <IridescentCard className="w-full h-full" />
                  )}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground text-center px-2">
                  {digitalShelfProjectData.blueprints[currentBlueprint]?.description ||
                    `description of blueprint ${currentBlueprint + 1}`}
                </p>
              </div>

              <button onClick={nextBlueprint} className="text-2xl hover-iridescent p-2 shrink-0" aria-label="Next blueprint">
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </section>

          {/* The Manual section */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-lg font-bold mb-6 sm:mb-8">THE SYSTEM.</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {digitalShelfProjectData.brandManual.map((slide, index) => (
                <div key={index} className="relative aspect-[4/3] bg-muted overflow-hidden group">
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
  { title: "AETHER™", category: "branding", year: "2025", href: "/work/aether", image: "/images/aether/aether-card.png" },
  { title: "Spirit Sprite", category: "3d model", year: "2025", href: "/work/spirit-sprite", image: "/images/spirit-sprite/spirit-sprite-card.png" },
]

