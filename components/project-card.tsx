"use client"

import { useState } from "react"

interface ProjectCardProps {
  number: string
  title: string
  tags: string[]
  description: string
}

export function ProjectCard({ number, title, tags, description }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group border-t border-border p-8 hover:bg-accent transition-colors cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-8">
        <span className="font-mono text-sm text-muted-foreground min-w-[3rem]">{number}</span>
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-3">
            {title}
            <span className={`inline-block transition-transform ${isHovered ? "translate-x-1" : ""}`}>→</span>
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="font-mono text-xs px-3 py-1 bg-secondary text-secondary-foreground">
                {`[${tag}]`}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
