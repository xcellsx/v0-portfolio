"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { useState, type CSSProperties } from "react"
import type { LabAsset } from "@/lib/three-d-design-data"
import { SectionLabel } from "@/components/section-label"

const ModelViewer = dynamic(
  () => import("@/components/model-viewer").then((mod) => mod.ModelViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[12rem] items-center justify-center">
        <p className="font-mono text-[10px] tracking-[0.12em] text-offwhite/40 uppercase">
          Loading mesh…
        </p>
      </div>
    ),
  },
)

function viewportFrameStyle(asset: LabAsset): CSSProperties {
  const scale = asset.viewportScale ?? 1
  return {
    maxHeight: `min(${28 * scale}vh, ${Math.round(240 * scale)}px)`,
    aspectRatio: "16 / 9",
    width: "100%",
  }
}

function SandboxViewport({ asset }: { asset: LabAsset }) {
  const isComingSoon = asset.status === "coming-soon"
  const frameStyle = viewportFrameStyle(asset)

  if (isComingSoon) {
    return (
      <div
        className="flex w-full items-center justify-center border border-dashed border-offblack/15"
        style={frameStyle}
      >
        <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/35 uppercase">
          [ Awaiting Export ]
        </p>
      </div>
    )
  }

  if (asset.mediaType === "model" && asset.modelPath) {
    return (
      <div style={frameStyle}>
        <ModelViewer modelPath={asset.modelPath} className="h-full w-full" />
      </div>
    )
  }

  if (asset.mediaType === "video" && asset.video) {
    return (
      <div style={frameStyle}>
        {asset.videoFallback ? (
          <video
            key={asset.id}
            poster={asset.image}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            className="h-full w-full object-contain"
          >
            <source src={asset.video} type="video/webm" />
            <source src={asset.videoFallback} type="video/quicktime" />
          </video>
        ) : (
          <video
            key={asset.id}
            src={asset.video}
            poster={asset.image}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            className="h-full w-full object-contain"
          />
        )}
      </div>
    )
  }

  if (asset.image) {
    return (
      <div className="relative" style={frameStyle}>
        <Image
          src={asset.image}
          alt={asset.title}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 60vw"
          priority
        />
      </div>
    )
  }

  return (
    <div
      className="flex w-full items-center justify-center"
      style={frameStyle}
    >
      <p className="font-mono text-[10px] tracking-[0.12em] text-offblack/35 uppercase">
        [ No Preview ]
      </p>
    </div>
  )
}

function MetadataLog({ asset }: { asset: LabAsset }) {
  const rows = [
    { key: "FILE", value: asset.filename },
    { key: "FORMAT", value: asset.metadata.format },
    { key: "SIZE", value: asset.metadata.fileSize },
    { key: "RENDERER", value: asset.metadata.renderer },
    ...(asset.metadata.polys ? [{ key: "POLYS", value: asset.metadata.polys }] : []),
    ...(asset.metadata.shader ? [{ key: "SHADER", value: asset.metadata.shader }] : []),
  ]

  return (
    <div className="border-t border-[#E5E7EB]">
      <SectionLabel className="py-4 text-[10px] tracking-[0.14em]">
        [ Metadata Log ]
      </SectionLabel>
      {rows.map((row) => (
        <div
          key={row.key}
          className="grid gap-2 border-b border-[#E5E7EB] py-3 sm:grid-cols-[minmax(6rem,22%)_1fr] sm:gap-6"
        >
          <p className="font-mono text-[10px] tracking-[0.12em] text-terracotta uppercase">
            {row.key}
          </p>
          <p className="font-mono text-xs leading-[1.5] text-offblack">{row.value}</p>
        </div>
      ))}
      <div className="grid gap-2 border-b border-[#E5E7EB] py-4 sm:grid-cols-[minmax(6rem,22%)_1fr] sm:gap-6">
        <p className="font-mono text-[10px] tracking-[0.12em] text-terracotta uppercase">
          NOTE
        </p>
        <p className="font-sans text-sm leading-[1.6] text-offblack/85">{asset.narrative}</p>
      </div>
    </div>
  )
}

interface LabDirectorySandboxProps {
  assets: LabAsset[]
}

export function LabDirectorySandbox({ assets }: LabDirectorySandboxProps) {
  const [activeId, setActiveId] = useState(assets[0]?.id ?? "")
  const activeAsset = assets.find((a) => a.id === activeId) ?? assets[0]

  if (!activeAsset) return null

  return (
    <div className="grid min-h-0 border border-offblack/10 lg:grid-cols-[2fr_3fr]">
      {/* Left — Lab Index */}
      <div className="border-b border-offblack/10 lg:border-b-0 lg:border-r lg:border-offblack/10">
        <div className="border-b border-offblack/10 px-4 py-3 sm:px-5">
          <SectionLabel className="text-[10px] tracking-[0.14em]">
            [ Lab_Index // Vol_01 ]
          </SectionLabel>
        </div>

        <ul className="divide-y divide-[#E5E7EB]" role="listbox" aria-label="Lab asset index">
          {assets.map((asset) => {
            const isActive = asset.id === activeId
            return (
              <li key={asset.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => setActiveId(asset.id)}
                  className={`flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors sm:px-5 ${
                    isActive
                      ? "bg-offblack/[0.04] border-l-2 border-l-terracotta"
                      : "border-l-2 border-l-transparent hover:bg-offblack/[0.02]"
                  }`}
                >
                  <span className="shrink-0 text-sm opacity-60" aria-hidden>
                    📄
                  </span>
                  <span
                    className={`min-w-0 flex-1 truncate font-mono text-xs tracking-wide ${
                      isActive ? "text-offblack" : "text-offblack/70"
                    }`}
                  >
                    {asset.filename}
                  </span>
                  <span className={`shrink-0 rounded-sm border px-1.5 py-0.5 font-mono text-[8px] tracking-[0.1em] uppercase ${
                      isActive
                        ? "border-terracotta/40 text-terracotta"
                        : "border-offblack/15 text-offblack/50"
                    }`}>
                    [{asset.tag}]
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Right — Sandbox */}
      <div className="flex flex-col">
        <div className="border-b border-offblack/10 px-4 py-3 sm:px-5">
          <SectionLabel className="text-[10px] tracking-[0.14em]">
            [ Sandbox // System_View ]
          </SectionLabel>
        </div>

        <div className="flex flex-1 flex-col p-3 sm:p-4">
          <div className="mb-3 space-y-1">
            <p className="font-serif text-lg font-medium text-offblack">{activeAsset.title}</p>
            <p className="font-mono text-[9px] tracking-[0.1em] text-offblack/40 uppercase">
              {activeAsset.caption}
            </p>
          </div>

          <SandboxViewport asset={activeAsset} />

          <div className="mt-3">
            <MetadataLog asset={activeAsset} />
          </div>
        </div>
      </div>
    </div>
  )
}
