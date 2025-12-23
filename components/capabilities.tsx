const capabilities = [
  {
    title: "Brand & Identity",
    items: ["Logo Design", "Visual Systems", "Typography", "Brand Strategy", "Art Direction"],
  },
  {
    title: "Digital & Interface",
    items: ["UI/UX Design", "Web Development", "React/Next.js", "Responsive Design", "Interactive Experiences"],
  },
  {
    title: "3D & Spatial",
    items: ["Product Visualization", "3D Modeling", "WebGL Integration", "Motion Graphics", "R&D"],
  },
]

export function Capabilities() {
  return (
    <section className="py-24 px-6 border-t border-border bg-accent">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-sm font-bold tracking-widest uppercase">Skills.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability) => (
            <div key={capability.title} className="bg-background p-8 space-y-6">
              <h3 className="text-xl font-bold">{capability.title}</h3>
              <ul className="space-y-3">
                {capability.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-foreground flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
