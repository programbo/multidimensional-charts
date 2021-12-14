import clsx from 'clsx'

export type LegendProps = {
  className?: string
  data: Record<
    string,
    {
      label: string
      color: string
    }
  >
}

export function Legend({ className, data }: LegendProps) {
  return (
    <div
      className={clsx(
        className,
        'grid gap-3 justify-between grid-cols-[repeat(auto-fill,_minmax(120px,1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(150px,1fr))]'
      )}
    >
      {Object.entries(data).map(([key, { label, color }]) => (
        <div className="flex items-start space-x-3" key={key}>
          <div className="w-6 h-6 rounded-full shrink-0" style={{ backgroundColor: color }} />
          <div className="flex-auto text-sm shrink-0">{label}</div>
        </div>
      ))}
    </div>
  )
}
