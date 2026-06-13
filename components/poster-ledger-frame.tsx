"use client"

import Image from "next/image"
import { useRef, useState } from "react"

interface PosterLedgerFrameProps {
  image: string
  hoverImage?: string
  video?: string
  videoFallback?: string
  alt: string
  width: number
  height: number
  priority?: boolean
  compact?: boolean
}

function videoMimeType(src: string) {
  if (src.endsWith(".webm")) return "video/webm"
  if (src.endsWith(".mov")) return "video/quicktime"
  return "video/mp4"
}

export function PosterLedgerFrame({
  image,
  hoverImage,
  video,
  videoFallback,
  alt,
  width,
  height,
  priority = false,
  compact = false,
}: PosterLedgerFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isActive, setIsActive] = useState(false)
  const [loadVideo, setLoadVideo] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const [videoUnavailable, setVideoUnavailable] = useState(false)

  const hasHoverImage = Boolean(hoverImage)
  const motionConfigured = Boolean(video)
  const hasMotion = motionConfigured && !videoUnavailable

  const showAlternate = isActive && (hasHoverImage || (hasMotion && videoReady))

  const handleEnter = () => {
    setIsActive(true)
    if (video && !videoUnavailable) setLoadVideo(true)
  }

  const handleLeave = () => {
    setIsActive(false)
    const clip = videoRef.current
    if (!clip) return
    clip.pause()
    clip.currentTime = 0
  }

  const imageSizes = compact
    ? "(max-width: 768px) 45vw, 22vw"
    : "(max-width: 768px) 100vw, 85vw"

  const badgeClass = compact
    ? "top-1.5 right-1.5 text-[7px] tracking-[0.1em]"
    : "top-3 right-3 text-[9px] tracking-[0.12em]"

  return (
    <figure
      className="group relative z-0 w-full origin-center transition-transform duration-300 ease-out hover:z-10 hover:scale-[1.035]"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          className={`object-contain transition-opacity duration-500 ${
            showAlternate ? "opacity-0" : "opacity-100"
          }`}
          sizes={imageSizes}
        />

        {hoverImage ? (
          <Image
            src={hoverImage}
            alt={`${alt} — alternate state`}
            fill
            className={`object-contain transition-opacity duration-500 ${
              isActive ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            sizes={imageSizes}
          />
        ) : null}

        {loadVideo && video && hasMotion ? (
          <video
            ref={videoRef}
            poster={image}
            muted
            loop
            playsInline
            preload="none"
            autoPlay
            onCanPlay={() => {
              setVideoReady(true)
              videoRef.current?.play().catch(() => undefined)
            }}
            onError={() => {
              setVideoReady(false)
              setVideoUnavailable(true)
            }}
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${
              isActive && videoReady ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <source src={video} type={videoMimeType(video)} />
            {videoFallback ? (
              <source src={videoFallback} type={videoMimeType(videoFallback)} />
            ) : null}
          </video>
        ) : null}

        {hasHoverImage ? (
          <p
            className={`pointer-events-none absolute font-mono text-offwhite/85 uppercase mix-blend-difference transition-opacity duration-300 ${badgeClass} ${
              isActive ? "opacity-0" : "opacity-100"
            }`}
          >
            [ State Shift // Hover ]
          </p>
        ) : null}
      </div>
    </figure>
  )
}
