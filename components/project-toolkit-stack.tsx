import { ToolkitIcon } from "@/components/toolkit-icons"
import { getToolLabel } from "@/lib/toolkit-labels"

interface ProjectToolkitStackProps {
  tools: string[]
}

export function ProjectToolkitStack({ tools }: ProjectToolkitStackProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      {tools.map((tool) => (
        <div key={tool} className="flex items-center gap-2">
          <div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-offblack/10 bg-offwhite">
            <ToolkitIcon tool={tool} className="size-3.5" />
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.1em] text-offblack/80">
            {getToolLabel(tool)}
          </span>
        </div>
      ))}
    </div>
  )
}
