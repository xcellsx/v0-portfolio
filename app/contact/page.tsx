"use client"

import type React from "react"

import { Header } from "@/components/header"
import { useState } from "react"
import Link from "next/link"
import { Linkedin, Github, Instagram, Mail } from "lucide-react"
import { IridescentCard } from "@/components/iridescent-blob"

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
    ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`
    : "https://formspree.io/f/mzdvzlzl"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    description: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!FORMSPREE_ENDPOINT) {
      setStatus("error")
      return
    }
    setStatus("loading")
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          "Project Type": formData.projectType,
          message: formData.description,
        }),
      })
      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", projectType: "", description: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen relative">
      <Header />
      <main className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <IridescentCard className="w-full max-w-[280px] h-64 sm:w-72 sm:h-80 md:w-80 md:h-96 mx-auto md:mx-0" />

            {/* Right side - form */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-serif">Let's Collaborate</h1>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Got a project that needs depth? I'm currently available for freelance work. If you're looking for a
                partner to build your brand identity or craft an immersive web experience, say hello.
              </p>

              <div>
                <h2 className="font-bold text-sm mb-6">Contact Form</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-foreground bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground rounded-full"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-foreground bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground rounded-full"
                    />
                  </div>

                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 border border-foreground bg-transparent text-sm text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground rounded-full appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Project Type
                    </option>
                    <option value="branding">Branding</option>
                    <option value="3d">3D Modeling</option>
                    <option value="web">Web Development</option>
                    <option value="others">Others</option>
                  </select>

                  <textarea
                    placeholder="Description"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 border border-foreground bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground resize-none rounded-2xl"
                  />

                  <div className="flex flex-col items-center gap-3">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="px-8 py-2.5 border border-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-colors rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? "SENDING…" : "SUBMIT."}
                    </button>
                    {status === "success" && (
                      <p className="text-sm text-green-600 dark:text-green-400">Thanks! Your message was sent.</p>
                    )}
                    {status === "error" && (
                      <p className="text-sm text-red-600 dark:text-red-400">
                        Something went wrong. Please try again or email celstudiosx@gmail.com.
                      </p>
                    )}
                  </div>
                </form>
              </div>

              <div className="pt-4 space-y-4">
                <Link
                  href="mailto:celstudiosx@gmail.com"
                  className="inline-flex items-center gap-2 text-sm hover-iridescent"
                >
                  <Mail className="w-4 h-4" />
                  celstudiosx@gmail.com
                </Link>

                <div className="flex items-center gap-6">
                  <Link href="https://linkedin.com" className="hover-iridescent">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link href="https://github.com" className="hover-iridescent">
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link href="https://instagram.com" className="hover-iridescent">
                    <Instagram className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Footer copyright */}
          <div className="mt-16 pt-8 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">© 2025 CELINE. All rights reserved.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
