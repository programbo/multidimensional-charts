import clsx from "clsx";

export interface BarSegmentProps {
  key: string;
  label: string;
  value: number;
  size: number;
  color: string;
  showValue: boolean;
  first?: boolean;
  last?: boolean;
}

export const BarSegment: React.FC<BarSegmentProps> = ({
  label,
  value,
  size,
  showValue,
  color,
  first,
  last
}) => {
  let valueAlignment = "justify-center";
  if (last) {
    valueAlignment = "justify-end";
  } else if (first) {
    valueAlignment = "justify-start";
  }

  return (
    <div
      className={clsx("flex h-8", valueAlignment, {
        "rounded-l-full": first,
        "rounded-r-full": last
      })}
      title={label}
      style={{ width: `${size}%`, backgroundColor: color }}
    >
      {showValue && (
        <span
          aria-hidden
          className="shadow flex items-center justify-center px-0.5 min-w-[1.5rem] h-6 m-1 text-xs font-bold bg-white rounded-full text-[#009FAE]"
        >
          {value}
        </span>
      )}
    </div>
  );
};
