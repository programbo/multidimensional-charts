import { MultidimensionalChartProps } from "../src/components/MultidimensionalChart";
import { BarProps } from "../src/components/MultidimensionalChart/Bar";
import { BarSegmentProps } from "../src/components/MultidimensionalChart/BarSegment";

type SampleChartData = Omit<MultidimensionalChartProps, "bars"> & {
  bars: (Omit<BarProps, "segments"> & {
    segments: Partial<BarSegmentProps>[];
  })[];
};

export const chartData: SampleChartData = {
  showLabels: true,
  showValues: true,
  bars: [
    {
      key: "publicPatient",
      label: "Public Patient",
      showLabel: true,
      segments: [
        {
          key: "publicPatientA",
          label: "19% of Public Patients went to market",
          value: 19,
          showValue: true,
          color: "#CCECEF"
        },
        {
          key: "publicPatientB",
          label: "81% of Public Patients came home",
          value: 81,
          showValue: true,
          color: "#009FAE"
        }
      ]
    },
    {
      key: "privatePatient",
      label: "Private Patient",
      showLabel: true,
      segments: [
        {
          key: "armidaleKelmscottMemorialHospital",
          label: "27% of Private Patients had roast beef",
          value: 27,
          showValue: true,
          color: "#CCECEF"
        },
        {
          key: "albanyHospital",
          label: "30% of Private Patients had none",
          value: 30,
          showValue: true,
          color: "#009FAE"
        }
      ]
    }
  ],
  caption: ""
};
