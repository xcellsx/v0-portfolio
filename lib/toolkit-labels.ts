const TOOL_LABELS: Record<string, string> = {
  figma: "Figma",
  blender: "Blender",
  typescript: "TypeScript",
  affinity: "Affinity",
  "ai agent": "AI Agent",
  illustrator: "Illustrator",
  react: "React",
  "three.js": "Three.js",
  tailwind: "Tailwind CSS",
}

export function getToolLabel(tool: string) {
  return TOOL_LABELS[tool.toLowerCase()] ?? tool
}
