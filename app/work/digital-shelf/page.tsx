"use client"

import { Header } from "@/components/header"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { IridescentCard } from "@/components/iridescent-blob"
import { ToolkitIcon } from "@/components/toolkit-icons"

const digitalShelfProjectData = {
  title: "Perfume Collection",
  category: "web development",
  year: "2026",
  toolkit: ["blender", "tailwind", "typescript"],
  disciplines: ["3D MODELING", "GLASS EFFECT RENDERING", "DIGITAL COLLECTION"],
  liveUrl: "https://v0-perfume-collection.vercel.app/", // Update with your live URL
  heroVideo: "/images/digital-shelf/perfume-collection-card.jpg",
  
  content: {
    heading: "A DIGITAL COLLECTION OF PERSONAL PERFUME DISPLAYED WITH THE GLASS EFFECT.",
    description:
      "This project showcases a digital collection of my personal perfume collection, featuring stunning glass effect rendering. The process began with creating wireframes in Figma, followed by modeling each perfume bottle in Blender, and finally creating a backdrop in Blender as well. The glass effect brings each bottle to life, capturing the transparency, reflections, and refractions that make perfume bottles so visually captivating.",
    goal: "To create an immersive digital showcase that displays my personal perfume collection with photorealistic glass effects. The collection serves as both a visual archive and an interactive experience, allowing visitors to explore each bottle in detail while appreciating the craftsmanship of both the physical bottles and their digital representations.",
  },

  methodology: [
    { title: "WIREFRAME DESIGN", description: "Creating wireframes on Figma to plan the layout and structure" },
    { title: "3D MODELING", description: "Creating models in Blender for each perfume bottle" },
    { title: "BACKDROP CREATION", description: "Designing and creating the backdrop in Blender (blueprint)" },
    { title: "GLASS EFFECT & RENDERING", description: "Implementing glass materials and rendering the final collection" },
  ],

  blueprints: [
    {
      image: "/images/digital-shelf/final-design.jpg",
      description: "(1) Wireframe Design. Creating wireframes on Figma to plan the layout and structure of the perfume collection display.",
    },
    {
      image: "/images/digital-shelf/render-1.png",
      description: "(2) Modeling of Product (Perfumes) in Blender. Creating detailed 3D models of each perfume bottle with glass materials.",
    },
    {
      image: "/images/digital-shelf/tree.png",
      description: "(3) Creating the backdrop. Designing and creating the backdrop environment in Blender to complement the perfume collection.",
    },
  ],

  brandManual: [
    { 
      images: ["/images/digital-shelf/design-1.jpg", "/images/digital-shelf/design-2.jpg", "/images/digital-shelf/final-design.jpg"],
      title: "Design Iterations",
      isCarousel: true
    },
    { 
      images: ["/images/digital-shelf/blooming-bouquet.png", "/images/digital-shelf/rosenroses.png", "/images/digital-shelf/parfum.png", "/images/digital-shelf/roller-perfume.png"],
      title: "Different Models",
      isCarousel: true
    },
    { 
      images: ["/images/digital-shelf/render-1.png", "/images/digital-shelf/render-2.png", "/images/digital-shelf/render-3.png", "/images/digital-shelf/render-4.png"],
      title: "Different Models Rendered",
      isCarousel: true
    },
    { 
      images: ["/images/digital-shelf/tree.png", "/images/digital-shelf/tree-blender.png"],
      title: "Backdrop",
      isCarousel: true
    },
  ],
}

export default function DigitalShelfPage() {
  const [currentBlueprint, setCurrentBlueprint] = useState(0)
  const [currentDesignIndex, setCurrentDesignIndex] = useState(0)
  const [currentModelsIndex, setCurrentModelsIndex] = useState(0)
  const [currentRenderedIndex, setCurrentRenderedIndex] = useState(0)
  const [currentBackdropIndex, setCurrentBackdropIndex] = useState(0)

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
                  {slide.isCarousel ? (
                    <>
                      {/* Carousel for multiple images */}
                      <div className="relative w-full h-full">
                        {slide.images?.map((img, imgIndex) => {
                          const isActive = (slide.title === "Design Iterations" && imgIndex === currentDesignIndex) ||
                                         (slide.title === "Different Models" && imgIndex === currentModelsIndex) ||
                                         (slide.title === "Different Models Rendered" && imgIndex === currentRenderedIndex) ||
                                         (slide.title === "Backdrop" && imgIndex === currentBackdropIndex)
                          return (
                            <div
                              key={imgIndex}
                              className={`absolute inset-0 transition-opacity duration-300 ${
                                isActive ? "opacity-100" : "opacity-0"
                              }`}
                            >
                              <Image
                                src={img}
                                alt={`${slide.title} ${imgIndex + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )
                        })}
                      </div>
                      {/* Carousel controls */}
                      <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            if (slide.title === "Design Iterations") {
                              setCurrentDesignIndex((prev) => (prev - 1 + slide.images!.length) % slide.images!.length)
                            } else if (slide.title === "Different Models") {
                              setCurrentModelsIndex((prev) => (prev - 1 + slide.images!.length) % slide.images!.length)
                            } else if (slide.title === "Different Models Rendered") {
                              setCurrentRenderedIndex((prev) => (prev - 1 + slide.images!.length) % slide.images!.length)
                            } else if (slide.title === "Backdrop") {
                              setCurrentBackdropIndex((prev) => (prev - 1 + slide.images!.length) % slide.images!.length)
                            }
                          }}
                          className="p-1.5 bg-background/80 hover:bg-background rounded-full transition-colors"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            if (slide.title === "Design Iterations") {
                              setCurrentDesignIndex((prev) => (prev + 1) % slide.images!.length)
                            } else if (slide.title === "Different Models") {
                              setCurrentModelsIndex((prev) => (prev + 1) % slide.images!.length)
                            } else if (slide.title === "Different Models Rendered") {
                              setCurrentRenderedIndex((prev) => (prev + 1) % slide.images!.length)
                            } else if (slide.title === "Backdrop") {
                              setCurrentBackdropIndex((prev) => (prev + 1) % slide.images!.length)
                            }
                          }}
                          className="p-1.5 bg-background/80 hover:bg-background rounded-full transition-colors"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                      {/* Image indicators */}
                      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {slide.images?.map((_, imgIndex) => {
                          const isActive = (slide.title === "Design Iterations" && imgIndex === currentDesignIndex) ||
                                         (slide.title === "Different Models" && imgIndex === currentModelsIndex) ||
                                         (slide.title === "Different Models Rendered" && imgIndex === currentRenderedIndex) ||
                                         (slide.title === "Backdrop" && imgIndex === currentBackdropIndex)
                          return (
                            <div
                              key={imgIndex}
                              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                isActive ? "bg-foreground" : "bg-muted-foreground/50"
                              }`}
                            />
                          )
                        })}
                      </div>
                    </>
                  ) : (
                    'image' in slide && typeof slide.image === 'string' ? (
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <IridescentCard className="w-full h-full" />
                    )
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

