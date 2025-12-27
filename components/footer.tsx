import Link from "next/link"
import { Linkedin, Github, Instagram, Mail } from "lucide-react"
import { IridescentBlob } from "./iridescent-blob"

export function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border relative overflow-hidden">
      <IridescentBlob className="w-64 h-64 -bottom-20 left-1/2 -translate-x-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-script">Let's Collaborate</h2>

          <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Got a project that needs depth? I'm currently available for freelance work. If you're looking for a partner
            to build your brand identity or craft an immersive web experience, say hello.
          </p>

          <Link
            href="mailto:hello@celine.design"
            className="inline-flex items-center gap-2 text-sm hover:text-muted-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            hello@celine.design
          </Link>

          <div className="flex items-center justify-center gap-6">
            <Link href="https://linkedin.com" className="hover:text-muted-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="https://github.com" className="hover:text-muted-foreground transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://instagram.com" className="hover:text-muted-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground">© 2025 CELINE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
