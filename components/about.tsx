"use client"

import { useTheme } from "./theme-provider"

export function About() {
  const { theme } = useTheme()

  return (
    <section id="about" className="pt-0 pb-8 px-6 relative overflow-hidden">

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-sm font-bold mb-8 tracking-widest uppercase">ABOUT ME.</h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-stretch">
          <div className="text-[120px] md:text-[150px] font-bold leading-none text-secondary select-none shrink-0 flex items-center">
            <video key={theme} autoPlay loop muted playsInline className="w-[120px] md:w-[150px] h-full object-contain">
              <source src={theme === "light" ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_UvuPpMgGQ9TqHj42l5kehJk2QmGr/yCLX7IP-M6HrDxzJjMuHQL/public/logo.mp4" : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_UvuPpMgGQ9TqHj42l5kehJk2QmGr/20cWL6q9DkE-9mOfNktUqs/public/logo-dark.mp4"} type="video/mp4" />
            </video>
          </div>

          <div className="space-y-2 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl">
              Hi, I'm <span className="font-script text-4xl md:text-5xl">Celine.</span>
            </h3>

            <div className="space-y-4 text-sm leading-normal text-muted-foreground max-w-full">
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
