"use client"

import { Header } from "@/components/header"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { IridescentCard } from "@/components/iridescent-blob"
import { ToolkitIcon } from "@/components/toolkit-icons"

const cayraProjectData = {
  title: "Cayra",
  category: "3d model",
  year: "2025",
  toolkit: ["Fusion 360"],
  disciplines: ["MECHANICAL ENGINEERING", "RAPID PROTOTYPING", "FLIGHT DYNAMICS"],
  heroVideo: "/images/cayra/final.mp4", 
  
  // NARRATIVE: Focused purely on the Design Challenge
  content: {
    heading: "ENGINEERING THE TOOLLESS FRAME.",
    description:
      "The standard BetaFPV drone architecture is heavily reliant on micro-fasteners. A simple motor replacement requires removing 12+ screws, creating a maintenance bottleneck that creates significant downtime. The design challenge was to reimagine the airframe assembly to be completely toolless without sacrificing structural rigidity.",
    goal: "To democratize repairability. We re-engineered the chassis to utilize a central compression lock system. This allows the structural arms to be detached and swapped instantly by hand, converting a complex mechanical assembly into a friction-based modular system.",
  },

  // METHODOLOGY: Your specific workflow
  methodology: [
    { title: "PROBLEM IDENTIFICATION", description: "Analyzing the OEM BetaFPV frame to isolate maintenance pain points" },
    { title: "REDESIGN IDEATION", description: "Sketching and modeling alternative locking mechanisms in Fusion 360" },
    { title: "ITERATING DESIGN", description: "Refining geometry based on weight constraints and printability" },
    { title: "FLIGHT VALIDATION", description: "Live testing the chassis to ensure aerodynamics and vibration dampening" },
  ],

  // EVOLUTION: The Story of Failure & Learning (Numbering Removed)
  evolution: [
    {
      phase: "ANALYSIS: PAIN POINTS",
      image: "/images/cayra/problem.png", 
      description: "Baseline Analysis. The OEM frame required high-precision tools for disassembly. Small screws were easily lost in field conditions, making rapid repair impossible.",
      status: "BASELINE"
    },
    {
      phase: "V1: WEIGHT FAILURE",
      image: "/images/cayra/weight-fail.png", 
      description: "First Toolless Concept. Modularity was achieved using thick snap-fit mechanisms. However, the added material mass exceeded the motor thrust capacity, preventing successful lift-off.",
      status: "FAILED"
    },
    {
      phase: "V2: FLIGHT FAILURE",
      image: "/images/cayra/flight-fail.png", 
      description: "Weight Optimization. Wall thickness was reduced to minimize mass. This modification introduced structural flex, resulting in severe harmonic vibration and flight instability during testing.",
      status: "FAILED"
    },
  ],

  // THE MANUAL: Technical definitions based on your specific design features
  manual: [
    { 
      image: "/images/cayra/final.png", 
      title: "Final Assembly",
      caption: "The definitive toolless configuration. A fully integrated system that resolves previous weight and stability failure modes through a unified friction-lock architecture."
    },
    { 
      video: "/images/cayra/dronebody.mp4", 
      title: "Airframe Architecture",
      caption: "Optimized X-Frame geometry. Retains the aerodynamic profile of the OEM chassis while integrating a custom pin-and-socket interface for rapid battery module swapping."
    },
    { 
      video: "/images/cayra/camera.mp4", 
      title: "Payload Integration",
      caption: "Sensor housing. Features a custom twist-lock mechanism engineered to secure the optical sensor without hardware, ensuring zero-play alignment during flight."
    },
    { 
      video: "/images/cayra/battholder.mp4", 
      title: "Energy Retention",
      caption: "Topology-optimized chassis. Engineered with minimal material volume to reduce mass, while maintaining the structural rigidity required to support the power cell under high-G loads."
    },
  ],
}

export default function CayraPage() {
  const [currentEvolution, setCurrentEvolution] = useState(0)

  const nextEvolution = () => {
    setCurrentEvolution((prev) => (prev + 1) % cayraProjectData.evolution.length)
  }

  const prevEvolution = () => {
    setCurrentEvolution((prev) => (prev - 1 + cayraProjectData.evolution.length) % cayraProjectData.evolution.length)
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
              <h1 className="font-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl break-words">{cayraProjectData.title}</h1>
            </div>
            <span className="text-xs text-muted-foreground mt-2 shrink-0 hidden sm:inline">[{cayraProjectData.category}]</span>
          </div>
          <div className="sm:hidden text-center mb-4">
            <span className="text-xs text-muted-foreground">[{cayraProjectData.category}]</span>
          </div>

          {/* Project metadata */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm">
              <div>
                <span className="text-muted-foreground">YEAR: </span>
                <span className="font-bold">{cayraProjectData.year}</span>
              </div>
              <div className="break-words">
                <span className="text-muted-foreground">DISCIPLINES: </span>
                <span className="font-bold text-xs sm:text-sm">{cayraProjectData.disciplines.join(", ")}</span>
              </div>
              {cayraProjectData.toolkit && (
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">TOOLKIT: </span>
                  <div className="flex gap-1.5">
                    {cayraProjectData.toolkit.map((tool) => (
                      <ToolkitIcon key={tool} tool={tool} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Hero image/video */}
          {cayraProjectData.heroVideo && (
            <div className="aspect-video bg-muted mb-4 relative overflow-hidden">
              {cayraProjectData.heroVideo.endsWith('.mp4') || cayraProjectData.heroVideo.endsWith('.avi') || cayraProjectData.heroVideo.endsWith('.mov') || cayraProjectData.heroVideo.endsWith('.webm') ? (
                <video src={cayraProjectData.heroVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              ) : (
                <Image
                  src={cayraProjectData.heroVideo}
                  alt={cayraProjectData.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          )}

          {/* Content section */}
          <section className="mb-16 pt-8">
            <h2 className="text-lg font-bold mb-4">{cayraProjectData.content.heading}</h2>
            <div className="text-sm leading-relaxed mb-4">
              <p className="text-muted-foreground mb-4">{cayraProjectData.content.description}</p>
              <p>
                <span className="font-bold">THE GOAL: </span>
                <span className="text-muted-foreground">{cayraProjectData.content.goal}</span>
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
                {cayraProjectData.methodology.map((step, index) => (
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

          {/* Evolution section (replaces Blueprint) */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-lg font-bold mb-6 sm:mb-8">THE EVOLUTION.</h2>
            <div className="flex items-center gap-4 sm:gap-8">
              <button onClick={prevEvolution} className="text-2xl hover-iridescent p-2 shrink-0" aria-label="Previous evolution">
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="flex-1 min-w-0">
                <div className="aspect-video bg-muted relative overflow-hidden mb-4">
                  {cayraProjectData.evolution[currentEvolution]?.image ? (
                    <Image
                      src={cayraProjectData.evolution[currentEvolution].image || "/placeholder.svg"}
                      alt={cayraProjectData.evolution[currentEvolution].phase}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <IridescentCard className="w-full h-full" />
                  )}
                </div>
                <div className="mb-2">
                  <div className="flex flex-col items-center gap-2 mb-2">
                    <h3 className="font-bold text-sm text-center">{cayraProjectData.evolution[currentEvolution]?.phase}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      cayraProjectData.evolution[currentEvolution]?.status === "DEPLOYED" 
                        ? "bg-green-500/20 text-green-500" 
                        : cayraProjectData.evolution[currentEvolution]?.status === "REJECTED"
                        ? "bg-yellow-500/20 text-yellow-500"
                        : "bg-red-500/20 text-red-500"
                    }`}>
                      {cayraProjectData.evolution[currentEvolution]?.status}
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground text-center px-2">
                  {cayraProjectData.evolution[currentEvolution]?.description ||
                    `description of evolution ${currentEvolution + 1}`}
                </p>
              </div>

              <button onClick={nextEvolution} className="text-2xl hover-iridescent p-2 shrink-0" aria-label="Next evolution">
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </section>

          {/* The Manual section */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-lg font-bold mb-6 sm:mb-8">FINAL PROTOTYPE.</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {cayraProjectData.manual.map((slide, index) => (
                <div key={index} className="relative aspect-[4/3] bg-muted overflow-hidden group">
                  {slide.image ? (
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />
                  ) : slide.video ? (
                    <video
                      src={slide.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <IridescentCard className="w-full h-full" />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-background/80 p-2">
                    <p className="text-xs font-bold">{slide.title}</p>
                    {slide.caption && (
                      <p className="text-xs text-muted-foreground mt-1">{slide.caption}</p>
                    )}
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
  { title: "Quiet Café", category: "branding", year: "2025", href: "/work/quiet-cafe", image: "/images/quiet-cafe/quiet-cafe-card.png" },
]