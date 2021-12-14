import clsx from 'clsx'
import { ReactNode } from 'react'
import { Bar, BarProps } from './Bar'
import { Heading, HeadingProps } from './Heading'
import { Legend, LegendProps } from './Legend'

export interface MultidimensionalChartProps {
  className?: string
  showLabels: boolean
  showValues: boolean
  headings?: HeadingProps[]
  bars: BarProps[]
  caption?: ReactNode
  legend?: LegendProps['data']
}

const getSumOfSegmentValues = (segments: BarProps['segments']) => segments.reduce((acc, { value }) => acc + value, 0)
const getLongestBar = (bars: BarProps[]) =>
  bars.reduce((acc, { segments }) => Math.max(acc, getSumOfSegmentValues(segments)), 0)

export default function MultidimensionalChart({
  className,
  headings,
  caption,
  legend,
  bars,
}: MultidimensionalChartProps) {
  const baseValue = getLongestBar(bars)
  console.log({ baseValue })
  const convertValueToPercentage = (value: number, base: number = baseValue) => (value / base) * 100
  return (
    <figure className={clsx(className, 'w-full')}>
      <section className="w-full">
        <div className="relative">
          {headings && (
            <header className="flex items-end">
              {headings.map(({ label, value, showBenchmark }, headingIndex) => (
                <Heading
                  key={label}
                  value={convertValueToPercentage(value)}
                  label={label}
                  showBenchmark={showBenchmark}
                  first={headingIndex === 0}
                />
              ))}
            </header>
          )}
          <div className="relative z-10 mt-8 space-y-5 flex-flex-col sm:mt-5">
            {bars?.map(({ key: barKey, label, showLabel, segments }) => (
              <Bar key={barKey} label={label} showLabel={showLabel} segments={segments} limit={baseValue} />
            ))}
          </div>
        </div>
        {legend && <Legend className="mt-10" data={legend} />}
      </section>
      {caption && <figcaption className="sr-only">{caption}</figcaption>}
    </figure>
  )
}
