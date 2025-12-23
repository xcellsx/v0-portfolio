export function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center gap-8 text-5xl md:text-6xl lg:text-7xl">
            <span className="font-script">I'm</span>
            <div className="w-48 h-48 md:w-64 md:h-64 bg-secondary" />
            <span className="font-script">Celine</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-3xl md:text-4xl lg:text-5xl font-bold">
            <span>Creating</span>
            <a
              href="#brand"
              className="group inline-flex items-center gap-3 hover:text-muted-foreground transition-colors"
            >
              <span>Brands</span>
              <span className="text-4xl group-hover:scale-110 transition-transform">💼</span>
            </a>
            <span>,</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-3xl md:text-4xl lg:text-5xl font-bold">
            <a
              href="#interfaces"
              className="group inline-flex items-center gap-3 hover:text-muted-foreground transition-colors"
            >
              <span>Interfaces</span>
              <span className="text-4xl group-hover:scale-110 transition-transform">💻</span>
            </a>
            <span className="text-6xl md:text-7xl">&</span>
            <a
              href="#dimensions"
              className="group inline-flex items-center gap-3 hover:text-muted-foreground transition-colors"
            >
              <span>Dimensions</span>
              <span className="text-4xl group-hover:scale-110 transition-transform">🔧</span>
            </a>
          </div>

          <div className="pt-8 border-t border-border max-w-4xl mx-auto">
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              A multidisciplinary design and development practice bridging the gap between flat strategy and immersive
              digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
