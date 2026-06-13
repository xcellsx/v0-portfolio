export interface PageIntroStat {
  label: string
  value: string
}

export function PageIntroLedger({
  description,
  stats,
}: {
  description: string
  stats: readonly PageIntroStat[]
}) {
  return (
    <div className="max-w-[65ch] space-y-4">
      <p className="font-sans text-base leading-[1.6] text-offblack/85">{description}</p>
      <dl className="border-t border-[#E5E7EB]">
        {stats.map((row) => (
          <div
            key={row.label}
            className="grid gap-2 border-b border-[#E5E7EB] py-3 sm:grid-cols-[minmax(5.5rem,22%)_1fr] sm:gap-6"
          >
            <dt className="font-mono text-[10px] tracking-[0.12em] text-terracotta uppercase">
              {row.label}
            </dt>
            <dd className="font-mono text-[11px] leading-[1.5] tracking-[0.06em] text-offblack/70 uppercase">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
