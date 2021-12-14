import { MultidimensionalChartProps } from '.'
import { BarProps } from './Bar'
import { BarSegmentProps } from './BarSegment'
import { LegendProps } from './Legend'

type SampleChartData = Omit<MultidimensionalChartProps, 'bars'> & {
  bars: (Omit<BarProps, 'segments'> & { segments: Partial<BarSegmentProps>[] })[]
}

export const chartData: SampleChartData = {
  showLabels: true,
  showValues: true,
  bars: [
    {
      key: 'albanyHospital',
      label: 'Albany Hospital',
      showLabel: true,
      segments: [
        {
          key: 'albanyHospital',
          label: 'Albany Hospital misplaced 52 patients',
          value: 52,
          showValue: true,
          color: '#009FAE',
        },
      ],
    },
    {
      key: 'armidaleKelmscottMemorialHospital',
      label: 'Armidale-Kelmscott Memorial Hospital',
      showLabel: true,
      segments: [
        {
          key: 'armidaleKelmscottMemorialHospital',
          label: 'Armidale-Kelmscott Memorial Hospital misplaced 62 patients',
          value: 62,
          showValue: true,
          color: '#009FAE',
        },
      ],
    },
    {
      key: 'fremantleHospital',
      label: 'Fremantle Hospital',
      showLabel: true,
      segments: [
        {
          key: 'fremantleHospital',
          label: 'Fremantle Hospital misplaced 73 patients',
          value: 73,
          showValue: true,
          color: '#009FAE',
        },
      ],
    },
    {
      key: 'joondalupHealthCampus',
      label: 'Joondalup Health Campus',
      showLabel: true,
      segments: [
        {
          key: 'joondalupHealthCampus',
          label: 'Joondalup Health Campus misplaced 32 patients',
          value: 32,
          showValue: true,
          color: '#009FAE',
        },
      ],
    },
    {
      key: 'princessMargaretHospital',
      label: 'Princess Margaret Hospital',
      showLabel: true,
      segments: [
        {
          key: 'princessMargaretHospital',
          label: 'Princess Margaret Hospital misplaced 69 patients',
          value: 69,
          showValue: true,
          color: '#009FAE',
        },
      ],
    },
    {
      key: 'rockinghamHospital',
      label: 'Rockingham Hospital',
      showLabel: true,
      segments: [
        {
          key: 'rockinghamHospital',
          label: 'Rockingham Hospital misplaced 88 patients',
          value: 88,
          showValue: true,
          color: '#009FAE',
        },
      ],
    },
    {
      key: 'royalPerthHospital',
      label: 'Royal Perth Hospital',
      showLabel: true,
      segments: [
        {
          key: 'royalPerthHospital',
          label: 'Royal Perth Hospital misplaced 68 patients',
          value: 68,
          showValue: true,
          color: '#009FAE',
        },
      ],
    },
  ],
  caption: '',
}
