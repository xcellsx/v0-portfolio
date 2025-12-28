import React from "react"
import { SiFigma, SiAdobeillustrator, SiBlender, SiTypescript, SiTailwindcss, SiPinterest } from "react-icons/si"

interface ToolkitIconProps {
  tool: string
  className?: string
}

export function ToolkitIcon({ tool, className = "w-4 h-4" }: ToolkitIconProps) {
  const iconMap: Record<string, React.ReactNode> = {
    figma: <SiFigma className={className} />,
    illustrator: <SiAdobeillustrator className={className} />,
    blender: <SiBlender className={className} />,
    typescript: <SiTypescript className={className} />,
    tailwind: <SiTailwindcss className={className} />,
    pinterest: <SiPinterest className={className} />,
  }

  const toolKey = tool.toLowerCase()
  const icon = iconMap[toolKey]

  if (!icon) {
    return null
  }

  return <span className="inline-block" title={tool}>{icon}</span>
}
