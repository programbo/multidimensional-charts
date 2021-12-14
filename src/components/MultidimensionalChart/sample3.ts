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
  bars: [
    {
      key: 'publicPatient',
      label: 'Public Patient',
      showLabel: true,
      segments: [
        { key: 'publicPatientA', label: '19% of Public Patients', value: 19, showValue: true, color: '#CCECEF' },
        { key: 'publicPatientB', label: '81% of Public Patients', value: 81, showValue: true, color: '#009FAE' },
      ],
    },
    {
      key: 'privatePatient',
      label: 'Private Patient',
      showLabel: true,
      segments: [
        {
          key: 'armidaleKelmscottMemorialHospital',
          label: '27% of Private Patients',
          value: 27,
          showValue: true,
          color: '#CCECEF',
        },
        { key: 'albanyHospital', label: '30% of Private Patients', value: 30, showValue: true, color: '#009FAE' },
      ],
    },
  ],
  caption: '',
}
