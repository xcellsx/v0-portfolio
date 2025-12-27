"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

export function Header() {
  const pathname = usePathname()
  const { theme, toggleTheme, mounted } = useTheme()

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/work", label: "WORK" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <video key={theme} autoPlay loop muted playsInline className="w-8 h-8 object-contain">
              <source src={theme === "light" ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_UvuPpMgGQ9TqHj42l5kehJk2QmGr/yCLX7IP-M6HrDxzJjMuHQL/public/logo.mp4" : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_UvuPpMgGQ9TqHj42l5kehJk2QmGr/20cWL6q9DkE-9mOfNktUqs/public/logo-dark.mp4"} type="video/mp4" />
            </video>
            <span className="font-bold text-xl tracking-tight">CELINE.</span>
          </Link>
          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium tracking-wider hover-iridescent ${
                    pathname === item.href ? "underline underline-offset-4" : ""
                  }`}
                >
                  {item.label}.
                </Link>
              ))}
            </nav>
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-muted/50 rounded-full transition-all hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
