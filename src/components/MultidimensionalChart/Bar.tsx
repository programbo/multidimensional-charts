import { BarSegment, BarSegmentProps } from "./BarSegment";

export interface BarProps {
  key: string;
  label: string;
  showLabel?: boolean;
  segments: BarSegmentProps[];
  limit?: number;
}

export const Bar: React.FC<BarProps> = ({
  label,
  showLabel,
  segments,
  limit = 100
}) => (
  <div className="flex flex-col items-start space-y-1">
    {showLabel && <h4 className="text-sm leading-6">{label}</h4>}
    <div className="flex w-full">
      {segments?.map(
        ({ key: segmentKey, label, value, color, showValue }, segmentIndex) => (
          <BarSegment
            key={segmentKey}
            label={label}
            value={value}
            size={(value / limit) * 100}
            color={color}
            showValue={showValue}
            first={segmentIndex === 0}
            last={segmentIndex === segments.length - 1}
          />
        )
      )}
    </div>
  </div>
);
