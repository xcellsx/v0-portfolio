import type { Metadata } from "next"
import { DM_Sans, Playfair_Display, Space_Mono } from "next/font/google"
import { SiteFooter, SiteHeader } from "@/components/site-chrome"
import { site } from "@/lib/content"
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
  title: site.title,
  description: site.lede,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${spaceMono.variable} font-sans antialiased`}
      >
        <div className="atmosphere flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
