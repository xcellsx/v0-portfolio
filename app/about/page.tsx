import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { IridescentCard } from "@/components/iridescent-blob"

const journey = [
  {
    year: "2025",
    title: "3D Model + Web",
    skills: "Javascript (React), Blender",
    side: "right",
  },
  {
    year: "2024",
    title: "Web & UI/UX",
    skills: "Ruby, JavaScript",
    side: "left",
  },
  {
    year: "2023",
    title: "3D Model",
    skills: "Blender, Fusion",
    side: "right",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Hero section */}
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-3xl md:text-4xl">
              Hi, I'm <span className="font-script text-5xl md:text-6xl">Celine.</span>
            </h1>

            <p className="text-sm text-muted-foreground">
              The world isn't flat. The web shouldn't be either. I am a designer who loves to bring things to life.
            </p>

            <div className="space-y-6 text-sm leading-relaxed text-muted-foreground max-w-2xl mx-auto text-center">
              <p>
                For me, creativity has always been about translation. Whether it was traditional art or graphic design,
                my goal was always to replicate the inspiration I found in the physical world. I loved the challenge of
                taking an abstract idea and giving it form. But I realized that static images could only tell half the
                story.
              </p>
              <p>
                I didn't just want to illustrate an object; I wanted to build it. I wanted to capture the weight, the
                texture, and the way light moves across a surface. I wanted to create experiences that didn't just sit
                on a page, but actually invited people to interact and explore.
              </p>
              <p>
                That desire is why I specialize in interactive 3D web experiences. I don't see "code" and "design" as
                separate disciplines; I see them as two hands working on the same sculpture. I build websites that
                function like digital environments, adding depth and dimension to brands that usually live on flat
                screens. I'm here to build the kind of internet I want to explore: immersive, tactile, and alive.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4">
              <a
                href="/contact"
                className="px-6 py-2.5 border border-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-colors rounded-full text-center"
              >
                LET'S COLLABORATE.
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-2.5 border border-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-colors rounded-full text-center"
              >
                MY RESUME.
              </a>
            </div>
          </div>

          <IridescentCard className="w-full h-64 md:h-96 mb-16" />

          {/* Journey timeline */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-sm font-bold mb-8 sm:mb-12 tracking-widest uppercase">MY JOURNEY.</h2>

            <div className="relative">
              {/* Center line - hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

              <div className="space-y-8 sm:space-y-12">
                {journey.map((item) => (
                  <div key={item.year} className="relative flex items-center">
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 w-3 h-3 rounded-full border-2 border-foreground bg-background -translate-x-1/2 z-10" />

                    {item.side === "left" ? (
                      <>
                        <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                          <p className="font-bold">{item.year}</p>
                          <p className="text-sm text-muted-foreground">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.skills}</p>
                        </div>
                        <div className="hidden md:block w-1/2" />
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block w-1/2" />
                        <div className="w-full md:w-1/2 md:pl-12">
                          <p className="font-bold">{item.year}</p>
                          <p className="text-sm text-muted-foreground">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.skills}</p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
