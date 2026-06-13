"use client"

import { useEffect } from "react"
import { useTheme } from "@/components/theme-provider"

const LIGHT_ICON = "/celstudiosx-light.png"
const DARK_ICON = "/celstudiosx-dark.png"

export function ThemeFavicon() {
  const { theme, mounted } = useTheme()

  useEffect(() => {
    if (!mounted) return

    const href = theme === "dark" ? DARK_ICON : LIGHT_ICON
    const links = document.querySelectorAll<HTMLLinkElement>("link[rel='icon']")

    if (links.length === 0) {
      const link = document.createElement("link")
      link.rel = "icon"
      link.href = href
      document.head.appendChild(link)
      return
    }

    links.forEach((link) => {
      link.href = href
    })
  }, [theme, mounted])

  return null
}
