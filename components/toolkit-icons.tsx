import React from "react"
import { SiFigma, SiAdobeillustrator, SiBlender, SiTypescript, SiTailwindcss, SiPinterest, SiThreedotjs, SiReact } from "react-icons/si"

interface ToolkitIconProps {
  tool: string
  className?: string
}

// Fusion 360 SVG Icon - Using uploaded SVG files with dark mode support
const Fusion360Icon = ({ className }: { className?: string }) => (
  <>
    <img 
      src="/fusion-light.svg" 
      alt="Fusion 360" 
      className={`${className} dark:hidden`}
    />
    <img 
      src="/fusion-dark.svg" 
      alt="Fusion 360" 
      className={`${className} hidden dark:block`}
    />
  </>
)

export function ToolkitIcon({ tool, className = "w-4 h-4" }: ToolkitIconProps) {
  const toolKey = tool.toLowerCase()
  
  const iconMap: Record<string, React.ReactNode> = {
    figma: <SiFigma className={className} />,
    illustrator: <SiAdobeillustrator className={className} />,
    blender: <SiBlender className={className} />,
    typescript: <SiTypescript className={className} />,
    tailwind: <SiTailwindcss className={className} />,
    pinterest: <SiPinterest className={className} />,
    "three.js": <SiThreedotjs className={className} />,
    "threejs": <SiThreedotjs className={className} />,
    react: <SiReact className={className} />,
    "fusion 360": <Fusion360Icon className={className} />,
    fusion: <Fusion360Icon className={className} />,
  }

  const icon = iconMap[toolKey]

  if (!icon) {
    return null
  }

  return <span className="inline-block" title={tool}>{icon}</span>
}
