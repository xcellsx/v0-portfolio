import type { Metadata } from "next"
import { Source_Sans_3, Syne } from "next/font/google"
import { SiteFooter, SiteHeader } from "@/components/site-chrome"
import { site } from "@/lib/content"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  title: site.title,
  description: site.lede,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${sourceSans.variable} antialiased`}>
        <div className="atmosphere flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
