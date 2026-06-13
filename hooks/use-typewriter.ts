"use client"

import { useEffect, useState } from "react"

interface UseTypewriterOptions {
  speed?: number
  storageKey?: string
  startDelay?: number
}

export function useTypewriter(text: string, options: UseTypewriterOptions = {}) {
  const { speed = 48, storageKey, startDelay = 0 } = options
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const hasSeen = storageKey ? sessionStorage.getItem(storageKey) === "1" : false

    if (prefersReducedMotion || hasSeen) {
      setDisplayedText(text)
      setIsComplete(true)
      return
    }

    let charIndex = 0
    let intervalId: number | undefined
    let startTimeoutId: number | undefined

    const startTyping = () => {
      intervalId = window.setInterval(() => {
        charIndex += 1
        setDisplayedText(text.slice(0, charIndex))

        if (charIndex >= text.length) {
          window.clearInterval(intervalId)
          setIsComplete(true)
          if (storageKey) sessionStorage.setItem(storageKey, "1")
        }
      }, speed)
    }

    if (startDelay > 0) {
      startTimeoutId = window.setTimeout(startTyping, startDelay)
    } else {
      startTyping()
    }

    return () => {
      if (intervalId) window.clearInterval(intervalId)
      if (startTimeoutId) window.clearTimeout(startTimeoutId)
    }
  }, [text, speed, storageKey, startDelay])

  return { displayedText, isComplete, isTyping: !isComplete && displayedText.length > 0 }
}
