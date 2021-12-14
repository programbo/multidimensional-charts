import { MultidimensionalChartProps } from '.'
import { BarProps } from './Bar'
import { BarSegmentProps } from './BarSegment'
import { LegendProps } from './Legend'

export const legendData: LegendProps['data'] = {
  youPay: { label: 'You pay', color: '#dedede' },
  feePaidByMedicare: { label: 'Paid by Medicare', color: '#E6F5F7' },
  feePaidByHBF: { label: 'Paid by HBF', color: '#009FAE' },
  gapPaidByHBF: { label: 'Paid by HBF', color: '#003959' },
}

type SampleChartData = Omit<MultidimensionalChartProps, 'bars'> & {
  bars: (Omit<BarProps, 'segments'> & { segments: Partial<BarSegmentProps>[] })[]
}

export const chartData: SampleChartData = {
  showLabels: true,
  showValues: true,
  headings: [
    {
      label: 'Medicare Benefits Schedule (MBS) fee',
      value: 100,
    },
    {
      label: 'Medical Gap',
      value: 25,
      showBenchmark: true,
    },
  ],
  legend: legendData,
  bars: [],
  caption: '',
}

type SampleBarProps = Omit<BarProps, 'segments'> & { segments: Partial<BarSegmentProps>[] }
export const barData: SampleBarProps[] = [
  {
    key: 'totalMedicalCost',
    label: 'Total medical cost',
    showLabel: chartData.showLabels,
    limit: 125,
    segments: [
      {
        key: 'youPay',
        label: 'Total medical cost',
        value: 125,
        color: legendData['youPay'].color,
        showValue: false,
      },
    ],
  },
  {
    key: 'fullyCovered',
    label: 'Fully covered',
    showLabel: chartData.showLabels,
    limit: 125,
    segments: [
      {
        key: 'feePaidByMedicare',
        label: 'Paid by Medicare',
        value: 75,
        color: legendData['feePaidByMedicare'].color,
        showValue: chartData.showValues,
      },
      {
        key: 'feePaidByHBF',
        label: 'Paid by HBF',
        value: 25,
        color: legendData['feePaidByHBF'].color,
        showValue: chartData.showValues,
      },
      {
        key: 'gapPaidByHBF',
        label: 'Paid by HBF',
        value: 25,
        color: legendData['gapPaidByHBF'].color,
        showValue: chartData.showValues,
      },
    ],
  },
  {
    key: 'knownGap',
    label: 'Known gap',
    showLabel: chartData.showLabels,
    limit: 125,
    segments: [
      {
        key: 'feePaidByMedicare',
        label: 'Paid by Medicare',
        value: 75,
        color: legendData['feePaidByMedicare'].color,
        showValue: chartData.showValues,
      },
      {
        key: 'feePaidByHBF',
        label: 'Paid by HBF',
        value: 25,
        color: legendData['feePaidByHBF'].color,
        showValue: chartData.showValues,
      },
      {
        key: 'gapPaidByHBF',
        label: 'Paid by HBF',
        value: 12.5,
        color: legendData['gapPaidByHBF'].color,
        showValue: chartData.showValues,
      },
      {
        key: 'youPay',
        label: 'You pay',
        value: 12.5,
        color: legendData['youPay'].color,
        showValue: chartData.showValues,
      },
    ],
  },
  {
    key: 'noAgreementOptOut',
    label: 'No agreement / Opt out',
    showLabel: chartData.showLabels,
    limit: 125,
    segments: [
      {
        key: 'feePaidByMedicare',
        label: 'Paid by Medicare',
        value: 75,
        color: legendData['feePaidByMedicare'].color,
        showValue: chartData.showValues,
      },
      {
        key: 'feePaidByHBF',
        label: 'Paid by HBF',
        value: 25,
        color: legendData['feePaidByHBF'].color,
        showValue: chartData.showValues,
      },
      {
        key: 'youPay',
        label: 'You pay',
        value: 25,
        color: legendData['youPay'].color,
        showValue: chartData.showValues,
      },
    ],
  },
]

chartData.bars = barData
