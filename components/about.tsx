"use client"

import { useTheme } from "./theme-provider"

export function About() {
  const { theme } = useTheme()

  return (
    <section id="about" className="py-16 px-6 border-t border-border relative overflow-hidden">

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-sm font-bold mb-8 tracking-widest uppercase">ABOUT ME.</h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
          <div className="text-[120px] md:text-[150px] font-bold leading-none text-secondary select-none shrink-0">
            <video key={theme} autoPlay loop muted playsInline className="w-8 h-8 object-contain">
              <source src={theme === "light" ? "/new-logo-light.mp4" : "/logo-dark.mp4"} type="video/mp4" />
            </video>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl">
              Hi, I'm <span className="font-script text-4xl md:text-5xl">Celine.</span>
            </h3>

            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground max-w-xl">
              <p>
                I think the web has become a little too flat, so I'm on a mission to give it some depth. I specialize in
                two things that usually don't go together: Rebranding and 3D Web Development. I love the fresh energy of
                giving a brand a new face, but I don't stop there. I use code and 3D modeling to build a digital world
                for that brand to live in.
              </p>
              <p>
                Whether it's spinning up a new identity or coding a website with interactive 3D elements, I build things
                that don't just sit on the screen — they invite you in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
