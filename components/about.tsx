"use client"

export function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[400px,1fr] gap-16 items-start">
          <div className="flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] object-contain"
            >
              <source src="/logo-c.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold mb-6 tracking-widest uppercase">About Me.</h2>
              <div className="h-px bg-border mb-8" />
            </div>

            <div className="space-y-6 text-base leading-relaxed">
              <p>
                I believe the best design happens when boundaries blur. I don't subscribe to the idea that a designer
                should only stick to one medium. My work spans the entire digital spectrum: from the strategic precision
                of Branding to the technical complexity of Web Development and the immersive depth of 3D Visualization.
              </p>
              <p>
                At Studio Celine, I approach every project with a holistic mindset. Whether modeling a product or coding
                a responsive interface, the goal is the same: to build work that is functionally robust and
                distinctively future-forward.
              </p>
              <p className="font-medium">I don't just design the surface; I build the structure underneath.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
