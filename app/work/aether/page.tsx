"use client"

import { Header } from "@/components/header"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { IridescentCard } from "@/components/iridescent-blob"
import { ToolkitIcon } from "@/components/toolkit-icons"

const projectData = {
  title: "Aether™",
  category: "branding",
  year: "2025",
  disciplines: ["BRAND STRATEGY", "VISUAL IDENTITY", "PRODUCT MOCKUP"],
  toolkit: ["figma", "illustrator", "blender"],
  liveUrl: "https://aether-ebon-three.vercel.app/",
  brandBookUrl: "/images/aether/aether-brandbook.pdf", // Update with actual PDF URL
  heroVideo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_UvuPpMgGQ9TqHj42l5kehJk2QmGr/yP1oVr4zZ-1zLZX5INDTBS/public/images/aether/aether-main.mp4",
  content: {
    heading: "DISRUPTING THE CLINICAL STANDARD.",
    description:
      "The clinical skincare market is saturated with 'sterile blue' and 'medical green' tropes. AETHER™ needed to signal potency, energy, and a new era of scientific beauty. The brief was to create a visual language that felt like it came from a lab in the year 2050—clean, distinct, and illuminated.",
    goal: "Category norms were rejected in favor of a 'High-Frequency' identity. Utilizing a Hyper-Magenta and Deep Charcoal palette, the brand communicates activation and efficacy. The typography pairs the editorial elegance of Fraunces with the raw data precision of JetBrains Mono, bridging the gap between luxury beauty and lab data.",
  },
  methodology: [
    { title: "BRIEF ANALYSIS", description: "Deconstructing 'Future-Minimalism' & 'Clinical' keywords" },
    { title: "VISUAL SYNTHESIS", description: "Exploring divergent directions: Sharp/Elegant vs. Soft/Biological" },
    { title: "IDENTITY SYSTEM", description: "Defining the 'Quantum' color palette & typographic hierarchy" },
    { title: "BRAND BOOK", description: "Codifying the rules for packaging and digital usage" },
  ],
  blueprints: [
    {
      image: "/images/aether/colour-exploration.png", // Moodboard image - update path if needed
      description: "Visual Direction Testing. We stress-tested three distinct aesthetics: Sharp & Elegant (Green), Soft & Biological (Blue), and Heavy & Bold (Pink) before selecting the final direction.",
    },
    {
      image: "/images/aether/logo.png", // Logo grid - update path if needed
      description: "Logomark geometry. Constructed to ensure legibility across small serum bottles and large digital billboards.",
    },
    {
      image: "/images/aether/colour.png", // Color palette - update path if needed
      description: "Digital Translation. The 'High-Frequency' system applied to a responsive environment, utilizing Hyper-Magenta exclusively as a functional interaction color to guide user focus.",
    },
  ],
  brandManual: [
    { 
      images: ["/images/aether/primary-logo.png", "/images/aether/second-logo.png"], 
      title: "Logo Usage",
      isCarousel: true
    },
    { 
      images: ["/images/aether/pri-type.png", "/images/aether/second-type.png"], 
      title: "Typography",
      isCarousel: true
    },
    { 
      image: "/images/aether/product-mockup.png", 
      title: "Product Mockup",
      isCarousel: false
    },
    { 
      image: "/images/aether/patterns.png", 
      title: "Patterns",
      isCarousel: false
    },
  ],
}

export default function AetherPage() {
  const [currentBlueprint, setCurrentBlueprint] = useState(0)
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0)
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0)

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
              {projectData.toolkit && (
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">TOOLKIT: </span>
                  <div className="flex gap-1.5">
                    {projectData.toolkit.map((tool) => (
                      <ToolkitIcon key={tool} tool={tool} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
              )}
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
              <div className="hidden lg:block absolute top-3 left-0 right-0 h-px bg-border" />

              {/* Timeline steps */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4">
                {projectData.methodology.map((step, index) => (
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
                <div key={index} className="relative aspect-[4/3] bg-muted overflow-hidden group">
                  {slide.isCarousel ? (
                    <>
                      {/* Carousel for logo and typography */}
                      <div className="relative w-full h-full">
                        {slide.images?.map((img, imgIndex) => {
                          const isActive = (slide.title === "Logo Usage" && imgIndex === currentLogoIndex) ||
                                         (slide.title === "Typography" && imgIndex === currentTypeIndex)
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
                          onClick={() => {
                            if (slide.title === "Logo Usage") {
                              setCurrentLogoIndex((prev) => (prev - 1 + slide.images!.length) % slide.images!.length)
                            } else if (slide.title === "Typography") {
                              setCurrentTypeIndex((prev) => (prev - 1 + slide.images!.length) % slide.images!.length)
                            }
                          }}
                          className="p-1.5 bg-background/80 hover:bg-background rounded-full transition-colors"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (slide.title === "Logo Usage") {
                              setCurrentLogoIndex((prev) => (prev + 1) % slide.images!.length)
                            } else if (slide.title === "Typography") {
                              setCurrentTypeIndex((prev) => (prev + 1) % slide.images!.length)
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
                          const isActive = (slide.title === "Logo Usage" && imgIndex === currentLogoIndex) ||
                                         (slide.title === "Typography" && imgIndex === currentTypeIndex)
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
                    <>
                      {/* Single image for other items */}
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
                    </>
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
  { title: "The Keepsake", category: "web development", year: "2025", href: "/work/the-keepsake", image: "/images/keepsake/keepsake-card.png" },
  { title: "tbd", category: "3D Modeling", year: "2025", href: "/work" },
]
