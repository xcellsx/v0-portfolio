import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Playfair_Display, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeFavicon } from "@/components/theme-favicon"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Celine",
  description:
    "A multidisciplinary design and development practice bridging the gap between flat strategy and immersive digital experiences.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/celstudiosx-light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/celstudiosx-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/celstudiosx-light.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${dmSans.variable} ${spaceMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <ThemeFavicon />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
