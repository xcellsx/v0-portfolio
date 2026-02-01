import Link from "next/link"
import { Linkedin, Github, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 relative overflow-hidden">

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-script">Let's Collaborate</h2>

          <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Got a project that needs depth? I'm currently available for freelance work. If you're looking for a partner
            to build your brand identity or craft an immersive web experience, say hello.
          </p>

          <Link
            href="mailto:celstudiosx@gmail.com"
            className="inline-flex items-center gap-2 text-sm hover-iridescent"
          >
            <Mail className="w-4 h-4" />
            celstudiosx@gmail.com
          </Link>

          <div className="flex items-center justify-center gap-6 pb-8">
            <Link href="https://www.linkedin.com/in/celineghl/" className="hover-iridescent">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="https://github.com/xcellsx" className="hover-iridescent">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://www.instagram.com/celstudiosx?igsh=MWMzaW10dWdvcGZyYg%3D%3D&utm_source=qr" className="hover-iridescent">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-border -mx-6 px-6">
        <div className="container mx-auto max-w-6xl">
          <p className="text-xs text-muted-foreground text-center">© 2025 CELINE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
