"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold },
    )

    observer.observe(element)

    const rect = element.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
