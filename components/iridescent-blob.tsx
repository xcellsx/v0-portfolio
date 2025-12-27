"use client"

import type React from "react"

export function IridescentBlob({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-30 animate-pulse pointer-events-none ${className}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(255,182,193,0.6) 0%, rgba(176,224,230,0.6) 25%, rgba(221,160,221,0.6) 50%, rgba(173,216,230,0.6) 75%, rgba(255,218,185,0.6) 100%)",
      }}
    />
  )
}

export function IridescentCard({ className = "", children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(255,182,193,0.3) 0%, rgba(176,224,230,0.3) 25%, rgba(221,160,221,0.3) 50%, rgba(173,216,230,0.3) 75%, rgba(255,218,185,0.3) 100%)",
      }}
    >
      {children}
    </div>
  )
}
