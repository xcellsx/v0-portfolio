"use client"

import { useEffect, useRef } from "react"

export function Header() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      console.log("[v0] Video element found, attempting to load...")
      videoRef.current.load()
      videoRef.current.play().catch((err) => {
        console.log("[v0] Video play failed:", err)
      })
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-10 h-10 object-contain"
              onLoadedData={() => console.log("[v0] Video loaded successfully")}
              onError={(e) => {
                console.log("[v0] Video error:", e)
                console.log("[v0] Current src:", videoRef.current?.currentSrc)
              }}
            >
              <source src="/logo.mp4" type="video/mp4" />
            </video>
            <span className="font-bold text-lg tracking-tight">CELINE.</span>
          </a>
          <nav className="flex items-center gap-8">
            <a
              href="#about"
              className="text-sm font-medium hover:text-muted-foreground transition-colors uppercase tracking-wider"
            >
              About.
            </a>
            <a
              href="#work"
              className="text-sm font-medium hover:text-muted-foreground transition-colors uppercase tracking-wider"
            >
              Work.
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-muted-foreground transition-colors uppercase tracking-wider"
            >
              Contact.
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
