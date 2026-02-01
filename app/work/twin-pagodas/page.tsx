"use client"

import { Header } from "@/components/header"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { IridescentCard } from "@/components/iridescent-blob"
import { ToolkitIcon } from "@/components/toolkit-icons"

const twinPagodaData = {
  title: "The Twin Pagodas",
  category: "3D WEB EXPERIENCE",
  year: "2026",
  toolkit: ["react", "three.js", "blender", "framer motion"],
  disciplines: ["CREATIVE DIRECTION", "3D MODELING", "FRONTEND DEVELOPMENT"],
  liveUrl: "https://twin-pagoda-page.vercel.app/",
  heroVideo: "/images/twin-pagodas/sg.mp4",

  content: {
    heading: "A DEDICATED DIGITAL SHRINE.",
    description:
      "While researching Japanese architectural landmarks, I noticed they often possess immersive, dedicated digital experiences that celebrate their history. In contrast, Singapore's iconic Twin Pagodas were relegated to a generic text listing on a broad 'Parks & Gardens' portal. The architecture deserved better than a static JPG.",
    goal: "To build the missing digital infrastructure. I initiated a self-directed project to create the premier tourism microsite for the Twin Pagodas. This involved modeling the structures from scratch and engineering a 3D-native web environment that allows virtual tourism at a level comparable to international standards.",
  },

  methodology: [
    { title: "OPPORTUNITY ANALYSIS", description: "Identifying the lack of dedicated digital presence for Singapore's Chinese Garden landmarks" },
    { title: "ARCHITECTURAL RECONSTRUCTION", description: "Modeling the Pagoda geometry in Blender based on reference photography" },
    { title: "WEBGL INTEGRATION", description: "Optimizing the 3D assets for performant browser rendering in React Three Fiber" },
    { title: "EXPERIENCE DESIGN", description: "Crafting a scroll-controlled narrative that guides users through the tower's history" },
  ],

  evolution: [
    {
      phase: "01. THE REFERENCE GAP",
      image: "/images/twin-pagodas/sg-web.png",
      description: "Analysis of the existing government portal showed a lack of visual engagement. I gathered architectural references to build my own source of truth.",
      status: "ANALYSIS",
    },
    {
      phase: "02. MODELING THE TWIN",
      image: "/images/twin-pagodas/model.png",
      description: "Reconstructing the 7-tier geometry. Special attention was paid to the spiral staircase and roof eaves to ensure silhouette accuracy.",
      status: "MODELING",
    },
    {
      phase: "03. WEB OPTIMIZATION",
      image: "/images/twin-pagodas/figma.png",
      description: "Reducing the polygon count for the web. High-fidelity geometry was baked into normal maps to maintain 60FPS on mobile browsers.",
      status: "DEPLOYED",
    },
  ],

  manual: [
    {
      image: "/images/twin-pagodas/landing-page.png",
      title: "Immersive Hero",
      caption: "3D Entry Sequence",
    },
    {
      image: "/images/twin-pagodas/sg-web.png",
      title: "Cultural Context",
      caption: "Integrated Historical Data",
    },
    {
      image: "/images/twin-pagodas/interactive.png",
      title: "Interactive Model",
      caption: "360° Inspection Controls (On Live Site)",
    },
    {
      image: "/images/twin-pagodas/mobile.png",
      title: "Virtual Tourism",
      caption: "Mobile-First Experience",
    },
  ],
}

function getStatusClass(status: string) {
  switch (status) {
    case "DEPLOYED":
    case "COMPLETE":
      return "bg-green-500/20 text-green-600 dark:text-green-400"
    case "OPTIMIZED":
    case "MODELING":
    case "IN PROGRESS":
      return "bg-blue-500/20 text-blue-600 dark:text-blue-400"
    case "ANALYSIS":
      return "bg-amber-500/20 text-amber-600 dark:text-amber-400"
    case "UNUSABLE":
    case "REJECTED":
      return "bg-red-500/20 text-red-600 dark:text-red-400"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function TwinPagodasPage() {
  const [currentEvolution, setCurrentEvolution] = useState(0)

  const nextEvolution = () => {
    setCurrentEvolution((prev) => (prev + 1) % twinPagodaData.evolution.length)
  }

  const prevEvolution = () => {
    setCurrentEvolution((prev) => (prev - 1 + twinPagodaData.evolution.length) % twinPagodaData.evolution.length)
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
              <h1 className="font-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl break-words">{twinPagodaData.title}</h1>
            </div>
            <span className="text-xs text-muted-foreground mt-2 shrink-0 hidden sm:inline">[{twinPagodaData.category}]</span>
          </div>
          <div className="sm:hidden text-center mb-4">
            <span className="text-xs text-muted-foreground">[{twinPagodaData.category}]</span>
          </div>

          {/* Project metadata */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm">
              <div>
                <span className="text-muted-foreground">YEAR: </span>
                <span className="font-bold">{twinPagodaData.year}</span>
              </div>
              <div className="break-words">
                <span className="text-muted-foreground">DISCIPLINES: </span>
                <span className="font-bold text-xs sm:text-sm">{twinPagodaData.disciplines.join(", ")}</span>
              </div>
              {twinPagodaData.toolkit && (
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">TOOLKIT: </span>
                  <div className="flex gap-1.5">
                    {twinPagodaData.toolkit.map((tool) => (
                      <ToolkitIcon key={tool} tool={tool} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
              )}
            </div>
            {twinPagodaData.liveUrl && (
              <Link
                href={twinPagodaData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-bold border border-foreground rounded-full px-4 py-2 hover:bg-foreground hover:text-background transition-colors w-full sm:w-auto text-center"
              >
                LIVE SITE.
              </Link>
            )}
          </div>

          {/* Hero video */}
          {twinPagodaData.heroVideo ? (
            <div className="aspect-video bg-muted mb-4 relative overflow-hidden">
              {twinPagodaData.heroVideo.endsWith(".mp4") ||
              twinPagodaData.heroVideo.endsWith(".avi") ||
              twinPagodaData.heroVideo.endsWith(".mov") ||
              twinPagodaData.heroVideo.endsWith(".webm") ? (
                <video
                  src={twinPagodaData.heroVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={twinPagodaData.heroVideo}
                  alt={twinPagodaData.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          ) : (
            <div className="aspect-video bg-muted mb-4 relative overflow-hidden flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Add hero video to twinPagodaData.heroVideo</p>
            </div>
          )}

          {/* Content section */}
          <section className="mb-16 pt-8">
            <h2 className="text-lg font-bold mb-4">{twinPagodaData.content.heading}</h2>
            <div className="text-sm leading-relaxed mb-4">
              <p className="text-muted-foreground mb-4">{twinPagodaData.content.description}</p>
              <p>
                <span className="font-bold">THE GOAL: </span>
                <span className="text-muted-foreground">{twinPagodaData.content.goal}</span>
              </p>
            </div>
          </section>

          {/* Methodology section */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-lg font-bold mb-8 sm:mb-12">METHODOLOGY.</h2>
            <div className="relative">
              <div className="hidden lg:block absolute top-3 left-0 right-0 h-px bg-border" />
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4">
                {twinPagodaData.methodology.map((step, index) => (
                  <div key={step.title} className="relative">
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

          {/* Evolution section */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-lg font-bold mb-6 sm:mb-8">THE EVOLUTION.</h2>
            <div className="flex items-center gap-4 sm:gap-8">
              <button onClick={prevEvolution} className="text-2xl hover-iridescent p-2 shrink-0" aria-label="Previous evolution">
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="flex-1 min-w-0">
                <div className="aspect-video bg-muted relative overflow-hidden mb-4">
                  {((): string | undefined => {
                    const step = twinPagodaData.evolution[currentEvolution] as { video?: string }
                    return step?.video
                  })() ? (
                    <video
                      src={(twinPagodaData.evolution[currentEvolution] as unknown as { video: string }).video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : twinPagodaData.evolution[currentEvolution]?.image ? (
                    <Image
                      src={twinPagodaData.evolution[currentEvolution].image || "/placeholder.svg"}
                      alt={twinPagodaData.evolution[currentEvolution].phase}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <IridescentCard className="w-full h-full" />
                  )}
                </div>
                <div className="mb-2">
                  <div className="flex flex-col items-center gap-2 mb-2">
                    <h3 className="font-bold text-sm text-center">{twinPagodaData.evolution[currentEvolution]?.phase}</h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${getStatusClass(
                        twinPagodaData.evolution[currentEvolution]?.status || ""
                      )}`}
                    >
                      {twinPagodaData.evolution[currentEvolution]?.status}
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground text-center px-2">
                  {twinPagodaData.evolution[currentEvolution]?.description}
                </p>
              </div>

              <button onClick={nextEvolution} className="text-2xl hover-iridescent p-2 shrink-0" aria-label="Next evolution">
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </section>

          {/* The Manual section */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-lg font-bold mb-6 sm:mb-8">THE INTERACTIVE ELEMENTS.</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {twinPagodaData.manual.map((slide, index) => (
                <div key={index} className="relative aspect-[4/3] bg-muted overflow-hidden group">
                  {slide.image ? (
                    <Image src={slide.image} alt={slide.title} fill className="object-cover" />
                  ) : "video" in slide && (slide as { video: string }).video ? (
                    <video
                      src={(slide as { video: string }).video}
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
                    {slide.caption && <p className="text-xs text-muted-foreground mt-1">{slide.caption}</p>}
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
                      <Image src={project.image} alt={project.title} fill className="object-cover" />
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
  { title: "Spirit Sprite", category: "3d model", year: "2025", href: "/work/spirit-sprite", image: "/images/spirit-sprite/card.png" },
]
