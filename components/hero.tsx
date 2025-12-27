"use client"

import Link from "next/link"
import { IridescentCard } from "./iridescent-blob"
import { useTheme } from "./theme-provider"

export function Hero() {
  const { theme } = useTheme()

  return (
    <section className="pt-28 pb-16 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3 text-3xl md:text-4xl lg:text-5xl font-medium">
                <span>Creating</span>
                <Link
                  href="/work#branding"
                  className="hover:text-muted-foreground transition-colors inline-flex items-center gap-2"
                >
                  Brands <span className="text-2xl md:text-3xl">💼</span>
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-3xl md:text-4xl lg:text-5xl font-medium">
                <Link
                  href="/work#web"
                  className="hover:text-muted-foreground transition-colors inline-flex items-center gap-2"
                >
                  Interfaces
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    key={theme}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain inline-block"
                  >
                    <source src={theme === "dark" ? "/code-dark.mp4" : "/code.mp4"} type="video/mp4" />
                  </video>
                </Link>
                <span className="font-script text-4xl md:text-5xl lg:text-6xl">&</span>
                <Link
                  href="/work#modeling"
                  className="hover:text-muted-foreground transition-colors inline-flex items-center gap-2"
                >
                  Dimensions
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    key={theme}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain inline-block"
                  >
                    <source src={theme === "dark" ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cube-dark-vqCbjHzP70oCq0lYYHdxyIPeaPYm4A.mp4" : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cube-d3Usk4sIKjLcmmEvhnJLJOsvDzAOk4.mp4"} type="video/mp4" />
                  </video>
                </Link>
              </div>
            </div>

            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              A multidisciplinary design and development practice bridging the gap between flat strategy and immersive
              digital experiences.
            </p>

            <div className="flex gap-4 pt-4">
              <Link
                href="/work"
                className="px-6 py-2.5 border border-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-colors rounded-full"
              >
                MY WORKS.
              </Link>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-2.5 border border-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-colors rounded-full"
              >
                MY RESUME.
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <IridescentCard className="w-72 h-80 md:w-80 md:h-96" />
          </div>
        </div>
      </div>
    </section>
  )
}
