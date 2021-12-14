import { MultidimensionalChartProps } from "../src/components/MultidimensionalChart";
import { BarProps } from "../src/components/MultidimensionalChart/Bar";
import { BarSegmentProps } from "../src/components/MultidimensionalChart/BarSegment";
import { LegendProps } from "../src/components/MultidimensionalChart/Legend";

export const legendData: LegendProps["data"] = {
  youPay: { label: "You pay", color: "#dedede" },
  feePaidByMedicare: { label: "Paid by Medicare", color: "#E6F5F7" },
  feePaidByHBF: { label: "Paid by HBF", color: "#009FAE" },
  gapPaidByHBF: { label: "Paid by HBF", color: "#003959" }
};

type SampleChartData = Omit<MultidimensionalChartProps, "bars"> & {
  bars: (Omit<BarProps, "segments"> & {
    segments: Partial<BarSegmentProps>[];
  })[];
};

export const chartData: SampleChartData = {
  showLabels: true,
  showValues: false,
  headings: [
    {
      label: "Medicare Benefits Schedule (MBS) fee",
      value: 100
    },
    {
      label: "Medical Gap",
      value: 25,
      showBenchmark: true
    }
  ],
  legend: legendData,
  bars: [],
  caption: ""
};

type SampleBarProps = Omit<BarProps, "segments"> & {
  segments: Partial<BarSegmentProps>[];
};
export const barData: SampleBarProps[] = [
  {
    key: "totalMedicalCost",
    label: "Total medical cost",
    showLabel: chartData.showLabels,
    limit: 125,
    segments: [
      {
        key: "youPay",
        label: "Total medical cost",
        value: 125,
        color: legendData["youPay"].color,
        showValue: false
      }
    ]
  },
  {
    key: "fullyCovered",
    label: "Fully covered",
    showLabel: chartData.showLabels,
    limit: 125,
    segments: [
      {
        key: "feePaidByMedicare",
        label: "75% of MBS fee paid by Medicare",
        value: 75,
        color: legendData["feePaidByMedicare"].color,
        showValue: chartData.showValues
      },
      {
        key: "feePaidByHBF",
        label: "25% of MBS fee paid by HBF",
        value: 25,
        color: legendData["feePaidByHBF"].color,
        showValue: chartData.showValues
      },
      {
        key: "gapPaidByHBF",
        label: "100% of Medical Gap paid by HBF",
        value: 25,
        color: legendData["gapPaidByHBF"].color,
        showValue: chartData.showValues
      }
    ]
  },
  {
    key: "knownGap",
    label: "Known gap",
    showLabel: chartData.showLabels,
    limit: 125,
    segments: [
      {
        key: "feePaidByMedicare",
        label: "75% of MBS fee paid by Medicare",
        value: 75,
        color: legendData["feePaidByMedicare"].color,
        showValue: chartData.showValues
      },
      {
        key: "feePaidByHBF",
        label: "25% of MBS fee paid by HBF",
        value: 25,
        color: legendData["feePaidByHBF"].color,
        showValue: chartData.showValues
      },
      {
        key: "gapPaidByHBF",
        label: "50% of Medical Gap paid by HBF",
        value: 12.5,
        color: legendData["gapPaidByHBF"].color,
        showValue: chartData.showValues
      },
      {
        key: "youPay",
        label: "You pay 50% of Medical Gap",
        value: 12.5,
        color: legendData["youPay"].color,
        showValue: chartData.showValues
      }
    ]
  },
  {
    key: "noAgreementOptOut",
    label: "No agreement / Opt out",
    showLabel: chartData.showLabels,
    limit: 125,
    segments: [
      {
        key: "feePaidByMedicare",
        label: "75% of MBS fee paid by Medicare",
        value: 75,
        color: legendData["feePaidByMedicare"].color,
        showValue: chartData.showValues
      },
      {
        key: "feePaidByHBF",
        label: "25% of MBS fee paid by HBF",
        value: 25,
        color: legendData["feePaidByHBF"].color,
        showValue: chartData.showValues
      },
      {
        key: "youPay",
        label: "You pay 100% of Medical Gap",
        value: 25,
        color: legendData["youPay"].color,
        showValue: chartData.showValues
      }
    ]
  }
];

chartData.bars = barData;
