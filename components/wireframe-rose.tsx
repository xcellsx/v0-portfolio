"use client"

import { useEffect, useRef, useState } from "react"

const ROSE_SRC = "/images/rose-wire.png"
const OFFBLACK_RGB = "28, 27, 24"
const DOT_SPACING = 4
const MOUSE_RADIUS = 36
const TRAIL_LENGTH = 10
const MOUSE_LERP = 0.1
const ROSE_VISUAL_SCALE = 1
const DRAW_SIZE_RATIO = 0.94
const BASE_SIZE = 1.4
const MAX_SWELL = 4.5
const BREATH_SPEED = 1.1
const BREATH_AMOUNT = 0.18
const ORBIT_SPEED = 0.035

interface Particle {
  baseX: number
  baseY: number
  x: number
  y: number
  size: number
  phase: number
}

interface TrailPoint {
  x: number
  y: number
}

export function WireframeRose() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number | undefined>(undefined)
  const particlesRef = useRef<Particle[]>([])
  const centerRef = useRef({ x: 0, y: 0 })
  const targetMouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  })
  const smoothMouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const trailRef = useRef<TrailPoint[]>([])
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "120px" },
    )
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
        frameRef.current = undefined
      }
      return
    }

    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let active = true
    const roseImage = new Image()
    roseImage.src = ROSE_SRC

    const sampleParticles = () => {
      if (!active) return

      const width = container.clientWidth
      const height = container.clientHeight
      if (width <= 0 || height <= 0) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      if (canvas.width <= 0 || canvas.height <= 0) return
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const drawSize = Math.min(width, height) * DRAW_SIZE_RATIO
      const drawX = (width - drawSize) / 2
      const drawY = (height - drawSize) / 2

      const cx = width / 2
      const cy = height / 2
      centerRef.current = { x: cx, y: cy }

      ctx.clearRect(0, 0, width, height)
      ctx.drawImage(roseImage, drawX, drawY, drawSize, drawSize)

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      ctx.clearRect(0, 0, width, height)

      const particles: Particle[] = []
      const data = imgData.data
      const imgWidth = imgData.width

      for (let y = 0; y < imgData.height; y += DOT_SPACING) {
        for (let x = 0; x < imgData.width; x += DOT_SPACING) {
          const index = (y * imgWidth + x) * 4
          const alpha = data[index + 3]
          const luminance = (data[index] + data[index + 1] + data[index + 2]) / 3

          if (alpha > 128 && luminance < 200) {
            const rawX = x / dpr
            const rawY = y / dpr
            const screenX = cx + (rawX - cx) * ROSE_VISUAL_SCALE
            const screenY = cy + (rawY - cy) * ROSE_VISUAL_SCALE
            particles.push({
              baseX: screenX,
              baseY: screenY,
              x: screenX,
              y: screenY,
              size: BASE_SIZE,
              phase: Math.random() * Math.PI * 2,
            })
          }
        }
      }

      particlesRef.current = particles
    }

    const getTrailInfluence = (px: number, py: number) => {
      let maxForce = 0

      for (let i = 0; i < trailRef.current.length; i++) {
        const point = trailRef.current[i]
        const trailFalloff = 1 - i / TRAIL_LENGTH
        const radius = MOUSE_RADIUS * (0.35 + trailFalloff * 0.65)
        const mdx = point.x - px
        const mdy = point.y - py
        const distance = Math.sqrt(mdx * mdx + mdy * mdy)

        if (distance < radius) {
          const force = ((radius - distance) / radius) * trailFalloff
          maxForce = Math.max(maxForce, force)
        }
      }

      return maxForce
    }

    const animate = (time: number) => {
      if (!active) return

      const width = container.clientWidth
      const height = container.clientHeight
      if (width <= 0 || height <= 0) {
        frameRef.current = requestAnimationFrame(animate)
        return
      }
      const elapsed = time * 0.001
      const { x: cx, y: cy } = centerRef.current
      const orbitAngle = elapsed * ORBIT_SPEED
      const cos = Math.cos(orbitAngle)
      const sin = Math.sin(orbitAngle)
      const target = targetMouseRef.current
      const smooth = smoothMouseRef.current

      if (target.active) {
        smooth.x += (target.x - smooth.x) * MOUSE_LERP
        smooth.y += (target.y - smooth.y) * MOUSE_LERP

        const trail = trailRef.current
        if (
          trail.length === 0 ||
          Math.hypot(trail[0].x - smooth.x, trail[0].y - smooth.y) > 2
        ) {
          trail.unshift({ x: smooth.x, y: smooth.y })
          if (trail.length > TRAIL_LENGTH) trail.pop()
        } else {
          trail[0] = { x: smooth.x, y: smooth.y }
        }
      } else if (trailRef.current.length > 0) {
        trailRef.current.pop()
      }

      ctx.clearRect(0, 0, width, height)

      for (const particle of particlesRef.current) {
        const dx = particle.baseX - cx
        const dy = particle.baseY - cy

        particle.x = cx + dx * cos - dy * sin
        particle.y = cy + dx * sin + dy * cos

        const breath = 1 + Math.sin(elapsed * BREATH_SPEED + particle.phase) * BREATH_AMOUNT
        let size = BASE_SIZE * breath
        let alpha = 0.22 * breath

        const force = getTrailInfluence(particle.x, particle.y)
        if (force > 0) {
          size = BASE_SIZE * breath + force * MAX_SWELL
          alpha = 0.25 + force * 0.55
        }

        ctx.fillStyle = `rgba(${OFFBLACK_RGB}, ${alpha})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      frameRef.current = requestAnimationFrame(animate)
    }

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      targetMouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      }
    }

    const onPointerLeave = () => {
      targetMouseRef.current.active = false
    }

    const startAnimation = () => {
      if (!active) return
      sampleParticles()
      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    roseImage.onload = startAnimation
    if (roseImage.complete) startAnimation()

    const resizeObserver = new ResizeObserver(() => {
      if (!active) return
      sampleParticles()
    })
    resizeObserver.observe(container)
    container.addEventListener("pointermove", onPointerMove)
    container.addEventListener("pointerleave", onPointerLeave)

    return () => {
      active = false
      roseImage.onload = null
      resizeObserver.disconnect()
      container.removeEventListener("pointermove", onPointerMove)
      container.removeEventListener("pointerleave", onPointerLeave)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      frameRef.current = undefined
    }
  }, [isInView])

  return (
    <div
      ref={containerRef}
      className="flex h-full min-h-[40vh] w-full items-center justify-center lg:min-h-0"
    >
      <canvas ref={canvasRef} className="block h-full w-full max-h-[min(82vh,680px)]" aria-hidden />
    </div>
  )
}
