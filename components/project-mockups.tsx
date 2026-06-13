import Image from "next/image"
import { PosterStackExpand } from "@/components/poster-stack-expand"
import type { SelectedProject } from "@/lib/selected-projects-data"

interface ProjectMockupsProps {
  project: SelectedProject
  priority?: boolean
}

const SINGLE_IMAGE_CLASS: Record<string, string> = {
  serenity:
    "h-auto max-h-[min(54vh,640px)] w-full max-w-7xl object-contain",
  "twin-pagoda":
    "h-auto w-auto max-h-[min(72vh,920px)] max-w-[min(72vw,1120px)] object-contain",
}

const SINGLE_IMAGE_STYLE: Record<string, React.CSSProperties> = {
  serenity: { width: "100%", height: "auto" },
  "twin-pagoda": { width: "auto", height: "auto" },
}

export function ProjectMockups({ project, priority = false }: ProjectMockupsProps) {
  if (project.mockupLayout === "gallery") {
    return (
      <PosterStackExpand
        posters={project.mockups}
        title={project.title}
        priority={priority}
      />
    )
  }

  const imageClass =
    SINGLE_IMAGE_CLASS[project.id] ??
    "h-auto max-h-[min(54vh,640px)] w-full max-w-7xl object-contain"
  const imageStyle = SINGLE_IMAGE_STYLE[project.id] ?? { width: "100%", height: "auto" }

  return (
    <div className="relative z-10 flex h-full w-full items-center justify-center">
      {project.mockups.map((mockup) => (
        <Image
          key={mockup}
          src={mockup}
          alt={`${project.title} app screens`}
          width={0}
          height={0}
          priority={priority}
          sizes={
            project.id === "twin-pagoda"
              ? "(max-width: 768px) 90vw, 72vw"
              : "(max-width: 768px) 100vw, 85vw"
          }
          className={imageClass}
          style={imageStyle}
        />
      ))}
    </div>
  )
}
