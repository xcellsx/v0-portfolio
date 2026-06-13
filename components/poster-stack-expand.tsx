"use client"

import Image from "next/image"
import { useState } from "react"

interface PosterStackExpandProps {
  posters: string[]
  title: string
  priority?: boolean
}

const POSTER_LAYERS = [
  {
    stacked: { x: -16, y: 10, rotate: -5, scale: 0.97 },
    expanded: { x: -380, y: 0, rotate: 0, scale: 1 },
    zStacked: 10,
    zExpanded: 10,
  },
  {
    stacked: { x: 0, y: 0, rotate: 0, scale: 1 },
    expanded: { x: 0, y: 0, rotate: 0, scale: 1 },
    zStacked: 30,
    zExpanded: 20,
  },
  {
    stacked: { x: 16, y: -8, rotate: 4, scale: 0.97 },
    expanded: { x: 380, y: 0, rotate: 0, scale: 1 },
    zStacked: 20,
    zExpanded: 10,
  },
] as const

function layerTransform(
  layer: (typeof POSTER_LAYERS)[number],
  expanded: boolean,
): string {
  const pose = expanded ? layer.expanded : layer.stacked
  return `translate(-50%, -50%) translate3d(${pose.x}px, ${pose.y}px, 0) rotate(${pose.rotate}deg) scale(${pose.scale})`
}

export function PosterStackExpand({ posters, title, priority = false }: PosterStackExpandProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="relative flex h-[min(62vh,700px)] w-full items-center justify-center"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div
        className="relative mx-auto h-[min(58vh,680px)] transition-[width] duration-500 ease-out"
        style={{ width: isExpanded ? "min(95vw, 1240px)" : "min(20vw, 340px)" }}
      >
        {posters.map((poster, index) => {
          const layer = POSTER_LAYERS[index] ?? POSTER_LAYERS[1]

          return (
            <div
              key={poster}
              className="absolute top-1/2 left-1/2"
              style={{
                zIndex: isExpanded ? layer.zExpanded : layer.zStacked,
                transform: layerTransform(layer, isExpanded),
                transition:
                  "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), z-index 0.3s ease",
              }}
            >
              <Image
                src={poster}
                alt={`${title} poster ${index + 1}`}
                width={0}
                height={0}
                priority={priority && index === 1}
                sizes="(max-width: 768px) 40vw, 340px"
                className="h-auto max-h-[min(58vh,680px)] w-auto max-w-[min(20vw,340px)] object-contain shadow-[0_20px_40px_-18px_rgba(28,27,24,0.28)]"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
