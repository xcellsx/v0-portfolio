interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

function childrenToString(children: React.ReactNode): string {
  if (children == null || typeof children === "boolean") return ""
  if (typeof children === "string" || typeof children === "number") return String(children)
  if (Array.isArray(children)) return children.map(childrenToString).join("")
  return ""
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  const trimmed = childrenToString(children).trim()
  const match = trimmed.match(/^\[(.+)\]$/)
  const inner = match ? match[1] : trimmed
  const segments = inner.split(/\s*\/\/\s*/)

  return (
    <div className={`font-mono tracking-[0.14em] uppercase ${className ?? "text-sm"}`}>
      <span className="text-terracotta">[</span>
      {segments.map((segment, index) => (
        <span key={segment}>
          {index > 0 && <span className="text-terracotta"> // </span>}
          <span className="text-offblack/55">{segment}</span>
        </span>
      ))}
      <span className="text-terracotta">]</span>
    </div>
  )
}
