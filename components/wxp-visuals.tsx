/**
 * Finished visual panels for the WXP case study — self-contained so the
 * page ships without external mockup drops.
 */

export function WxpHeroProduct() {
  return (
    <div className="relative overflow-hidden border border-offblack/10 bg-[#f0ebe3]">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 90% 10%, rgba(174,34,23,0.12), transparent 50%), linear-gradient(165deg, #f5f2ec 0%, #ebe4d8 100%)",
        }}
      />
      <div className="relative px-5 pb-6 pt-5 sm:px-6 sm:pb-8 sm:pt-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">
            Product UI
          </p>
          <p className="font-mono text-[9px] tracking-[0.1em] text-offblack/35 uppercase">
            Confidence-first home
          </p>
        </div>

        <div className="mx-auto max-w-[18rem] border border-offblack/15 bg-offwhite shadow-[0_18px_40px_rgba(28,27,24,0.08)]">
          <div className="flex items-center justify-between border-b border-offblack/10 px-3 py-2.5">
            <span className="font-mono text-[9px] tracking-[0.12em] text-offblack/50 uppercase">
              WXP Campus
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta/80" aria-hidden />
          </div>
          <div className="space-y-3 px-3 py-4">
            <p className="font-serif text-[1.05rem] leading-tight tracking-[-0.02em] text-offblack">
              Your team is in today.
            </p>
            <p className="font-sans text-[11px] leading-relaxed text-offblack/55">
              4 teammates nearby · 12 desks open on Level 3
            </p>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="border border-offblack/10 bg-[#f7f4ee] px-2.5 py-3">
                <p className="font-mono text-[8px] tracking-[0.1em] text-terracotta uppercase">
                  Quick rebook
                </p>
                <p className="mt-1 font-sans text-[11px] text-offblack/80">Level 3 · Zone B</p>
              </div>
              <div className="border border-offblack/10 px-2.5 py-3">
                <p className="font-mono text-[8px] tracking-[0.1em] text-offblack/40 uppercase">
                  Plan my day
                </p>
                <p className="mt-1 font-sans text-[11px] text-offblack/60">Guided booking</p>
              </div>
            </div>
            <div className="border border-offblack/10 px-2.5 py-2.5">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-[8px] tracking-[0.1em] text-offblack/40 uppercase">
                  Live availability
                </span>
                <span className="font-mono text-[8px] text-terracotta">68% free</span>
              </div>
              <div className="flex h-2 overflow-hidden bg-offblack/10">
                <div className="h-full w-[68%] bg-terracotta/70" />
              </div>
            </div>
            <div className="bg-offblack px-3 py-2.5 text-center font-mono text-[9px] tracking-[0.12em] text-offwhite uppercase">
              Book near team
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function WxpJourneyDiagram() {
  const nodes = [
    { id: "01", label: "Intent", note: "Team signal" },
    { id: "02", label: "Commit", note: "Proximity book" },
    { id: "03", label: "Handoff", note: "Confirm = navigate" },
    { id: "04", label: "Arrive", note: "Same labels" },
  ] as const

  return (
    <div className="border border-offblack/10 bg-offwhite px-5 py-5 sm:px-6 sm:py-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">
          Journey map
        </p>
        <p className="font-mono text-[9px] tracking-[0.1em] text-offblack/35 uppercase">
          Intent to arrive
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-2">
        {nodes.map((node, index) => (
          <div key={node.id} className="relative">
            <div className="border border-offblack/15 bg-[#f7f4ee] px-3 py-4">
              <p className="font-mono text-[9px] tracking-[0.14em] text-terracotta uppercase">
                {node.id}
              </p>
              <p className="mt-2 font-serif text-base tracking-[-0.02em] text-offblack">
                {node.label}
              </p>
              <p className="mt-1 font-sans text-[11px] text-offblack/55">{node.note}</p>
            </div>
            {index < nodes.length - 1 ? (
              <span
                className="absolute -right-1.5 top-1/2 z-10 hidden -translate-y-1/2 font-mono text-[10px] text-offblack/30 sm:block"
                aria-hidden
              >
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-4 border-t border-offblack/10 pt-3 font-sans text-xs leading-relaxed text-offblack/55">
        Break closed at handoff: confirmation deep-links into wayfinding with identical zone language.
      </p>
    </div>
  )
}

export function WxpFidelityStrip() {
  const frames = [
    {
      fidelity: "Lo-fi",
      title: "Sequence test",
      body: "Grayscale frames proving confidence before filters.",
      tone: "wires",
    },
    {
      fidelity: "Mid-fi",
      title: "Naming pass",
      body: "Clickable zones reconciled with facilities glossary.",
      tone: "mid",
    },
    {
      fidelity: "Hi-fi",
      title: "Trust UI",
      body: "Accessible hierarchy, calm chrome, success → navigate.",
      tone: "hi",
    },
  ] as const

  return (
    <div className="border border-offblack/10 bg-offwhite px-5 py-5 sm:px-6 sm:py-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="font-mono text-[10px] tracking-[0.14em] text-terracotta uppercase">
          Fidelity strip
        </p>
        <p className="font-mono text-[9px] tracking-[0.1em] text-offblack/35 uppercase">
          Learning ladder
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {frames.map((frame) => (
          <div key={frame.fidelity} className="border border-offblack/12">
            <div
              className={`flex h-24 items-end px-3 py-2 ${
                frame.tone === "wires"
                  ? "bg-[repeating-linear-gradient(-45deg,#f5f2ec,#f5f2ec_6px,#e8e2d6_6px,#e8e2d6_7px)]"
                  : frame.tone === "mid"
                    ? "bg-[#ebe6dc]"
                    : "bg-[linear-gradient(145deg,#f5f2ec,#e8d9cf)]"
              }`}
            >
              <div className="w-full space-y-1.5">
                <div className="h-1.5 w-2/3 bg-offblack/20" />
                <div className="h-1.5 w-1/2 bg-offblack/12" />
                {frame.tone === "hi" ? (
                  <div className="mt-2 h-5 w-full bg-offblack/85" />
                ) : (
                  <div className="mt-2 h-5 w-full border border-dashed border-offblack/25" />
                )}
              </div>
            </div>
            <div className="px-3 py-3">
              <p className="font-mono text-[9px] tracking-[0.12em] text-terracotta uppercase">
                {frame.fidelity}
              </p>
              <p className="mt-1 font-sans text-sm font-medium text-offblack">{frame.title}</p>
              <p className="mt-1 font-sans text-[11px] leading-relaxed text-offblack/55">
                {frame.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function WxpFidelityFrames() {
  const frames = [
    {
      label: "Lo-fi board",
      caption: "Paper + grayscale flows for confidence → commit → navigate.",
      blocks: ["Dump", "Team near?", "Book", "Map"],
      style: "lo",
    },
    {
      label: "Mid-fi prototype",
      caption: "Interactive labels stress-tested against campus signage.",
      blocks: ["Zone B", "L3-14", "Navigate"],
      style: "mid",
    },
    {
      label: "Hi-fi UI",
      caption: "Production-facing screens with AA contrast and reduced chrome.",
      blocks: ["Booked", "Walk to L3", "Arrive"],
      style: "hi",
    },
  ] as const

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {frames.map((frame) => (
        <article key={frame.label} className="border border-offblack/10 bg-offwhite">
          <div
            className={`space-y-2 px-4 py-5 ${
              frame.style === "lo"
                ? "bg-[#f0ebe3]"
                : frame.style === "mid"
                  ? "bg-[#ebe6dc]"
                  : "bg-[linear-gradient(160deg,#f5f2ec_0%,#eadfd4_100%)]"
            }`}
          >
            {frame.blocks.map((block, i) => (
              <div
                key={block}
                className={`px-2.5 py-2 font-mono text-[10px] tracking-[0.08em] uppercase ${
                  frame.style === "hi" && i === frame.blocks.length - 1
                    ? "bg-offblack text-offwhite"
                    : frame.style === "lo"
                      ? "border border-dashed border-offblack/30 text-offblack/60"
                      : "border border-offblack/15 bg-offwhite/80 text-offblack/70"
                }`}
              >
                {block}
              </div>
            ))}
          </div>
          <div className="border-t border-offblack/10 px-4 py-4">
            <p className="font-mono text-[10px] tracking-[0.12em] text-terracotta uppercase">
              {frame.label}
            </p>
            <p className="mt-2 font-sans text-xs leading-relaxed text-offblack/65">
              {frame.caption}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}
