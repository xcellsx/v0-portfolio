"use client"

import { Header } from "@/components/header"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { IridescentCard } from "@/components/iridescent-blob"
import { ToolkitIcon } from "@/components/toolkit-icons"

const spiritSpriteProjectData = {
  title: "Spirit Sprite",
  category: "3d model",
  year: "2025",
  toolkit: ["blender"],
  disciplines: ["3D MODELING", "CHARACTER ANIMATION", "ENVIRONMENTAL DESIGN"],
  heroVideo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_UvuPpMgGQ9TqHj42l5kehJk2QmGr/03mZJlVCklSGgRa4b3Zl8S/public/images/spirit-sprite/spirit-sprite.mp4", // Add your video URL here - recommended over GLB for compositor effects
  
  content: {
    heading: "A SPIRITUAL JOURNEY AROUND THE TREE OF LIFE.",
    description:
      "Inspired by the mystical world of Avatar, this project brings to life a spirit sprite gracefully moving around the Tree of Life. The scene captures the ethereal beauty of nature's connection with spiritual entities, showcasing fluid animation and atmospheric lighting.",
    goal: "To create an immersive 3D scene that combines organic character movement with environmental storytelling. The spirit sprite's dance around the ancient tree represents the harmony between nature and spirit, rendered with cinematic quality using Blender's advanced material and compositing workflows.",
  },

  methodology: [
    { title: "CONCEPT & REFERENCE", description: "Studying Avatar's visual language and tree of life symbolism" },
    { title: "MODELING & TOPOLOGY", description: "Creating the tree structure and spirit sprite character geometry" },
    { title: "MATERIALS & TEXTURING", description: "Developing organic materials and ethereal sprite shaders" },
    { title: "ANIMATION & RENDERING", description: "Animating the sprite's movement and final compositing" },
  ],

  evolution: [
    {
      phase: "THE ATRONIKA",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_UvuPpMgGQ9TqHj42l5kehJk2QmGr/QWdIGhtfVQUYUD-OBaVV1o/public/images/spirit-sprite/spirit-sprite-v1.mp4",
      description: "Creating the Atronika (spirit sprite) and bringing it to life through animation. This phase focused on modeling the ethereal entity and crafting its graceful, organic movement patterns.",
      status: "COMPLETE"
    },
    {
      phase: "THE SCENE",
      image: "/images/spirit-sprite/scene.png", // Add your scene image path
      description: "Building the environment for the sprite to inhabit. Creating the Tree of Life and its surrounding ecosystem, establishing the atmospheric lighting and environmental details that would serve as the sprite's home.",
      status: "COMPLETE"
    },
    {
      phase: "THE CONVERGENCE",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_UvuPpMgGQ9TqHj42l5kehJk2QmGr/oqfJx-VCqCTEbW69a80al3/public/images/spirit-sprite/initial-render.mp4",
      description: "Uniting the Atrokirina with its environment. Combining both elements to create the final harmonious scene where the spirit sprite moves around the Tree of Life, achieving the complete narrative vision.",
      status: "COMPLETE"
    },
  ],

  manual: [
    { 
      image: "/images/spirit-sprite/spirit-sprite-v2.png", // Add your image path
      title: "Final Render",
      caption: "The completed scene showcasing the spirit sprite's graceful movement around the Tree of Life, rendered with full compositor effects."
    },
    { 
      image: "/images/spirit-sprite/spirit-detail.png", // Add your video URL for sprite close-up
      title: "Sprite Detail",
      caption: "Close-up view of the spirit sprite, highlighting the ethereal material properties and organic movement."
    },
    { 
      image: "/images/spirit-sprite/tree.png", // Add your video URL for tree detail
      title: "Tree of Life",
      caption: "Detailed view of the Tree of Life, showcasing the intricate bark textures and environmental lighting."
    },
    { 
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_UvuPpMgGQ9TqHj42l5kehJk2QmGr/03mZJlVCklSGgRa4b3Zl8S/public/images/spirit-sprite/spirit-sprite.mp4", // Add your video URL for full scene
      title: "Full Scene Animation",
      caption: "Complete animation sequence showing the spirit sprite's journey around the tree, demonstrating the full narrative arc."
    },
  ],
}

export default function SpiritSpritePage() {
  const [currentEvolution, setCurrentEvolution] = useState(0)

  const nextEvolution = () => {
    setCurrentEvolution((prev) => (prev + 1) % spiritSpriteProjectData.evolution.length)
  }

  const prevEvolution = () => {
    setCurrentEvolution((prev) => (prev - 1 + spiritSpriteProjectData.evolution.length) % spiritSpriteProjectData.evolution.length)
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
              <h1 className="font-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl break-words">{spiritSpriteProjectData.title}</h1>
            </div>
            <span className="text-xs text-muted-foreground mt-2 shrink-0 hidden sm:inline">[{spiritSpriteProjectData.category}]</span>
          </div>
          <div className="sm:hidden text-center mb-4">
            <span className="text-xs text-muted-foreground">[{spiritSpriteProjectData.category}]</span>
          </div>

          {/* Project metadata */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm">
              <div>
                <span className="text-muted-foreground">YEAR: </span>
                <span className="font-bold">{spiritSpriteProjectData.year}</span>
              </div>
              <div className="break-words">
                <span className="text-muted-foreground">DISCIPLINES: </span>
                <span className="font-bold text-xs sm:text-sm">{spiritSpriteProjectData.disciplines.join(", ")}</span>
              </div>
              {spiritSpriteProjectData.toolkit && (
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">TOOLKIT: </span>
                  <div className="flex gap-1.5">
                    {spiritSpriteProjectData.toolkit.map((tool) => (
                      <ToolkitIcon key={tool} tool={tool} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Hero video */}
          {/* Note: Using video instead of GLB model because Blender compositor effects 
              and complex materials don't export well to GLB format. Video preserves 
              the full rendered quality with all post-processing effects. */}
          {spiritSpriteProjectData.heroVideo ? (
            <div className="aspect-video bg-muted mb-4 relative overflow-hidden">
              {spiritSpriteProjectData.heroVideo.endsWith('.mp4') || 
               spiritSpriteProjectData.heroVideo.endsWith('.avi') || 
               spiritSpriteProjectData.heroVideo.endsWith('.mov') || 
               spiritSpriteProjectData.heroVideo.endsWith('.webm') ? (
                <video src={spiritSpriteProjectData.heroVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              ) : (
                <Image
                  src={spiritSpriteProjectData.heroVideo}
                  alt={spiritSpriteProjectData.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          ) : (
            <div className="aspect-video bg-muted mb-4 relative overflow-hidden flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Add hero video URL to spiritSpriteProjectData.heroVideo</p>
            </div>
          )}

          {/* Content section */}
          <section className="mb-16 pt-8">
            <h2 className="text-lg font-bold mb-4">{spiritSpriteProjectData.content.heading}</h2>
            <div className="text-sm leading-relaxed mb-4">
              <p className="text-muted-foreground mb-4">{spiritSpriteProjectData.content.description}</p>
              <p>
                <span className="font-bold">THE GOAL: </span>
                <span className="text-muted-foreground">{spiritSpriteProjectData.content.goal}</span>
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
                {spiritSpriteProjectData.methodology.map((step, index) => (
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

          {/* Evolution section */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-lg font-bold mb-6 sm:mb-8">THE CONVERGENCE.</h2>
            <div className="flex items-center gap-4 sm:gap-8">
              <button onClick={prevEvolution} className="text-2xl hover-iridescent p-2 shrink-0" aria-label="Previous evolution">
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="flex-1 min-w-0">
                <div className="aspect-video bg-muted relative overflow-hidden mb-4">
                  {spiritSpriteProjectData.evolution[currentEvolution]?.video ? (
                    <video
                      src={spiritSpriteProjectData.evolution[currentEvolution].video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : spiritSpriteProjectData.evolution[currentEvolution]?.image ? (
                    <Image
                      src={spiritSpriteProjectData.evolution[currentEvolution].image || "/placeholder.svg"}
                      alt={spiritSpriteProjectData.evolution[currentEvolution].phase}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <IridescentCard className="w-full h-full" />
                  )}
                </div>
                <div className="mb-2">
                  <div className="flex flex-col items-center gap-2 mb-2">
                    <h3 className="font-bold text-sm text-center">{spiritSpriteProjectData.evolution[currentEvolution]?.phase}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      spiritSpriteProjectData.evolution[currentEvolution]?.status === "COMPLETE" 
                        ? "bg-green-500/20 text-green-500" 
                        : spiritSpriteProjectData.evolution[currentEvolution]?.status === "DEPLOYED" 
                        ? "bg-green-500/20 text-green-500" 
                        : spiritSpriteProjectData.evolution[currentEvolution]?.status === "REJECTED"
                        ? "bg-yellow-500/20 text-yellow-500"
                        : spiritSpriteProjectData.evolution[currentEvolution]?.status === "IN PROGRESS"
                        ? "bg-blue-500/20 text-blue-500"
                        : "bg-red-500/20 text-red-500"
                    }`}>
                      {spiritSpriteProjectData.evolution[currentEvolution]?.status}
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground text-center px-2">
                  {spiritSpriteProjectData.evolution[currentEvolution]?.description ||
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
            <h2 className="text-lg font-bold mb-6 sm:mb-8">FINAL RENDER.</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {spiritSpriteProjectData.manual.map((slide, index) => (
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
  { title: "Perfume Collection", category: "web development", year: "2026", href: "/work/digital-shelf", image: "/images/digital-shelf/perfume-collection-card.jpg" },
]
